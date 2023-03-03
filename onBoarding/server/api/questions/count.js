const questions = [
  {
    title: '발신번호 서류 인증은 어떻게 진행하나요?',
    content: '\'발신번호 서류 인증은 어떻게 진행하나요?\' 에 대한 답변입니다. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    title: '회원인데 GPU 서버 생성시 \'서버 생성 제한이 적용되어 있습니다.\'라는 메시지가 뜹니다. 왜 그런가요?',
    content: '\'회원인데 GPU 서버 생성시 \'서버 생성 제한이 적용되어 있습니다.\'라는 메시지가 뜹니다. 왜 그런가요?\' 에 대한 답변입니다. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    title: '딥아이즈는 어떤 환경의 SDK를 지원하나요?',
    content: '\'딥아이즈는 어떤 환경의 SDK를 지원하나요?\' 에 대한 답변입니다. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    title: '발신번호 서류 인증은 어떻게 진행하나요?',
    content: '\'발신번호 서류 인증은 어떻게 진행하나요?\' 에 대한 답변입니다. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
]

export default defineEventHandler(() => {
  return questions.length;
});