import * as yup from "yup";

export const CreateTagInputSchema = yup.object({
	displayName: yup.string().required("Display name is required"),
	viDisplayName: yup.string().optional(),
	description: yup.string().optional(),
	viDescription: yup.string().optional(),
	projects: yup
		.array()
		.of(yup.mixed<string>().defined()) // could be string IDs or Project objects
		.optional(),
});

export type CreateTagInput = yup.InferType<typeof CreateTagInputSchema>;