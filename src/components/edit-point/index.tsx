import { Point } from "@/stores/points-store";
import { usePointsStore } from "@/stores/points-store/store";
import { ListInputControlled } from "@/ui/list-input-controlled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, List, Page, Popup, Toolbar } from "konsta/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormLabel } from "../../ui/form-label";

interface Props {
  point: Point | undefined;
  close: () => void;
}

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

export const EditPoint = ({ point, close }: Props) => {
  const { updatePoint } = usePointsStore();

  const {
    control,
    formState: { errors },
    handleSubmit,
    clearErrors,
    reset,
  } = useForm<PointSchemaType>({
    defaultValues: {
      ...point,
      mcc: point?.mcc.toString(),
    },
    resolver: zodResolver(PointSchema),
  });

  const resetForm = () => {
    reset({
      ...point,
      mcc: point?.mcc.toString(),
    });
    clearErrors();
  };

  const cancelHandler = () => {
    close();
  };

  const submitHandler = () => {
    return handleSubmit((data) => {
      updatePoint({
        ...data,
        mcc: parseInt(data.mcc),
      });
      close();
    })();
  };

  useEffect(() => {
    if (point) {
      resetForm();
    }
  }, [point]);

  return (
    <>
      {createPortal(
        <Popup opened={Boolean(point)}>
          <Page>
            <Toolbar top>
              <Link toolbar onClick={cancelHandler}>
                Отмена
              </Link>
              <b>Редактирование торговой точки</b>
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
