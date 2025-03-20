export enum MessageType {
  USER = 'user',
  AI = 'ai',
  ERROR = 'error',
}

export enum EventType {
  CHUNK = 'chunk',
  TOOL_USE = 'tool_use',
  TOOL_OUTPUT = 'tool_output',
  END = 'end',
}
