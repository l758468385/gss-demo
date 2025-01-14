<template>
	<view class="detail">
		<view class="product">
			<image class="product-image" src="../../static/logo.png" mode="aspectFit"></image>
			<text class="product-title">示例商品</text>
			<text class="product-price">¥99.00</text>

			<view class="actions">
				<track-button type="primary" eventName="add_to_cart" :eventData="{
            product_id: 'demo-001',
            product_name: '示例商品',
            price: 99.00
          }" @click="handleAddToCart">
					加入购物车
				</track-button>

				<track-button type="warn" eventName="share" :eventData="{
            product_id: 'demo-001',
            share_platform: 'wechat'
          }" @click="handleShare">
					分享商品
				</track-button>
			</view>
		</view>

		<view class="section">
			<text class="section-title">商品详情</text>
			<view class="detail-content">
				<text class="detail-text">这是一个演示商品，用于展示 GSS Analytics SDK 的各种统计功能。</text>
			</view>
		</view>
	</view>
</template>

<script>
	import TrackButton from '@/components/track-button/track-button.vue'

	export default {
		components: {
			TrackButton
		},
		data() {
			return {
				enterTime: 0
			}
		},
		onShow() {
			// 记录进入页面的时间
			this.enterTime = new Date().getTime()
		},
		onHide() {
			// 统计页面停留时长
			const duration = new Date().getTime() - this.enterTime
			this.$analytics.track('page_duration', {
				page: 'detail',
				duration_ms: duration
			})
		},
		methods: {
			handleAddToCart() {
				uni.showToast({
					title: '已加入购物车',
					icon: 'success'
				})
			},
			handleShare() {
				uni.showShareMenu({
					withShareTicket: true
				})
			}
		}
	}
</script>

<style>
	.detail {
		padding: 20px;
	}

	.product {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 30px;
	}

	.product-image {
		width: 300px;
		height: 300px;
		margin-bottom: 20px;
		border-radius: 50rpx;
	}

	.product-title {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.product-price {
		font-size: 20px;
		color: #ff4400;
		margin-bottom: 20px;
	}

	.actions {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}

	.section {
		margin-top: 30px;
	}

	.section-title {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.detail-content {
		padding: 15px;
		background-color: #f8f8f8;
		border-radius: 8px;
		margin-top: 20px;
	}

	.detail-text {
		font-size: 14px;
		color: #333;
		line-height: 1.6;
		margin-bottom: 10px;
		display: block;
	}
</style>