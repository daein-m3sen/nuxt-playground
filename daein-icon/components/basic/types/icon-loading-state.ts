enum iconLoading {
  'DISABLED',
  'NOTREADY',
  'ENABLE',
  'LOADING',
  'PROGRESS',
  'COMPLETED',
}

type iconLoadingType = {
  icon: string;
  progress: string | null;
}

type iconLoadingState = {
  NONE: iconLoadingType,
  DISABLED: iconLoadingType,
  ENABLE: iconLoadingType,
  LOADING: iconLoadingType,
  PROGRESS: iconLoadingType,
  COMPLETED: iconLoadingType,
}

const NONE: iconLoadingType = {
  icon: 'ENABLE',
  progress: 'NONE',
}

const DISABLED: iconLoadingType = {
  icon: 'DISABLED',
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

const iconLoadingStates: iconLoadingState = {
  NONE,
  DISABLED,
  ENABLE,
  LOADING,
  PROGRESS,
  COMPLETED,
}

export {
  iconLoadingStates,
  iconLoadingState,
}