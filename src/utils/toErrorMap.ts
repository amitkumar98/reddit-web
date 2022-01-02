import { FieldError } from "../generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
  const errrorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errrorMap[field] = message;
  });

  return errrorMap;
};
