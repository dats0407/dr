/**
 * 小程序配置文件
 */

var companyId = 1

var maxBuyQuantity = 50

// 内网开发环境
 var domainName = "http://localhost:8080/cis";

// 线上正式环境
//var domainName = "https://www.lupinyi.com/cis";

var config = {

  // 下面的地址配合云端 Server 工作
  domainName,
  companyId,
  maxBuyQuantity,

  requestUrlPrefix: `https://www.lupinyi.com/cis/`,

  // qiniuCdn: `http://oxvaybaf1.bkt.clouddn.com/`,
  qiniuCdn: `https://www.lupinyi.com/`,

  // templatesUrlPrefix: `${domainName}/templates/cis/`,
  templatesUrlPrefix: `https://ww.lupinyi.com/templates/cis/`,

  loginUrl: `${domainName}/auth/auth`,

  //校验是否第三方登录
  checkThirdLoginUrl: `${domainName}/auth//checkIsLogin`,

  // 保存用户地址信息
  saveAddrUrl: `${domainName}/addr/save`,

  //跳转到订单中心拉取订单信息
  toBuyNowUrl: `${domainName}/buynow/tobuynow`,

  //下单
  placeOrderUrl: `${domainName}/buynow/placeOrder`,

  //查询订单
  orderListUrl: `${domainName}/order/list`,

  //查询订单详情
  orderDetailUrl: `${domainName}/order/detail`,

  //查询用户地址信息
  userAddrUrl: `${domainName}/addr/query`,

  //取消订单
  cancelOrderUrl: `${domainName}/order/cancel`,

  //确认收货
  confirmReceiptUrl: `${domainName}/order/confirmDelivery`,

  //立即支付
  payNowUrl: `${domainName}/wxpay/pay`,

  //查询发现列表
  findListUrl: `${domainName}/find/list`,

  updateBuyQuantityUrl: `${domainName}/buynow/update`,
  // 七牛上传token
  qiniuUploadTokenUrl: `${domainName}/qiniu/qiuniuToken`,

  //印象查询
  impressionQueryUrl: `${domainName}/impression/query`,

  //印象投票
  impressionVoteUrl: `${domainName}/impression/vote`,

  //印象投票
  impressionHasVotedUrl: `${domainName}/impression/hasVoted`,

  //根据couponId查询用户代金券
  queryByCouponIdUrl: `${domainName}/coupon/queryByCouponId`,

  //领取代金券
  receiveCouponUrl: `${domainName}/coupon/receive`,
  
  //领取代金券
  queryLatestCouponUrl: `${domainName}/coupon/getLatestCoupon`,

  //发现评论列表
  findCommentListUrl: `${domainName}/find/commentList`,

  //删除发现
  findDeleteUrl: `${domainName}/find/delete`,

  //点赞
  findThumbsUpUrl: `${domainName}/find/thumbsUp`,

  //评论
  findCommentUrl: `${domainName}/find/comment`,

  //添加主题
  findAddUrl: `${domainName}/find/add`
  
 
};

module.exports = config
