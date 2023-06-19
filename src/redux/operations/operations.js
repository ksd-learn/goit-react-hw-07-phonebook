import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://648b5cb117f1536d65eaddf2.mockapi.io/contacts/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });

export const deleteItem = createAsyncThunk(
  'contacts/deleteItem',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addItem = createAsyncThunk(
  'contacts/addItem',
  async (item, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", item);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);




//export const fetchTasks = () => async dispatch => {
//  try {
//                        // Индикатор загрузки
//    dispatch(fetchingInProgress());
//                        // HTTP-запрос
//      const response = await axios.get("/contacts");
//      console.log(response)
//                        // Обработка данных
//    dispatch(fetchingSuccess(response.data));
//  } catch (e) {
//                            // Обработка ошибки
//    dispatch(fetchingError(e.message));
//  }
//};


