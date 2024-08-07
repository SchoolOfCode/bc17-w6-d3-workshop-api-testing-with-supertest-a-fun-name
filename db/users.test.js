// external imports
import {test, expect} from "vitest";
import request  from "supertest"; // Correctly import
// internal imports
import {app} from "../app.js";
// Goal: make a GET request with Supertest to the /api/health ✅
test("GET /api/health works", async () => {
    const response = await request(app).get("/api/health");
    //console.log(response.header);
    expect(response.body).toEqual({ success: true, payload: 'API is running correctly' });
    expect(response.header['content-type']).toEqual('application/json; charset=utf-8');
});

