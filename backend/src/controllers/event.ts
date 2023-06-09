import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import asyncHandler from "express-async-handler";
import { db } from "../config/db-server";

// @desc POST add events
// @route POST /api/event
// @access PRIVATE
export const addEvent = asyncHandler(async (req: Request, res: Response) => {
  const { title, description, poster, StartDate, EndDate, Seats, type, location, isApproved } =
    req.body;

  const event = await db.event.create({
    data: {
      title,
      description,
      poster,
      StartDate,
      EndDate,
      Seats,
      type,
      location,
      isApproved
    }
  });
  res.json(event);
});

// @desc get all events
// @route POST /api/event
// @access PRIVATE
export const getEvent = asyncHandler(async (req: Request, res: Response) => {
  const allEvents = await db.event.findMany();
  res.json(allEvents);
});

// @desc POST add speakers to event
// @route POST /api/event/speakers
// @access PRIVATE
export const addSpeakers = asyncHandler(async (req: Request, res: Response) => {
  const { data } = req.body;

  const speakers = await db.speaker.createMany({
    data: [...data]
  });

  res.json(speakers);
});

// @desc POST add speakers to event
// @route POST /api/event/speakers
// @access PRIVATE
export const addParticipants = asyncHandler(async (req: Request, res: Response) => {
  const { eventId, userId } = req.body;

  const participant = await db.participant.create({
    data: {
      eventId,
      userId
    }
  });

  res.json(participant);
});

// @desc POST add speakers to event
// @route POST /api/event/speakers
// @access PRIVATE
export const getParticipant = asyncHandler(async (req: Request, res: Response) => {
  const { eventId, userId } = req.body;

  const participant = await db.participant.findMany({
    include: {
      user: true
    },
    where: {
      eventId
    }
  });

  res.json(participant);
});

// @desc POST add speakers to event
// @route POST /api/event/speakers
// @access PRIVATE
export const addFaq = asyncHandler(async (req: Request, res: Response) => {
  const { data } = req.body;

  const faq = await db.faq.createMany({
    data: [...data]
  });

  res.json(faq);
});
