import * as yup from "yup";

export const CreatePostInputSchema = yup.object({
	title: yup.string().required("Title is required"),
	slug: yup
		.string()
		.matches(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens")
		.required("Slug is required"),
	shortDescription: yup.string().optional(),
	viShortDescription: yup.string().optional(),
	description: yup.string().optional(),
	viDescription: yup.string().optional(),
	keywords: yup.array().of(yup.string().trim()).optional(),
	thumbnailUrl: yup.string().url("Thumbnail URL must be valid").optional(),
	bgCoverUrl: yup.string().url("Background cover URL must be valid").optional(),
	content: yup.string().required("Content is required"),
	tags: yup
		.array()
		.of(yup.mixed<string>().defined()) // can be string IDs or Tag objects
		.optional(),
	countView: yup.number().integer().min(0).optional(),
	createdAt: yup
		.string()
		.matches(/^\d{4}-\d{2}-\d{2}/, "CreatedAt must be a valid date (YYYY-MM-DD)")
		.optional(),
	updatedAt: yup
		.string()
		.matches(/^\d{4}-\d{2}-\d{2}/, "UpdatedAt must be a valid date (YYYY-MM-DD)")
		.optional(),
});

export type CreatePostInput = yup.InferType<typeof CreatePostInputSchema>;