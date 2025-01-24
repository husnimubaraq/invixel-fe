import { TConversation } from "../types/conversation";

export const dataConversations: TConversation[] = [
    {
      id: 1,
      name: "User 1",
      avatar: "U",
      messages: [
        { id: 1, text: "Hello, I would like to request approval for a new project proposal. The details are as follows: Project Name: 'Project Phoenix', Objectives: Enhance user experience and streamline operations.?", sender: "other", time: "09:41" },
        { id: 2, text: "Hello, I would like to request approval for a new project proposal. The details are as follows: Project Name: 'Project Phoenix', Objectives: Enhance user experience and streamline operations.", sender: "self", time: "09:42" },
        { id: 3, text: "Certainly. The project timeline is from February 1, 2025, to June 30, 2025, with key milestones in March and May. The estimated budget is $50,000 USD.", sender: "other", time: "09:43" },
        { id: 4, text: "Got it. Please share the resources required and expected deliverables.", sender: "self", time: "09:44" },
        { id: 5, text: "The required resources include a development team, design tools, and cloud infrastructure. Expected deliverables are a fully functional web platform and an admin dashboard?", sender: "self", time: "09:30" },
      ],
      lastMessage: "Sure! I'll share it with you soon.",
      time: "09:44",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "User 2",
      avatar: "U",
      messages: [
        { id: 1, text: "Hi! I’d like to propose a new project called 'GreenTech Initiative' aimed at reducing operational carbon footprint. Can we discuss this?", sender: "self", time: "09:30" },
        { id: 2, text: "Sounds interesting! What are the key goals and benefits of the project?", sender: "other", time: "09:31" },
        { id: 3, text: "The main goal is to implement sustainable practices across our operations, including energy-efficient systems and renewable energy sources. The benefits include cost savings, environmental impact, and improved company reputation.", sender: "self", time: "09:32" },
        { id: 4, text: "That sounds great! I’ll schedule a meeting with the team to discuss the details. Let’s meet next week?", sender: "other", time: "09:33" },
        { id: 5, text: "Perfect! I’ll send you the meeting details via email. Looking forward to it!", sender: "self", time: "09:34" },
      ],
      lastMessage: "Perfect! I’ll send you the meeting details via email. Looking forward to it!",
      time: "09:34",
      unread: 0,
      online: true,
    }
  ]