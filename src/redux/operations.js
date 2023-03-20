import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6416c56147092b8b6134134d.mockapi.io/contacts/contacts";

export const fetchContacts = createAsyncThunk("contact/fetchAll",
async (_, thunkAPI) => {
	try {
	  const response = await axios.get("/");
	  return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message)
	}
 }
)
 
export const fetchContactAdd = createAsyncThunk("contact/addContact",
async (text, thunkAPI) => {
	try {
	const response = await axios.post("/", {...text});
	return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message)
	}
}
)

export const fetchContactDel = createAsyncThunk("contact/deleteContact",
async (id, thunkAPI) => {
	try {
	const response = await axios.delete(`/${id}`);
	return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message)
	}
}
)