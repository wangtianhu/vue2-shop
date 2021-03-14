<template>
	<TopHead>
		<div class="head-content">
			<img src="@/assets/back-icon.png" alt="" />
			<p class="p1" slot="title">{{ title }}</p>
			<p class="p2">...</p>
		</div>
	</TopHead>
</template>

<script>
import TopHead from "./top-head.vue";
export default {
	props: {
		title: {
			type: String,
			default: "登录",
		},
	},
	components: {
		TopHead,
	},
};
</script>

<style lang="less" scoped>
.head-content {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	img {
		width: 0.4rem;
		height: 0.4rem;
	}
	.p1 {
		font-size: 0.32rem;
		font-weight: bold;
	}
}
</style>
