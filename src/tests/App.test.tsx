import { vi } from "vitest";

vi.mock("./hooks/useFetchBreedImages", () => ({
    useFetchDogs: () => ({
        images: [],
        getDogs: vi.fn(),
        loading: false,
        error: null,
    }),
}));
