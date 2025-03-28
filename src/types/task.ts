
export interface Task {
  id: number;
  title: string;
  description?: string;
  dueDate: string;
  isCompleted: boolean;
  priority: 'high' | 'medium' | 'low';
  category: string;
  course?: string;
  subject?: 'Allied Mathematics' | 'Machine Learning' | 'Cloud Computing' | 'Web Development' | 'Database Systems' | 'Software Engineering' | string;
}

export interface GroupedTasks {
  [date: string]: {
    status: string;
    tasks: Task[];
  };
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
}

export interface GrokResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}
