import * as yup from "yup";

export const CreateTechnologyInputSchema = yup.object({
	displayName: yup.string().required("Display name is required"),
	logoUrl: yup
		.string()
		.url("Logo URL must be a valid URL")
		.required("Logo URL is required"),
	referenceUrl: yup.string().url("Reference URL must be valid").optional(),
});

export type CreateTechnologyInput = yup.InferType<typeof CreateTechnologyInputSchema>;