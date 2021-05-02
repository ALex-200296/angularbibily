
export interface IUser {
  name: string,
  login: string,
}

export interface ITables {
  id: number;
  name: string,
  restaurant_id?: number,
  exists?: boolean
}

export interface IManagerUsers {
  id: number,
  name: string,
  login: string,
  restaurant_id?: number,
}

export interface IResUsTabpost {
  time_of_day: string,
  date: string
}

export interface IResUsTab {
  user_id: number,
  date: string,
  restaurant_id?: number,
  table_id: number,
  time_of_day: string,
}

