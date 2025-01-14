<template>
	<view class="index">
		<view class="header">
			<text class="title">GSS Analytics 示例</text>
		</view>

		<view class="section">
			<text class="section-title">1. 自动 PV 统计</text>
			<text class="desc">页面加载时自动统计 PV，无需手动处理</text>
		</view>

		<view class="section">
			<text class="section-title">2. 按钮点击统计</text>
			<track-button type="primary" eventName="button_click" :eventData="{
          button_name: '购买按钮',
          scene: 'index'
        }" @click="handleBuy">
				立即购买
			</track-button>
		</view>

		<view class="section">
			<text class="section-title">3. 页面跳转统计</text>
			<track-button eventName="navigation" :eventData="{
          from_page: 'index',
          to_page: 'detail'
        }" @click="goToDetail">
				查看详情
			</track-button>
		</view>

		<view class="section">
			<text class="section-title">4. 自定义事件</text>
			<track-button type="warn" eventName="custom_event" :eventData="{
          event_type: 'test',
          custom_param: 'value'
        }">
				触发自定义事件
			</track-button>
		</view>
	</view>
</template>

<script>
	import TrackButton from '@/components/track-button/track-button.vue'

	export default {
		components: {
			TrackButton
		},
		methods: {
			handleBuy() {
				uni.showToast({
					title: '购买成功',
					icon: 'success'
				})
			},
			goToDetail() {
				uni.navigateTo({
					url: '/pages/detail/detail'
				})
			}
		}
	}
</script>

<style>
	.index {
		padding: 20px;
	}

	.header {
		margin-bottom: 30px;
		text-align: center;
	}

	.title {
		font-size: 20px;
		font-weight: bold;
	}

	.section {
		margin-bottom: 30px;
	}

	.section-title {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 10px;
		display: block;
	}

	.desc {
		font-size: 14px;
		color: #666;
		margin-bottom: 10px;
		display: block;
	}
</style>