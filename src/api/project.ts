import { request } from '@/config/axios';
import type { AxiosRequestConfig } from 'axios';

export function apiPostProject(
  data: Project.FormInputs,
  config?: AxiosRequestConfig
) {
  return request.post<ApiProject.ProjectReturn>('/admin/project', data, config);
}

export function apiFetchProjects(
  query: string = '',
  config?: AxiosRequestConfig
) {
  return request.get<ApiProject.ProjectList>(
    !query ? '/admin/project' : `/admin/project?${query}`,
    config
  );
}

export function apiFetchProjectInfo(id: string, config?: AxiosRequestConfig) {
  return request.get<ApiProjectSettings.ProjectSettings>(
    `/admin/project/${id}/info`,
    config
  );
}

export function apiProjInfoImage() {}

export function apiProjInfoSetting() {}

export function apiProjInfoPayment() {}
