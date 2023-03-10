const questions = [
  {
    id: 1,
    title: '발신번호 서류 인증은 어떻게 진행하나요?',
    content: '인증서 신청서를 작성합니다. \
    (고객님의 편의를 위하여 온라인 신청을 권장해드립니다. 온라인 신청을 하실 경우 수수료 결제도 함께 하실 수 있습니다.) \
    인증서 신청 시 수수료를 결제합니다. \
    - 홈페이지 신청 시 신용카드, 실시간 계좌이체, 무통장입금이 가능합니다. \
    - 온라인에서 별도 결제를 원하실 경우에는 한국전자인증 홈페이지 > 인증서 수수료 결제에서 납부가 가능합니다. \
    본인 이메일로 받은 신규 신청서를 출력하고 구비서류를 준비합니다. \
    선택하신 서류 접수방법에 따라 서류접수처(등록대행기관)에 서류를 제출합니다.', 
  },
  {
    id: 2,
    title: '회원인데 GPU 서버 생성시 \'서버 생성 제한이 적용되어 있습니다.\'라는 메시지가 뜹니다. 왜 그런가요?',
    content: '\'회원인데 GPU 서버 생성시 \'서버 생성 제한이 적용되어 있습니다.\'라는 메시지가 뜹니다. 왜 그런가요?\' 에 대한 답변입니다. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 3,
    title: '딥아이즈는 어떤 환경의 SDK를 지원하나요?',
    content: '딥아이즈는 매일 24시간 빈틈 없이 모돈의 분만, 초유, 난산, 건상 상태를 첨단 인공지능 기술로 실시간 감지하여 즉시 알려줌으로써 완벽한 분만 골든타임 관리를 통해 사산율을 줄이고 포유 생존율과 이유체중 및 균일도 향상 등 자돈의 초기 성장을 극대화하여 양돈 농가의 생산성을 획기적으로 끌어올려 주는 세계 최초의 분만사 관리 혁신 시스템입니다.',
  },
  {
    id: 4,
    title: '발신번호 서류 인증은 어떻게 진행하나요?',
    content: '\'발신번호 서류 인증은 어떻게 진행하나요?\' 에 대한 답변입니다. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 5,
    title: '회원인데 GPU 서버 생성시 \'서버 생성 제한이 적용되어 있습니다.\'라는 메시지가 뜹니다. 왜 그런가요?',
    content: '\'회원인데 GPU 서버 생성시 \'서버 생성 제한이 적용되어 있습니다.\'라는 메시지가 뜹니다. 왜 그런가요?\' 에 대한 답변입니다. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 6,
    title: '딥아이즈는 어떤 환경의 SDK를 지원하나요?',
    content: '딥아이즈는 매일 24시간 빈틈 없이 모돈의 분만, 초유, 난산, 건상 상태를 첨단 인공지능 기술로 실시간 감지하여 즉시 알려줌으로써 완벽한 분만 골든타임 관리를 통해 사산율을 줄이고 포유 생존율과 이유체중 및 균일도 향상 등 자돈의 초기 성장을 극대화하여 양돈 농가의 생산성을 획기적으로 끌어올려 주는 세계 최초의 분만사 관리 혁신 시스템입니다.',
  },
  {
    id: 7,
    title: '발신번호 서류 인증은 어떻게 진행하나요?',
    content: '\'발신번호 서류 인증은 어떻게 진행하나요?\' 에 대한 답변입니다. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 8,
    title: '회원인데 GPU 서버 생성시 \'서버 생성 제한이 적용되어 있습니다.\'라는 메시지가 뜹니다. 왜 그런가요?',
    content: '\'회원인데 GPU 서버 생성시 \'서버 생성 제한이 적용되어 있습니다.\'라는 메시지가 뜹니다. 왜 그런가요?\' 에 대한 답변입니다. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 9,
    title: '딥아이즈는 어떤 환경의 SDK를 지원하나요?',
    content: '딥아이즈는 매일 24시간 빈틈 없이 모돈의 분만, 초유, 난산, 건상 상태를 첨단 인공지능 기술로 실시간 감지하여 즉시 알려줌으로써 완벽한 분만 골든타임 관리를 통해 사산율을 줄이고 포유 생존율과 이유체중 및 균일도 향상 등 자돈의 초기 성장을 극대화하여 양돈 농가의 생산성을 획기적으로 끌어올려 주는 세계 최초의 분만사 관리 혁신 시스템입니다.',
  },
  {
    id: 10,
    title: '발신번호 서류 인증은 어떻게 진행하나요?',
    content: '\'발신번호 서류 인증은 어떻게 진행하나요?\' 에 대한 답변입니다. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
]

export default defineEventHandler((event) => {
  const { page = 1, size = 3 } = getQuery(event)

  return questions.slice((Number(page) - 1) * Number(size), (Number(page) - 1) * Number(size) + Number(size))
});