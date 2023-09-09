export interface userSettingItem {
  darkMode: string;
  offline: boolean;
}
export const initialState: userSettingItem = {
  darkMode: 'light',
  offline: false,
};
