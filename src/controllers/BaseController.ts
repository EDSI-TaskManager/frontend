import { AxiosInstance } from "axios";

export class BaseController<T, K> {
  constructor(private api: AxiosInstance, private endpoint: string) {}

  async listAll(): Promise<T[]> {
    const response = await this.api.get(this.endpoint);

    return response.data as T[];
  }

  async getById(id: string): Promise<T> {
    const response = await this.api.get(`${this.endpoint}/${id}`);

    return response.data as T;
  }

  async create(body: K): Promise<T> {
    const response = await this.api.post(this.endpoint, body);

    return response.data as T;
  }

  async update(id: string, body: K): Promise<T> {
    const response = await this.api.put(`${this.endpoint}/${id}`, body);

    return response.data as T;
  }

  async delete(id: string): Promise<void> {
    await this.api.delete(`${this.endpoint}/${id}`);
  }
}
