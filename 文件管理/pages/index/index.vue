<template>
	<view>
		<!-- 自定义导航栏 -->
		<nav-bar>
			<template v-if="checkCount === 0">
				<template slot="left">
					<view style="width: 60rpx;height: 60rpx;"
						class="flex align-center justify-center bg-light rounded-circle ml-3"
						hover-class="bg-hover-light" @tap="backUp" v-if="current">
						<text class="iconfont icon-fanhui"></text>
					</view>
					<text class="font-md ml-3">
						{{ current ? current.name : '首页' }}
					</text>
				</template>
				<template slot="right">
					<view style="width: 60rpx;height: 60rpx;"
						class="flex align-center justify-center bg-light rounded-circle mr-3"
						hover-class="bg-hover-light" @tap="openAddDialog">
						<text class="iconfont icon-zengjia"></text>
					</view>
					<view style="width: 60rpx;height: 60rpx;"
						class="flex align-center justify-center bg-light rounded-circle mr-3"
						hover-class="bg-hover-light" @click="openSortDialog">
						<text class="iconfont icon-gengduo"></text>
					</view>
				</template>
			</template>

			<template v-else>
				<view slot='left' class="font-md ml-3 text-primary" @click="handleCheckAll(false)">取消</view>
				<text class="font-md font-weight-bold">已选中{{checkCount}}个</text>
				<view slot='right' class="font-md mr-3 text-primary" @click="handleCheckAll(true)">全选</view>
			</template>
		</nav-bar>
		<!-- 搜索框 -->
		<view class="px-3 py-2">
			<view class="position-relative">
				<view style="height: 70rpx;width: 70rpx;position: absolute;top: 0;left: 0;"
					class="flex align-center justify-center text-light-muted">
					<text class="iconfont icon-sousuo"></text>
				</view>
				<input style="height: 70rpx;padding-left: 70rpx;" type="text" class="bg-light font-md rounded-circle"
					placeholder="搜索网盘文件" @input="search" />
			</view>
		</view>

		<!-- 列表 -->
		<f-list v-for="(item,index) in list" :key="index" @click="doEvent(item)" :item="item" :index="index"
			@select="select"></f-list>

		<!-- 底部操作条 -->
		<view v-if="checkCount > 0">
			<view style="height: 115rpx;"></view>
			<view style="height: 115rpx;" class="flex align-stretch bg-primary text-white fixed-bottom">
				<view class="flex-1 flex flex-column align-center justify-center" style="line-height: 1.5;"
					v-for="(item,index) in actions" :key="index" hover-class="bg-hover-primary"
					@click="handleBottomEvent(item)">
					<text class="iconfont" :class="item.icon"></text>
					{{item.name}}
				</view>
			</view>
		</view>


		<!-- 是否要删除 -->
		<f-dialog ref="delete">
			是否删除选中？
		</f-dialog>

		<!-- 重命名 -->
		<f-dialog ref="rename">
			<input type="text" v-model="renameValue" class="flex-1 bg-light rounded px-2" style="height: 95rpx;"
				placeholder="重命名" />
		</f-dialog>

		<!-- 新建文件夹 -->
		<f-dialog ref="newdir">
			<input type="text" v-model="newdirname" class="flex-1 bg-light rounded px-2" style="height: 95rpx;"
				placeholder="新建文件夹名称" />
		</f-dialog>

		<!-- 添加操作条 -->
		<uni-popup ref="add" type="bottom">
			<view class="bg-white flex" style="height: 200rpx;">
				<view class="flex-1 flex align-center justify-center flex-column" hover-class="bg-light"
					v-for="(item,index) in addList" :key="index" @tap="handleAddEvent(item)">
					<text style="width: 110rpx;height: 110rpx;"
						class="rounded-circle bg-light iconfont flex align-center justify-center"
						:class="item.icon + ' ' + item.color"></text>
					<text class="font text-muted">{{item.name}}</text>
				</view>
			</view>
		</uni-popup>


		<!-- 排序框 -->
		<uni-popup ref="sort" type="bottom">
			<view class="bg-white">
				<view v-for="(item,index) in sortOptions" :key="index"
					class="flex align-center justify-center py-3 font border-bottom border-light-secondary"
					:class="index === sortIndex ? 'text-main' : 'text-dark'" hover-class="bg-light"
					@click="changeSort(index)">
					{{item.name}}
				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	import navBar from '@/components/common/nav-bar.vue';
	import fList from '@/components/common/f-list.vue';
	import fDialog from '@/components/common/f-dialog.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	export default {
		components: {
			navBar,
			fList,
			fDialog,
			uniPopup
		},
		data() {
			return {
				dirs: [],

				sortIndex: 0,
				sortOptions: [{
					name: "按名称排序",
					key: "name"
				}, {
					name: "按时间排序",
					key: "created_time"
				}],

				renameValue: "",
				newdirname: "",
				list: [],

				addList: [{
					icon: "icon-file-b-6",
					color: "text-success",
					name: "上传图片"
				}, {
					icon: "icon-file-b-9",
					color: "text-primary",
					name: "上传视频"
				}, {
					icon: "icon-file-b-8",
					color: "text-muted",
					name: "上传文件"
				}, {
					icon: "icon-file-b-2",
					color: "text-warning",
					name: "新建文件夹",
				}]
			}
		},
		onLoad() {
			let dirs = uni.getStorageSync('dirs')
			if (dirs) {
				this.dirs = JSON.parse(dirs)
			}
			this.getData()

			uni.$on('updateData', () => {
				this.getData()
			})
		},
		computed: {
			// 选中列表
			checkList() {
				return this.list.filter(item => item.checked)
			},
			// 选中数量
			checkCount() {
				return this.checkList.length
			},
			// 操作菜单
			actions() {
				if (this.checkCount > 1) {
					return [{
						icon: "icon-xiazai",
						name: "下载"
					}, {
						icon: "icon-shanchu",
						name: "删除"
					}]
				}
				return [{
					icon: "icon-xiazai",
					name: "下载"
				}, {
					icon: "icon-fenxiang-1",
					name: "分享"
				}, {
					icon: "icon-shanchu",
					name: "删除"
				}, {
					icon: "icon-chongmingming",
					name: "重命名"
				}]
			},
			file_id() {
				let l = this.dirs.length
				if (l === 0) {
					return 0
				}
				return this.dirs[l - 1].id
			},
			current() {
				let l = this.dirs.length
				if (l === 0) {
					return false
				}
				return this.dirs[l - 1]
			}
		},
		// 页面加载是调用
		onLoad() {
			this.getData()	
		},
		methods: {
			formatList(list){
				return list.map(item=>{
					let type = 'none'
					if(item.isdir === 1){
						type = 'dir'
					}else{
						type = (item.ext.split('/'))[0] || 'none'
					}
					return {
						type,
						...item
					}
				})
				 
			},
			getData() {
				this.$H.get('/file?file_id=0&oerderby=name', {
					// 参数
					token: true
				}).then(res => {
					console.log(res)
					this.formatList(res)
				})
			}
			formatList(list) {
				return list.map(item => {
					let type = 'none'
					if (item.isdir === 1) {
						type = 'dir'
					} else {
						type = (item.ext.split('/'))[0] || 'none'
					}
					return {
						type,
						checked: false,
						...item
					}
				})
			},
			getData() {
				let orderby = this.sortOptions[this.sortIndex].key
				this.$H.get(`/file?file_id=${this.file_id}&orderby=${orderby}`, {
					token: true
				}).then(res => {
					this.list = this.formatList(res)
				})
			},
			// 切换排序
			changeSort(index) {
				this.sortIndex = index
				this.getData()
				this.$refs.sort.close()
			},
			// 列表点击事件处理
			doEvent(item) {
				switch (item.type) {
					case 'image': // 预览图片
						let images = this.list.filter(item => {
							return item.type === 'image'
						})
						uni.previewImage({
							current: item.url,
							urls: images.map(item => item.url)
						})
						break;
					case 'video':
						uni.navigateTo({
							url: '../video/video?url=' + item.url + '&title=' + item.name,
						});
						break;
					default:
						this.dirs.push({
							id: item.id,
							name: item.name
						})
						this.getData()
						uni.setStorage({
							key: "dirs",
							data: JSON.stringify(this.dirs)
						})
						break;
				}
			},
			// 选中列表
			select(e) {
				this.list[e.index].checked = e.value
			},
			// 全选/取消全选
			handleCheckAll(checked) {
				this.list.forEach(item => {
					item.checked = checked
				})
			},
			// 处理底部操作条事件
			handleBottomEvent(item) {
				switch (item.name) {
					case "删除":
						this.$refs.delete.open((close) => {
							uni.showLoading({
								title: '删除中...',
								mask: false
							});
							let ids = (this.checkList.map(item => item.id)).join(',')
							this.$H.post('/file/delete', {
								ids
							}, {
								token: true
							}).then(res => {
								this.getData()
								uni.showToast({
									title: '删除成功',
									icon: 'none'
								});
								uni.hideLoading()
							}).catch(err => {
								uni.hideLoading()
							})
							close()
							// this.list = this.list.filter(item=>!item.checked)

						})
						break;
					case '重命名':
						this.renameValue = this.checkList[0].name
						this.$refs.rename.open((close) => {
							if (this.renameValue == '') {
								return uni.showToast({
									title: '文件名称不能为空',
									icon: 'none'
								});
							}
							this.$H.post('/file/rename', {
								id: this.checkList[0].id,
								name: this.renameValue
							}, {
								token: true
							}).then(res => {
								this.checkList[0].name = this.renameValue
								uni.showToast({
									title: '重命名成功',
									icon: 'none'
								});
							})
							close()
						})
						break;
					case '下载':
						this.download()
						break;
					case '分享':
						this.share()
						this.handleCheckAll(false)
						break;
					default:
						break;
				}
			},
			share() {
				this.$H.post('/share/create', {
					file_id: this.checkList[0].id
				}, {
					token: true
				}).then(res => {
					uni.showModal({
						content: res,
						showCancel: false,
						success: (result) => {
							// #ifndef H5
							uni.setClipboardData({
								data: res,
								success: () => {
									uni.showToast({
										title: '复制成功',
										icon: 'none'
									});
								}
							});
							// #endif
						}
					});
				})
			},
			download() {
				this.checkList.forEach(item => {
					if (item.isdir === 0) {
						const key = this.genID(8)

						let obj = {
							name: item.name,
							type: item.type,
							size: item.size,
							key,
							progress: 0,
							status: true,
							created_time: (new Date).getTime()
						}

						// 创建下载任务
						this.$store.dispatch('createDownLoadJob', obj)

						let url = item.url

						let d = uni.downloadFile({
							url,
							success: (res) => {
								if (res.statusCode === 200) {
									console.log('下载成功', res);
									// #ifdef H5
									uni.saveFile({
										tempFilePath: item.tempFilePath
									})
									// #endif
								}
							}
						})

						d.onProgressUpdate((res) => {
							this.$store.dispatch('updateDownLoadJob', {
								progress: res.progress,
								status: true,
								key
							})
						})
					}
				})

				uni.showToast({
					title: '已加入下载任务',
					icon: 'none'
				});

				this.handleCheckAll(false)
			},
			// 打开添加操作条
			openAddDialog() {
				this.$refs.add.open()
			},
			openSortDialog() {
				this.$refs.sort.open()
			},
			// 生成唯一ID
			genID(length) {
				return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
			},
			// 上传
			upload(file, type) {
				let t = type
				const key = this.genID(8)

				let name = file.name

				if (!name) {
					name = file.path.substring(file.path.lastIndexOf('/') + 1)
				}

				let obj = {
					name,
					type: t,
					size: file.size,
					key,
					progress: 0,
					status: true,
					created_time: (new Date).getTime()
				}
				// 创建上传任务
				this.$store.dispatch('createUploadJob', obj)
				// 上传
				this.$H.upload('/upload?file_id=' + this.file_id, {
					filePath: file.path
				}, (p) => {
					console.log(p);
					// 更新上传任务进度
					this.$store.dispatch('updateUploadJob', {
						status: true,
						progress: p,
						key
					})
				}).then(res => {
					this.getData()
				})
			},
			handleAddEvent(item) {
				this.$refs.add.close()
				switch (item.name) {
					case "上传视频":
						uni.chooseVideo({
							count: 1,
							success: (res) => {
								let name = ''
								let size = 0
								// #ifndef H5
								name = res.tempFilePath.substring(res.tempFilePath.lastIndexOf('/') + 1)
								size = res.size
								// #endif
								this.upload({
									path: res.tempFilePath,
									name,
									type: "video",
									size
								})
							}
						})
						break;
					case "上传图片":
						uni.chooseImage({
							count: 9,
							success: (res) => {
								res.tempFiles.forEach(item => {
									this.upload(item, 'image')
								})
							}
						})
						break;
					case "新建文件夹":
						this.$refs.newdir.open((close) => {
							if (this.newdirname == '') {
								return uni.showToast({
									title: '文件夹名称不能为空',
									icon: 'none'
								});
							}
							// 请求服务器
							this.$H.post('/file/createdir', {
								file_id: this.file_id,
								name: this.newdirname
							}, {
								token: true
							}).then(res => {
								this.getData()
								uni.showToast({
									title: '新建文件夹成功',
									icon: 'none'
								});
							})
							close()
							this.newdirname = ''
						})
						break;
					default:
						break;
				}
			},
			// 返回上一个目录
			backUp() {
				this.dirs.pop()
				this.getData()
				uni.setStorage({
					key: "dirs",
					data: JSON.stringify(this.dirs)
				})
			},
			search(e) {
				if (e.detail.value == '') {
					return this.getData()
				}

				this.$H.get('/file/search?keyword=' + e.detail.value, {
					token: true
				}).then(res => {
					this.list = this.formatList(res.rows)
				})
			}
		}
	}
</script>

<style>

</style>
