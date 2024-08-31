import { genPointId } from "@/stores/points-store/helpers";
import { usePointsStore } from "@/stores/points-store/store";
import { ListInputControlled } from "@/ui/list-input-controlled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fab, Link, List, Page, Popup, Toolbar } from "konsta/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { IoAdd } from "react-icons/io5";
import "swiper/css";
import { z } from "zod";
import { FormLabel } from "../../ui/form-label";

const HIDE_TEXT_ON_FAB_POINTS_COUNT = 3;
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

  const { points, addPoint } = usePointsStore();
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
      <Fab
        className="fixed right-4-safe bottom-4-safe z-30"
        icon={<IoAdd />}
        onClick={() => setPopupOpened(true)}
        text={
          points.length < HIDE_TEXT_ON_FAB_POINTS_COUNT
            ? `Добавить${!points.length ? " первую " : " "} торговую точку`
            : undefined
        }
      />
      {createPortal(
        <Popup opened={popupOpened}>
          <Page>
            <Toolbar top>
              <Link toolbar onClick={cancelHandler}>
                Отмена
              </Link>
              <b>Новая торговая точка</b>
              <Link toolbar onClick={submitHandler}>
                Готово
              </Link>
            </Toolbar>
            <List strong inset>
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
          </Page>
        </Popup>,
        document.body
      )}
    </>
  );
};
