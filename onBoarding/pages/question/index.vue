<template>
    <BasicUiWrapper-theme :theme="c__current_theme">
        <Semantic_pages_question @change:theme="f__changeTheme" />
    </BasicUiWrapper-theme>
</template>