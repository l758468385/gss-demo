<template>
	<button class="track-button" :type="type" :size="size" @click="handleClick">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: 'TrackButton',
		props: {
			// 按钮类型
			type: {
				type: String,
				default: 'default'
			},
			// 按钮大小
			size: {
				type: String,
				default: 'default'
			},
			// 埋点事件名
			eventName: {
				type: String,
				required: true
			},
			// 埋点数据
			eventData: {
				type: Object,
				default: () => ({})
			}
		},
		methods: {
			handleClick(e) {
				// 发送埋点事件
				this.$analytics.track(this.eventName, {
					...this.eventData,
					timestamp: new Date().getTime()
				})
				// 触发原生点击事件
				this.$emit('click', e)
			}
		}
	}
</script>

<style>
	.track-button {
		margin: 10px;
		padding: 8px 16px;
		border-radius: 4px;
	}
</style>