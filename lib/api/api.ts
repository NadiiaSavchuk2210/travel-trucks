import { API_BASE_URL } from "@/constants/constants";
import { Camper } from "@/types/camper";
import axios from "axios";
import { CAMPERS_PER_PAGE } from "../../constants/constants";
import { CampersFilter } from "@/types/filter";
import { buildQueryString } from "@/helpers/queryHelpers/buildQueryString";
import { buildFilterParams } from "@/helpers/queryHelpers/buildFilterParams";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "content-type": "application/json" },
});

//* Campers =================================================
// Interfaces
export interface FetchCampersRequest {
  filter: CampersFilter;
  page?: number;
  limit?: number;
}

export interface FetchCampersResponse {
  total: number;
  items: Camper[];
}

// Requests
export const fetchCampers = async ({
  filter,
  page = 1,
  limit = CAMPERS_PER_PAGE,
}: FetchCampersRequest): Promise<FetchCampersResponse> => {
  const params = buildFilterParams(filter, page, limit);

  const queryString = buildQueryString(params);

  const { data } = await api.get(`/campers?${queryString}`);
  return data;
};

export const fetchCamperById = async (camperId: string): Promise<Camper> => {
  const { data } = await api.get<Camper>(`/campers/${camperId}`);
  return data;
};
