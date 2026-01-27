import { API_BASE_URL } from "@/constants";
import { Camper } from "@/types/camper";
import axios from "axios";
import { CAMPERS_PER_PAGE } from "../../constants";
import { buildFilterParams } from "@/helpers/filterHelper";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "content-type": "application/json" },
});

//* Campers =================================================
// Interfaces

export interface FetchCampersFilter {
  location?: string;
  form?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
}

export interface FetchCampersRequest {
  filter: FetchCampersFilter;
  page: number;
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
  const params = {
    ...buildFilterParams(filter),
    page,
    limit,
  };

  const { data } = await api.get("/campers", {
    params,
    paramsSerializer: (params) =>
      new URLSearchParams(params as Record<string, string>).toString(),
  });
  return data;
};

export const fetchCamperById = async (camperId: string): Promise<Camper> => {
  const { data } = await api.get<Camper>(`/campers/${camperId}`);
  return data;
};
