import * as yup from "yup";

export const CreateProjectInputSchema = yup.object({
	name: yup.string().required("Name is required"),
	displayName: yup.string().optional(),
	description: yup.string().optional(),
	viDescription: yup.string().optional(),
	thumbnailUrl: yup.string().url("Thumbnail must be a valid URL").optional(),
	screenshotUrls: yup
		.array()
		.of(yup.string().url("Each screenshot URL must be valid"))
		.optional(),
	referenceUrl: yup.string().url("Reference URL must be valid").optional(),
	slug: yup
		.string()
		.matches(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens")
		.required("Slug is required"),
	technologies: yup
		.array()
		.of(yup.mixed<string>().defined())
		.optional(),
	tags: yup
		.array()
		.of(yup.mixed<string>().defined())
		.optional(),
	content: yup.string().required("Content is required"),
	order: yup.number().optional(),
	startedAt: yup
		.string()
		.required("Start date is required")
		.matches(/^\d{4}-\d{2}-\d{2}/, "StartedAt must be a valid date (YYYY-MM-DD)"),
	completedAt: yup
		.string()
		.required("Completion date is required")
		.matches(/^\d{4}-\d{2}-\d{2}/, "CompletedAt must be a valid date (YYYY-MM-DD)"),
	createdAt: yup
		.string()
		.required("CreatedAt is required")
		.matches(/^\d{4}-\d{2}-\d{2}/, "CreatedAt must be a valid date (YYYY-MM-DD)"),
	updatedAt: yup
		.string()
		.required("UpdatedAt is required")
		.matches(/^\d{4}-\d{2}-\d{2}/, "UpdatedAt must be a valid date (YYYY-MM-DD)"),
});

export type CreateProjectInput = yup.InferType<typeof CreateProjectInputSchema>;