/*
 * A white-list based PAC, by @janlay
 * Last update: Jan 14, 2013
 * Special thanks to @Paveo
 */
function FindProxyForURL(url, host) {
    var PROXY = "SOCKS 127.0.0.1:7070";
    var DEFAULT = "DIRECT";
    
    var parts = host.split('.'),
        // First part of IP
        ClassAIPs = ['127', '192', '10', '20', '30', '40', '50', '60', '70', '80', '90'],
        // always use proxy, even if inHosts or domains are matched
        overrideDomains = ['ip.cn', 'nytimes.com'],
        // indexOf searching
        inHosts = ['123', '168', '51', '58', '86', '91', 'bj', 'zj', 'ali', 'qq', 'cdn', 'china', 'local'],
        // domains end with
        domains = ['10010.com', '10086.cn', '115.com', '115img.com', '126.com', '126.net', '163.com', '24quan.com', '265.com', '39.net', 'admin5.com', 'appinn.com', 'baidu.com', 'baixing.com', 'bdimg.com', 'go2map.com', 'blogbus.com', 'blueidea.com', 'bokee.net', 'caing.com', 'ccb.com', 'cnbeta.com', 'cnblogs.com', 'cntv.net', 'comsenz.com', 'csdn.net', 'ct10000.com', 'ctrip.com', 'dangdang.com', 'daqi.com', 'diandian.com', 'dianping.com', 'discuz.net', 'donews.com', 'douban.com', 'dpfile.com', 'dream4ever.org', 'eastmoney.com', 'elong.com', 'et8.org', 'fengniao.com', 'ganji.com', 'gfan.com', 'gfw.io', 'goodbabygroup.com', 'gougou.com', 'gtimg.com', 'hi-pda.com', 'hiapk.com', 'huaban.com', 'huanqiu.com', 'hudong.com', 'iciba.com', 'img-space.com', 'infzm.com', 'ip138.com', 'jandan.net', 'jiepang.com', 'kaixin001.com', 'ku6.com', 'ku6img.com', 'lampdrive.com', 'lashou.com', 'lashouimg.com', 'letao.com', 'manzuo.com', 'mapabc.com', 'mapbar.com', 'meituan.com', 'mop.com', 'mtime.com', 'mydrivers.com', 'nbweekly.com', 'netease.com', 'nuomi.com', 'onlinedown.net', 'paipai.com', 'pchome.net', 'pcpop.com', 'pengyou.com', 'ppstream.com', 'pptv.com', 'qiyi.com', 'qunar.com', 'qvbuy.com', 'renren.com', 'rrimg.com', 'sanguosha.com', 'sdo.com', 'sf-express.com', 'sina.com', 'iask.com', 'sinaimg.com', 'sogou.com', 'sohu.com', 'soku.com', 'soso.com', 'soufun.com', 'soufunimg.com', 'taobao.com', 'taobaocdn.com', 'tdimg.com', 'tenpay.com', 'tgbus.com', 'tmall.com', 'tudou.com', 'tudouui.com', 'uusee.com', 'vcimg.com', 'verycd.com', 'weibo.com', 'weiphone.com', 'xiami.com', 'xiami.net', 'xici.net', 'xilu.com', 'xinhuanet.com', 'xinnet.com', 'xitek.com', 'xunlei.com', 'yesky.com', 'yihaodian.com', 'yihaodianimg.com', 'ykimg.com', 'ynet.com', 'youdao.com', 'youku.com', 'yupoo.com', 'zaobao.com', 'zhaopin.com', 'zhihu.com', 'idailyapp.com', 'logmein.com', 'my.cl.ly', 'synacast.com', 'pplive.com', 'eyoudi.com', '0x110.com', 'kuaidi100.com', 'bdstatic.com', 'fastif.net', 'duapp.com', 'xiachufang.com', 'wandoujia.com', 'wdjimg.com', 'chdbits.org', 'chdbits.org', 'zhi.hu'];

    // http://localsitename
    if(isPlainHostName(host)) return DEFAULT;

    // http://60.1.2.3
    for(var i = 0, len = ClassAIPs.length, classA = parts[0]; i < len; i++)
        if(ClassAIPs[i] === classA) return DEFAULT;
    
    // http://cn.nytimes.com
    for(var i = 0, len = overrideDomains.length; i < len; i++)
        if(host.indexOf(overrideDomains[i]) >= 0) return PROXY;

    // https://www.51job.com， https://www.alipay.com
    for(var i = 0, len = inHosts.length; i < len; i++)
        if(host.indexOf(inHosts[i]) >= 0) return DEFAULT;

    // http://www.verycd.com, http://ip138.com/
    for(var i = 0, len = domains.length; i < len; i++)
        if(dnsDomainIs(host, domains[i])) return DEFAULT;

    // finally, use proxy
    return PROXY;
}
