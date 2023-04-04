enum iconLoading {
  'DISABLED',
  'NOTREADY',
  'ENABLE',
  'LOADING',
  'PROGRESS',
  'COMPLETED',
  'ONSTATUS',
}

type iconLoadingType = {
  icon: string;
  progress: string | null;
}

type iconLoadingState = {
  DISABLED: iconLoadingType,
  NOTREADY: iconLoadingType,
  ENABLE: iconLoadingType,
  LOADING: iconLoadingType,
  PROGRESS: iconLoadingType,
  COMPLETED: iconLoadingType,
  ONSTATUS: iconLoadingType,
}

const DISABLED: iconLoadingType = {
  icon: 'DISABLED',
  progress: 'NONE',
}

const NOTREADY: iconLoadingType = {
  icon: 'NOT_READY',
  progress: 'NONE',
}

const ENABLE: iconLoadingType = {
  icon: 'ENABLE',
  progress: 'NONE',
}

const LOADING: iconLoadingType = {
  icon: 'PROGRESS',
  progress: 'NONE',
}

const PROGRESS: iconLoadingType = {
  icon: 'PROGRESS',
  progress: 'PROGRESS',
}

const COMPLETED: iconLoadingType = {
  icon: 'COMPLETED',
  progress: 'COMPLETED',
}

const ONSTATUS: iconLoadingType = {
  icon: 'DISABLED',
  progress: null,
}

const iconLoadingStates: iconLoadingState = {
  DISABLED,
  NOTREADY,
  ENABLE,
  LOADING,
  PROGRESS,
  COMPLETED,
  ONSTATUS,
}

export {
  iconLoadingStates,
  iconLoadingState,
}