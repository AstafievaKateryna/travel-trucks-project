import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperByIdThunk, fetchCampersThunk } from "./operations";

const initialState = {
  campers: [],
  camperById: null,
  favoriteCampers: JSON.parse(localStorage.getItem("favorites")) || [],
  loading: false,
  error: null,
  currentPage: 1,
  limit: 4,
  hasMore: true,
  location: "",
  form: "",
  equipment: [],
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.location = action.payload.location || "";
      state.form = action.payload.form || "";
      state.equipment = action.payload.equipment || [];
      state.currentPage = 1;
      state.campers = [];
      state.hasMore = true;
    },
    clearCampers: (state) => {
      state.campers = [];
    },
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const isAlreadyFavorite = state.favoriteCampers.includes(camperId);
      if (isAlreadyFavorite) {
        state.favoriteCampers = state.favoriteCampers.filter(
          (id) => id !== camperId
        );
      } else {
        state.favoriteCampers.push(camperId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favoriteCampers));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        // Перевіряємо, чи є items масивом
        const items = Array.isArray(action.payload?.items)
          ? action.payload.items
          : [];

        const args = action.meta.arg || {};
        const isFilterApplied =
          args.query ||
          args.location ||
          args.form ||
          (args.equipment && args.equipment.length > 0);

        if (isFilterApplied) {
          if (state.currentPage === 1) {
            state.campers = items;
          } else {
            state.campers = [...state.campers, ...items];
          }
          state.hasMore = items.length > 0;
        } else {
          const existingIds = new Set(
            Array.isArray(state.campers)
              ? state.campers.map((item) => item.id)
              : []
          );
          const newCampers = items.filter((item) => !existingIds.has(item.id));
          state.campers = [...state.campers, ...newCampers];
        }

        state.hasMore = items.length === state.limit;
      })
      .addCase(fetchCampersThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampersThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.hasMore = false;
      })
      .addCase(fetchCamperByIdThunk.fulfilled, (state, action) => {
        state.camperById = null;

        // Захист для state.campers
        const campers = Array.isArray(state.campers) ? state.campers : [];
        state.campers = campers.filter((item) => item.id === action.payload.id);

        state.camperById = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchCamperByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCamperByIdThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setCurrentPage, setFilters, clearCampers, toggleFavorite } =
  slice.actions;
export const campersReducer = slice.reducer;
