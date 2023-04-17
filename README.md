# BookMyEvent (Hugs_For_Bugs)

**EventVenture** is a platform in which user browse and take part in a variety of events that are posted on the site.

TDD Document Link: https://www.notion.so/EventVenture-12a8ed8f58a74376bea92b8548437592?pvs=4

# Tech Stack
 - React Js
 - Tailwind CSS
 - Redux Toolkit
 - Node Js
 - Typescript
 - Prisma
 - My SQL - PlanetScale(Vitess)
 - Firebase - Authentication

# Test-driven development (TDD)

Test-driven development is a software development process that relies on creating test cases before fully developing the software. By doing so, it helps to ensure that the software meets the requirements and is tested against all test cases during development.

# Atomic Design
Atomic design is a user interface design strategy that breaks down the interface into basic, reusable components called atoms. It enables developers to build progressively complex components by combining these atoms into molecules, organisms, templates, and finished pages. The approach helps in developing a consistent, modular design system that is easy to scale and reuse.

# Components of the App


### **Front Page**

- Navbar
- Home
- About Us
- Events
- Sign in
- Sign Up
- Events (Virtual, Hybrid, Offline)
- Contact form
- Footer
- Organize Hackathon (shown when the user is signed up)

# ER Diagram

![ER diagram EventVenture](https://user-images.githubusercontent.com/93897192/232381065-ecbeee0e-6856-4ad8-a081-c2fe22363a39.jpg)

**Entities**

- USER
- EVENT
- Participant
- FAQ
- Speaker

The entities are User, Event, Participant, FAQ and Speaker.

User has a one to many relation. It means the user can organize an event or participate in an event.  An event section indicates the events that are lined up or created for the users to look at on the website. This event section has a relation with all the entities, i.e, Speaker, Participant, User and FAQ. The participant can participate in a single event or multiple events, making it a one to many relation..Similarly, a speaker can speak in a single event or multiple events. An event can have multiple FAQs.

### **Dashboard**

- Search bar
- Ongoing Events (Virtual, Hybrid, Offline)
- Upcoming Events
- Past Events
- Event details (poster, description, date, status, happening)
- Admin
- All Current Event
- Participants
- Speakers
- Faq
- Description
- Images
- Event Reviews
- Upcoming Events
- Past Events
- All Signed up users
- Change an existing user to admin
- Create An Event Though Admin Panel


# Future Plans
 - Open AI API - chat integration
 - Android app
 - Push notification
 
The design system is built using the atomic design approach, ensuring a modular and scalable system. The app features a front page with a navbar, home, about us, events, sign in, sign up, and contact form. The dashboard includes a search bar, ongoing, upcoming, and past events, event details, admin panel, participants, speakers, FAQ, description, images, event reviews, all signed up users, and an option to change an existing user to admin. Future plans include integration with Open AI API, an Android app, and push notifications.

