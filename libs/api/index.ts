import axios from "axios";
import { BASE_URL } from "constants/url";

interface TestCase {
  type: string;
}

// const instance = axios.create({ baseURL: "http://localhost:3000/api" });
const instance = axios.create({ baseURL: BASE_URL + "/api" });

async function getTestCase() {
  const response = await instance.get("/testcase");
  const result = response.data;
  return result;
}

async function getByTypeTestCase({ type }: TestCase) {
  const response = await instance.get(`/testcase/type/${type}`);
  const result = response.data;
  return result;
}

export { getTestCase, getByTypeTestCase };
