import policy from "./policy.json";
import chat from "./train/chat.json";
import task from "./train/task.json";
import teamChat from "./train/team-chat.json";

export default {
  policy: {
    role: "system" as const,
    content: JSON.stringify({ policy }),
  },
  train: {
    chat: {
      role: "system" as const,
      content: JSON.stringify({
        train: chat,
      }),
    },
    task: {
      role: "system" as const,
      content: JSON.stringify({
        train: task,
      }),
    },
    teamChat: {
      role: "system" as const,
      content: JSON.stringify({
        train: teamChat,
      }),
    },
  },
};
