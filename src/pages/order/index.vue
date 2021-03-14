<template>
	<div class="order">
		<CommonHead :title="'订单中心'"> </CommonHead>
		<van-tabs
			v-model="active"
			animated
			title-active-color="#1baeae"
		>
			<van-tab v-for="item in tabType" :title="item.name">
				内容 {{ item.name }}
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
import CommonHead from "@/component/common/common-head.vue";
export default {
	components: {
		CommonHead,
	},
	data() {
		return {
			active: 0,
			tabType: [
				{
					name: "全部",
				},
				{
					name: "待付款",
				},
				{
					name: "待确认",
				},
				{
					name: "待发货",
				},
				{
					name: "已发货",
				},
				{
					name: "交易完成",
				},
			],
		};
	},
};
</script>

<style></style>
