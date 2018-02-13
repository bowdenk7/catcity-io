import { Request, Response } from "express";
import * as mongoose from "mongoose";

/**
 * GET /
 * Home page.
 */
export let index = async (req: Request, res: Response) => {

  const results: any = await CatModel.find({ location: "Cat City", stage: "Available" });

  const ids: string[] = [];
  for (const result of results) {
    ids.push(result.catId);
  }

  res.render("home", {
    title: "Cat City",
    cats: results,
    ids: ids
  });
};

export let all = async (req: Request, res: Response) => {
  const results: any = await CatModel.find({ stage: "Available" });

  const ids: string[] = [];
  for (const result of results) {
    ids.push(result.catId);
  }

  res.render("home", {
    title: "All PAWS",
    cats: results,
    ids: ids
  });
};

export let adopted = async (req: Request, res: Response) => {

  const results: any = await CatModel.find({ stage: "Adopted" });

  const ids: string[] = [];
  for (const result of results) {
    ids.push(result.catId);
  }

  res.render("home", {
    title: "Already Adopted!",
    cats: results,
    ids: ids
  });
};


interface Cat {
  catId: string;
  created: Date;
  imageUrls?: string[];
  name?: string;
  breed?: string;
  age?: string;
  gender?: string;
  size?: string;
  site?: string;
  location?: string;
  stage?: string;
  description?: string;
}

const catSchema = new mongoose.Schema(
  {
    catId: String,
    created: { type: Date, default: Date.now },
    imageUrls: [String],
    name: String,
    breed: String,
    age: String,
    gender: String,
    size: String,
    site: String,
    location: String,
    stage: String,
    description: String
  },
  { collection: "ToAnalyze" });
const CatModel = mongoose.model("CatId", catSchema);