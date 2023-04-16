import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import asyncHandler from "express-async-handler";
import { db } from "../config/db-server";

// @desc POST user details
// @route POST /api/user
// @access PRIVATE
export const user = asyncHandler(async (req: Request, res: Response) => {
  const { id, name, email } = req.body;

  const user = await db.user.create({
    data: {
      id,
      name,
      email
    }
  });

  res.json(user);
});

// @desc post event details

// @desc post event

// @desc fetch all users - admin
// @desc fetch all events - admin, dashboard

// @desc fetch all ongoing events
// @desc fetch all past events events
// @desc fetch all upcoming events

// @desc fetch all upcoming events

// @desc fetch individual event details
// @desc fetch event speakers
// @desc fetch event participants
// @desc fetch event faqs
