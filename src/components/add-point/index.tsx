import { genPointId } from "@/stores/points-store/helpers";
import { usePointsStore } from "@/stores/points-store/store";
import { ListInputControlled } from "@/ui/list-input-controlled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, List, ListItem, Popup, Toolbar } from "konsta/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { IoAddCircleOutline } from "react-icons/io5";
import "swiper/css";
import { z } from "zod";
import { FormLabel } from "../../ui/form-label";

interface Props {}

const PointSchema = z.object({
  id: z.string(),
  name: z.string().min(3).max(50),
  mcc: z
    .string()
    .min(4)
    .max(4)
    .regex(/\d\d\d\d/),
});

type PointSchemaType = z.infer<typeof PointSchema>;

const DEFAULT_VALUES = { id: genPointId(), name: "", mcc: "" };

export const AddPoint = ({}: Props) => {
  const [popupOpened, setPopupOpened] = useState(false);

  const { addPoint } = usePointsStore();
  const defaultValues = DEFAULT_VALUES;

  const {
    control,
    formState: { errors },
    handleSubmit,
    clearErrors,
    reset,
  } = useForm<PointSchemaType>({
    defaultValues,
    resolver: zodResolver(PointSchema),
  });

  const resetForm = () => {
    defaultValues.id = genPointId();

    reset(defaultValues);
    clearErrors();
  };

  const cancelHandler = () => {
    setPopupOpened(false);
  };

  const submitHandler = () => {
    return handleSubmit((data) => {
      addPoint({
        ...data,
        mcc: parseInt(data.mcc),
      });
      setPopupOpened(false);
    })();
  };

  useEffect(() => {
    if (popupOpened) {
      resetForm();
    }
  }, [popupOpened]);

  return (
    <>
      <ListItem
        media={<IoAddCircleOutline size={24} />}
        title="Добавить точку"
        onClick={() => setPopupOpened(true)}
        className="cursor-pointer"
      />
      {createPortal(
        <Popup opened={popupOpened}>
          <div className="bg-ios-light-surface h-full overflow-auto">
            <Toolbar top>
              <Link toolbar onClick={cancelHandler}>
                Отмена
              </Link>
              <b>Новая точка</b>
              <Link toolbar onClick={submitHandler}>
                Готово
              </Link>
            </Toolbar>
            <List strongIos insetIos>
              <ListInputControlled
                media={<FormLabel>Название</FormLabel>}
                type="text"
                placeholder="Обязательное поле"
                control={control}
                name="name"
                error={errors.name?.message}
              />
              <ListInputControlled
                media={<FormLabel>MCC</FormLabel>}
                type="text"
                placeholder="Обязательное поле"
                control={control}
                name="mcc"
                error={errors.mcc?.message}
              />
            </List>
          </div>
        </Popup>,
        document.body
      )}
    </>
  );
};