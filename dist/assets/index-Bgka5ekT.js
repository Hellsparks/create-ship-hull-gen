(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const Fu={meta:{id:"galleon",name:"Galleon",description:"Wide-beamed warship with rounded U hull",tweaks:[{id:"belly",label:"Hull Belly",min:0,max:1,step:.05,default:.55}]},isSolid(n,t,e,i){const r=i.belly??.55,a=n+.5,o=Math.abs(e),s=Math.sin(Math.PI*Math.pow(a,.75))*.5;if(o>s||s<.001)return!1;const c=o/s,h=(1-Math.sqrt(Math.max(0,1-c*c)))*(1-r*.6);return!(t<h)}},Ou={meta:{id:"cutter",name:"Cutter",description:"Fast, narrow-beamed vessel with deep V keel",tweaks:[{id:"vSharpness",label:"V Sharpness",min:.3,max:1.5,step:.05,default:.8}]},isSolid(n,t,e,i){const r=i.vSharpness??.8,a=n+.5,o=Math.abs(e),s=Math.sin(Math.PI*Math.pow(a,1.1))*.5;if(o>s||s<.001)return!1;const c=o/s,l=Math.pow(c,r);return!(t<l)}},Bu={meta:{id:"sloop",name:"Sloop",description:"Classic round-hulled single-mast sailboat",tweaks:[{id:"roundness",label:"Roundness",min:.3,max:1,step:.05,default:.75}]},isSolid(n,t,e,i){const r=i.roundness??.75,a=n+.5,o=Math.abs(e),s=Math.pow(Math.sin(Math.PI*Math.pow(a,.85)),.7)*.5;if(o>s||s<.001)return!1;const c=o/s,l=1-Math.sqrt(Math.max(0,1-c*c)),h=Math.pow(c,2)*.5,d=l*r+h*(1-r);return!(t<d)}},ku={meta:{id:"brig",name:"Brig",description:"Two-masted square-rigged with flat bottom and straight sides",tweaks:[{id:"tumblehome",label:"Tumblehome",min:0,max:.4,step:.05,default:.12}]},isSolid(n,t,e,i){const r=i.tumblehome??.12,a=n+.5,o=Math.abs(e),s=Math.sin(Math.PI*Math.pow(a,.6))*.5;if(o>s||s<.001)return!1;const c=.25,l=.75;let h;if(t<=c){const d=t/c;h=s*(.8+.2*d)}else if(t<=l)h=s;else{const d=(t-l)/(1-l);h=s*(1-r*d)}return!(o>h)}},zu={meta:{id:"frigate",name:"Frigate",description:"Long, sleek warship with sharp bow and fine lines",tweaks:[{id:"vDepth",label:"V Depth",min:.3,max:1.2,step:.05,default:.7},{id:"tumblehome",label:"Tumblehome",min:0,max:.3,step:.05,default:.1}]},isSolid(n,t,e,i){const r=i.vDepth??.7,a=i.tumblehome??.1,o=n+.5,s=Math.abs(e),c=Math.pow(Math.sin(Math.PI*o),1.4)*.5;if(s>c||c<.001)return!1;const l=s/c,h=Math.pow(l,1/r);if(t<h)return!1;const d=.55;if(t>d){const u=(t-d)/(1-d),p=c*(1-a*u);if(s>p)return!1}return!0}},Hu={meta:{id:"fluyt",name:"Fluyt",description:"Dutch merchant with round keel and extreme tumblehome",tweaks:[{id:"bellyWidth",label:"Belly Width",min:.4,max:1,step:.05,default:.8},{id:"tumblehome",label:"Tumblehome",min:0,max:.7,step:.05,default:.5},{id:"sternRound",label:"Stern Round",min:0,max:1,step:.05,default:.55}]},isSolid(n,t,e,i){const r=i.bellyWidth??.8,a=i.tumblehome??.5,o=i.sternRound??.55,s=n+.5,c=Math.abs(e),l=1-o*Math.pow(s,3)*.35,h=Math.sin(Math.PI*Math.pow(s,.6))*.5*r*l;if(c>h||h<.001)return!1;const d=.45;let u;if(t<=d)u=h*Math.sin(Math.PI/2*(t/d));else{const p=(t-d)/(1-d);u=h*(1-a*Math.pow(p,.9))}return!(c>u)}},Xi=[Fu,Ou,Bu,ku,zu,Hu];function Gu({isSolid:n,tweaks:t,length:e,beam:i,draft:r,thickness:a,block:o,bowRake:s=0,sternRake:c=0,bowRiseLen:l=0,bowRiseHeight:h=0,sternRiseLen:d=0,sternRiseHeight:u=0,bowRound:p=0,sternRound:_=0,bowBulge:x=0,sternBulge:m=0,ribSpacing:f=0,ribThickness:b=2,ribBlock:y="",ribsInterior:E=!1,keelBlock:I="",keelWidth:C=0,deckBlock:w="",borderBlock:L=""}){const g=i,v=Math.max(0,Math.ceil(h),Math.ceil(u)),A=r+v,z=Math.max(.1,1+x*3),k=Math.max(.1,1+m*3),X=r>1?(A-1)/Math.max(r-1,1):1,W=s*Math.pow(X,z),G=1-c*Math.pow(X,k),Y=Math.ceil(Math.max(0,-W)*(e-1)),H=Math.ceil(Math.max(0,G-1)*(e-1)),j=e+Y+H,ct=j*A*g,ft=new Uint8Array(ct),Bt=Math.max(e-1,1);for(let lt=0;lt<j;lt++){const st=(lt-Y)/Bt;for(let ht=0;ht<A;ht++){const T=r>1?ht/(r-1):1,yt=s*Math.pow(T,z),St=1-c*Math.pow(T,k);if(St<=yt||st<yt||st>St)continue;const zt=(st-yt)/(St-yt);let Mt;zt<=.5?Mt=.5*Math.pow(zt*2,1/(1+p*3)):Mt=1-.5*Math.pow((1-zt)*2,1/(1+_*3));const ne=Mt-.5;for(let Tt=0;Tt<g;Tt++){const Dt=g>1?Tt/(g-1)-.5:0;if(ht<r){const R=Math.min(T,1);n(ne,R,Dt,t)&&(ft[ge(lt,ht,Tt,j,A,g)]=1)}else{const R=ht-r,M=R<h&&zt<=l,B=R<u&&zt>=1-d;if(!M&&!B)continue;n(ne,1,Dt,t)&&(ft[ge(lt,ht,Tt,j,A,g)]=1)}}}}let Ut=ft;if(a>0&&a<A&&a<j&&a<g){let lt=new Uint8Array(ft);for(let st=0;st<a;st++)lt=Wu(lt,j,A,g);Ut=new Uint8Array(ct);for(let st=0;st<ct;st++)Ut[st]=ft[st]&(~lt[st]&1)}if(f>0){const lt=Math.max(0,b);for(let st=0;st<j;st+=f){const ht=new Uint8Array(A*g);for(let yt=0;yt<A;yt++)for(let St=0;St<g;St++)ht[yt*g+St]=ft[ge(st,yt,St,j,A,g)];let T;if(lt===0)T=ht;else{let yt=ht;for(let St=0;St<lt;St++)yt=Vu(yt,A,g);T=new Uint8Array(A*g);for(let St=0;St<A*g;St++)T[St]=ht[St]&(~yt[St]&1)}for(let yt=0;yt<A;yt++)for(let St=0;St<g;St++){if(!T[yt*g+St])continue;const zt=ge(st,yt,St,j,A,g);E&&Ut[zt]||(Ut[zt]=2)}}}if(C>0){const lt=C/2,st=(g-1)/2;for(let ht=0;ht<j;ht++)for(let T=0;T<g;T++)if(!(Math.abs(T-st)>=lt))for(let yt=0;yt<A;yt++){const St=ge(ht,yt,T,j,A,g);Ut[St]&&(Ut[St]=3)}}{const lt=new Int16Array(j*g).fill(-1);for(let ht=0;ht<j;ht++)for(let T=0;T<g;T++)for(let yt=A-1;yt>=0;yt--)if(Ut[ge(ht,yt,T,j,A,g)]){lt[ht*g+T]=yt;break}const st=r-1;for(let ht=0;ht<j;ht++)for(let T=0;T<g;T++){const yt=lt[ht*g+T];yt<st||(Ut[ge(ht,yt,T,j,A,g)]=4)}if(L!==void 0)for(let ht=0;ht<j;ht++)for(let T=0;T<g;T++){const yt=lt[ht*g+T];if(yt<st)continue;(lt[(ht-1)*g+T]<st||lt[(ht+1)*g+T]<st||lt[ht*g+(T-1)]<st||lt[ht*g+(T+1)]<st||ht===0||ht===j-1||T===0||T===g-1)&&(Ut[ge(ht,yt,T,j,A,g)]=5)}}const V=y||o,Q=I||o,dt=w||o,pt=L||dt,At=[];for(let lt=0;lt<j;lt++)for(let st=0;st<A;st++)for(let ht=0;ht<g;ht++){const T=Ut[ge(lt,st,ht,j,A,g)];T===1?At.push({x:lt,y:st,z:ht,block:o}):T===2?At.push({x:lt,y:st,z:ht,block:V}):T===3?At.push({x:lt,y:st,z:ht,block:Q}):T===4?At.push({x:lt,y:st,z:ht,block:dt}):T===5&&At.push({x:lt,y:st,z:ht,block:pt})}return{blocks:At,sizeX:j,sizeY:A,sizeZ:g}}function ge(n,t,e,i,r,a){return n*r*a+t*a+e}function Vu(n,t,e){const i=new Uint8Array(t*e);for(let r=0;r<t;r++)for(let a=0;a<e;a++)n[r*e+a]&&(r===0||r===t-1||a===0||a===e-1||n[(r-1)*e+a]&&n[(r+1)*e+a]&&n[r*e+(a-1)]&&n[r*e+(a+1)]&&(i[r*e+a]=1));return i}function Wu(n,t,e,i){const r=new Uint8Array(n.length);for(let a=0;a<t;a++)for(let o=0;o<e;o++)for(let s=0;s<i;s++)n[ge(a,o,s,t,e,i)]&&(a===0||a===t-1||o===0||o===e-1||s===0||s===i-1||n[ge(a-1,o,s,t,e,i)]&&n[ge(a+1,o,s,t,e,i)]&&n[ge(a,o-1,s,t,e,i)]&&n[ge(a,o+1,s,t,e,i)]&&n[ge(a,o,s-1,t,e,i)]&&n[ge(a,o,s+1,t,e,i)]&&(r[ge(a,o,s,t,e,i)]=1));return r}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Xu=4,ol=0,ll=1,qu=2;function qi(n){let t=n.length;for(;--t>=0;)n[t]=0}const Yu=0,lh=1,$u=2,Zu=3,Ku=258,Io=29,Ar=256,xr=Ar+1+Io,Ui=30,Uo=19,ch=2*xr+1,Qn=15,Za=16,ju=7,No=256,hh=16,uh=17,fh=18,Hs=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),xa=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Ju=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),dh=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qu=512,gn=new Array((xr+2)*2);qi(gn);const pr=new Array(Ui*2);qi(pr);const vr=new Array(Qu);qi(vr);const Mr=new Array(Ku-Zu+1);qi(Mr);const Fo=new Array(Io);qi(Fo);const Ta=new Array(Ui);qi(Ta);function Ka(n,t,e,i,r){this.static_tree=n,this.extra_bits=t,this.extra_base=e,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let ph,mh,_h;function ja(n,t){this.dyn_tree=n,this.max_code=0,this.stat_desc=t}const gh=n=>n<256?vr[n]:vr[256+(n>>>7)],Sr=(n,t)=>{n.pending_buf[n.pending++]=t&255,n.pending_buf[n.pending++]=t>>>8&255},Te=(n,t,e)=>{n.bi_valid>Za-e?(n.bi_buf|=t<<n.bi_valid&65535,Sr(n,n.bi_buf),n.bi_buf=t>>Za-n.bi_valid,n.bi_valid+=e-Za):(n.bi_buf|=t<<n.bi_valid&65535,n.bi_valid+=e)},nn=(n,t,e)=>{Te(n,e[t*2],e[t*2+1])},xh=(n,t)=>{let e=0;do e|=n&1,n>>>=1,e<<=1;while(--t>0);return e>>>1},tf=n=>{n.bi_valid===16?(Sr(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},ef=(n,t)=>{const e=t.dyn_tree,i=t.max_code,r=t.stat_desc.static_tree,a=t.stat_desc.has_stree,o=t.stat_desc.extra_bits,s=t.stat_desc.extra_base,c=t.stat_desc.max_length;let l,h,d,u,p,_,x=0;for(u=0;u<=Qn;u++)n.bl_count[u]=0;for(e[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<ch;l++)h=n.heap[l],u=e[e[h*2+1]*2+1]+1,u>c&&(u=c,x++),e[h*2+1]=u,!(h>i)&&(n.bl_count[u]++,p=0,h>=s&&(p=o[h-s]),_=e[h*2],n.opt_len+=_*(u+p),a&&(n.static_len+=_*(r[h*2+1]+p)));if(x!==0){do{for(u=c-1;n.bl_count[u]===0;)u--;n.bl_count[u]--,n.bl_count[u+1]+=2,n.bl_count[c]--,x-=2}while(x>0);for(u=c;u!==0;u--)for(h=n.bl_count[u];h!==0;)d=n.heap[--l],!(d>i)&&(e[d*2+1]!==u&&(n.opt_len+=(u-e[d*2+1])*e[d*2],e[d*2+1]=u),h--)}},vh=(n,t,e)=>{const i=new Array(Qn+1);let r=0,a,o;for(a=1;a<=Qn;a++)r=r+e[a-1]<<1,i[a]=r;for(o=0;o<=t;o++){let s=n[o*2+1];s!==0&&(n[o*2]=xh(i[s]++,s))}},nf=()=>{let n,t,e,i,r;const a=new Array(Qn+1);for(e=0,i=0;i<Io-1;i++)for(Fo[i]=e,n=0;n<1<<Hs[i];n++)Mr[e++]=i;for(Mr[e-1]=i,r=0,i=0;i<16;i++)for(Ta[i]=r,n=0;n<1<<xa[i];n++)vr[r++]=i;for(r>>=7;i<Ui;i++)for(Ta[i]=r<<7,n=0;n<1<<xa[i]-7;n++)vr[256+r++]=i;for(t=0;t<=Qn;t++)a[t]=0;for(n=0;n<=143;)gn[n*2+1]=8,n++,a[8]++;for(;n<=255;)gn[n*2+1]=9,n++,a[9]++;for(;n<=279;)gn[n*2+1]=7,n++,a[7]++;for(;n<=287;)gn[n*2+1]=8,n++,a[8]++;for(vh(gn,xr+1,a),n=0;n<Ui;n++)pr[n*2+1]=5,pr[n*2]=xh(n,5);ph=new Ka(gn,Hs,Ar+1,xr,Qn),mh=new Ka(pr,xa,0,Ui,Qn),_h=new Ka(new Array(0),Ju,0,Uo,ju)},Mh=n=>{let t;for(t=0;t<xr;t++)n.dyn_ltree[t*2]=0;for(t=0;t<Ui;t++)n.dyn_dtree[t*2]=0;for(t=0;t<Uo;t++)n.bl_tree[t*2]=0;n.dyn_ltree[No*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},Sh=n=>{n.bi_valid>8?Sr(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},cl=(n,t,e,i)=>{const r=t*2,a=e*2;return n[r]<n[a]||n[r]===n[a]&&i[t]<=i[e]},Ja=(n,t,e)=>{const i=n.heap[e];let r=e<<1;for(;r<=n.heap_len&&(r<n.heap_len&&cl(t,n.heap[r+1],n.heap[r],n.depth)&&r++,!cl(t,i,n.heap[r],n.depth));)n.heap[e]=n.heap[r],e=r,r<<=1;n.heap[e]=i},hl=(n,t,e)=>{let i,r,a=0,o,s;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+a++]&255,i+=(n.pending_buf[n.sym_buf+a++]&255)<<8,r=n.pending_buf[n.sym_buf+a++],i===0?nn(n,r,t):(o=Mr[r],nn(n,o+Ar+1,t),s=Hs[o],s!==0&&(r-=Fo[o],Te(n,r,s)),i--,o=gh(i),nn(n,o,e),s=xa[o],s!==0&&(i-=Ta[o],Te(n,i,s)));while(a<n.sym_next);nn(n,No,t)},Gs=(n,t)=>{const e=t.dyn_tree,i=t.stat_desc.static_tree,r=t.stat_desc.has_stree,a=t.stat_desc.elems;let o,s,c=-1,l;for(n.heap_len=0,n.heap_max=ch,o=0;o<a;o++)e[o*2]!==0?(n.heap[++n.heap_len]=c=o,n.depth[o]=0):e[o*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,e[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(t.max_code=c,o=n.heap_len>>1;o>=1;o--)Ja(n,e,o);l=a;do o=n.heap[1],n.heap[1]=n.heap[n.heap_len--],Ja(n,e,1),s=n.heap[1],n.heap[--n.heap_max]=o,n.heap[--n.heap_max]=s,e[l*2]=e[o*2]+e[s*2],n.depth[l]=(n.depth[o]>=n.depth[s]?n.depth[o]:n.depth[s])+1,e[o*2+1]=e[s*2+1]=l,n.heap[1]=l++,Ja(n,e,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],ef(n,t),vh(e,c,n.bl_count)},ul=(n,t,e)=>{let i,r=-1,a,o=t[0*2+1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[(e+1)*2+1]=65535,i=0;i<=e;i++)a=o,o=t[(i+1)*2+1],!(++s<c&&a===o)&&(s<l?n.bl_tree[a*2]+=s:a!==0?(a!==r&&n.bl_tree[a*2]++,n.bl_tree[hh*2]++):s<=10?n.bl_tree[uh*2]++:n.bl_tree[fh*2]++,s=0,r=a,o===0?(c=138,l=3):a===o?(c=6,l=3):(c=7,l=4))},fl=(n,t,e)=>{let i,r=-1,a,o=t[0*2+1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),i=0;i<=e;i++)if(a=o,o=t[(i+1)*2+1],!(++s<c&&a===o)){if(s<l)do nn(n,a,n.bl_tree);while(--s!==0);else a!==0?(a!==r&&(nn(n,a,n.bl_tree),s--),nn(n,hh,n.bl_tree),Te(n,s-3,2)):s<=10?(nn(n,uh,n.bl_tree),Te(n,s-3,3)):(nn(n,fh,n.bl_tree),Te(n,s-11,7));s=0,r=a,o===0?(c=138,l=3):a===o?(c=6,l=3):(c=7,l=4)}},rf=n=>{let t;for(ul(n,n.dyn_ltree,n.l_desc.max_code),ul(n,n.dyn_dtree,n.d_desc.max_code),Gs(n,n.bl_desc),t=Uo-1;t>=3&&n.bl_tree[dh[t]*2+1]===0;t--);return n.opt_len+=3*(t+1)+5+5+4,t},af=(n,t,e,i)=>{let r;for(Te(n,t-257,5),Te(n,e-1,5),Te(n,i-4,4),r=0;r<i;r++)Te(n,n.bl_tree[dh[r]*2+1],3);fl(n,n.dyn_ltree,t-1),fl(n,n.dyn_dtree,e-1)},sf=n=>{let t=4093624447,e;for(e=0;e<=31;e++,t>>>=1)if(t&1&&n.dyn_ltree[e*2]!==0)return ol;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return ll;for(e=32;e<Ar;e++)if(n.dyn_ltree[e*2]!==0)return ll;return ol};let dl=!1;const of=n=>{dl||(nf(),dl=!0),n.l_desc=new ja(n.dyn_ltree,ph),n.d_desc=new ja(n.dyn_dtree,mh),n.bl_desc=new ja(n.bl_tree,_h),n.bi_buf=0,n.bi_valid=0,Mh(n)},Eh=(n,t,e,i)=>{Te(n,(Yu<<1)+(i?1:0),3),Sh(n),Sr(n,e),Sr(n,~e),e&&n.pending_buf.set(n.window.subarray(t,t+e),n.pending),n.pending+=e},lf=n=>{Te(n,lh<<1,3),nn(n,No,gn),tf(n)},cf=(n,t,e,i)=>{let r,a,o=0;n.level>0?(n.strm.data_type===qu&&(n.strm.data_type=sf(n)),Gs(n,n.l_desc),Gs(n,n.d_desc),o=rf(n),r=n.opt_len+3+7>>>3,a=n.static_len+3+7>>>3,a<=r&&(r=a)):r=a=e+5,e+4<=r&&t!==-1?Eh(n,t,e,i):n.strategy===Xu||a===r?(Te(n,(lh<<1)+(i?1:0),3),hl(n,gn,pr)):(Te(n,($u<<1)+(i?1:0),3),af(n,n.l_desc.max_code+1,n.d_desc.max_code+1,o+1),hl(n,n.dyn_ltree,n.dyn_dtree)),Mh(n),i&&Sh(n)},hf=(n,t,e)=>(n.pending_buf[n.sym_buf+n.sym_next++]=t,n.pending_buf[n.sym_buf+n.sym_next++]=t>>8,n.pending_buf[n.sym_buf+n.sym_next++]=e,t===0?n.dyn_ltree[e*2]++:(n.matches++,t--,n.dyn_ltree[(Mr[e]+Ar+1)*2]++,n.dyn_dtree[gh(t)*2]++),n.sym_next===n.sym_end);var uf=of,ff=Eh,df=cf,pf=hf,mf=lf,_f={_tr_init:uf,_tr_stored_block:ff,_tr_flush_block:df,_tr_tally:pf,_tr_align:mf};const gf=(n,t,e,i)=>{let r=n&65535|0,a=n>>>16&65535|0,o=0;for(;e!==0;){o=e>2e3?2e3:e,e-=o;do r=r+t[i++]|0,a=a+r|0;while(--o);r%=65521,a%=65521}return r|a<<16|0};var Er=gf;const xf=()=>{let n,t=[];for(var e=0;e<256;e++){n=e;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;t[e]=n}return t},vf=new Uint32Array(xf()),Mf=(n,t,e,i)=>{const r=vf,a=i+e;n^=-1;for(let o=i;o<a;o++)n=n>>>8^r[(n^t[o])&255];return n^-1};var de=Mf,ri={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Rr={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Sf,_tr_stored_block:Vs,_tr_flush_block:Ef,_tr_tally:In,_tr_align:yf}=_f,{Z_NO_FLUSH:Un,Z_PARTIAL_FLUSH:bf,Z_FULL_FLUSH:wf,Z_FINISH:Be,Z_BLOCK:pl,Z_OK:_e,Z_STREAM_END:ml,Z_STREAM_ERROR:an,Z_DATA_ERROR:Tf,Z_BUF_ERROR:Qa,Z_DEFAULT_COMPRESSION:Af,Z_FILTERED:Rf,Z_HUFFMAN_ONLY:Or,Z_RLE:Cf,Z_FIXED:Lf,Z_DEFAULT_STRATEGY:Pf,Z_UNKNOWN:Df,Z_DEFLATED:Oa}=Rr,If=9,Uf=15,Nf=8,Ff=29,Of=256,Ws=Of+1+Ff,Bf=30,kf=19,zf=2*Ws+1,Hf=15,Ht=3,Dn=258,sn=Dn+Ht+1,Gf=32,Bi=42,Oo=57,Xs=69,qs=73,Ys=91,$s=103,ti=113,hr=666,Ee=1,Yi=2,ai=3,$i=4,Vf=3,ei=(n,t)=>(n.msg=ri[t],t),_l=n=>n*2-(n>4?9:0),Ln=n=>{let t=n.length;for(;--t>=0;)n[t]=0},Wf=n=>{let t,e,i,r=n.w_size;t=n.hash_size,i=t;do e=n.head[--i],n.head[i]=e>=r?e-r:0;while(--t);t=r,i=t;do e=n.prev[--i],n.prev[i]=e>=r?e-r:0;while(--t)};let Xf=(n,t,e)=>(t<<n.hash_shift^e)&n.hash_mask,Nn=Xf;const Ie=n=>{const t=n.state;let e=t.pending;e>n.avail_out&&(e=n.avail_out),e!==0&&(n.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+e),n.next_out),n.next_out+=e,t.pending_out+=e,n.total_out+=e,n.avail_out-=e,t.pending-=e,t.pending===0&&(t.pending_out=0))},Ue=(n,t)=>{Ef(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,t),n.block_start=n.strstart,Ie(n.strm)},Yt=(n,t)=>{n.pending_buf[n.pending++]=t},Qi=(n,t)=>{n.pending_buf[n.pending++]=t>>>8&255,n.pending_buf[n.pending++]=t&255},Zs=(n,t,e,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,t.set(n.input.subarray(n.next_in,n.next_in+r),e),n.state.wrap===1?n.adler=Er(n.adler,t,r,e):n.state.wrap===2&&(n.adler=de(n.adler,t,r,e)),n.next_in+=r,n.total_in+=r,r)},yh=(n,t)=>{let e=n.max_chain_length,i=n.strstart,r,a,o=n.prev_length,s=n.nice_match;const c=n.strstart>n.w_size-sn?n.strstart-(n.w_size-sn):0,l=n.window,h=n.w_mask,d=n.prev,u=n.strstart+Dn;let p=l[i+o-1],_=l[i+o];n.prev_length>=n.good_match&&(e>>=2),s>n.lookahead&&(s=n.lookahead);do if(r=t,!(l[r+o]!==_||l[r+o-1]!==p||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<u);if(a=Dn-(u-i),i=u-Dn,a>o){if(n.match_start=t,o=a,a>=s)break;p=l[i+o-1],_=l[i+o]}}while((t=d[t&h])>c&&--e!==0);return o<=n.lookahead?o:n.lookahead},ki=n=>{const t=n.w_size;let e,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=t+(t-sn)&&(n.window.set(n.window.subarray(t,t+t-i),0),n.match_start-=t,n.strstart-=t,n.block_start-=t,n.insert>n.strstart&&(n.insert=n.strstart),Wf(n),i+=t),n.strm.avail_in===0)break;if(e=Zs(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=e,n.lookahead+n.insert>=Ht)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=Nn(n,n.ins_h,n.window[r+1]);n.insert&&(n.ins_h=Nn(n,n.ins_h,n.window[r+Ht-1]),n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,n.insert--,!(n.lookahead+n.insert<Ht)););}while(n.lookahead<sn&&n.strm.avail_in!==0)},bh=(n,t)=>{let e=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,a,o=0,s=n.strm.avail_in;do{if(i=65535,a=n.bi_valid+42>>3,n.strm.avail_out<a||(a=n.strm.avail_out-a,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>a&&(i=a),i<e&&(i===0&&t!==Be||t===Un||i!==r+n.strm.avail_in)))break;o=t===Be&&i===r+n.strm.avail_in?1:0,Vs(n,0,0,o),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,Ie(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Zs(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(o===0);return s-=n.strm.avail_in,s&&(s>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=s&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-s,n.strm.next_in),n.strstart),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),o?$i:t!==Un&&t!==Be&&n.strm.avail_in===0&&n.strstart===n.block_start?Yi:(a=n.window_size-n.strstart,n.strm.avail_in>a&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,a+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),a>n.strm.avail_in&&(a=n.strm.avail_in),a&&(Zs(n.strm,n.window,n.strstart,a),n.strstart+=a,n.insert+=a>n.w_size-n.insert?n.w_size-n.insert:a),n.high_water<n.strstart&&(n.high_water=n.strstart),a=n.bi_valid+42>>3,a=n.pending_buf_size-a>65535?65535:n.pending_buf_size-a,e=a>n.w_size?n.w_size:a,r=n.strstart-n.block_start,(r>=e||(r||t===Be)&&t!==Un&&n.strm.avail_in===0&&r<=a)&&(i=r>a?a:r,o=t===Be&&n.strm.avail_in===0&&i===r?1:0,Vs(n,n.block_start,i,o),n.block_start+=i,Ie(n.strm)),o?ai:Ee)},ts=(n,t)=>{let e,i;for(;;){if(n.lookahead<sn){if(ki(n),n.lookahead<sn&&t===Un)return Ee;if(n.lookahead===0)break}if(e=0,n.lookahead>=Ht&&(n.ins_h=Nn(n,n.ins_h,n.window[n.strstart+Ht-1]),e=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),e!==0&&n.strstart-e<=n.w_size-sn&&(n.match_length=yh(n,e)),n.match_length>=Ht)if(i=In(n,n.strstart-n.match_start,n.match_length-Ht),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=Ht){n.match_length--;do n.strstart++,n.ins_h=Nn(n,n.ins_h,n.window[n.strstart+Ht-1]),e=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=Nn(n,n.ins_h,n.window[n.strstart+1]);else i=In(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(Ue(n,!1),n.strm.avail_out===0))return Ee}return n.insert=n.strstart<Ht-1?n.strstart:Ht-1,t===Be?(Ue(n,!0),n.strm.avail_out===0?ai:$i):n.sym_next&&(Ue(n,!1),n.strm.avail_out===0)?Ee:Yi},di=(n,t)=>{let e,i,r;for(;;){if(n.lookahead<sn){if(ki(n),n.lookahead<sn&&t===Un)return Ee;if(n.lookahead===0)break}if(e=0,n.lookahead>=Ht&&(n.ins_h=Nn(n,n.ins_h,n.window[n.strstart+Ht-1]),e=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=Ht-1,e!==0&&n.prev_length<n.max_lazy_match&&n.strstart-e<=n.w_size-sn&&(n.match_length=yh(n,e),n.match_length<=5&&(n.strategy===Rf||n.match_length===Ht&&n.strstart-n.match_start>4096)&&(n.match_length=Ht-1)),n.prev_length>=Ht&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-Ht,i=In(n,n.strstart-1-n.prev_match,n.prev_length-Ht),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(n.ins_h=Nn(n,n.ins_h,n.window[n.strstart+Ht-1]),e=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=Ht-1,n.strstart++,i&&(Ue(n,!1),n.strm.avail_out===0))return Ee}else if(n.match_available){if(i=In(n,0,n.window[n.strstart-1]),i&&Ue(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return Ee}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=In(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<Ht-1?n.strstart:Ht-1,t===Be?(Ue(n,!0),n.strm.avail_out===0?ai:$i):n.sym_next&&(Ue(n,!1),n.strm.avail_out===0)?Ee:Yi},qf=(n,t)=>{let e,i,r,a;const o=n.window;for(;;){if(n.lookahead<=Dn){if(ki(n),n.lookahead<=Dn&&t===Un)return Ee;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=Ht&&n.strstart>0&&(r=n.strstart-1,i=o[r],i===o[++r]&&i===o[++r]&&i===o[++r])){a=n.strstart+Dn;do;while(i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&r<a);n.match_length=Dn-(a-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=Ht?(e=In(n,1,n.match_length-Ht),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(e=In(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),e&&(Ue(n,!1),n.strm.avail_out===0))return Ee}return n.insert=0,t===Be?(Ue(n,!0),n.strm.avail_out===0?ai:$i):n.sym_next&&(Ue(n,!1),n.strm.avail_out===0)?Ee:Yi},Yf=(n,t)=>{let e;for(;;){if(n.lookahead===0&&(ki(n),n.lookahead===0)){if(t===Un)return Ee;break}if(n.match_length=0,e=In(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,e&&(Ue(n,!1),n.strm.avail_out===0))return Ee}return n.insert=0,t===Be?(Ue(n,!0),n.strm.avail_out===0?ai:$i):n.sym_next&&(Ue(n,!1),n.strm.avail_out===0)?Ee:Yi};function Qe(n,t,e,i,r){this.good_length=n,this.max_lazy=t,this.nice_length=e,this.max_chain=i,this.func=r}const ur=[new Qe(0,0,0,0,bh),new Qe(4,4,8,4,ts),new Qe(4,5,16,8,ts),new Qe(4,6,32,32,ts),new Qe(4,4,16,16,di),new Qe(8,16,32,32,di),new Qe(8,16,128,128,di),new Qe(8,32,128,256,di),new Qe(32,128,258,1024,di),new Qe(32,258,258,4096,di)],$f=n=>{n.window_size=2*n.w_size,Ln(n.head),n.max_lazy_match=ur[n.level].max_lazy,n.good_match=ur[n.level].good_length,n.nice_match=ur[n.level].nice_length,n.max_chain_length=ur[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=Ht-1,n.match_available=0,n.ins_h=0};function Zf(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Oa,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(zf*2),this.dyn_dtree=new Uint16Array((2*Bf+1)*2),this.bl_tree=new Uint16Array((2*kf+1)*2),Ln(this.dyn_ltree),Ln(this.dyn_dtree),Ln(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(Hf+1),this.heap=new Uint16Array(2*Ws+1),Ln(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Ws+1),Ln(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Cr=n=>{if(!n)return 1;const t=n.state;return!t||t.strm!==n||t.status!==Bi&&t.status!==Oo&&t.status!==Xs&&t.status!==qs&&t.status!==Ys&&t.status!==$s&&t.status!==ti&&t.status!==hr?1:0},wh=n=>{if(Cr(n))return ei(n,an);n.total_in=n.total_out=0,n.data_type=Df;const t=n.state;return t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap===2?Oo:t.wrap?Bi:ti,n.adler=t.wrap===2?0:1,t.last_flush=-2,Sf(t),_e},Th=n=>{const t=wh(n);return t===_e&&$f(n.state),t},Kf=(n,t)=>Cr(n)||n.state.wrap!==2?an:(n.state.gzhead=t,_e),Ah=(n,t,e,i,r,a)=>{if(!n)return an;let o=1;if(t===Af&&(t=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),r<1||r>If||e!==Oa||i<8||i>15||t<0||t>9||a<0||a>Lf||i===8&&o!==1)return ei(n,an);i===8&&(i=9);const s=new Zf;return n.state=s,s.strm=n,s.status=Bi,s.wrap=o,s.gzhead=null,s.w_bits=i,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=r+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+Ht-1)/Ht),s.window=new Uint8Array(s.w_size*2),s.head=new Uint16Array(s.hash_size),s.prev=new Uint16Array(s.w_size),s.lit_bufsize=1<<r+6,s.pending_buf_size=s.lit_bufsize*4,s.pending_buf=new Uint8Array(s.pending_buf_size),s.sym_buf=s.lit_bufsize,s.sym_end=(s.lit_bufsize-1)*3,s.level=t,s.strategy=a,s.method=e,Th(n)},jf=(n,t)=>Ah(n,t,Oa,Uf,Nf,Pf),Jf=(n,t)=>{if(Cr(n)||t>pl||t<0)return n?ei(n,an):an;const e=n.state;if(!n.output||n.avail_in!==0&&!n.input||e.status===hr&&t!==Be)return ei(n,n.avail_out===0?Qa:an);const i=e.last_flush;if(e.last_flush=t,e.pending!==0){if(Ie(n),n.avail_out===0)return e.last_flush=-1,_e}else if(n.avail_in===0&&_l(t)<=_l(i)&&t!==Be)return ei(n,Qa);if(e.status===hr&&n.avail_in!==0)return ei(n,Qa);if(e.status===Bi&&e.wrap===0&&(e.status=ti),e.status===Bi){let r=Oa+(e.w_bits-8<<4)<<8,a=-1;if(e.strategy>=Or||e.level<2?a=0:e.level<6?a=1:e.level===6?a=2:a=3,r|=a<<6,e.strstart!==0&&(r|=Gf),r+=31-r%31,Qi(e,r),e.strstart!==0&&(Qi(e,n.adler>>>16),Qi(e,n.adler&65535)),n.adler=1,e.status=ti,Ie(n),e.pending!==0)return e.last_flush=-1,_e}if(e.status===Oo){if(n.adler=0,Yt(e,31),Yt(e,139),Yt(e,8),e.gzhead)Yt(e,(e.gzhead.text?1:0)+(e.gzhead.hcrc?2:0)+(e.gzhead.extra?4:0)+(e.gzhead.name?8:0)+(e.gzhead.comment?16:0)),Yt(e,e.gzhead.time&255),Yt(e,e.gzhead.time>>8&255),Yt(e,e.gzhead.time>>16&255),Yt(e,e.gzhead.time>>24&255),Yt(e,e.level===9?2:e.strategy>=Or||e.level<2?4:0),Yt(e,e.gzhead.os&255),e.gzhead.extra&&e.gzhead.extra.length&&(Yt(e,e.gzhead.extra.length&255),Yt(e,e.gzhead.extra.length>>8&255)),e.gzhead.hcrc&&(n.adler=de(n.adler,e.pending_buf,e.pending,0)),e.gzindex=0,e.status=Xs;else if(Yt(e,0),Yt(e,0),Yt(e,0),Yt(e,0),Yt(e,0),Yt(e,e.level===9?2:e.strategy>=Or||e.level<2?4:0),Yt(e,Vf),e.status=ti,Ie(n),e.pending!==0)return e.last_flush=-1,_e}if(e.status===Xs){if(e.gzhead.extra){let r=e.pending,a=(e.gzhead.extra.length&65535)-e.gzindex;for(;e.pending+a>e.pending_buf_size;){let s=e.pending_buf_size-e.pending;if(e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex,e.gzindex+s),e.pending),e.pending=e.pending_buf_size,e.gzhead.hcrc&&e.pending>r&&(n.adler=de(n.adler,e.pending_buf,e.pending-r,r)),e.gzindex+=s,Ie(n),e.pending!==0)return e.last_flush=-1,_e;r=0,a-=s}let o=new Uint8Array(e.gzhead.extra);e.pending_buf.set(o.subarray(e.gzindex,e.gzindex+a),e.pending),e.pending+=a,e.gzhead.hcrc&&e.pending>r&&(n.adler=de(n.adler,e.pending_buf,e.pending-r,r)),e.gzindex=0}e.status=qs}if(e.status===qs){if(e.gzhead.name){let r=e.pending,a;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>r&&(n.adler=de(n.adler,e.pending_buf,e.pending-r,r)),Ie(n),e.pending!==0)return e.last_flush=-1,_e;r=0}e.gzindex<e.gzhead.name.length?a=e.gzhead.name.charCodeAt(e.gzindex++)&255:a=0,Yt(e,a)}while(a!==0);e.gzhead.hcrc&&e.pending>r&&(n.adler=de(n.adler,e.pending_buf,e.pending-r,r)),e.gzindex=0}e.status=Ys}if(e.status===Ys){if(e.gzhead.comment){let r=e.pending,a;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>r&&(n.adler=de(n.adler,e.pending_buf,e.pending-r,r)),Ie(n),e.pending!==0)return e.last_flush=-1,_e;r=0}e.gzindex<e.gzhead.comment.length?a=e.gzhead.comment.charCodeAt(e.gzindex++)&255:a=0,Yt(e,a)}while(a!==0);e.gzhead.hcrc&&e.pending>r&&(n.adler=de(n.adler,e.pending_buf,e.pending-r,r))}e.status=$s}if(e.status===$s){if(e.gzhead.hcrc){if(e.pending+2>e.pending_buf_size&&(Ie(n),e.pending!==0))return e.last_flush=-1,_e;Yt(e,n.adler&255),Yt(e,n.adler>>8&255),n.adler=0}if(e.status=ti,Ie(n),e.pending!==0)return e.last_flush=-1,_e}if(n.avail_in!==0||e.lookahead!==0||t!==Un&&e.status!==hr){let r=e.level===0?bh(e,t):e.strategy===Or?Yf(e,t):e.strategy===Cf?qf(e,t):ur[e.level].func(e,t);if((r===ai||r===$i)&&(e.status=hr),r===Ee||r===ai)return n.avail_out===0&&(e.last_flush=-1),_e;if(r===Yi&&(t===bf?yf(e):t!==pl&&(Vs(e,0,0,!1),t===wf&&(Ln(e.head),e.lookahead===0&&(e.strstart=0,e.block_start=0,e.insert=0))),Ie(n),n.avail_out===0))return e.last_flush=-1,_e}return t!==Be?_e:e.wrap<=0?ml:(e.wrap===2?(Yt(e,n.adler&255),Yt(e,n.adler>>8&255),Yt(e,n.adler>>16&255),Yt(e,n.adler>>24&255),Yt(e,n.total_in&255),Yt(e,n.total_in>>8&255),Yt(e,n.total_in>>16&255),Yt(e,n.total_in>>24&255)):(Qi(e,n.adler>>>16),Qi(e,n.adler&65535)),Ie(n),e.wrap>0&&(e.wrap=-e.wrap),e.pending!==0?_e:ml)},Qf=n=>{if(Cr(n))return an;const t=n.state.status;return n.state=null,t===ti?ei(n,Tf):_e},td=(n,t)=>{let e=t.length;if(Cr(n))return an;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==Bi||i.lookahead)return an;if(r===1&&(n.adler=Er(n.adler,t,e,0)),i.wrap=0,e>=i.w_size){r===0&&(Ln(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(t.subarray(e-i.w_size,e),0),t=c,e=i.w_size}const a=n.avail_in,o=n.next_in,s=n.input;for(n.avail_in=e,n.next_in=0,n.input=t,ki(i);i.lookahead>=Ht;){let c=i.strstart,l=i.lookahead-(Ht-1);do i.ins_h=Nn(i,i.ins_h,i.window[c+Ht-1]),i.prev[c&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=c,c++;while(--l);i.strstart=c,i.lookahead=Ht-1,ki(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=Ht-1,i.match_available=0,n.next_in=o,n.input=s,n.avail_in=a,i.wrap=r,_e};var ed=jf,nd=Ah,id=Th,rd=wh,ad=Kf,sd=Jf,od=Qf,ld=td,cd="pako deflate (from Nodeca project)",mr={deflateInit:ed,deflateInit2:nd,deflateReset:id,deflateResetKeep:rd,deflateSetHeader:ad,deflate:sd,deflateEnd:od,deflateSetDictionary:ld,deflateInfo:cd};const hd=(n,t)=>Object.prototype.hasOwnProperty.call(n,t);var ud=function(n){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const e=t.shift();if(e){if(typeof e!="object")throw new TypeError(e+"must be non-object");for(const i in e)hd(e,i)&&(n[i]=e[i])}}return n},fd=n=>{let t=0;for(let i=0,r=n.length;i<r;i++)t+=n[i].length;const e=new Uint8Array(t);for(let i=0,r=0,a=n.length;i<a;i++){let o=n[i];e.set(o,r),r+=o.length}return e},Ba={assign:ud,flattenChunks:fd};let Rh=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Rh=!1}const yr=new Uint8Array(256);for(let n=0;n<256;n++)yr[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;yr[254]=yr[254]=1;var dd=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let t,e,i,r,a,o=n.length,s=0;for(r=0;r<o;r++)e=n.charCodeAt(r),(e&64512)===55296&&r+1<o&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(e=65536+(e-55296<<10)+(i-56320),r++)),s+=e<128?1:e<2048?2:e<65536?3:4;for(t=new Uint8Array(s),a=0,r=0;a<s;r++)e=n.charCodeAt(r),(e&64512)===55296&&r+1<o&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(e=65536+(e-55296<<10)+(i-56320),r++)),e<128?t[a++]=e:e<2048?(t[a++]=192|e>>>6,t[a++]=128|e&63):e<65536?(t[a++]=224|e>>>12,t[a++]=128|e>>>6&63,t[a++]=128|e&63):(t[a++]=240|e>>>18,t[a++]=128|e>>>12&63,t[a++]=128|e>>>6&63,t[a++]=128|e&63);return t};const pd=(n,t)=>{if(t<65534&&n.subarray&&Rh)return String.fromCharCode.apply(null,n.length===t?n:n.subarray(0,t));let e="";for(let i=0;i<t;i++)e+=String.fromCharCode(n[i]);return e};var md=(n,t)=>{const e=t||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,t));let i,r;const a=new Array(e*2);for(r=0,i=0;i<e;){let o=n[i++];if(o<128){a[r++]=o;continue}let s=yr[o];if(s>4){a[r++]=65533,i+=s-1;continue}for(o&=s===2?31:s===3?15:7;s>1&&i<e;)o=o<<6|n[i++]&63,s--;if(s>1){a[r++]=65533;continue}o<65536?a[r++]=o:(o-=65536,a[r++]=55296|o>>10&1023,a[r++]=56320|o&1023)}return pd(a,r)},_d=(n,t)=>{t=t||n.length,t>n.length&&(t=n.length);let e=t-1;for(;e>=0&&(n[e]&192)===128;)e--;return e<0||e===0?t:e+yr[n[e]]>t?e:t},br={string2buf:dd,buf2string:md,utf8border:_d};function gd(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Ch=gd;const Lh=Object.prototype.toString,{Z_NO_FLUSH:xd,Z_SYNC_FLUSH:vd,Z_FULL_FLUSH:Md,Z_FINISH:Sd,Z_OK:Aa,Z_STREAM_END:Ed,Z_DEFAULT_COMPRESSION:yd,Z_DEFAULT_STRATEGY:bd,Z_DEFLATED:wd}=Rr;function Lr(n){this.options=Ba.assign({level:yd,method:wd,chunkSize:16384,windowBits:15,memLevel:8,strategy:bd},n||{});let t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ch,this.strm.avail_out=0;let e=mr.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==Aa)throw new Error(ri[e]);if(t.header&&mr.deflateSetHeader(this.strm,t.header),t.dictionary){let i;if(typeof t.dictionary=="string"?i=br.string2buf(t.dictionary):Lh.call(t.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(t.dictionary):i=t.dictionary,e=mr.deflateSetDictionary(this.strm,i),e!==Aa)throw new Error(ri[e]);this._dict_set=!0}}Lr.prototype.push=function(n,t){const e=this.strm,i=this.options.chunkSize;let r,a;if(this.ended)return!1;for(t===~~t?a=t:a=t===!0?Sd:xd,typeof n=="string"?e.input=br.string2buf(n):Lh.call(n)==="[object ArrayBuffer]"?e.input=new Uint8Array(n):e.input=n,e.next_in=0,e.avail_in=e.input.length;;){if(e.avail_out===0&&(e.output=new Uint8Array(i),e.next_out=0,e.avail_out=i),(a===vd||a===Md)&&e.avail_out<=6){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(r=mr.deflate(e,a),r===Ed)return e.next_out>0&&this.onData(e.output.subarray(0,e.next_out)),r=mr.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Aa;if(e.avail_out===0){this.onData(e.output);continue}if(a>0&&e.next_out>0){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(e.avail_in===0)break}return!0};Lr.prototype.onData=function(n){this.chunks.push(n)};Lr.prototype.onEnd=function(n){n===Aa&&(this.result=Ba.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Bo(n,t){const e=new Lr(t);if(e.push(n,!0),e.err)throw e.msg||ri[e.err];return e.result}function Td(n,t){return t=t||{},t.raw=!0,Bo(n,t)}function Ad(n,t){return t=t||{},t.gzip=!0,Bo(n,t)}var Rd=Lr,Cd=Bo,Ld=Td,Pd=Ad,Dd={Deflate:Rd,deflate:Cd,deflateRaw:Ld,gzip:Pd};const Br=16209,Id=16191;var Ud=function(t,e){let i,r,a,o,s,c,l,h,d,u,p,_,x,m,f,b,y,E,I,C,w,L,g,v;const A=t.state;i=t.next_in,g=t.input,r=i+(t.avail_in-5),a=t.next_out,v=t.output,o=a-(e-t.avail_out),s=a+(t.avail_out-257),c=A.dmax,l=A.wsize,h=A.whave,d=A.wnext,u=A.window,p=A.hold,_=A.bits,x=A.lencode,m=A.distcode,f=(1<<A.lenbits)-1,b=(1<<A.distbits)-1;t:do{_<15&&(p+=g[i++]<<_,_+=8,p+=g[i++]<<_,_+=8),y=x[p&f];e:for(;;){if(E=y>>>24,p>>>=E,_-=E,E=y>>>16&255,E===0)v[a++]=y&65535;else if(E&16){I=y&65535,E&=15,E&&(_<E&&(p+=g[i++]<<_,_+=8),I+=p&(1<<E)-1,p>>>=E,_-=E),_<15&&(p+=g[i++]<<_,_+=8,p+=g[i++]<<_,_+=8),y=m[p&b];n:for(;;){if(E=y>>>24,p>>>=E,_-=E,E=y>>>16&255,E&16){if(C=y&65535,E&=15,_<E&&(p+=g[i++]<<_,_+=8,_<E&&(p+=g[i++]<<_,_+=8)),C+=p&(1<<E)-1,C>c){t.msg="invalid distance too far back",A.mode=Br;break t}if(p>>>=E,_-=E,E=a-o,C>E){if(E=C-E,E>h&&A.sane){t.msg="invalid distance too far back",A.mode=Br;break t}if(w=0,L=u,d===0){if(w+=l-E,E<I){I-=E;do v[a++]=u[w++];while(--E);w=a-C,L=v}}else if(d<E){if(w+=l+d-E,E-=d,E<I){I-=E;do v[a++]=u[w++];while(--E);if(w=0,d<I){E=d,I-=E;do v[a++]=u[w++];while(--E);w=a-C,L=v}}}else if(w+=d-E,E<I){I-=E;do v[a++]=u[w++];while(--E);w=a-C,L=v}for(;I>2;)v[a++]=L[w++],v[a++]=L[w++],v[a++]=L[w++],I-=3;I&&(v[a++]=L[w++],I>1&&(v[a++]=L[w++]))}else{w=a-C;do v[a++]=v[w++],v[a++]=v[w++],v[a++]=v[w++],I-=3;while(I>2);I&&(v[a++]=v[w++],I>1&&(v[a++]=v[w++]))}}else if(E&64){t.msg="invalid distance code",A.mode=Br;break t}else{y=m[(y&65535)+(p&(1<<E)-1)];continue n}break}}else if(E&64)if(E&32){A.mode=Id;break t}else{t.msg="invalid literal/length code",A.mode=Br;break t}else{y=x[(y&65535)+(p&(1<<E)-1)];continue e}break}}while(i<r&&a<s);I=_>>3,i-=I,_-=I<<3,p&=(1<<_)-1,t.next_in=i,t.next_out=a,t.avail_in=i<r?5+(r-i):5-(i-r),t.avail_out=a<s?257+(s-a):257-(a-s),A.hold=p,A.bits=_};const pi=15,gl=852,xl=592,vl=0,es=1,Ml=2,Nd=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Fd=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Od=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Bd=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),kd=(n,t,e,i,r,a,o,s)=>{const c=s.bits;let l=0,h=0,d=0,u=0,p=0,_=0,x=0,m=0,f=0,b=0,y,E,I,C,w,L=null,g;const v=new Uint16Array(pi+1),A=new Uint16Array(pi+1);let z=null,k,X,W;for(l=0;l<=pi;l++)v[l]=0;for(h=0;h<i;h++)v[t[e+h]]++;for(p=c,u=pi;u>=1&&v[u]===0;u--);if(p>u&&(p=u),u===0)return r[a++]=1<<24|64<<16|0,r[a++]=1<<24|64<<16|0,s.bits=1,0;for(d=1;d<u&&v[d]===0;d++);for(p<d&&(p=d),m=1,l=1;l<=pi;l++)if(m<<=1,m-=v[l],m<0)return-1;if(m>0&&(n===vl||u!==1))return-1;for(A[1]=0,l=1;l<pi;l++)A[l+1]=A[l]+v[l];for(h=0;h<i;h++)t[e+h]!==0&&(o[A[t[e+h]]++]=h);if(n===vl?(L=z=o,g=20):n===es?(L=Nd,z=Fd,g=257):(L=Od,z=Bd,g=0),b=0,h=0,l=d,w=a,_=p,x=0,I=-1,f=1<<p,C=f-1,n===es&&f>gl||n===Ml&&f>xl)return 1;for(;;){k=l-x,o[h]+1<g?(X=0,W=o[h]):o[h]>=g?(X=z[o[h]-g],W=L[o[h]-g]):(X=96,W=0),y=1<<l-x,E=1<<_,d=E;do E-=y,r[w+(b>>x)+E]=k<<24|X<<16|W|0;while(E!==0);for(y=1<<l-1;b&y;)y>>=1;if(y!==0?(b&=y-1,b+=y):b=0,h++,--v[l]===0){if(l===u)break;l=t[e+o[h]]}if(l>p&&(b&C)!==I){for(x===0&&(x=p),w+=d,_=l-x,m=1<<_;_+x<u&&(m-=v[_+x],!(m<=0));)_++,m<<=1;if(f+=1<<_,n===es&&f>gl||n===Ml&&f>xl)return 1;I=b&C,r[I]=p<<24|_<<16|w-a|0}}return b!==0&&(r[w+b]=l-x<<24|64<<16|0),s.bits=p,0};var _r=kd;const zd=0,Ph=1,Dh=2,{Z_FINISH:Sl,Z_BLOCK:Hd,Z_TREES:kr,Z_OK:si,Z_STREAM_END:Gd,Z_NEED_DICT:Vd,Z_STREAM_ERROR:ze,Z_DATA_ERROR:Ih,Z_MEM_ERROR:Uh,Z_BUF_ERROR:Wd,Z_DEFLATED:El}=Rr,ka=16180,yl=16181,bl=16182,wl=16183,Tl=16184,Al=16185,Rl=16186,Cl=16187,Ll=16188,Pl=16189,Ra=16190,hn=16191,ns=16192,Dl=16193,is=16194,Il=16195,Ul=16196,Nl=16197,Fl=16198,zr=16199,Hr=16200,Ol=16201,Bl=16202,kl=16203,zl=16204,Hl=16205,rs=16206,Gl=16207,Vl=16208,ee=16209,Nh=16210,Fh=16211,Xd=852,qd=592,Yd=15,$d=Yd,Wl=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function Zd(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const hi=n=>{if(!n)return 1;const t=n.state;return!t||t.strm!==n||t.mode<ka||t.mode>Fh?1:0},Oh=n=>{if(hi(n))return ze;const t=n.state;return n.total_in=n.total_out=t.total=0,n.msg="",t.wrap&&(n.adler=t.wrap&1),t.mode=ka,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(Xd),t.distcode=t.distdyn=new Int32Array(qd),t.sane=1,t.back=-1,si},Bh=n=>{if(hi(n))return ze;const t=n.state;return t.wsize=0,t.whave=0,t.wnext=0,Oh(n)},kh=(n,t)=>{let e;if(hi(n))return ze;const i=n.state;return t<0?(e=0,t=-t):(e=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?ze:(i.window!==null&&i.wbits!==t&&(i.window=null),i.wrap=e,i.wbits=t,Bh(n))},zh=(n,t)=>{if(!n)return ze;const e=new Zd;n.state=e,e.strm=n,e.window=null,e.mode=ka;const i=kh(n,t);return i!==si&&(n.state=null),i},Kd=n=>zh(n,$d);let Xl=!0,as,ss;const jd=n=>{if(Xl){as=new Int32Array(512),ss=new Int32Array(32);let t=0;for(;t<144;)n.lens[t++]=8;for(;t<256;)n.lens[t++]=9;for(;t<280;)n.lens[t++]=7;for(;t<288;)n.lens[t++]=8;for(_r(Ph,n.lens,0,288,as,0,n.work,{bits:9}),t=0;t<32;)n.lens[t++]=5;_r(Dh,n.lens,0,32,ss,0,n.work,{bits:5}),Xl=!1}n.lencode=as,n.lenbits=9,n.distcode=ss,n.distbits=5},Hh=(n,t,e,i)=>{let r;const a=n.state;return a.window===null&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Uint8Array(a.wsize)),i>=a.wsize?(a.window.set(t.subarray(e-a.wsize,e),0),a.wnext=0,a.whave=a.wsize):(r=a.wsize-a.wnext,r>i&&(r=i),a.window.set(t.subarray(e-i,e-i+r),a.wnext),i-=r,i?(a.window.set(t.subarray(e-i,e),0),a.wnext=i,a.whave=a.wsize):(a.wnext+=r,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=r))),0},Jd=(n,t)=>{let e,i,r,a,o,s,c,l,h,d,u,p,_,x,m=0,f,b,y,E,I,C,w,L;const g=new Uint8Array(4);let v,A;const z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(hi(n)||!n.output||!n.input&&n.avail_in!==0)return ze;e=n.state,e.mode===hn&&(e.mode=ns),o=n.next_out,r=n.output,c=n.avail_out,a=n.next_in,i=n.input,s=n.avail_in,l=e.hold,h=e.bits,d=s,u=c,L=si;t:for(;;)switch(e.mode){case ka:if(e.wrap===0){e.mode=ns;break}for(;h<16;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}if(e.wrap&2&&l===35615){e.wbits===0&&(e.wbits=15),e.check=0,g[0]=l&255,g[1]=l>>>8&255,e.check=de(e.check,g,2,0),l=0,h=0,e.mode=yl;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",e.mode=ee;break}if((l&15)!==El){n.msg="unknown compression method",e.mode=ee;break}if(l>>>=4,h-=4,w=(l&15)+8,e.wbits===0&&(e.wbits=w),w>15||w>e.wbits){n.msg="invalid window size",e.mode=ee;break}e.dmax=1<<e.wbits,e.flags=0,n.adler=e.check=1,e.mode=l&512?Pl:hn,l=0,h=0;break;case yl:for(;h<16;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}if(e.flags=l,(e.flags&255)!==El){n.msg="unknown compression method",e.mode=ee;break}if(e.flags&57344){n.msg="unknown header flags set",e.mode=ee;break}e.head&&(e.head.text=l>>8&1),e.flags&512&&e.wrap&4&&(g[0]=l&255,g[1]=l>>>8&255,e.check=de(e.check,g,2,0)),l=0,h=0,e.mode=bl;case bl:for(;h<32;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}e.head&&(e.head.time=l),e.flags&512&&e.wrap&4&&(g[0]=l&255,g[1]=l>>>8&255,g[2]=l>>>16&255,g[3]=l>>>24&255,e.check=de(e.check,g,4,0)),l=0,h=0,e.mode=wl;case wl:for(;h<16;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}e.head&&(e.head.xflags=l&255,e.head.os=l>>8),e.flags&512&&e.wrap&4&&(g[0]=l&255,g[1]=l>>>8&255,e.check=de(e.check,g,2,0)),l=0,h=0,e.mode=Tl;case Tl:if(e.flags&1024){for(;h<16;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}e.length=l,e.head&&(e.head.extra_len=l),e.flags&512&&e.wrap&4&&(g[0]=l&255,g[1]=l>>>8&255,e.check=de(e.check,g,2,0)),l=0,h=0}else e.head&&(e.head.extra=null);e.mode=Al;case Al:if(e.flags&1024&&(p=e.length,p>s&&(p=s),p&&(e.head&&(w=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(i.subarray(a,a+p),w)),e.flags&512&&e.wrap&4&&(e.check=de(e.check,i,p,a)),s-=p,a+=p,e.length-=p),e.length))break t;e.length=0,e.mode=Rl;case Rl:if(e.flags&2048){if(s===0)break t;p=0;do w=i[a+p++],e.head&&w&&e.length<65536&&(e.head.name+=String.fromCharCode(w));while(w&&p<s);if(e.flags&512&&e.wrap&4&&(e.check=de(e.check,i,p,a)),s-=p,a+=p,w)break t}else e.head&&(e.head.name=null);e.length=0,e.mode=Cl;case Cl:if(e.flags&4096){if(s===0)break t;p=0;do w=i[a+p++],e.head&&w&&e.length<65536&&(e.head.comment+=String.fromCharCode(w));while(w&&p<s);if(e.flags&512&&e.wrap&4&&(e.check=de(e.check,i,p,a)),s-=p,a+=p,w)break t}else e.head&&(e.head.comment=null);e.mode=Ll;case Ll:if(e.flags&512){for(;h<16;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}if(e.wrap&4&&l!==(e.check&65535)){n.msg="header crc mismatch",e.mode=ee;break}l=0,h=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),n.adler=e.check=0,e.mode=hn;break;case Pl:for(;h<32;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}n.adler=e.check=Wl(l),l=0,h=0,e.mode=Ra;case Ra:if(e.havedict===0)return n.next_out=o,n.avail_out=c,n.next_in=a,n.avail_in=s,e.hold=l,e.bits=h,Vd;n.adler=e.check=1,e.mode=hn;case hn:if(t===Hd||t===kr)break t;case ns:if(e.last){l>>>=h&7,h-=h&7,e.mode=rs;break}for(;h<3;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}switch(e.last=l&1,l>>>=1,h-=1,l&3){case 0:e.mode=Dl;break;case 1:if(jd(e),e.mode=zr,t===kr){l>>>=2,h-=2;break t}break;case 2:e.mode=Ul;break;case 3:n.msg="invalid block type",e.mode=ee}l>>>=2,h-=2;break;case Dl:for(l>>>=h&7,h-=h&7;h<32;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",e.mode=ee;break}if(e.length=l&65535,l=0,h=0,e.mode=is,t===kr)break t;case is:e.mode=Il;case Il:if(p=e.length,p){if(p>s&&(p=s),p>c&&(p=c),p===0)break t;r.set(i.subarray(a,a+p),o),s-=p,a+=p,c-=p,o+=p,e.length-=p;break}e.mode=hn;break;case Ul:for(;h<14;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}if(e.nlen=(l&31)+257,l>>>=5,h-=5,e.ndist=(l&31)+1,l>>>=5,h-=5,e.ncode=(l&15)+4,l>>>=4,h-=4,e.nlen>286||e.ndist>30){n.msg="too many length or distance symbols",e.mode=ee;break}e.have=0,e.mode=Nl;case Nl:for(;e.have<e.ncode;){for(;h<3;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}e.lens[z[e.have++]]=l&7,l>>>=3,h-=3}for(;e.have<19;)e.lens[z[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,v={bits:e.lenbits},L=_r(zd,e.lens,0,19,e.lencode,0,e.work,v),e.lenbits=v.bits,L){n.msg="invalid code lengths set",e.mode=ee;break}e.have=0,e.mode=Fl;case Fl:for(;e.have<e.nlen+e.ndist;){for(;m=e.lencode[l&(1<<e.lenbits)-1],f=m>>>24,b=m>>>16&255,y=m&65535,!(f<=h);){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}if(y<16)l>>>=f,h-=f,e.lens[e.have++]=y;else{if(y===16){for(A=f+2;h<A;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}if(l>>>=f,h-=f,e.have===0){n.msg="invalid bit length repeat",e.mode=ee;break}w=e.lens[e.have-1],p=3+(l&3),l>>>=2,h-=2}else if(y===17){for(A=f+3;h<A;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}l>>>=f,h-=f,w=0,p=3+(l&7),l>>>=3,h-=3}else{for(A=f+7;h<A;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}l>>>=f,h-=f,w=0,p=11+(l&127),l>>>=7,h-=7}if(e.have+p>e.nlen+e.ndist){n.msg="invalid bit length repeat",e.mode=ee;break}for(;p--;)e.lens[e.have++]=w}}if(e.mode===ee)break;if(e.lens[256]===0){n.msg="invalid code -- missing end-of-block",e.mode=ee;break}if(e.lenbits=9,v={bits:e.lenbits},L=_r(Ph,e.lens,0,e.nlen,e.lencode,0,e.work,v),e.lenbits=v.bits,L){n.msg="invalid literal/lengths set",e.mode=ee;break}if(e.distbits=6,e.distcode=e.distdyn,v={bits:e.distbits},L=_r(Dh,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,v),e.distbits=v.bits,L){n.msg="invalid distances set",e.mode=ee;break}if(e.mode=zr,t===kr)break t;case zr:e.mode=Hr;case Hr:if(s>=6&&c>=258){n.next_out=o,n.avail_out=c,n.next_in=a,n.avail_in=s,e.hold=l,e.bits=h,Ud(n,u),o=n.next_out,r=n.output,c=n.avail_out,a=n.next_in,i=n.input,s=n.avail_in,l=e.hold,h=e.bits,e.mode===hn&&(e.back=-1);break}for(e.back=0;m=e.lencode[l&(1<<e.lenbits)-1],f=m>>>24,b=m>>>16&255,y=m&65535,!(f<=h);){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}if(b&&!(b&240)){for(E=f,I=b,C=y;m=e.lencode[C+((l&(1<<E+I)-1)>>E)],f=m>>>24,b=m>>>16&255,y=m&65535,!(E+f<=h);){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}l>>>=E,h-=E,e.back+=E}if(l>>>=f,h-=f,e.back+=f,e.length=y,b===0){e.mode=Hl;break}if(b&32){e.back=-1,e.mode=hn;break}if(b&64){n.msg="invalid literal/length code",e.mode=ee;break}e.extra=b&15,e.mode=Ol;case Ol:if(e.extra){for(A=e.extra;h<A;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}e.length+=l&(1<<e.extra)-1,l>>>=e.extra,h-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=Bl;case Bl:for(;m=e.distcode[l&(1<<e.distbits)-1],f=m>>>24,b=m>>>16&255,y=m&65535,!(f<=h);){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}if(!(b&240)){for(E=f,I=b,C=y;m=e.distcode[C+((l&(1<<E+I)-1)>>E)],f=m>>>24,b=m>>>16&255,y=m&65535,!(E+f<=h);){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}l>>>=E,h-=E,e.back+=E}if(l>>>=f,h-=f,e.back+=f,b&64){n.msg="invalid distance code",e.mode=ee;break}e.offset=y,e.extra=b&15,e.mode=kl;case kl:if(e.extra){for(A=e.extra;h<A;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}e.offset+=l&(1<<e.extra)-1,l>>>=e.extra,h-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){n.msg="invalid distance too far back",e.mode=ee;break}e.mode=zl;case zl:if(c===0)break t;if(p=u-c,e.offset>p){if(p=e.offset-p,p>e.whave&&e.sane){n.msg="invalid distance too far back",e.mode=ee;break}p>e.wnext?(p-=e.wnext,_=e.wsize-p):_=e.wnext-p,p>e.length&&(p=e.length),x=e.window}else x=r,_=o-e.offset,p=e.length;p>c&&(p=c),c-=p,e.length-=p;do r[o++]=x[_++];while(--p);e.length===0&&(e.mode=Hr);break;case Hl:if(c===0)break t;r[o++]=e.length,c--,e.mode=Hr;break;case rs:if(e.wrap){for(;h<32;){if(s===0)break t;s--,l|=i[a++]<<h,h+=8}if(u-=c,n.total_out+=u,e.total+=u,e.wrap&4&&u&&(n.adler=e.check=e.flags?de(e.check,r,u,o-u):Er(e.check,r,u,o-u)),u=c,e.wrap&4&&(e.flags?l:Wl(l))!==e.check){n.msg="incorrect data check",e.mode=ee;break}l=0,h=0}e.mode=Gl;case Gl:if(e.wrap&&e.flags){for(;h<32;){if(s===0)break t;s--,l+=i[a++]<<h,h+=8}if(e.wrap&4&&l!==(e.total&4294967295)){n.msg="incorrect length check",e.mode=ee;break}l=0,h=0}e.mode=Vl;case Vl:L=Gd;break t;case ee:L=Ih;break t;case Nh:return Uh;case Fh:default:return ze}return n.next_out=o,n.avail_out=c,n.next_in=a,n.avail_in=s,e.hold=l,e.bits=h,(e.wsize||u!==n.avail_out&&e.mode<ee&&(e.mode<rs||t!==Sl))&&Hh(n,n.output,n.next_out,u-n.avail_out),d-=n.avail_in,u-=n.avail_out,n.total_in+=d,n.total_out+=u,e.total+=u,e.wrap&4&&u&&(n.adler=e.check=e.flags?de(e.check,r,u,n.next_out-u):Er(e.check,r,u,n.next_out-u)),n.data_type=e.bits+(e.last?64:0)+(e.mode===hn?128:0)+(e.mode===zr||e.mode===is?256:0),(d===0&&u===0||t===Sl)&&L===si&&(L=Wd),L},Qd=n=>{if(hi(n))return ze;let t=n.state;return t.window&&(t.window=null),n.state=null,si},tp=(n,t)=>{if(hi(n))return ze;const e=n.state;return e.wrap&2?(e.head=t,t.done=!1,si):ze},ep=(n,t)=>{const e=t.length;let i,r,a;return hi(n)||(i=n.state,i.wrap!==0&&i.mode!==Ra)?ze:i.mode===Ra&&(r=1,r=Er(r,t,e,0),r!==i.check)?Ih:(a=Hh(n,t,e,e),a?(i.mode=Nh,Uh):(i.havedict=1,si))};var np=Bh,ip=kh,rp=Oh,ap=Kd,sp=zh,op=Jd,lp=Qd,cp=tp,hp=ep,up="pako inflate (from Nodeca project)",xn={inflateReset:np,inflateReset2:ip,inflateResetKeep:rp,inflateInit:ap,inflateInit2:sp,inflate:op,inflateEnd:lp,inflateGetHeader:cp,inflateSetDictionary:hp,inflateInfo:up};function fp(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var dp=fp;const Gh=Object.prototype.toString,{Z_NO_FLUSH:pp,Z_FINISH:mp,Z_OK:wr,Z_STREAM_END:os,Z_NEED_DICT:ls,Z_STREAM_ERROR:_p,Z_DATA_ERROR:ql,Z_MEM_ERROR:gp}=Rr;function Pr(n){this.options=Ba.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(n&&n.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ch,this.strm.avail_out=0;let e=xn.inflateInit2(this.strm,t.windowBits);if(e!==wr)throw new Error(ri[e]);if(this.header=new dp,xn.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=br.string2buf(t.dictionary):Gh.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(e=xn.inflateSetDictionary(this.strm,t.dictionary),e!==wr)))throw new Error(ri[e])}Pr.prototype.push=function(n,t){const e=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let a,o,s;if(this.ended)return!1;for(t===~~t?o=t:o=t===!0?mp:pp,Gh.call(n)==="[object ArrayBuffer]"?e.input=new Uint8Array(n):e.input=n,e.next_in=0,e.avail_in=e.input.length;;){for(e.avail_out===0&&(e.output=new Uint8Array(i),e.next_out=0,e.avail_out=i),a=xn.inflate(e,o),a===ls&&r&&(a=xn.inflateSetDictionary(e,r),a===wr?a=xn.inflate(e,o):a===ql&&(a=ls));e.avail_in>0&&a===os&&e.state.wrap>0&&n[e.next_in]!==0;)xn.inflateReset(e),a=xn.inflate(e,o);switch(a){case _p:case ql:case ls:case gp:return this.onEnd(a),this.ended=!0,!1}if(s=e.avail_out,e.next_out&&(e.avail_out===0||a===os))if(this.options.to==="string"){let c=br.utf8border(e.output,e.next_out),l=e.next_out-c,h=br.buf2string(e.output,c);e.next_out=l,e.avail_out=i-l,l&&e.output.set(e.output.subarray(c,c+l),0),this.onData(h)}else this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out));if(!(a===wr&&s===0)){if(a===os)return a=xn.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,!0;if(e.avail_in===0)break}}return!0};Pr.prototype.onData=function(n){this.chunks.push(n)};Pr.prototype.onEnd=function(n){n===wr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Ba.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function ko(n,t){const e=new Pr(t);if(e.push(n),e.err)throw e.msg||ri[e.err];return e.result}function xp(n,t){return t=t||{},t.raw=!0,ko(n,t)}var vp=Pr,Mp=ko,Sp=xp,Ep=ko,yp={Inflate:vp,inflate:Mp,inflateRaw:Sp,ungzip:Ep};const{Deflate:bp,deflate:wp,deflateRaw:Tp,gzip:Ap}=Dd,{Inflate:Rp,inflate:Cp,inflateRaw:Lp,ungzip:Pp}=yp;var Dp=bp,Ip=wp,Up=Tp,Np=Ap,Fp=Rp,Op=Cp,Bp=Lp,kp=Pp,zp=Rr,Hp={Deflate:Dp,deflate:Ip,deflateRaw:Up,gzip:Np,Inflate:Fp,inflate:Op,inflateRaw:Bp,ungzip:kp,constants:zp};const qt={END:0,BYTE:1,SHORT:2,INT:3,FLOAT:5,DOUBLE:6,STRING:8,LIST:9,COMPOUND:10,INT_ARRAY:11};function Gp(n,t,e,i,r="ship_hull"){const a=Wp(n,t,e,i),o=Hp.gzip(a),s=new Blob([o],{type:"application/octet-stream"}),c=URL.createObjectURL(s),l=document.createElement("a");l.href=c,l.download=`${r}.nbt`,l.click(),URL.revokeObjectURL(c)}function Vp(n,t,e){function a(s){const c=[];for(let l=0;l<s;l+=23)c.push(l);return c}const o=[];for(const s of a(n))for(const c of a(t))for(const l of a(e))o.push({x1:s,y1:c,z1:l,x2:Math.min(s+24,n),y2:Math.min(c+24,t),z2:Math.min(l+24,e)});return o}function Wp(n,t,e,i){const r=new Map;for(const L of n)r.has(L.block)||r.set(L.block,r.size);const a=[...r.keys()],o=[];let s=0;function c(L){const g=L instanceof Uint8Array?L:new Uint8Array(L);o.push(g),s+=g.length}function l(L){c(new Uint8Array([L&255]))}function h(L){const g=new DataView(new ArrayBuffer(2));g.setInt16(0,L,!1),c(g.buffer)}function d(L){const g=new DataView(new ArrayBuffer(4));g.setInt32(0,L,!1),c(g.buffer)}function u(L){const g=new DataView(new ArrayBuffer(4));g.setFloat32(0,L,!1),c(g.buffer)}function p(L){const g=new DataView(new ArrayBuffer(8));g.setFloat64(0,L,!1),c(g.buffer)}function _(L){const g=new TextEncoder().encode(L);h(g.length),c(g)}function x(L,g){l(L),_(g)}function m(L,g){x(qt.LIST,L),l(qt.DOUBLE),d(g.length);for(const v of g)p(v)}function f(L,g){x(qt.LIST,L),l(qt.INT),d(g.length);for(const v of g)d(v)}function b(L,g){x(qt.LIST,L),l(qt.FLOAT),d(g.length);for(const v of g)u(v)}function y(L,g){x(qt.INT_ARRAY,L),d(g.length);for(const v of g)d(v)}function E(){return Math.random()*4294967296-2147483648|0}l(qt.COMPOUND),_(""),x(qt.INT,"DataVersion"),d(4189),x(qt.LIST,"size"),l(qt.INT),d(3),d(t),d(e),d(i);const I=Vp(t,e,i);x(qt.LIST,"entities"),l(qt.COMPOUND),d(I.length);for(const L of I){const{x1:g,y1:v,z1:A,x2:z,y2:k,z2:X}=L,W=(g+z)/2,G=v,Y=(A+X)/2+.5,H=Math.floor(W),j=Math.floor(G),ct=Math.floor(Y),ft=g-W,Bt=v-G,Ut=A-Y,V=z-W,Q=k-G,dt=X-Y;f("blockPos",[H,j,ct]),m("pos",[W,G,Y]),x(qt.COMPOUND,"nbt"),x(qt.STRING,"id"),_("create:super_glue"),m("From",[ft,Bt,Ut]),m("To",[V,Q,dt]),y("UUID",[E(),E(),E(),E()]),m("Pos",[0,0,0]),m("Motion",[0,0,0]),b("Rotation",[0,0]),x(qt.FLOAT,"FallDistance"),u(0),x(qt.SHORT,"Fire"),h(-1),x(qt.SHORT,"Air"),h(300),x(qt.BYTE,"OnGround"),l(0),x(qt.BYTE,"Invulnerable"),l(0),x(qt.INT,"PortalCooldown"),d(0),l(qt.END),l(qt.END)}x(qt.LIST,"palette"),l(qt.COMPOUND),d(a.length);for(const L of a)x(qt.STRING,"Name"),_(L),l(qt.END);x(qt.LIST,"blocks"),l(qt.COMPOUND),d(n.length);for(const L of n)f("pos",[L.x,L.y,L.z]),x(qt.INT,"state"),d(r.get(L.block)),l(qt.END);l(qt.END);const C=new Uint8Array(s);let w=0;for(const L of o)C.set(L,w),w+=L.length;return C}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="167",Xp=0,Yl=1,qp=2,Vh=1,Yp=2,_n=3,Bn=0,Re=1,vn=2,Fn=0,Ni=1,$l=2,Zl=3,Kl=4,$p=5,jn=100,Zp=101,Kp=102,jp=103,Jp=104,Qp=200,tm=201,em=202,nm=203,Ks=204,js=205,im=206,rm=207,am=208,sm=209,om=210,lm=211,cm=212,hm=213,um=214,fm=0,dm=1,pm=2,Ca=3,mm=4,_m=5,gm=6,xm=7,Wh=0,vm=1,Mm=2,On=0,Sm=1,Em=2,ym=3,bm=4,wm=5,Tm=6,Am=7,Xh=300,zi=301,Hi=302,Js=303,Qs=304,za=306,to=1e3,ni=1001,eo=1002,Ae=1003,Rm=1004,Gr=1005,Ye=1006,cs=1007,ii=1008,Sn=1009,qh=1010,Yh=1011,Tr=1012,Ho=1013,oi=1014,rn=1015,Dr=1016,Go=1017,Vo=1018,Gi=1020,$h=35902,Zh=1021,Kh=1022,Ze=1023,jh=1024,Jh=1025,Fi=1026,Vi=1027,Wo=1028,Xo=1029,Qh=1030,qo=1031,Yo=1033,va=33776,Ma=33777,Sa=33778,Ea=33779,no=35840,io=35841,ro=35842,ao=35843,so=36196,oo=37492,lo=37496,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,_o=37814,go=37815,xo=37816,vo=37817,Mo=37818,So=37819,Eo=37820,yo=37821,ya=36492,bo=36494,wo=36495,tu=36283,To=36284,Ao=36285,Ro=36286,Cm=3200,Lm=3201,eu=0,Pm=1,Pn="",tn="srgb",zn="srgb-linear",$o="display-p3",Ha="display-p3-linear",La="linear",te="srgb",Pa="rec709",Da="p3",mi=7680,jl=519,Dm=512,Im=513,Um=514,nu=515,Nm=516,Fm=517,Om=518,Bm=519,Jl=35044,Ql="300 es",Mn=2e3,Ia=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,Co=180/Math.PI;function Ir(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]).toLowerCase()}function we(n,t,e){return Math.max(t,Math.min(e,n))}function km(n,t){return(n%t+t)%t}function hs(n,t,e){return(1-e)*n+e*t}function tr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*r+t.x,this.y=a*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,i,r,a,o,s,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,o,s,c,l)}set(t,e,i,r,a,o,s,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=s,h[3]=e,h[4]=a,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,a=this.elements,o=i[0],s=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],_=i[8],x=r[0],m=r[3],f=r[6],b=r[1],y=r[4],E=r[7],I=r[2],C=r[5],w=r[8];return a[0]=o*x+s*b+c*I,a[3]=o*m+s*y+c*C,a[6]=o*f+s*E+c*w,a[1]=l*x+h*b+d*I,a[4]=l*m+h*y+d*C,a[7]=l*f+h*E+d*w,a[2]=u*x+p*b+_*I,a[5]=u*m+p*y+_*C,a[8]=u*f+p*E+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*s*l-i*a*h+i*s*c+r*a*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],h=t[8],d=h*o-s*l,u=s*c-h*a,p=l*a-o*c,_=e*d+i*u+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=d*x,t[1]=(r*l-h*i)*x,t[2]=(s*i-r*o)*x,t[3]=u*x,t[4]=(h*e-r*c)*x,t[5]=(r*a-s*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,a,o,s){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*s)+o+t,-r*l,r*c,-r*(-l*o+c*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(us.makeScale(t,e)),this}rotate(t){return this.premultiply(us.makeRotation(-t)),this}translate(t,e){return this.premultiply(us.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const us=new Ot;function iu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zm(){const n=Ua("canvas");return n.style.display="block",n}const tc={};function gr(n){n in tc||(tc[n]=!0,console.warn(n))}function Hm(n,t,e){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const ec=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nc=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[zn]:{transfer:La,primaries:Pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[tn]:{transfer:te,primaries:Pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ha]:{transfer:La,primaries:Da,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(nc),fromReference:n=>n.applyMatrix3(ec)},[$o]:{transfer:te,primaries:Da,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(nc),fromReference:n=>n.applyMatrix3(ec).convertLinearToSRGB()}},Gm=new Set([zn,Ha]),Jt={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Gm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=er[t].toReference,r=er[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return er[n].primaries},getTransfer:function(n){return n===Pn?La:er[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(er[t].luminanceCoefficients)}};function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _i;class Vm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Ua("canvas")),_i.width=t.width,_i.height=t.height;const i=_i.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ua("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Oi(a[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Oi(e[i]/255)*255):e[i]=Oi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wm=0;class ru{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Ir(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(ds(r[o].image)):a.push(ds(r[o]))}else a=ds(r);i.url=a}return e||(t.images[this.uuid]=i),i}}function ds(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xm=0;class ye extends Zi{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,i=ni,r=ni,a=Ye,o=ii,s=Ze,c=Sn,l=ye.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Ir(),this.name="",this.source=new ru(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=Xh;ye.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,i=0,r=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,a;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],_=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,E=(p+1)/2,I=(f+1)/2,C=(h+u)/4,w=(d+x)/4,L=(_+m)/4;return y>E&&y>I?y<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(y),r=C/i,a=w/i):E>I?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=C/r,a=L/r):I<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(I),i=w/a,r=L/a),this.set(i,r,a,e),this}let b=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-x)/b,this.z=(u-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qm extends Zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new ye(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ru(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends qm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class au extends ye{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ym extends ye{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,a,o,s){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const u=a[o+0],p=a[o+1],_=a[o+2],x=a[o+3];if(s===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(s===1){t[e+0]=u,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(d!==x||c!==u||l!==p||h!==_){let m=1-s;const f=c*u+l*p+h*_+d*x,b=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const I=Math.sqrt(y),C=Math.atan2(I,f*b);m=Math.sin(m*C)/I,s=Math.sin(s*C)/I}const E=s*b;if(c=c*m+u*E,l=l*m+p*E,h=h*m+_*E,d=d*m+x*E,m===1-s){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,a,o){const s=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=a[o],u=a[o+1],p=a[o+2],_=a[o+3];return t[e]=s*_+h*d+c*p-l*u,t[e+1]=c*_+h*u+l*d-s*p,t[e+2]=l*_+h*p+s*u-c*d,t[e+3]=h*_-s*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,a=t._z,o=t._order,s=Math.cos,c=Math.sin,l=s(i/2),h=s(r/2),d=s(a/2),u=c(i/2),p=c(r/2),_=c(a/2);switch(o){case"XYZ":this._x=u*h*d+l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d+u*p*_;break;case"YZX":this._x=u*h*d+l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d-u*p*_;break;case"XZY":this._x=u*h*d-l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],a=e[8],o=e[1],s=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+s+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(o-r)*p}else if(i>s&&i>d){const p=2*Math.sqrt(1+i-s-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(a+l)/p}else if(s>d){const p=2*Math.sqrt(1+s-i-d);this._w=(a-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-s);this._w=(o-r)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,a=t._z,o=t._w,s=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*s+r*l-a*c,this._y=r*h+o*c+a*s-i*l,this._z=a*h+o*l+i*c-r*s,this._w=o*h-i*s-r*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*t._w+i*t._x+r*t._y+a*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,s),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*r,this.y=a[1]*e+a[4]*i+a[7]*r,this.z=a[2]*e+a[5]*i+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,a=t.x,o=t.y,s=t.z,c=t.w,l=2*(o*r-s*i),h=2*(s*e-a*r),d=2*(a*i-o*e);return this.x=e+c*l+o*d-s*h,this.y=i+c*h+s*l-a*d,this.z=r+c*d+a*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r,this.y=a[1]*e+a[5]*i+a[9]*r,this.z=a[2]*e+a[6]*i+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,a=t.z,o=e.x,s=e.y,c=e.z;return this.x=r*c-a*s,this.y=a*o-i*c,this.z=i*s-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ps.copy(this).projectOnVector(t),this.sub(ps)}reflect(t){return this.sub(ps.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ps=new N,ic=new Ur;class ui{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)t.isMesh===!0?t.getVertexPosition(o,Ve):Ve.fromBufferAttribute(a,o),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}const r=t.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),Wr.subVectors(this.max,nr),gi.subVectors(t.a,nr),xi.subVectors(t.b,nr),vi.subVectors(t.c,nr),bn.subVectors(xi,gi),wn.subVectors(vi,xi),Vn.subVectors(gi,vi);let e=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-Vn.z,Vn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,Vn.z,0,-Vn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-Vn.y,Vn.x,0];return!ms(e,gi,xi,vi,Wr)||(e=[1,0,0,0,1,0,0,0,1],!ms(e,gi,xi,vi,Wr))?!1:(Xr.crossVectors(bn,wn),e=[Xr.x,Xr.y,Xr.z],ms(e,gi,xi,vi,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new N,new N,new N,new N,new N,new N,new N,new N],Ve=new N,Vr=new ui,gi=new N,xi=new N,vi=new N,bn=new N,wn=new N,Vn=new N,nr=new N,Wr=new N,Xr=new N,Wn=new N;function ms(n,t,e,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Wn.fromArray(n,a);const s=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),c=t.dot(Wn),l=e.dot(Wn),h=i.dot(Wn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>s)return!1}return!0}const $m=new ui,ir=new N,_s=new N;class Ki{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$m.setFromPoints(t).getCenter(i);let r=0;for(let a=0,o=t.length;a<o;a++)r=Math.max(r,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);const e=ir.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ir,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_s.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(_s)),this.expandByPoint(ir.copy(t.center).sub(_s))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new N,gs=new N,qr=new N,Tn=new N,xs=new N,Yr=new N,vs=new N;class su{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){gs.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(gs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(qr),s=Tn.dot(this.direction),c=-Tn.dot(qr),l=Tn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,_;if(h>0)if(d=o*c-s,u=o*s-c,_=a*h,d>=0)if(u>=-_)if(u<=_){const x=1/h;d*=x,u*=x,p=d*(d+o*u+2*s)+u*(o*d+u+2*c)+l}else u=a,d=Math.max(0,-(o*u+s)),p=-d*d+u*(u+2*c)+l;else u=-a,d=Math.max(0,-(o*u+s)),p=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-o*a+s)),u=d>0?-a:Math.min(Math.max(-a,-c),a),p=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-a,-c),a),p=u*(u+2*c)+l):(d=Math.max(0,-(o*a+s)),u=d>0?a:Math.min(Math.max(-a,-c),a),p=-d*d+u*(u+2*c)+l);else u=o>0?-a:a,d=Math.max(0,-(o*u+s)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(gs).addScaledVector(qr,u),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const i=fn.dot(this.direction),r=fn.dot(fn)-i*i,a=t.radius*t.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,c=i+o;return c<0?null:s<0?this.at(c,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,a,o,s,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(a=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(s=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,i,r,a){xs.subVectors(e,t),Yr.subVectors(i,t),vs.crossVectors(xs,Yr);let o=this.direction.dot(vs),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Tn.subVectors(this.origin,t);const c=s*this.direction.dot(Yr.crossVectors(Tn,Yr));if(c<0)return null;const l=s*this.direction.dot(xs.cross(Tn));if(l<0||c+l>o)return null;const h=-s*Tn.dot(vs);return h<0?null:this.at(h/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,i,r,a,o,s,c,l,h,d,u,p,_,x,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,o,s,c,l,h,d,u,p,_,x,m)}set(t,e,i,r,a,o,s,c,l,h,d,u,p,_,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=a,f[5]=o,f[9]=s,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Mi.setFromMatrixColumn(t,0).length(),a=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,a=t.z,o=Math.cos(i),s=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=o*h,p=o*d,_=s*h,x=s*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+_*l,e[5]=u-x*l,e[9]=-s*c,e[2]=x-u*l,e[6]=_+p*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,_=l*h,x=l*d;e[0]=u+x*s,e[4]=_*s-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-s,e[2]=p*s-_,e[6]=x+u*s,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,_=l*h,x=l*d;e[0]=u-x*s,e[4]=-o*d,e[8]=_+p*s,e[1]=p+_*s,e[5]=o*h,e[9]=x-u*s,e[2]=-o*l,e[6]=s,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,p=o*d,_=s*h,x=s*d;e[0]=c*h,e[4]=_*l-p,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=p*l-_,e[2]=-l,e[6]=s*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,p=o*l,_=s*c,x=s*l;e[0]=c*h,e[4]=x-u*d,e[8]=_*d+p,e[1]=d,e[5]=o*h,e[9]=-s*h,e[2]=-l*h,e[6]=p*d+_,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*c,p=o*l,_=s*c,x=s*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=p*d-_,e[2]=_*d-p,e[6]=s*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zm,t,Km)}lookAt(t,e,i){const r=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),An.crossVectors(i,Pe),An.lengthSq()===0&&(Math.abs(i.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),An.crossVectors(i,Pe)),An.normalize(),$r.crossVectors(Pe,An),r[0]=An.x,r[4]=$r.x,r[8]=Pe.x,r[1]=An.y,r[5]=$r.y,r[9]=Pe.y,r[2]=An.z,r[6]=$r.z,r[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,a=this.elements,o=i[0],s=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],_=i[2],x=i[6],m=i[10],f=i[14],b=i[3],y=i[7],E=i[11],I=i[15],C=r[0],w=r[4],L=r[8],g=r[12],v=r[1],A=r[5],z=r[9],k=r[13],X=r[2],W=r[6],G=r[10],Y=r[14],H=r[3],j=r[7],ct=r[11],ft=r[15];return a[0]=o*C+s*v+c*X+l*H,a[4]=o*w+s*A+c*W+l*j,a[8]=o*L+s*z+c*G+l*ct,a[12]=o*g+s*k+c*Y+l*ft,a[1]=h*C+d*v+u*X+p*H,a[5]=h*w+d*A+u*W+p*j,a[9]=h*L+d*z+u*G+p*ct,a[13]=h*g+d*k+u*Y+p*ft,a[2]=_*C+x*v+m*X+f*H,a[6]=_*w+x*A+m*W+f*j,a[10]=_*L+x*z+m*G+f*ct,a[14]=_*g+x*k+m*Y+f*ft,a[3]=b*C+y*v+E*X+I*H,a[7]=b*w+y*A+E*W+I*j,a[11]=b*L+y*z+E*G+I*ct,a[15]=b*g+y*k+E*Y+I*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],a=t[12],o=t[1],s=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],_=t[3],x=t[7],m=t[11],f=t[15];return _*(+a*c*d-r*l*d-a*s*u+i*l*u+r*s*p-i*c*p)+x*(+e*c*p-e*l*u+a*o*u-r*o*p+r*l*h-a*c*h)+m*(+e*l*d-e*s*p-a*o*d+i*o*p+a*s*h-i*l*h)+f*(-r*s*h-e*c*d+e*s*u+r*o*d-i*o*u+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],_=t[12],x=t[13],m=t[14],f=t[15],b=d*m*l-x*u*l+x*c*p-s*m*p-d*c*f+s*u*f,y=_*u*l-h*m*l-_*c*p+o*m*p+h*c*f-o*u*f,E=h*x*l-_*d*l+_*s*p-o*x*p-h*s*f+o*d*f,I=_*d*c-h*x*c-_*s*u+o*x*u+h*s*m-o*d*m,C=e*b+i*y+r*E+a*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=b*w,t[1]=(x*u*a-d*m*a-x*r*p+i*m*p+d*r*f-i*u*f)*w,t[2]=(s*m*a-x*c*a+x*r*l-i*m*l-s*r*f+i*c*f)*w,t[3]=(d*c*a-s*u*a-d*r*l+i*u*l+s*r*p-i*c*p)*w,t[4]=y*w,t[5]=(h*m*a-_*u*a+_*r*p-e*m*p-h*r*f+e*u*f)*w,t[6]=(_*c*a-o*m*a-_*r*l+e*m*l+o*r*f-e*c*f)*w,t[7]=(o*u*a-h*c*a+h*r*l-e*u*l-o*r*p+e*c*p)*w,t[8]=E*w,t[9]=(_*d*a-h*x*a-_*i*p+e*x*p+h*i*f-e*d*f)*w,t[10]=(o*x*a-_*s*a+_*i*l-e*x*l-o*i*f+e*s*f)*w,t[11]=(h*s*a-o*d*a-h*i*l+e*d*l+o*i*p-e*s*p)*w,t[12]=I*w,t[13]=(h*x*r-_*d*r+_*i*u-e*x*u-h*i*m+e*d*m)*w,t[14]=(_*s*r-o*x*r-_*i*c+e*x*c+o*i*m-e*s*m)*w,t[15]=(o*d*r-h*s*r+h*i*c-e*d*c-o*i*u+e*s*u)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,a=t.z;return e[0]*=i,e[4]*=r,e[8]*=a,e[1]*=i,e[5]*=r,e[9]*=a,e[2]*=i,e[6]*=r,e[10]*=a,e[3]*=i,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),a=1-i,o=t.x,s=t.y,c=t.z,l=a*o,h=a*s;return this.set(l*o+i,l*s-r*c,l*c+r*s,0,l*s+r*c,h*s+i,h*c-r*o,0,l*c-r*s,h*c+r*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,a,o){return this.set(1,i,a,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,a=e._x,o=e._y,s=e._z,c=e._w,l=a+a,h=o+o,d=s+s,u=a*l,p=a*h,_=a*d,x=o*h,m=o*d,f=s*d,b=c*l,y=c*h,E=c*d,I=i.x,C=i.y,w=i.z;return r[0]=(1-(x+f))*I,r[1]=(p+E)*I,r[2]=(_-y)*I,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(u+f))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(_+y)*w,r[9]=(m-b)*w,r[10]=(1-(u+x))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let a=Mi.set(r[0],r[1],r[2]).length();const o=Mi.set(r[4],r[5],r[6]).length(),s=Mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],We.copy(this);const l=1/a,h=1/o,d=1/s;return We.elements[0]*=l,We.elements[1]*=l,We.elements[2]*=l,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=d,We.elements[9]*=d,We.elements[10]*=d,e.setFromRotationMatrix(We),i.x=a,i.y=o,i.z=s,this}makePerspective(t,e,i,r,a,o,s=Mn){const c=this.elements,l=2*a/(e-t),h=2*a/(i-r),d=(e+t)/(e-t),u=(i+r)/(i-r);let p,_;if(s===Mn)p=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===Ia)p=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,a,o,s=Mn){const c=this.elements,l=1/(e-t),h=1/(i-r),d=1/(o-a),u=(e+t)*l,p=(i+r)*h;let _,x;if(s===Mn)_=(o+a)*d,x=-2*d;else if(s===Ia)_=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Mi=new N,We=new Qt,Zm=new N(0,0,0),Km=new N(1,1,1),An=new N,$r=new N,Pe=new N,rc=new Qt,ac=new Ur;class on{constructor(t=0,e=0,i=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(we(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ac.setFromEuler(this),this.setFromQuaternion(ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class ou{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jm=0;const sc=new N,Si=new Ur,dn=new Qt,Zr=new N,rr=new N,Jm=new N,Qm=new Ur,oc=new N(1,0,0),lc=new N(0,1,0),cc=new N(0,0,1),hc={type:"added"},t_={type:"removed"},Ei={type:"childadded",child:null},Ms={type:"childremoved",child:null};class xe extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new N,e=new on,i=new Ur,r=new N(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ot}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zr.copy(t):Zr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(rr,Zr,this.up):dn.lookAt(Zr,rr,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),Si.setFromRotationMatrix(dn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t_),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Qm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(a(t.materials,this.material[c]));r.material=s}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(t.animations,c))}}if(e){const s=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),_=o(t.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const c=[];for(const l in s){const h=s[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}xe.DEFAULT_UP=new N(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new N,pn=new N,Ss=new N,mn=new N,yi=new N,bi=new N,uc=new N,Es=new N,ys=new N,bs=new N;class $e{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Xe.subVectors(t,e),r.cross(Xe);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,i,r,a){Xe.subVectors(r,e),pn.subVectors(i,e),Ss.subVectors(t,e);const o=Xe.dot(Xe),s=Xe.dot(pn),c=Xe.dot(Ss),l=pn.dot(pn),h=pn.dot(Ss),d=o*l-s*s;if(d===0)return a.set(0,0,0),null;const u=1/d,p=(l*c-s*h)*u,_=(o*h-s*c)*u;return a.set(1-p-_,_,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,i,r,a,o,s,c){return this.getBarycoord(t,e,i,r,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,mn.x),c.addScaledVector(o,mn.y),c.addScaledVector(s,mn.z),c)}static isFrontFacing(t,e,i,r){return Xe.subVectors(i,e),pn.subVectors(t,e),Xe.cross(pn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Xe.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,a){return $e.getInterpolation(t,this.a,this.b,this.c,e,i,r,a)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,a=this.c;let o,s;yi.subVectors(r,i),bi.subVectors(a,i),Es.subVectors(t,i);const c=yi.dot(Es),l=bi.dot(Es);if(c<=0&&l<=0)return e.copy(i);ys.subVectors(t,r);const h=yi.dot(ys),d=bi.dot(ys);if(h>=0&&d<=h)return e.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(yi,o);bs.subVectors(t,a);const p=yi.dot(bs),_=bi.dot(bs);if(_>=0&&p<=_)return e.copy(a);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return s=l/(l-_),e.copy(i).addScaledVector(bi,s);const m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return uc.subVectors(a,r),s=(d-h)/(d-h+(p-_)),e.copy(r).addScaledVector(uc,s);const f=1/(m+x+u);return o=x*f,s=u*f,e.copy(i).addScaledVector(yi,o).addScaledVector(bi,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function ws(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Jt.workingColorSpace){if(t=km(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=ws(o,a,t+1/3),this.g=ws(o,a,t),this.b=ws(o,a,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=tn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const i=lu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Jt.fromWorkingColorSpace(Me.copy(this),t),Math.round(we(Me.r*255,0,255))*65536+Math.round(we(Me.g*255,0,255))*256+Math.round(we(Me.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Me.copy(this),e);const i=Me.r,r=Me.g,a=Me.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let c,l;const h=(s+o)/2;if(s===o)c=0,l=0;else{const d=o-s;switch(l=h<=.5?d/(o+s):d/(2-o-s),o){case i:c=(r-a)/d+(r<a?6:0);break;case r:c=(a-i)/d+2;break;case a:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=tn){Jt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,i=Me.g,r=Me.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Kr);const i=hs(Rn.h,Kr.h,e),r=hs(Rn.s,Kr.s,e),a=hs(Rn.l,Kr.l,e);return this.setHSL(i,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*r,this.g=a[1]*e+a[4]*i+a[7]*r,this.b=a[2]*e+a[5]*i+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Gt;Gt.NAMES=lu;let e_=0;class ji extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=Ni,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=js,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ks&&(i.blendSrc=this.blendSrc),this.blendDst!==js&&(i.blendDst=this.blendDst),this.blendEquation!==jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(e){const a=r(t.textures),o=r(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class cu extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new N,jr=new Xt;class je{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Jl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return gr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=tr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,a){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),r=be(r,this.array),a=be(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}}class hu extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class uu extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ke extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}}let n_=0;const Fe=new Qt,Ts=new xe,wi=new N,De=new ui,ar=new ui,fe=new N;class ln extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iu(t)?uu:hu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ot().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,i){return Fe.makeTranslation(t,e,i),this.applyMatrix4(Fe),this}scale(t,e,i){return Fe.makeScale(t,e,i),this.applyMatrix4(Fe),this}lookAt(t){return Ts.lookAt(t),Ts.updateMatrix(),this.applyMatrix4(Ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const a=e[i];De.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const s=e[a];ar.setFromBufferAttribute(s),this.morphTargetsRelative?(fe.addVectors(De.min,ar.min),De.expandByPoint(fe),fe.addVectors(De.max,ar.max),De.expandByPoint(fe)):(De.expandByPoint(ar.min),De.expandByPoint(ar.max))}De.getCenter(i);let r=0;for(let a=0,o=t.count;a<o;a++)fe.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(fe));if(e)for(let a=0,o=e.length;a<o;a++){const s=e[a],c=this.morphTargetsRelative;for(let l=0,h=s.count;l<h;l++)fe.fromBufferAttribute(s,l),c&&(wi.fromBufferAttribute(t,l),fe.add(wi)),r=Math.max(r,i.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],c=[];for(let L=0;L<i.count;L++)s[L]=new N,c[L]=new N;const l=new N,h=new N,d=new N,u=new Xt,p=new Xt,_=new Xt,x=new N,m=new N;function f(L,g,v){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,g),d.fromBufferAttribute(i,v),u.fromBufferAttribute(a,L),p.fromBufferAttribute(a,g),_.fromBufferAttribute(a,v),h.sub(l),d.sub(l),p.sub(u),_.sub(u);const A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(A),s[L].add(x),s[g].add(x),s[v].add(x),c[L].add(m),c[g].add(m),c[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,g=b.length;L<g;++L){const v=b[L],A=v.start,z=v.count;for(let k=A,X=A+z;k<X;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new N,E=new N,I=new N,C=new N;function w(L){I.fromBufferAttribute(r,L),C.copy(I);const g=s[L];y.copy(g),y.sub(I.multiplyScalar(I.dot(g))).normalize(),E.crossVectors(C,g);const A=E.dot(c[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,A)}for(let L=0,g=b.length;L<g;++L){const v=b[L],A=v.start,z=v.count;for(let k=A,X=A+z;k<X;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new N,a=new N,o=new N,s=new N,c=new N,l=new N,h=new N,d=new N;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,a),d.subVectors(r,a),h.cross(d),s.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),s.add(h),c.add(h),l.add(h),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,a),d.subVectors(r,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(s,c){const l=s.array,h=s.itemSize,d=s.normalized,u=new l.constructor(c.length*h);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){s.isInterleavedBufferAttribute?p=c[x]*s.data.stride+s.offset:p=c[x]*h;for(let f=0;f<h;f++)u[_++]=l[p++]}return new je(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ln,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=t(c,i);e.setAttribute(s,l)}const a=this.morphAttributes;for(const s in a){const c=[],l=a[s];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,i);c.push(p)}e.morphAttributes[s]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(r[c]=h,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const a=t.morphAttributes;for(const l in a){const h=[],d=a[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new Qt,Xn=new su,Jr=new Ki,dc=new N,Ti=new N,Ai=new N,Ri=new N,As=new N,Qr=new N,ta=new Xt,ea=new Xt,na=new Xt,pc=new N,mc=new N,_c=new N,ia=new N,ra=new N;class Ke extends xe{constructor(t=new ln,e=new cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const s=this.morphTargetInfluences;if(a&&s){Qr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=s[c],d=a[c];h!==0&&(As.fromBufferAttribute(d,t),o?Qr.addScaledVector(As,h):Qr.addScaledVector(As.sub(e),h))}e.add(Qr)}return e}raycast(t,e){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(a),Xn.copy(t.ray).recast(t.near),!(Jr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Jr,dc)===null||Xn.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(fc.copy(a).invert(),Xn.copy(t.ray).applyMatrix4(fc),!(i.boundingBox!==null&&Xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,i){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,x=u.length;_<x;_++){const m=u[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,I=y;E<I;E+=3){const C=s.getX(E),w=s.getX(E+1),L=s.getX(E+2);r=aa(this,f,t,i,l,h,d,C,w,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(s.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const b=s.getX(m),y=s.getX(m+1),E=s.getX(m+2);r=aa(this,o,t,i,l,h,d,b,y,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=u.length;_<x;_++){const m=u[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,I=y;E<I;E+=3){const C=E,w=E+1,L=E+2;r=aa(this,f,t,i,l,h,d,C,w,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const b=m,y=m+1,E=m+2;r=aa(this,o,t,i,l,h,d,b,y,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function i_(n,t,e,i,r,a,o,s){let c;if(t.side===Re?c=i.intersectTriangle(o,a,r,!0,s):c=i.intersectTriangle(r,a,o,t.side===Bn,s),c===null)return null;ra.copy(s),ra.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ra);return l<e.near||l>e.far?null:{distance:l,point:ra.clone(),object:n}}function aa(n,t,e,i,r,a,o,s,c,l){n.getVertexPosition(s,Ti),n.getVertexPosition(c,Ai),n.getVertexPosition(l,Ri);const h=i_(n,t,e,i,Ti,Ai,Ri,ia);if(h){r&&(ta.fromBufferAttribute(r,s),ea.fromBufferAttribute(r,c),na.fromBufferAttribute(r,l),h.uv=$e.getInterpolation(ia,Ti,Ai,Ri,ta,ea,na,new Xt)),a&&(ta.fromBufferAttribute(a,s),ea.fromBufferAttribute(a,c),na.fromBufferAttribute(a,l),h.uv1=$e.getInterpolation(ia,Ti,Ai,Ri,ta,ea,na,new Xt)),o&&(pc.fromBufferAttribute(o,s),mc.fromBufferAttribute(o,c),_c.fromBufferAttribute(o,l),h.normal=$e.getInterpolation(ia,Ti,Ai,Ri,pc,mc,_c,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:s,b:c,c:l,normal:new N,materialIndex:0};$e.getNormal(Ti,Ai,Ri,d.normal),h.face=d}return h}class ci extends ln{constructor(t=1,e=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,i,e,t,o,a,0),_("z","y","x",1,-1,i,e,-t,o,a,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,a,4),_("x","y","z",-1,-1,t,e,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(d,2));function _(x,m,f,b,y,E,I,C,w,L,g){const v=E/w,A=I/L,z=E/2,k=I/2,X=C/2,W=w+1,G=L+1;let Y=0,H=0;const j=new N;for(let ct=0;ct<G;ct++){const ft=ct*A-k;for(let Bt=0;Bt<W;Bt++){const Ut=Bt*v-z;j[x]=Ut*b,j[m]=ft*y,j[f]=X,l.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[f]=C>0?1:-1,h.push(j.x,j.y,j.z),d.push(Bt/w),d.push(1-ct/L),Y+=1}}for(let ct=0;ct<L;ct++)for(let ft=0;ft<w;ft++){const Bt=u+ft+W*ct,Ut=u+ft+W*(ct+1),V=u+(ft+1)+W*(ct+1),Q=u+(ft+1)+W*ct;c.push(Bt,Ut,Q),c.push(Ut,V,Q),H+=6}s.addGroup(p,H,g),p+=H,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Se(n){const t={};for(let e=0;e<n.length;e++){const i=Wi(n[e]);for(const r in i)t[r]=i[r]}return t}function r_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function fu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const a_={clone:Wi,merge:Se};var s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=o_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=r_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class du extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new N,gc=new Xt,xc=new Xt;class Oe extends du{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,gc,xc),e.subVectors(xc,gc)}setViewOffset(t,e,i,r,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ba*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const s=this.filmOffset;s!==0&&(a+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Li=1;class l_ extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oe(Ci,Li,t,e);r.layers=this.layers,this.add(r);const a=new Oe(Ci,Li,t,e);a.layers=this.layers,this.add(a);const o=new Oe(Ci,Li,t,e);o.layers=this.layers,this.add(o);const s=new Oe(Ci,Li,t,e);s.layers=this.layers,this.add(s);const c=new Oe(Ci,Li,t,e);c.layers=this.layers,this.add(c);const l=new Oe(Ci,Li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,a,o,s,c]=e;for(const l of e)this.remove(l);if(t===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,a),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,s),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class pu extends ye{constructor(t,e,i,r,a,o,s,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,i,r,a,o,s,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class c_ extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new pu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ci(5,5,5),a=new kn({name:"CubemapFromEquirect",uniforms:Wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:Fn});a.uniforms.tEquirect.value=e;const o=new Ke(r,a),s=e.minFilter;return e.minFilter===ii&&(e.minFilter=Ye),new l_(1,10,this).update(t,o),e.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(a)}}const Rs=new N,h_=new N,u_=new Ot;class Zn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Rs.subVectors(i,e).cross(h_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Rs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||u_.getNormalMatrix(t),r=this.coplanarPoint(Rs).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new Ki,sa=new N;class Zo{constructor(t=new Zn,e=new Zn,i=new Zn,r=new Zn,a=new Zn,o=new Zn){this.planes=[t,e,i,r,a,o]}set(t,e,i,r,a,o){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mn){const i=this.planes,r=t.elements,a=r[0],o=r[1],s=r[2],c=r[3],l=r[4],h=r[5],d=r[6],u=r[7],p=r[8],_=r[9],x=r[10],m=r[11],f=r[12],b=r[13],y=r[14],E=r[15];if(i[0].setComponents(c-a,u-l,m-p,E-f).normalize(),i[1].setComponents(c+a,u+l,m+p,E+f).normalize(),i[2].setComponents(c+o,u+h,m+_,E+b).normalize(),i[3].setComponents(c-o,u-h,m-_,E-b).normalize(),i[4].setComponents(c-s,u-d,m-x,E-y).normalize(),e===Mn)i[5].setComponents(c+s,u+d,m+x,E+y).normalize();else if(e===Ia)i[5].setComponents(s,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(sa.x=r.normal.x>0?t.max.x:t.min.x,sa.y=r.normal.y>0?t.max.y:t.min.y,sa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mu(){let n=null,t=!1,e=null,i=null;function r(a,o){e(a,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function f_(n){const t=new WeakMap;function e(s,c){const l=s.array,h=s.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),s.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:d}}function i(s,c,l){const h=c.array,d=c._updateRange,u=c.updateRanges;if(n.bindBuffer(l,s),d.count===-1&&u.length===0&&n.bufferSubData(l,0,h),u.length!==0){for(let p=0,_=u.length;p<_;p++){const x=u[p];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=t.get(s);c&&(n.deleteBuffer(c.buffer),t.delete(s))}function o(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const h=t.get(s);(!h||h.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const l=t.get(s);if(l===void 0)t.set(s,e(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,s,c),l.version=s.version}}return{get:r,remove:a,update:o}}class Ga extends ln{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const a=t/2,o=e/2,s=Math.floor(i),c=Math.floor(r),l=s+1,h=c+1,d=t/s,u=e/c,p=[],_=[],x=[],m=[];for(let f=0;f<h;f++){const b=f*u-o;for(let y=0;y<l;y++){const E=y*d-a;_.push(E,-b,0),x.push(0,0,1),m.push(y/s),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<s;b++){const y=b+l*f,E=b+l*(f+1),I=b+1+l*(f+1),C=b+1+l*f;p.push(y,E,C),p.push(E,I,C)}this.setIndex(p),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}var d_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,E_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,T_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,F_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V_="gl_FragColor = linearToOutputTexel( gl_FragColor );",W_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ag=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ug=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,S0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,W0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:d_,alphahash_pars_fragment:p_,alphamap_fragment:m_,alphamap_pars_fragment:__,alphatest_fragment:g_,alphatest_pars_fragment:x_,aomap_fragment:v_,aomap_pars_fragment:M_,batching_pars_vertex:S_,batching_vertex:E_,begin_vertex:y_,beginnormal_vertex:b_,bsdfs:w_,iridescence_fragment:T_,bumpmap_pars_fragment:A_,clipping_planes_fragment:R_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:L_,clipping_planes_vertex:P_,color_fragment:D_,color_pars_fragment:I_,color_pars_vertex:U_,color_vertex:N_,common:F_,cube_uv_reflection_fragment:O_,defaultnormal_vertex:B_,displacementmap_pars_vertex:k_,displacementmap_vertex:z_,emissivemap_fragment:H_,emissivemap_pars_fragment:G_,colorspace_fragment:V_,colorspace_pars_fragment:W_,envmap_fragment:X_,envmap_common_pars_fragment:q_,envmap_pars_fragment:Y_,envmap_pars_vertex:$_,envmap_physical_pars_fragment:ag,envmap_vertex:Z_,fog_vertex:K_,fog_pars_vertex:j_,fog_fragment:J_,fog_pars_fragment:Q_,gradientmap_pars_fragment:tg,lightmap_pars_fragment:eg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:rg,lights_toon_fragment:sg,lights_toon_pars_fragment:og,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:fg,lights_fragment_maps:dg,lights_fragment_end:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:xg,map_fragment:vg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:Eg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:bg,morphinstance_vertex:wg,morphcolor_vertex:Tg,morphnormal_vertex:Ag,morphtarget_pars_vertex:Rg,morphtarget_vertex:Cg,normal_fragment_begin:Lg,normal_fragment_maps:Pg,normal_pars_fragment:Dg,normal_pars_vertex:Ig,normal_vertex:Ug,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:kg,opaque_fragment:zg,packing:Hg,premultiplied_alpha_fragment:Gg,project_vertex:Vg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:qg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:Zg,shadowmap_vertex:Kg,shadowmask_pars_fragment:jg,skinbase_vertex:Jg,skinning_pars_vertex:Qg,skinning_vertex:t0,skinnormal_vertex:e0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:r0,tonemapping_pars_fragment:a0,transmission_fragment:s0,transmission_pars_fragment:o0,uv_pars_fragment:l0,uv_pars_vertex:c0,uv_vertex:h0,worldpos_vertex:u0,background_vert:f0,background_frag:d0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:_0,cube_frag:g0,depth_vert:x0,depth_frag:v0,distanceRGBA_vert:M0,distanceRGBA_frag:S0,equirect_vert:E0,equirect_frag:y0,linedashed_vert:b0,linedashed_frag:w0,meshbasic_vert:T0,meshbasic_frag:A0,meshlambert_vert:R0,meshlambert_frag:C0,meshmatcap_vert:L0,meshmatcap_frag:P0,meshnormal_vert:D0,meshnormal_frag:I0,meshphong_vert:U0,meshphong_frag:N0,meshphysical_vert:F0,meshphysical_frag:O0,meshtoon_vert:B0,meshtoon_frag:k0,points_vert:z0,points_frag:H0,shadow_vert:G0,shadow_frag:V0,sprite_vert:W0,sprite_frag:X0},rt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},en={basic:{uniforms:Se([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Se([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Se([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Se([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Se([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Se([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Se([rt.points,rt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Se([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Se([rt.common,rt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Se([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Se([rt.sprite,rt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Se([rt.common,rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Se([rt.lights,rt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};en.physical={uniforms:Se([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const oa={r:0,b:0,g:0},Yn=new on,q0=new Qt;function Y0(n,t,e,i,r,a,o){const s=new Gt(0);let c=a===!0?0:1,l,h,d=null,u=0,p=null;function _(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function x(b){let y=!1;const E=_(b);E===null?f(s,c):E&&E.isColor&&(f(E,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){const E=_(y);E&&(E.isCubeTexture||E.mapping===za)?(h===void 0&&(h=new Ke(new ci(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Wi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Yn.copy(y.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(Yn)),h.material.toneMapped=Jt.getTransfer(E.colorSpace)!==te,(d!==E||u!==E.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=E,u=E.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ke(new Ga(2,2),new kn({name:"BackgroundMaterial",uniforms:Wi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(E.colorSpace)!==te,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,u=E.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,y){b.getRGB(oa,fu(n)),i.buffers.color.setClear(oa.r,oa.g,oa.b,y,o)}return{getClearColor:function(){return s},setClearColor:function(b,y=1){s.set(b),c=y,f(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(s,c)},render:x,addToRenderList:m}}function $0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let a=r,o=!1;function s(v,A,z,k,X){let W=!1;const G=d(k,z,A);a!==G&&(a=G,l(a.object)),W=p(v,k,z,X),W&&_(v,k,z,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,E(v,A,z,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,A,z){const k=z.wireframe===!0;let X=i[v.id];X===void 0&&(X={},i[v.id]=X);let W=X[A.id];W===void 0&&(W={},X[A.id]=W);let G=W[k];return G===void 0&&(G=u(c()),W[k]=G),G}function u(v){const A=[],z=[],k=[];for(let X=0;X<e;X++)A[X]=0,z[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:k,object:v,attributes:{},index:null}}function p(v,A,z,k){const X=a.attributes,W=A.attributes;let G=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){const ct=X[H];let ft=W[H];if(ft===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor)),ct===void 0||ct.attribute!==ft||ft&&ct.data!==ft.data)return!0;G++}return a.attributesNum!==G||a.index!==k}function _(v,A,z,k){const X={},W=A.attributes;let G=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){let ct=W[H];ct===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor));const ft={};ft.attribute=ct,ct&&ct.data&&(ft.data=ct.data),X[H]=ft,G++}a.attributes=X,a.attributesNum=G,a.index=k}function x(){const v=a.newAttributes;for(let A=0,z=v.length;A<z;A++)v[A]=0}function m(v){f(v,0)}function f(v,A){const z=a.newAttributes,k=a.enabledAttributes,X=a.attributeDivisors;z[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),X[v]!==A&&(n.vertexAttribDivisor(v,A),X[v]=A)}function b(){const v=a.newAttributes,A=a.enabledAttributes;for(let z=0,k=A.length;z<k;z++)A[z]!==v[z]&&(n.disableVertexAttribArray(z),A[z]=0)}function y(v,A,z,k,X,W,G){G===!0?n.vertexAttribIPointer(v,A,z,X,W):n.vertexAttribPointer(v,A,z,k,X,W)}function E(v,A,z,k){x();const X=k.attributes,W=z.getAttributes(),G=A.defaultAttributeValues;for(const Y in W){const H=W[Y];if(H.location>=0){let j=X[Y];if(j===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const ct=j.normalized,ft=j.itemSize,Bt=t.get(j);if(Bt===void 0)continue;const Ut=Bt.buffer,V=Bt.type,Q=Bt.bytesPerElement,dt=V===n.INT||V===n.UNSIGNED_INT||j.gpuType===Ho;if(j.isInterleavedBufferAttribute){const pt=j.data,At=pt.stride,lt=j.offset;if(pt.isInstancedInterleavedBuffer){for(let st=0;st<H.locationSize;st++)f(H.location+st,pt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let st=0;st<H.locationSize;st++)m(H.location+st);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let st=0;st<H.locationSize;st++)y(H.location+st,ft/H.locationSize,V,ct,At*Q,(lt+ft/H.locationSize*st)*Q,dt)}else{if(j.isInstancedBufferAttribute){for(let pt=0;pt<H.locationSize;pt++)f(H.location+pt,j.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let pt=0;pt<H.locationSize;pt++)m(H.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let pt=0;pt<H.locationSize;pt++)y(H.location+pt,ft/H.locationSize,V,ct,ft*Q,ft/H.locationSize*pt*Q,dt)}}else if(G!==void 0){const ct=G[Y];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(H.location,ct);break;case 3:n.vertexAttrib3fv(H.location,ct);break;case 4:n.vertexAttrib4fv(H.location,ct);break;default:n.vertexAttrib1fv(H.location,ct)}}}}b()}function I(){L();for(const v in i){const A=i[v];for(const z in A){const k=A[z];for(const X in k)h(k[X].object),delete k[X];delete A[z]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;const A=i[v.id];for(const z in A){const k=A[z];for(const X in k)h(k[X].object),delete k[X];delete A[z]}delete i[v.id]}function w(v){for(const A in i){const z=i[A];if(z[v.id]===void 0)continue;const k=z[v.id];for(const X in k)h(k[X].object),delete k[X];delete z[v.id]}}function L(){g(),o=!0,a!==r&&(a=r,l(a.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:L,resetDefaultState:g,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Z0(n,t,e){let i;function r(l){i=l}function a(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function s(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];e.update(p,i,1)}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],h[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];for(let x=0;x<u.length;x++)e.update(_,i,u[x])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function K0(n,t,e,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Ze&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(C){const w=C===Dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Sn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==rn&&!w)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:f,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:E,maxSamples:I}}function j0(n){const t=this;let e=null,i=0,r=!1,a=!1;const o=new Zn,s=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||a&&!m)a?h(null):l();else{const b=a?0:i,y=b*4;let E=f.clippingState||null;c.value=E,E=h(_,u,y,p);for(let I=0;I!==y;++I)E[I]=e[I];f.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const f=p+x*4,b=u.matrixWorldInverse;s.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,E=p;y!==x;++y,E+=4)o.copy(d[y]).applyMatrix4(b,s),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function J0(n){let t=new WeakMap;function e(o,s){return s===Js?o.mapping=zi:s===Qs&&(o.mapping=Hi),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===Js||s===Qs)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new c_(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=t.get(s);c!==void 0&&(t.delete(s),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class _u extends du{constructor(t=-1,e=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-t,o=i+t,s=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,s-=h*this.view.offsetY,c=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ii=4,vc=[.125,.215,.35,.446,.526,.582],Jn=20,Cs=new _u,Mc=new Gt;let Ls=null,Ps=0,Ds=0,Is=!1;const Kn=(1+Math.sqrt(5))/2,Pi=1/Kn,Sc=[new N(-Kn,Pi,0),new N(Kn,Pi,0),new N(-Pi,0,Kn),new N(Pi,0,Kn),new N(0,Kn,-Pi),new N(0,Kn,Pi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ls=this._renderer.getRenderTarget(),Ps=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ls,Ps,Ds),this._renderer.xr.enabled=Is,t.scissorTest=!1,la(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ls=this._renderer.getRenderTarget(),Ps=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Dr,format:Ze,colorSpace:zn,depthBuffer:!1},r=yc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q0(a)),this._blurMaterial=tx(a,t,e)}return r}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,Cs)}_sceneToCubeUV(t,e,i,r){const s=new Oe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Mc),h.toneMapping=On,h.autoClear=!1;const p=new cu({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),_=new Ke(new ci,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Mc),x=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(s.up.set(0,c[f],0),s.lookAt(l[f],0,0)):b===1?(s.up.set(0,0,c[f]),s.lookAt(0,l[f],0)):(s.up.set(0,c[f],0),s.lookAt(0,0,l[f]));const y=this._cubeSize;la(r,b*y,f>2?y:0,y,y),h.setRenderTarget(r),x&&h.render(_,s),h.render(t,s)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===zi||t.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=t;const c=this._cubeSize;la(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Cs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Sc[(r-a-1)%Sc.length];this._blur(t,a-1,a,o,s)}e.autoClear=i}_blur(t,e,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",a),this._halfBlur(o,t,i,i,r,"longitudinal",a)}_halfBlur(t,e,i,r,a,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ke(this._lodPlanes[r],l),u=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),x=a/_,m=isFinite(a)?1+Math.floor(h*x):Jn;m>Jn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const f=[];let b=0;for(let w=0;w<Jn;++w){const L=w/x,g=Math.exp(-L*L/2);f.push(g),w===0?b+=g:w<m&&(b+=2*g)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:y}=this;u.dTheta.value=_,u.mipInt.value=y-i;const E=this._sizeLods[r],I=3*E*(r>y-Ii?r-y+Ii:0),C=4*(this._cubeSize-E);la(e,I,C,3*E,2*E),c.setRenderTarget(e),c.render(d,Cs)}}function Q0(n){const t=[],e=[],i=[];let r=n;const a=n-Ii+1+vc.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);e.push(s);let c=1/s;o>n-Ii?c=vc[o-n+Ii-1]:o===0&&(c=0),i.push(c);const l=1/(s-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,x=3,m=2,f=1,b=new Float32Array(x*_*p),y=new Float32Array(m*_*p),E=new Float32Array(f*_*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,L=C>2?0:-1,g=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];b.set(g,x*_*C),y.set(u,m*_*C);const v=[C,C,C,C,C,C];E.set(v,f*_*C)}const I=new ln;I.setAttribute("position",new je(b,x)),I.setAttribute("uv",new je(y,m)),I.setAttribute("faceIndex",new je(E,f)),t.push(I),r>Ii&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function yc(n,t,e){const i=new li(n,t,e);return i.texture.mapping=za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function tx(n,t,e){const i=new Float32Array(Jn),r=new N(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function bc(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function wc(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ex(n){let t=new WeakMap,e=null;function i(s){if(s&&s.isTexture){const c=s.mapping,l=c===Js||c===Qs,h=c===zi||c===Hi;if(l||h){let d=t.get(s);const u=d!==void 0?d.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==u)return e===null&&(e=new Ec(n)),d=l?e.fromEquirectangular(s,d):e.fromCubemap(s,d),d.texture.pmremVersion=s.pmremVersion,t.set(s,d),d.texture;if(d!==void 0)return d.texture;{const p=s.image;return l&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Ec(n)),d=l?e.fromEquirectangular(s):e.fromCubemap(s),d.texture.pmremVersion=s.pmremVersion,t.set(s,d),s.addEventListener("dispose",a),d.texture):null}}}return s}function r(s){let c=0;const l=6;for(let h=0;h<l;h++)s[h]!==void 0&&c++;return c===l}function a(s){const c=s.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function nx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ix(n,t,e,i){const r={},a=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const x=u.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete r[u.id];const p=a.get(u);p&&(t.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function s(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const _ in u)t.update(u[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let y=0,E=b.length;y<E;y+=3){const I=b[y+0],C=b[y+1],w=b[y+2];u.push(I,C,C,w,w,I)}}else if(_!==void 0){const b=_.array;x=_.version;for(let y=0,E=b.length/3-1;y<E;y+=3){const I=y+0,C=y+1,w=y+2;u.push(I,C,C,w,w,I)}}else return;const m=new(iu(u)?uu:hu)(u,1);m.version=x;const f=a.get(d);f&&t.remove(f),a.set(d,m)}function h(d){const u=a.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return a.get(d)}return{get:s,update:c,getWireframeAttribute:h}}function rx(n,t,e){let i;function r(u){i=u}let a,o;function s(u){a=u.type,o=u.bytesPerElement}function c(u,p){n.drawElements(i,p,a,u*o),e.update(p,i,1)}function l(u,p,_){_!==0&&(n.drawElementsInstanced(i,p,a,u*o,_),e.update(p,i,_))}function h(u,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,u,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,i,1)}function d(u,p,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,u,0,x,0,_);let f=0;for(let b=0;b<_;b++)f+=p[b];for(let b=0;b<x.length;b++)e.update(f,i,x[b])}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ax(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=s*(a/3);break;case n.LINES:e.lines+=s*(a/2);break;case n.LINE_STRIP:e.lines+=s*(a-1);break;case n.LINE_LOOP:e.lines+=s*a;break;case n.POINTS:e.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function sx(n,t,e){const i=new WeakMap,r=new ce;function a(o,s,c){const l=o.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(s);if(u===void 0||u.count!==d){let v=function(){L.dispose(),i.delete(s),s.removeEventListener("dispose",v)};var p=v;u!==void 0&&u.texture.dispose();const _=s.morphAttributes.position!==void 0,x=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],b=s.morphAttributes.normal||[],y=s.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let I=s.attributes.position.count*E,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const w=new Float32Array(I*C*4*d),L=new au(w,I,C,d);L.type=rn,L.needsUpdate=!0;const g=E*4;for(let A=0;A<d;A++){const z=f[A],k=b[A],X=y[A],W=I*C*4*A;for(let G=0;G<z.count;G++){const Y=G*g;_===!0&&(r.fromBufferAttribute(z,G),w[W+Y+0]=r.x,w[W+Y+1]=r.y,w[W+Y+2]=r.z,w[W+Y+3]=0),x===!0&&(r.fromBufferAttribute(k,G),w[W+Y+4]=r.x,w[W+Y+5]=r.y,w[W+Y+6]=r.z,w[W+Y+7]=0),m===!0&&(r.fromBufferAttribute(X,G),w[W+Y+8]=r.x,w[W+Y+9]=r.y,w[W+Y+10]=r.z,w[W+Y+11]=X.itemSize===4?r.w:1)}}u={count:d,texture:L,size:new Xt(I,C)},i.set(s,u),s.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=s.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function ox(n,t,e,i){let r=new WeakMap;function a(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return d}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class gu extends ye{constructor(t,e,i,r,a,o,s,c,l,h=Fi){if(h!==Fi&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fi&&(i=oi),i===void 0&&h===Vi&&(i=Gi),super(null,r,a,o,s,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:Ae,this.minFilter=c!==void 0?c:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xu=new ye,Tc=new gu(1,1),vu=new au,Mu=new Ym,Su=new pu,Ac=[],Rc=[],Cc=new Float32Array(16),Lc=new Float32Array(9),Pc=new Float32Array(4);function Ji(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let a=Ac[r];if(a===void 0&&(a=new Float32Array(r),Ac[r]=a),t!==0){i.toArray(a,0);for(let o=1,s=0;o!==t;++o)s+=e,n[o].toArray(a,s)}return a}function he(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Va(n,t){let e=Rc[t];e===void 0&&(e=new Int32Array(t),Rc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function lx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function cx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2fv(this.addr,t),ue(e,t)}}function hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;n.uniform3fv(this.addr,t),ue(e,t)}}function ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4fv(this.addr,t),ue(e,t)}}function fx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,i))return;Pc.set(i),n.uniformMatrix2fv(this.addr,!1,Pc),ue(e,i)}}function dx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,i))return;Lc.set(i),n.uniformMatrix3fv(this.addr,!1,Lc),ue(e,i)}}function px(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,i))return;Cc.set(i),n.uniformMatrix4fv(this.addr,!1,Cc),ue(e,i)}}function mx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function _x(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2iv(this.addr,t),ue(e,t)}}function gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3iv(this.addr,t),ue(e,t)}}function xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4iv(this.addr,t),ue(e,t)}}function vx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2uiv(this.addr,t),ue(e,t)}}function Sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3uiv(this.addr,t),ue(e,t)}}function Ex(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4uiv(this.addr,t),ue(e,t)}}function yx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Tc.compareFunction=nu,a=Tc):a=xu,e.setTexture2D(t||a,r)}function bx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Mu,r)}function wx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Su,r)}function Tx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||vu,r)}function Ax(n){switch(n){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return fx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return _x;case 35668:case 35672:return gx;case 35669:case 35673:return xx;case 5125:return vx;case 36294:return Mx;case 36295:return Sx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Tx}}function Rx(n,t){n.uniform1fv(this.addr,t)}function Cx(n,t){const e=Ji(t,this.size,2);n.uniform2fv(this.addr,e)}function Lx(n,t){const e=Ji(t,this.size,3);n.uniform3fv(this.addr,e)}function Px(n,t){const e=Ji(t,this.size,4);n.uniform4fv(this.addr,e)}function Dx(n,t){const e=Ji(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ix(n,t){const e=Ji(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ux(n,t){const e=Ji(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Nx(n,t){n.uniform1iv(this.addr,t)}function Fx(n,t){n.uniform2iv(this.addr,t)}function Ox(n,t){n.uniform3iv(this.addr,t)}function Bx(n,t){n.uniform4iv(this.addr,t)}function kx(n,t){n.uniform1uiv(this.addr,t)}function zx(n,t){n.uniform2uiv(this.addr,t)}function Hx(n,t){n.uniform3uiv(this.addr,t)}function Gx(n,t){n.uniform4uiv(this.addr,t)}function Vx(n,t,e){const i=this.cache,r=t.length,a=Va(e,r);he(i,a)||(n.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||xu,a[o])}function Wx(n,t,e){const i=this.cache,r=t.length,a=Va(e,r);he(i,a)||(n.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Mu,a[o])}function Xx(n,t,e){const i=this.cache,r=t.length,a=Va(e,r);he(i,a)||(n.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Su,a[o])}function qx(n,t,e){const i=this.cache,r=t.length,a=Va(e,r);he(i,a)||(n.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||vu,a[o])}function Yx(n){switch(n){case 5126:return Rx;case 35664:return Cx;case 35665:return Lx;case 35666:return Px;case 35674:return Dx;case 35675:return Ix;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return kx;case 36294:return zx;case 36295:return Hx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}class $x{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ax(e.type)}}class Zx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yx(e.type)}}class Kx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(t,e[s.id],i)}}}const Us=/(\w+)(\])?(\[|\.)?/g;function Dc(n,t){n.seq.push(t),n.map[t.id]=t}function jx(n,t,e){const i=n.name,r=i.length;for(Us.lastIndex=0;;){const a=Us.exec(i),o=Us.lastIndex;let s=a[1];const c=a[2]==="]",l=a[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){Dc(e,l===void 0?new $x(s,n,t):new Zx(s,n,t));break}else{let d=e.map[s];d===void 0&&(d=new Kx(s),Dc(e,d)),e=d}}}class wa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);jx(a,o,this)}}setValue(t,e,i,r){const a=this.map[e];a!==void 0&&a.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let a=0,o=e.length;a!==o;++a){const s=e[a],c=i[s.id];c.needsUpdate!==!1&&s.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,a=t.length;r!==a;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Ic(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Jx=37297;let Qx=0;function tv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===t?">":" "} ${s}: ${e[o]}`)}return i.join(`
`)}function ev(n){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(n);let i;switch(t===e?i="":t===Da&&e===Pa?i="LinearDisplayP3ToLinearSRGB":t===Pa&&e===Da&&(i="LinearSRGBToLinearDisplayP3"),n){case zn:case Ha:return[i,"LinearTransferOETF"];case tn:case $o:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+tv(n.getShaderSource(t),o)}else return r}function nv(n,t){const e=ev(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function iv(n,t){let e;switch(t){case Sm:e="Linear";break;case Em:e="Reinhard";break;case ym:e="OptimizedCineon";break;case bm:e="ACESFilmic";break;case Tm:e="AgX";break;case Am:e="Neutral";break;case wm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new N;function rv(){Jt.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function sv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ov(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(t,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),e[o]={type:a.type,location:n.getAttribLocation(t,o),locationSize:s}}return e}function fr(n){return n!==""}function Nc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(n){return n.replace(lv,hv)}const cv=new Map;function hv(n,t){let e=Ft[t];if(e===void 0){const i=cv.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lo(e)}const uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(n){return n.replace(uv,fv)}function fv(n,t,e,i){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Bc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function pv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zi:case Hi:t="ENVMAP_TYPE_CUBE";break;case za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hi:t="ENVMAP_MODE_REFRACTION";break}return t}function _v(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wh:t="ENVMAP_BLENDING_MULTIPLY";break;case vm:t="ENVMAP_BLENDING_MIX";break;case Mm:t="ENVMAP_BLENDING_ADD";break}return t}function gv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function xv(n,t,e,i){const r=n.getContext(),a=e.defines;let o=e.vertexShader,s=e.fragmentShader;const c=dv(e),l=pv(e),h=mv(e),d=_v(e),u=gv(e),p=av(e),_=sv(a),x=r.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(fr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(fr).join(`
`),f.length>0&&(f+=`
`)):(m=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),f=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Ft.tonemapping_pars_fragment:"",e.toneMapping!==On?iv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,nv("linearToOutputTexel",e.outputColorSpace),rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),o=Lo(o),o=Nc(o,e),o=Fc(o,e),s=Lo(s),s=Nc(s,e),s=Fc(s,e),o=Oc(o),s=Oc(s),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=b+m+o,E=b+f+s,I=Ic(r,r.VERTEX_SHADER,y),C=Ic(r,r.FRAGMENT_SHADER,E);r.attachShader(x,I),r.attachShader(x,C),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(A){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(I).trim(),X=r.getShaderInfoLog(C).trim();let W=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,C);else{const Y=Uc(r,I,"vertex"),H=Uc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+Y+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||X==="")&&(G=!1);G&&(A.diagnostics={runnable:W,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:f}})}r.deleteShader(I),r.deleteShader(C),L=new wa(r,x),g=ov(r,x)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let g;this.getAttributes=function(){return g===void 0&&w(this),g};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(x,Jx)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=C,this}let vv=0;class Mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Sv(t),e.set(t,i)),i}}class Sv{constructor(t){this.id=vv++,this.code=t,this.usedTimes=0}}function Ev(n,t,e,i,r,a,o){const s=new ou,c=new Mv,l=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function m(g,v,A,z,k){const X=z.fog,W=k.geometry,G=g.isMeshStandardMaterial?z.environment:null,Y=(g.isMeshStandardMaterial?e:t).get(g.envMap||G),H=Y&&Y.mapping===za?Y.image.height:null,j=_[g.type];g.precision!==null&&(p=r.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=ct!==void 0?ct.length:0;let Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let Ut,V,Q,dt;if(j){const $t=en[j];Ut=$t.vertexShader,V=$t.fragmentShader}else Ut=g.vertexShader,V=g.fragmentShader,c.update(g),Q=c.getVertexShaderID(g),dt=c.getFragmentShaderID(g);const pt=n.getRenderTarget(),At=k.isInstancedMesh===!0,lt=k.isBatchedMesh===!0,st=!!g.map,ht=!!g.matcap,T=!!Y,yt=!!g.aoMap,St=!!g.lightMap,zt=!!g.bumpMap,Mt=!!g.normalMap,ne=!!g.displacementMap,Tt=!!g.emissiveMap,Dt=!!g.metalnessMap,R=!!g.roughnessMap,M=g.anisotropy>0,B=g.clearcoat>0,K=g.dispersion>0,J=g.iridescence>0,Z=g.sheen>0,bt=g.transmission>0,ot=M&&!!g.anisotropyMap,_t=B&&!!g.clearcoatMap,Nt=B&&!!g.clearcoatNormalMap,tt=B&&!!g.clearcoatRoughnessMap,mt=J&&!!g.iridescenceMap,Vt=J&&!!g.iridescenceThicknessMap,Pt=Z&&!!g.sheenColorMap,gt=Z&&!!g.sheenRoughnessMap,It=!!g.specularMap,kt=!!g.specularColorMap,ie=!!g.specularIntensityMap,P=bt&&!!g.transmissionMap,et=bt&&!!g.thicknessMap,q=!!g.gradientMap,$=!!g.alphaMap,it=g.alphaTest>0,Rt=!!g.alphaHash,Wt=!!g.extensions;let se=On;g.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(se=n.toneMapping);const pe={shaderID:j,shaderType:g.type,shaderName:g.name,vertexShader:Ut,fragmentShader:V,defines:g.defines,customVertexShaderID:Q,customFragmentShaderID:dt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:lt,batchingColor:lt&&k._colorsTexture!==null,instancing:At,instancingColor:At&&k.instanceColor!==null,instancingMorph:At&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:zn,alphaToCoverage:!!g.alphaToCoverage,map:st,matcap:ht,envMap:T,envMapMode:T&&Y.mapping,envMapCubeUVHeight:H,aoMap:yt,lightMap:St,bumpMap:zt,normalMap:Mt,displacementMap:u&&ne,emissiveMap:Tt,normalMapObjectSpace:Mt&&g.normalMapType===Pm,normalMapTangentSpace:Mt&&g.normalMapType===eu,metalnessMap:Dt,roughnessMap:R,anisotropy:M,anisotropyMap:ot,clearcoat:B,clearcoatMap:_t,clearcoatNormalMap:Nt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:J,iridescenceMap:mt,iridescenceThicknessMap:Vt,sheen:Z,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:It,specularColorMap:kt,specularIntensityMap:ie,transmission:bt,transmissionMap:P,thicknessMap:et,gradientMap:q,opaque:g.transparent===!1&&g.blending===Ni&&g.alphaToCoverage===!1,alphaMap:$,alphaTest:it,alphaHash:Rt,combine:g.combine,mapUv:st&&x(g.map.channel),aoMapUv:yt&&x(g.aoMap.channel),lightMapUv:St&&x(g.lightMap.channel),bumpMapUv:zt&&x(g.bumpMap.channel),normalMapUv:Mt&&x(g.normalMap.channel),displacementMapUv:ne&&x(g.displacementMap.channel),emissiveMapUv:Tt&&x(g.emissiveMap.channel),metalnessMapUv:Dt&&x(g.metalnessMap.channel),roughnessMapUv:R&&x(g.roughnessMap.channel),anisotropyMapUv:ot&&x(g.anisotropyMap.channel),clearcoatMapUv:_t&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(g.sheenRoughnessMap.channel),specularMapUv:It&&x(g.specularMap.channel),specularColorMapUv:kt&&x(g.specularColorMap.channel),specularIntensityMapUv:ie&&x(g.specularIntensityMap.channel),transmissionMapUv:P&&x(g.transmissionMap.channel),thicknessMapUv:et&&x(g.thicknessMap.channel),alphaMapUv:$&&x(g.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Mt||M),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(st||$),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Bt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:st&&g.map.isVideoTexture===!0&&Jt.getTransfer(g.map.colorSpace)===te,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===vn,flipSided:g.side===Re,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Wt&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&g.extensions.multiDraw===!0||lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return pe.vertexUv1s=l.has(1),pe.vertexUv2s=l.has(2),pe.vertexUv3s=l.has(3),l.clear(),pe}function f(g){const v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(const A in g.defines)v.push(A),v.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(b(v,g),y(v,g),v.push(n.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function b(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function y(g,v){s.disableAll(),v.supportsVertexTextures&&s.enable(0),v.instancing&&s.enable(1),v.instancingColor&&s.enable(2),v.instancingMorph&&s.enable(3),v.matcap&&s.enable(4),v.envMap&&s.enable(5),v.normalMapObjectSpace&&s.enable(6),v.normalMapTangentSpace&&s.enable(7),v.clearcoat&&s.enable(8),v.iridescence&&s.enable(9),v.alphaTest&&s.enable(10),v.vertexColors&&s.enable(11),v.vertexAlphas&&s.enable(12),v.vertexUv1s&&s.enable(13),v.vertexUv2s&&s.enable(14),v.vertexUv3s&&s.enable(15),v.vertexTangents&&s.enable(16),v.anisotropy&&s.enable(17),v.alphaHash&&s.enable(18),v.batching&&s.enable(19),v.dispersion&&s.enable(20),v.batchingColor&&s.enable(21),g.push(s.mask),s.disableAll(),v.fog&&s.enable(0),v.useFog&&s.enable(1),v.flatShading&&s.enable(2),v.logarithmicDepthBuffer&&s.enable(3),v.skinning&&s.enable(4),v.morphTargets&&s.enable(5),v.morphNormals&&s.enable(6),v.morphColors&&s.enable(7),v.premultipliedAlpha&&s.enable(8),v.shadowMapEnabled&&s.enable(9),v.doubleSided&&s.enable(10),v.flipSided&&s.enable(11),v.useDepthPacking&&s.enable(12),v.dithering&&s.enable(13),v.transmission&&s.enable(14),v.sheen&&s.enable(15),v.opaque&&s.enable(16),v.pointsUvs&&s.enable(17),v.decodeVideoTexture&&s.enable(18),v.alphaToCoverage&&s.enable(19),g.push(s.mask)}function E(g){const v=_[g.type];let A;if(v){const z=en[v];A=a_.clone(z.uniforms)}else A=g.uniforms;return A}function I(g,v){let A;for(let z=0,k=h.length;z<k;z++){const X=h[z];if(X.cacheKey===v){A=X,++A.usedTimes;break}}return A===void 0&&(A=new xv(n,v,g,a),h.push(A)),A}function C(g){if(--g.usedTimes===0){const v=h.indexOf(g);h[v]=h[h.length-1],h.pop(),g.destroy()}}function w(g){c.remove(g)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:I,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:L}}function yv(){let n=new WeakMap;function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function e(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function bv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function kc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function zc(){const n=[];let t=0;const e=[],i=[],r=[];function a(){t=0,e.length=0,i.length=0,r.length=0}function o(d,u,p,_,x,m){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},n[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function s(d,u,p,_,x,m){const f=o(d,u,p,_,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):e.push(f)}function c(d,u,p,_,x,m){const f=o(d,u,p,_,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||bv),i.length>1&&i.sort(u||kc),r.length>1&&r.sort(u||kc)}function h(){for(let d=t,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:a,push:s,unshift:c,finish:h,sort:l}}function wv(){let n=new WeakMap;function t(i,r){const a=n.get(i);let o;return a===void 0?(o=new zc,n.set(i,[o])):r>=a.length?(o=new zc,a.push(o)):o=a[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Tv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Gt};break;case"SpotLight":e={position:new N,direction:new N,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Av(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Rv=0;function Cv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Lv(n){const t=new Tv,e=Av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,a=new Qt,o=new Qt;function s(l){let h=0,d=0,u=0;for(let g=0;g<9;g++)i.probe[g].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,b=0,y=0,E=0,I=0,C=0,w=0;l.sort(Cv);for(let g=0,v=l.length;g<v;g++){const A=l[g],z=A.color,k=A.intensity,X=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=z.r*k,d+=z.g*k,u+=z.b*k;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],k);w++}else if(A.isDirectionalLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Y=A.shadow,H=e.get(A);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=A.shadow.matrix,b++}i.directional[p]=G,p++}else if(A.isSpotLight){const G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(z).multiplyScalar(k),G.distance=X,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[x]=G;const Y=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,Y.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[x]=Y.matrix,A.castShadow){const H=e.get(A);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=W,E++}x++}else if(A.isRectAreaLight){const G=t.get(A);G.color.copy(z).multiplyScalar(k),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=G,m++}else if(A.isPointLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const Y=A.shadow,H=e.get(A);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=A.shadow.matrix,y++}i.point[_]=G,_++}else if(A.isHemisphereLight){const G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(k),G.groundColor.copy(A.groundColor).multiplyScalar(k),i.hemi[f]=G,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==E||L.numSpotMaps!==I||L.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,L.directionalLength=p,L.pointLength=_,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=E,L.numSpotMaps=I,L.numLightProbes=w,i.version=Rv++)}function c(l,h){let d=0,u=0,p=0,_=0,x=0;const m=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const y=l[f];if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(y.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(y.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:s,setupView:c,state:i}}function Hc(n){const t=new Lv(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function s(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Pv(n){let t=new WeakMap;function e(r,a=0){const o=t.get(r);let s;return o===void 0?(s=new Hc(n),t.set(r,[s])):a>=o.length?(s=new Hc(n),o.push(s)):s=o[a],s}function i(){t=new WeakMap}return{get:e,dispose:i}}class Dv extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Iv extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fv(n,t,e){let i=new Zo;const r=new Xt,a=new Xt,o=new ce,s=new Dv({depthPacking:Lm}),c=new Iv,l={},h=e.maxTextureSize,d={[Bn]:Re,[Re]:Bn,[vn]:vn},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Uv,fragmentShader:Nv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new ln;_.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ke(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let f=this.type;this.render=function(C,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const g=n.getRenderTarget(),v=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Fn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=f!==_n&&this.type===_n,X=f===_n&&this.type!==_n;for(let W=0,G=C.length;W<G;W++){const Y=C[W],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const j=H.getFrameExtents();if(r.multiply(j),a.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/j.x),r.x=a.x*j.x,H.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/j.y),r.y=a.y*j.y,H.mapSize.y=a.y)),H.map===null||k===!0||X===!0){const ft=this.type!==_n?{minFilter:Ae,magFilter:Ae}:{};H.map!==null&&H.map.dispose(),H.map=new li(r.x,r.y,ft),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ct=H.getViewportCount();for(let ft=0;ft<ct;ft++){const Bt=H.getViewport(ft);o.set(a.x*Bt.x,a.y*Bt.y,a.x*Bt.z,a.y*Bt.w),z.viewport(o),H.updateMatrices(Y,ft),i=H.getFrustum(),E(w,L,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===_n&&b(H,L),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(g,v,A)};function b(C,w){const L=t.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new li(r.x,r.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,L,u,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,L,p,x,null)}function y(C,w,L,g){let v=null;const A=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)v=A;else if(v=L.isPointLight===!0?c:s,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=v.uuid,k=w.uuid;let X=l[z];X===void 0&&(X={},l[z]=X);let W=X[k];W===void 0&&(W=v.clone(),X[k]=W,w.addEventListener("dispose",I)),v=W}if(v.visible=w.visible,v.wireframe=w.wireframe,g===_n?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:d[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=n.properties.get(v);z.light=L}return v}function E(C,w,L,g,v){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===_n)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const k=t.update(C),X=C.material;if(Array.isArray(X)){const W=k.groups;for(let G=0,Y=W.length;G<Y;G++){const H=W[G],j=X[H.materialIndex];if(j&&j.visible){const ct=y(C,j,g,v);C.onBeforeShadow(n,C,w,L,k,ct,H),n.renderBufferDirect(L,null,k,ct,C,H),C.onAfterShadow(n,C,w,L,k,ct,H)}}}else if(X.visible){const W=y(C,X,g,v);C.onBeforeShadow(n,C,w,L,k,W,null),n.renderBufferDirect(L,null,k,W,C,null),C.onAfterShadow(n,C,w,L,k,W,null)}}const z=C.children;for(let k=0,X=z.length;k<X;k++)E(z[k],w,L,g,v)}function I(C){C.target.removeEventListener("dispose",I);for(const L in l){const g=l[L],v=C.target.uuid;v in g&&(g[v].dispose(),delete g[v])}}}function Ov(n){function t(){let P=!1;const et=new ce;let q=null;const $=new ce(0,0,0,0);return{setMask:function(it){q!==it&&!P&&(n.colorMask(it,it,it,it),q=it)},setLocked:function(it){P=it},setClear:function(it,Rt,Wt,se,pe){pe===!0&&(it*=se,Rt*=se,Wt*=se),et.set(it,Rt,Wt,se),$.equals(et)===!1&&(n.clearColor(it,Rt,Wt,se),$.copy(et))},reset:function(){P=!1,q=null,$.set(-1,0,0,0)}}}function e(){let P=!1,et=null,q=null,$=null;return{setTest:function(it){it?dt(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(it){et!==it&&!P&&(n.depthMask(it),et=it)},setFunc:function(it){if(q!==it){switch(it){case fm:n.depthFunc(n.NEVER);break;case dm:n.depthFunc(n.ALWAYS);break;case pm:n.depthFunc(n.LESS);break;case Ca:n.depthFunc(n.LEQUAL);break;case mm:n.depthFunc(n.EQUAL);break;case _m:n.depthFunc(n.GEQUAL);break;case gm:n.depthFunc(n.GREATER);break;case xm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=it}},setLocked:function(it){P=it},setClear:function(it){$!==it&&(n.clearDepth(it),$=it)},reset:function(){P=!1,et=null,q=null,$=null}}}function i(){let P=!1,et=null,q=null,$=null,it=null,Rt=null,Wt=null,se=null,pe=null;return{setTest:function($t){P||($t?dt(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function($t){et!==$t&&!P&&(n.stencilMask($t),et=$t)},setFunc:function($t,cn,Je){(q!==$t||$!==cn||it!==Je)&&(n.stencilFunc($t,cn,Je),q=$t,$=cn,it=Je)},setOp:function($t,cn,Je){(Rt!==$t||Wt!==cn||se!==Je)&&(n.stencilOp($t,cn,Je),Rt=$t,Wt=cn,se=Je)},setLocked:function($t){P=$t},setClear:function($t){pe!==$t&&(n.clearStencil($t),pe=$t)},reset:function(){P=!1,et=null,q=null,$=null,it=null,Rt=null,Wt=null,se=null,pe=null}}}const r=new t,a=new e,o=new i,s=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,u=[],p=null,_=!1,x=null,m=null,f=null,b=null,y=null,E=null,I=null,C=new Gt(0,0,0),w=0,L=!1,g=null,v=null,A=null,z=null,k=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=G>=2);let H=null,j={};const ct=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),Bt=new ce().fromArray(ct),Ut=new ce().fromArray(ft);function V(P,et,q,$){const it=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(P,Rt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<q;Wt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,it):n.texImage2D(et+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,it);return Rt}const Q={};Q[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(n.DEPTH_TEST),a.setFunc(Ca),zt(!1),Mt(Yl),dt(n.CULL_FACE),yt(Fn);function dt(P){l[P]!==!0&&(n.enable(P),l[P]=!0)}function pt(P){l[P]!==!1&&(n.disable(P),l[P]=!1)}function At(P,et){return h[P]!==et?(n.bindFramebuffer(P,et),h[P]=et,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=et),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=et),!0):!1}function lt(P,et){let q=u,$=!1;if(P){q=d.get(et),q===void 0&&(q=[],d.set(et,q));const it=P.textures;if(q.length!==it.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Wt=it.length;Rt<Wt;Rt++)q[Rt]=n.COLOR_ATTACHMENT0+Rt;q.length=it.length,$=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,$=!0);$&&n.drawBuffers(q)}function st(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const ht={[jn]:n.FUNC_ADD,[Zp]:n.FUNC_SUBTRACT,[Kp]:n.FUNC_REVERSE_SUBTRACT};ht[jp]=n.MIN,ht[Jp]=n.MAX;const T={[Qp]:n.ZERO,[tm]:n.ONE,[em]:n.SRC_COLOR,[Ks]:n.SRC_ALPHA,[om]:n.SRC_ALPHA_SATURATE,[am]:n.DST_COLOR,[im]:n.DST_ALPHA,[nm]:n.ONE_MINUS_SRC_COLOR,[js]:n.ONE_MINUS_SRC_ALPHA,[sm]:n.ONE_MINUS_DST_COLOR,[rm]:n.ONE_MINUS_DST_ALPHA,[lm]:n.CONSTANT_COLOR,[cm]:n.ONE_MINUS_CONSTANT_COLOR,[hm]:n.CONSTANT_ALPHA,[um]:n.ONE_MINUS_CONSTANT_ALPHA};function yt(P,et,q,$,it,Rt,Wt,se,pe,$t){if(P===Fn){_===!0&&(pt(n.BLEND),_=!1);return}if(_===!1&&(dt(n.BLEND),_=!0),P!==$p){if(P!==x||$t!==L){if((m!==jn||y!==jn)&&(n.blendEquation(n.FUNC_ADD),m=jn,y=jn),$t)switch(P){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.ONE,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}f=null,b=null,E=null,I=null,C.set(0,0,0),w=0,x=P,L=$t}return}it=it||et,Rt=Rt||q,Wt=Wt||$,(et!==m||it!==y)&&(n.blendEquationSeparate(ht[et],ht[it]),m=et,y=it),(q!==f||$!==b||Rt!==E||Wt!==I)&&(n.blendFuncSeparate(T[q],T[$],T[Rt],T[Wt]),f=q,b=$,E=Rt,I=Wt),(se.equals(C)===!1||pe!==w)&&(n.blendColor(se.r,se.g,se.b,pe),C.copy(se),w=pe),x=P,L=!1}function St(P,et){P.side===vn?pt(n.CULL_FACE):dt(n.CULL_FACE);let q=P.side===Re;et&&(q=!q),zt(q),P.blending===Ni&&P.transparent===!1?yt(Fn):yt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const $=P.stencilWrite;o.setTest($),$&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Tt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(P){g!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),g=P)}function Mt(P){P!==Xp?(dt(n.CULL_FACE),P!==v&&(P===Yl?n.cullFace(n.BACK):P===qp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),v=P}function ne(P){P!==A&&(W&&n.lineWidth(P),A=P)}function Tt(P,et,q){P?(dt(n.POLYGON_OFFSET_FILL),(z!==et||k!==q)&&(n.polygonOffset(et,q),z=et,k=q)):pt(n.POLYGON_OFFSET_FILL)}function Dt(P){P?dt(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function R(P){P===void 0&&(P=n.TEXTURE0+X-1),H!==P&&(n.activeTexture(P),H=P)}function M(P,et,q){q===void 0&&(H===null?q=n.TEXTURE0+X-1:q=H);let $=j[q];$===void 0&&($={type:void 0,texture:void 0},j[q]=$),($.type!==P||$.texture!==et)&&(H!==q&&(n.activeTexture(q),H=q),n.bindTexture(P,et||Q[P]),$.type=P,$.texture=et)}function B(){const P=j[H];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Nt(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(P){Bt.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Bt.copy(P))}function gt(P){Ut.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ut.copy(P))}function It(P,et){let q=c.get(et);q===void 0&&(q=new WeakMap,c.set(et,q));let $=q.get(P);$===void 0&&($=n.getUniformBlockIndex(et,P.name),q.set(P,$))}function kt(P,et){const $=c.get(et).get(P);s.get(et)!==$&&(n.uniformBlockBinding(et,$,P.__bindingPointIndex),s.set(et,$))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},H=null,j={},h={},d=new WeakMap,u=[],p=null,_=!1,x=null,m=null,f=null,b=null,y=null,E=null,I=null,C=new Gt(0,0,0),w=0,L=!1,g=null,v=null,A=null,z=null,k=null,Bt.set(0,0,n.canvas.width,n.canvas.height),Ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:pt,bindFramebuffer:At,drawBuffers:lt,useProgram:st,setBlending:yt,setMaterial:St,setFlipSided:zt,setCullFace:Mt,setLineWidth:ne,setPolygonOffset:Tt,setScissorTest:Dt,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:mt,texImage3D:Vt,updateUBOMapping:It,uniformBlockBinding:kt,texStorage2D:Nt,texStorage3D:tt,texSubImage2D:Z,texSubImage3D:bt,compressedTexSubImage2D:ot,compressedTexSubImage3D:_t,scissor:Pt,viewport:gt,reset:ie}}function Gc(n,t,e,i){const r=Bv(i);switch(e){case Zh:return n*t;case jh:return n*t;case Jh:return n*t*2;case Wo:return n*t/r.components*r.byteLength;case Xo:return n*t/r.components*r.byteLength;case Qh:return n*t*2/r.components*r.byteLength;case qo:return n*t*2/r.components*r.byteLength;case Kh:return n*t*3/r.components*r.byteLength;case Ze:return n*t*4/r.components*r.byteLength;case Yo:return n*t*4/r.components*r.byteLength;case va:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:case Ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case io:case ao:return Math.max(n,16)*Math.max(t,8)/4;case no:case ro:return Math.max(n,8)*Math.max(t,8)/2;case so:case oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case po:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _o:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case xo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case yo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ya:case bo:case wo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tu:case To:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ao:case Ro:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bv(n){switch(n){case Sn:case qh:return{byteLength:1,components:1};case Tr:case Yh:case Dr:return{byteLength:2,components:1};case Go:case Vo:return{byteLength:2,components:4};case oi:case Ho:case rn:return{byteLength:4,components:1};case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function kv(n,t,e,i,r,a,o){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):Ua("canvas")}function x(R,M,B){let K=1;const J=Dt(R);if((J.width>B||J.height>B)&&(K=B/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(K*J.width),bt=Math.floor(K*J.height);d===void 0&&(d=_(Z,bt));const ot=M?_(Z,bt):d;return ot.width=Z,ot.height=bt,ot.getContext("2d").drawImage(R,0,0,Z,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+bt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Ae&&R.minFilter!==Ye}function f(R){n.generateMipmap(R)}function b(R,M,B,K,J=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=M;if(M===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),M===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),M===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),M===n.RGBA){const bt=J?La:Jt.getTransfer(K);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=bt===te?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(R,M){let B;return R?M===null||M===oi||M===Gi?B=n.DEPTH24_STENCIL8:M===rn?B=n.DEPTH32F_STENCIL8:M===Tr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===oi||M===Gi?B=n.DEPTH_COMPONENT24:M===rn?B=n.DEPTH_COMPONENT32F:M===Tr&&(B=n.DEPTH_COMPONENT16),B}function E(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ae&&R.minFilter!==Ye?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function I(R){const M=R.target;M.removeEventListener("dispose",I),w(M),M.isVideoTexture&&h.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),g(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,K=u.get(B);if(K){const J=K[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(R),Object.keys(K).length===0&&u.delete(B)}i.remove(R)}function L(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const B=R.source,K=u.get(B);delete K[M.__cacheKey],o.memory.textures--}function g(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let J=0;J<M.__webglFramebuffer[K].length;J++)n.deleteFramebuffer(M.__webglFramebuffer[K][J]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let K=0,J=B.length;K<J;K++){const Z=i.get(B[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(R)}let v=0;function A(){v=0}function z(){const R=v;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),v+=1,R}function k(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){const B=i.get(R);if(R.isVideoTexture&&ne(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(B,R,M);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function W(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Ut(B,R,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function G(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Ut(B,R,M);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function Y(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){V(B,R,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const H={[to]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},j={[Ae]:n.NEAREST,[Rm]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[Ye]:n.LINEAR,[cs]:n.LINEAR_MIPMAP_NEAREST,[ii]:n.LINEAR_MIPMAP_LINEAR},ct={[Dm]:n.NEVER,[Bm]:n.ALWAYS,[Im]:n.LESS,[nu]:n.LEQUAL,[Um]:n.EQUAL,[Om]:n.GEQUAL,[Nm]:n.GREATER,[Fm]:n.NOTEQUAL};function ft(R,M){if(M.type===rn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ye||M.magFilter===cs||M.magFilter===Gr||M.magFilter===ii||M.minFilter===Ye||M.minFilter===cs||M.minFilter===Gr||M.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,H[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,H[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,H[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,j[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ct[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ae||M.minFilter!==Gr&&M.minFilter!==ii||M.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Bt(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",I));const K=M.source;let J=u.get(K);J===void 0&&(J={},u.set(K,J));const Z=k(M);if(Z!==R.__cacheKey){J[Z]===void 0&&(J[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[Z].usedTimes++;const bt=J[R.__cacheKey];bt!==void 0&&(J[R.__cacheKey].usedTimes--,bt.usedTimes===0&&L(M)),R.__cacheKey=Z,R.__webglTexture=J[Z].texture}return B}function Ut(R,M,B){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);const J=Bt(R,M),Z=M.source;e.bindTexture(K,R.__webglTexture,n.TEXTURE0+B);const bt=i.get(Z);if(Z.version!==bt.__version||J===!0){e.activeTexture(n.TEXTURE0+B);const ot=Jt.getPrimaries(Jt.workingColorSpace),_t=M.colorSpace===Pn?null:Jt.getPrimaries(M.colorSpace),Nt=M.colorSpace===Pn||ot===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let tt=x(M.image,!1,r.maxTextureSize);tt=Tt(M,tt);const mt=a.convert(M.format,M.colorSpace),Vt=a.convert(M.type);let Pt=b(M.internalFormat,mt,Vt,M.colorSpace,M.isVideoTexture);ft(K,M);let gt;const It=M.mipmaps,kt=M.isVideoTexture!==!0,ie=bt.__version===void 0||J===!0,P=Z.dataReady,et=E(M,tt);if(M.isDepthTexture)Pt=y(M.format===Vi,M.type),ie&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Pt,tt.width,tt.height,0,mt,Vt,null));else if(M.isDataTexture)if(It.length>0){kt&&ie&&e.texStorage2D(n.TEXTURE_2D,et,Pt,It[0].width,It[0].height);for(let q=0,$=It.length;q<$;q++)gt=It[q],kt?P&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Vt,gt.data):e.texImage2D(n.TEXTURE_2D,q,Pt,gt.width,gt.height,0,mt,Vt,gt.data);M.generateMipmaps=!1}else kt?(ie&&e.texStorage2D(n.TEXTURE_2D,et,Pt,tt.width,tt.height),P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Vt,tt.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,tt.width,tt.height,0,mt,Vt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){kt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,et,Pt,It[0].width,It[0].height,tt.depth);for(let q=0,$=It.length;q<$;q++)if(gt=It[q],M.format!==Ze)if(mt!==null)if(kt){if(P)if(M.layerUpdates.size>0){const it=Gc(gt.width,gt.height,M.format,M.type);for(const Rt of M.layerUpdates){const Wt=gt.data.subarray(Rt*it/gt.data.BYTES_PER_ELEMENT,(Rt+1)*it/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Rt,gt.width,gt.height,1,mt,Wt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Pt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,tt.depth,mt,Vt,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Pt,gt.width,gt.height,tt.depth,0,mt,Vt,gt.data)}else{kt&&ie&&e.texStorage2D(n.TEXTURE_2D,et,Pt,It[0].width,It[0].height);for(let q=0,$=It.length;q<$;q++)gt=It[q],M.format!==Ze?mt!==null?kt?P&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?P&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Vt,gt.data):e.texImage2D(n.TEXTURE_2D,q,Pt,gt.width,gt.height,0,mt,Vt,gt.data)}else if(M.isDataArrayTexture)if(kt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,et,Pt,tt.width,tt.height,tt.depth),P)if(M.layerUpdates.size>0){const q=Gc(tt.width,tt.height,M.format,M.type);for(const $ of M.layerUpdates){const it=tt.data.subarray($*q/tt.data.BYTES_PER_ELEMENT,($+1)*q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,mt,Vt,it)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Vt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,mt,Vt,tt.data);else if(M.isData3DTexture)kt?(ie&&e.texStorage3D(n.TEXTURE_3D,et,Pt,tt.width,tt.height,tt.depth),P&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Vt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,mt,Vt,tt.data);else if(M.isFramebufferTexture){if(ie)if(kt)e.texStorage2D(n.TEXTURE_2D,et,Pt,tt.width,tt.height);else{let q=tt.width,$=tt.height;for(let it=0;it<et;it++)e.texImage2D(n.TEXTURE_2D,it,Pt,q,$,0,mt,Vt,null),q>>=1,$>>=1}}else if(It.length>0){if(kt&&ie){const q=Dt(It[0]);e.texStorage2D(n.TEXTURE_2D,et,Pt,q.width,q.height)}for(let q=0,$=It.length;q<$;q++)gt=It[q],kt?P&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,mt,Vt,gt):e.texImage2D(n.TEXTURE_2D,q,Pt,mt,Vt,gt);M.generateMipmaps=!1}else if(kt){if(ie){const q=Dt(tt);e.texStorage2D(n.TEXTURE_2D,et,Pt,q.width,q.height)}P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Vt,tt)}else e.texImage2D(n.TEXTURE_2D,0,Pt,mt,Vt,tt);m(M)&&f(K),bt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function V(R,M,B){if(M.image.length!==6)return;const K=Bt(R,M),J=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const Z=i.get(J);if(J.version!==Z.__version||K===!0){e.activeTexture(n.TEXTURE0+B);const bt=Jt.getPrimaries(Jt.workingColorSpace),ot=M.colorSpace===Pn?null:Jt.getPrimaries(M.colorSpace),_t=M.colorSpace===Pn||bt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Nt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,mt=[];for(let $=0;$<6;$++)!Nt&&!tt?mt[$]=x(M.image[$],!0,r.maxCubemapSize):mt[$]=tt?M.image[$].image:M.image[$],mt[$]=Tt(M,mt[$]);const Vt=mt[0],Pt=a.convert(M.format,M.colorSpace),gt=a.convert(M.type),It=b(M.internalFormat,Pt,gt,M.colorSpace),kt=M.isVideoTexture!==!0,ie=Z.__version===void 0||K===!0,P=J.dataReady;let et=E(M,Vt);ft(n.TEXTURE_CUBE_MAP,M);let q;if(Nt){kt&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,et,It,Vt.width,Vt.height);for(let $=0;$<6;$++){q=mt[$].mipmaps;for(let it=0;it<q.length;it++){const Rt=q[it];M.format!==Ze?Pt!==null?kt?P&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,0,0,Rt.width,Rt.height,Pt,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,It,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,0,0,Rt.width,Rt.height,Pt,gt,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,It,Rt.width,Rt.height,0,Pt,gt,Rt.data)}}}else{if(q=M.mipmaps,kt&&ie){q.length>0&&et++;const $=Dt(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,et,It,$.width,$.height)}for(let $=0;$<6;$++)if(tt){kt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,mt[$].width,mt[$].height,Pt,gt,mt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,It,mt[$].width,mt[$].height,0,Pt,gt,mt[$].data);for(let it=0;it<q.length;it++){const Wt=q[it].image[$].image;kt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,0,0,Wt.width,Wt.height,Pt,gt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,It,Wt.width,Wt.height,0,Pt,gt,Wt.data)}}else{kt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pt,gt,mt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,It,Pt,gt,mt[$]);for(let it=0;it<q.length;it++){const Rt=q[it];kt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,0,0,Pt,gt,Rt.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,It,Pt,gt,Rt.image[$])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),Z.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Q(R,M,B,K,J,Z){const bt=a.convert(B.format,B.colorSpace),ot=a.convert(B.type),_t=b(B.internalFormat,bt,ot,B.colorSpace);if(!i.get(M).__hasExternalTextures){const tt=Math.max(1,M.width>>Z),mt=Math.max(1,M.height>>Z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,_t,tt,mt,M.depth,0,bt,ot,null):e.texImage2D(J,Z,_t,tt,mt,0,bt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Mt(M)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,i.get(B).__webglTexture,0,zt(M)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,J,i.get(B).__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(R,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,J=K&&K.isDepthTexture?K.type:null,Z=y(M.stencilBuffer,J),bt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=zt(M);Mt(M)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,Z,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,R)}else{const K=M.textures;for(let J=0;J<K.length;J++){const Z=K[J],bt=a.convert(Z.format,Z.colorSpace),ot=a.convert(Z.type),_t=b(Z.internalFormat,bt,ot,Z.colorSpace),Nt=zt(M);B&&Mt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,_t,M.width,M.height):Mt(M)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,_t,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,_t,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const K=i.get(M.depthTexture).__webglTexture,J=zt(M);if(M.depthTexture.format===Fi)Mt(M)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(M.depthTexture.format===Vi)Mt(M)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function At(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pt(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=n.createRenderbuffer(),dt(M.__webglDepthbuffer[K],R,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),dt(M.__webglDepthbuffer,R,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(R,M,B){const K=i.get(R);M!==void 0&&Q(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&At(R)}function st(R){const M=R.texture,B=i.get(R),K=i.get(M);R.addEventListener("dispose",C);const J=R.textures,Z=R.isWebGLCubeRenderTarget===!0,bt=J.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let _t=0;_t<M.mipmaps.length;_t++)B.__webglFramebuffer[ot][_t]=n.createFramebuffer()}else B.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)B.__webglFramebuffer[ot]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(bt)for(let ot=0,_t=J.length;ot<_t;ot++){const Nt=i.get(J[ot]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Mt(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const _t=J[ot];B.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const Nt=a.convert(_t.format,_t.colorSpace),tt=a.convert(_t.type),mt=b(_t.internalFormat,Nt,tt,_t.colorSpace,R.isXRRenderTarget===!0),Vt=zt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,mt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ft(n.TEXTURE_CUBE_MAP,M);for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Q(B.__webglFramebuffer[ot][_t],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t);else Q(B.__webglFramebuffer[ot],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(M)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ot=0,_t=J.length;ot<_t;ot++){const Nt=J[ot],tt=i.get(Nt);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),ft(n.TEXTURE_2D,Nt),Q(B.__webglFramebuffer,R,Nt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Nt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),ft(ot,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Q(B.__webglFramebuffer[_t],R,M,n.COLOR_ATTACHMENT0,ot,_t);else Q(B.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ot,0);m(M)&&f(ot),e.unbindTexture()}R.depthBuffer&&At(R)}function ht(R){const M=R.textures;for(let B=0,K=M.length;B<K;B++){const J=M[B];if(m(J)){const Z=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,bt=i.get(J).__webglTexture;e.bindTexture(Z,bt),f(Z),e.unbindTexture()}}}const T=[],yt=[];function St(R){if(R.samples>0){if(Mt(R)===!1){const M=R.textures,B=R.width,K=R.height;let J=n.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(R),ot=M.length>1;if(ot)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const Nt=i.get(M[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Nt,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,J,n.NEAREST),c===!0&&(T.length=0,yt.length=0,T.push(n.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.resolveDepthBuffer===!1&&(T.push(Z),yt.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const Nt=i.get(M[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function zt(R){return Math.min(r.maxSamples,R.samples)}function Mt(R){const M=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ne(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Tt(R,M){const B=R.colorSpace,K=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==zn&&B!==Pn&&(Jt.getTransfer(B)===te?(K!==Ze||J!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=A,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=lt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Mt}function zv(n,t){function e(i,r=Pn){let a;const o=Jt.getTransfer(r);if(i===Sn)return n.UNSIGNED_BYTE;if(i===Go)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qh)return n.BYTE;if(i===Yh)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===Ho)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===rn)return n.FLOAT;if(i===Dr)return n.HALF_FLOAT;if(i===Zh)return n.ALPHA;if(i===Kh)return n.RGB;if(i===Ze)return n.RGBA;if(i===jh)return n.LUMINANCE;if(i===Jh)return n.LUMINANCE_ALPHA;if(i===Fi)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===Wo)return n.RED;if(i===Xo)return n.RED_INTEGER;if(i===Qh)return n.RG;if(i===qo)return n.RG_INTEGER;if(i===Yo)return n.RGBA_INTEGER;if(i===va||i===Ma||i===Sa||i===Ea)if(o===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===va)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===va)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===no||i===io||i===ro||i===ao)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===no)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===io)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ro)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ao)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===so||i===oo||i===lo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===so||i===oo)return o===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===lo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===_o||i===go||i===xo||i===vo||i===Mo||i===So||i===Eo||i===yo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===co)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ho)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===po)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_o)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===go)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===So)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ya||i===bo||i===wo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===ya)return o===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tu||i===To||i===Ao||i===Ro)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===ya)return a.COMPRESSED_RED_RGTC1_EXT;if(i===To)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ao)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ro)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Hv extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dr extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gv={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new dr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new ye,a=t.properties.get(r);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new kn({vertexShader:Vv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new Ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qv extends Zi{constructor(t,e){super();const i=this;let r=null,a=1,o=null,s="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,_=null;const x=new Xv,m=e.getContextAttributes();let f=null,b=null;const y=[],E=[],I=new Xt;let C=null;const w=new Oe;w.layers.enable(1),w.viewport=new ce;const L=new Oe;L.layers.enable(2),L.viewport=new ce;const g=[w,L],v=new Hv;v.layers.enable(1),v.layers.enable(2);let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=y[V];return Q===void 0&&(Q=new Ns,y[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=y[V];return Q===void 0&&(Q=new Ns,y[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=y[V];return Q===void 0&&(Q=new Ns,y[V]=Q),Q.getHandSpace()};function k(V){const Q=E.indexOf(V.inputSource);if(Q===-1)return;const dt=y[Q];dt!==void 0&&(dt.update(V.inputSource,V.frame,l||o),dt.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",W);for(let V=0;V<y.length;V++){const Q=E[V];Q!==null&&(E[V]=null,y[V].disconnect(Q))}A=null,z=null,x.reset(),t.setRenderTarget(f),p=null,u=null,d=null,r=null,b=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new li(p.framebufferWidth,p.framebufferHeight,{format:Ze,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,dt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Vi:Fi,dt=m.stencil?Gi:oi);const At={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:a};d=new XRWebGLBinding(r,e),u=d.createProjectionLayer(At),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new li(u.textureWidth,u.textureHeight,{format:Ze,type:Sn,depthTexture:new gu(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),Ut.setContext(r),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(V){for(let Q=0;Q<V.removed.length;Q++){const dt=V.removed[Q],pt=E.indexOf(dt);pt>=0&&(E[pt]=null,y[pt].disconnect(dt))}for(let Q=0;Q<V.added.length;Q++){const dt=V.added[Q];let pt=E.indexOf(dt);if(pt===-1){for(let lt=0;lt<y.length;lt++)if(lt>=E.length){E.push(dt),pt=lt;break}else if(E[lt]===null){E[lt]=dt,pt=lt;break}if(pt===-1)break}const At=y[pt];At&&At.connect(dt)}}const G=new N,Y=new N;function H(V,Q,dt){G.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(dt.matrixWorld);const pt=G.distanceTo(Y),At=Q.projectionMatrix.elements,lt=dt.projectionMatrix.elements,st=At[14]/(At[10]-1),ht=At[14]/(At[10]+1),T=(At[9]+1)/At[5],yt=(At[9]-1)/At[5],St=(At[8]-1)/At[0],zt=(lt[8]+1)/lt[0],Mt=st*St,ne=st*zt,Tt=pt/(-St+zt),Dt=Tt*-St;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Dt),V.translateZ(Tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const R=st+Tt,M=ht+Tt,B=Mt-Dt,K=ne+(pt-Dt),J=T*ht/M*R,Z=yt*ht/M*R;V.projectionMatrix.makePerspective(B,K,J,Z,R,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;x.texture!==null&&(V.near=x.depthNear,V.far=x.depthFar),v.near=L.near=w.near=V.near,v.far=L.far=w.far=V.far,(A!==v.near||z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,z=v.far,w.near=A,w.far=z,L.near=A,L.far=z,w.updateProjectionMatrix(),L.updateProjectionMatrix(),V.updateProjectionMatrix());const Q=V.parent,dt=v.cameras;j(v,Q);for(let pt=0;pt<dt.length;pt++)j(dt[pt],Q);dt.length===2?H(v,w,L):v.projectionMatrix.copy(w.projectionMatrix),ct(V,v,Q)};function ct(V,Q,dt){dt===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(dt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Co*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ft=null;function Bt(V,Q){if(h=Q.getViewerPose(l||o),_=Q,h!==null){const dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let pt=!1;dt.length!==v.cameras.length&&(v.cameras.length=0,pt=!0);for(let lt=0;lt<dt.length;lt++){const st=dt[lt];let ht=null;if(p!==null)ht=p.getViewport(st);else{const yt=d.getViewSubImage(u,st);ht=yt.viewport,lt===0&&(t.setRenderTargetTextures(b,yt.colorTexture,u.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(b))}let T=g[lt];T===void 0&&(T=new Oe,T.layers.enable(lt),T.viewport=new ce,g[lt]=T),T.matrix.fromArray(st.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(st.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(ht.x,ht.y,ht.width,ht.height),lt===0&&(v.matrix.copy(T.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pt===!0&&v.cameras.push(T)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")){const lt=d.getDepthInformation(dt[0]);lt&&lt.isValid&&lt.texture&&x.init(t,lt,r.renderState)}}for(let dt=0;dt<y.length;dt++){const pt=E[dt],At=y[dt];pt!==null&&At!==void 0&&At.update(pt,Q,l||o)}ft&&ft(V,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ut=new mu;Ut.setAnimationLoop(Bt),this.setAnimationLoop=function(V){ft=V},this.dispose=function(){}}}const $n=new on,Yv=new Qt;function $v(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,fu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(a(m,f),_(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&s(m,f)):f.isPointsMaterial?c(m,f,b,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),y=b.envMap,E=b.envMapRotation;y&&(m.envMap.value=y,$n.copy(E),$n.x*=-1,$n.y*=-1,$n.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler($n)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function s(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zv(n,t,e,i){let r={},a={},o=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const E=y.program;i.uniformBlockBinding(b,E)}function l(b,y){let E=r[b.id];E===void 0&&(_(b),E=h(b),r[b.id]=E,b.addEventListener("dispose",m));const I=y.program;i.updateUBOMapping(b,I);const C=t.render.frame;a[b.id]!==C&&(u(b),a[b.id]=C)}function h(b){const y=d();b.__bindingPointIndex=y;const E=n.createBuffer(),I=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function d(){for(let b=0;b<s;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const y=r[b.id],E=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,w=E.length;C<w;C++){const L=Array.isArray(E[C])?E[C]:[E[C]];for(let g=0,v=L.length;g<v;g++){const A=L[g];if(p(A,C,g,I)===!0){const z=A.__offset,k=Array.isArray(A.value)?A.value:[A.value];let X=0;for(let W=0;W<k.length;W++){const G=k[W],Y=x(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,z+X,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,y,E,I){const C=b.value,w=y+"_"+E;if(I[w]===void 0)return typeof C=="number"||typeof C=="boolean"?I[w]=C:I[w]=C.clone(),!0;{const L=I[w];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return I[w]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function _(b){const y=b.uniforms;let E=0;const I=16;for(let w=0,L=y.length;w<L;w++){const g=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,A=g.length;v<A;v++){const z=g[v],k=Array.isArray(z.value)?z.value:[z.value];for(let X=0,W=k.length;X<W;X++){const G=k[X],Y=x(G),H=E%I,j=H%Y.boundary,ct=H+j;E+=j,ct!==0&&I-ct<Y.storage&&(E+=I-ct),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Y.storage}}}const C=E%I;return C>0&&(E+=I-C),b.__size=E,b.__cache={},this}function x(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},a={}}return{bind:c,update:l,dispose:f}}class Kv{constructor(t={}){const{canvas:e=zm(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const f=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=On,this.toneMappingExposure=1;const y=this;let E=!1,I=0,C=0,w=null,L=-1,g=null;const v=new ce,A=new ce;let z=null;const k=new Gt(0);let X=0,W=e.width,G=e.height,Y=1,H=null,j=null;const ct=new ce(0,0,W,G),ft=new ce(0,0,W,G);let Bt=!1;const Ut=new Zo;let V=!1,Q=!1;const dt=new Qt,pt=new N,At=new ce,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function ht(){return w===null?Y:1}let T=i;function yt(S,D){return e.getContext(S,D)}try{const S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zo}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",it,!1),T===null){const D="webgl2";if(T=yt(D,S),T===null)throw yt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let St,zt,Mt,ne,Tt,Dt,R,M,B,K,J,Z,bt,ot,_t,Nt,tt,mt,Vt,Pt,gt,It,kt,ie;function P(){St=new nx(T),St.init(),It=new zv(T,St),zt=new K0(T,St,t,It),Mt=new Ov(T),ne=new ax(T),Tt=new yv,Dt=new kv(T,St,Mt,Tt,zt,It,ne),R=new J0(y),M=new ex(y),B=new f_(T),kt=new $0(T,B),K=new ix(T,B,ne,kt),J=new ox(T,K,B,ne),Vt=new sx(T,zt,Dt),Nt=new j0(Tt),Z=new Ev(y,R,M,St,zt,kt,Nt),bt=new $v(y,Tt),ot=new wv,_t=new Pv(St),mt=new Y0(y,R,M,Mt,J,u,c),tt=new Fv(y,J,zt),ie=new Zv(T,ne,zt,Mt),Pt=new Z0(T,St,ne),gt=new rx(T,St,ne),ne.programs=Z.programs,y.capabilities=zt,y.extensions=St,y.properties=Tt,y.renderLists=ot,y.shadowMap=tt,y.state=Mt,y.info=ne}P();const et=new qv(y,T);this.xr=et,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const S=St.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=St.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(W,G,!1))},this.getSize=function(S){return S.set(W,G)},this.setSize=function(S,D,F=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,G=D,e.width=Math.floor(S*Y),e.height=Math.floor(D*Y),F===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(W*Y,G*Y).floor()},this.setDrawingBufferSize=function(S,D,F){W=S,G=D,Y=F,e.width=Math.floor(S*F),e.height=Math.floor(D*F),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(ct)},this.setViewport=function(S,D,F,O){S.isVector4?ct.set(S.x,S.y,S.z,S.w):ct.set(S,D,F,O),Mt.viewport(v.copy(ct).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(ft)},this.setScissor=function(S,D,F,O){S.isVector4?ft.set(S.x,S.y,S.z,S.w):ft.set(S,D,F,O),Mt.scissor(A.copy(ft).multiplyScalar(Y).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(S){Mt.setScissorTest(Bt=S)},this.setOpaqueSort=function(S){H=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(S=!0,D=!0,F=!0){let O=0;if(S){let U=!1;if(w!==null){const nt=w.texture.format;U=nt===Yo||nt===qo||nt===Xo}if(U){const nt=w.texture.type,ut=nt===Sn||nt===oi||nt===Tr||nt===Gi||nt===Go||nt===Vo,xt=mt.getClearColor(),vt=mt.getClearAlpha(),Ct=xt.r,Lt=xt.g,wt=xt.b;ut?(p[0]=Ct,p[1]=Lt,p[2]=wt,p[3]=vt,T.clearBufferuiv(T.COLOR,0,p)):(_[0]=Ct,_[1]=Lt,_[2]=wt,_[3]=vt,T.clearBufferiv(T.COLOR,0,_))}else O|=T.COLOR_BUFFER_BIT}D&&(O|=T.DEPTH_BUFFER_BIT),F&&(O|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ot.dispose(),_t.dispose(),Tt.dispose(),R.dispose(),M.dispose(),J.dispose(),kt.dispose(),ie.dispose(),Z.dispose(),et.dispose(),et.removeEventListener("sessionstart",Je),et.removeEventListener("sessionend",tl),Gn.stop()};function q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=ne.autoReset,D=tt.enabled,F=tt.autoUpdate,O=tt.needsUpdate,U=tt.type;P(),ne.autoReset=S,tt.enabled=D,tt.autoUpdate=F,tt.needsUpdate=O,tt.type=U}function it(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Rt(S){const D=S.target;D.removeEventListener("dispose",Rt),Wt(D)}function Wt(S){se(S),Tt.remove(S)}function se(S){const D=Tt.get(S).programs;D!==void 0&&(D.forEach(function(F){Z.releaseProgram(F)}),S.isShaderMaterial&&Z.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,F,O,U,nt){D===null&&(D=lt);const ut=U.isMesh&&U.matrixWorld.determinant()<0,xt=Du(S,D,F,O,U);Mt.setMaterial(O,ut);let vt=F.index,Ct=1;if(O.wireframe===!0){if(vt=K.getWireframeAttribute(F),vt===void 0)return;Ct=2}const Lt=F.drawRange,wt=F.attributes.position;let Zt=Lt.start*Ct,re=(Lt.start+Lt.count)*Ct;nt!==null&&(Zt=Math.max(Zt,nt.start*Ct),re=Math.min(re,(nt.start+nt.count)*Ct)),vt!==null?(Zt=Math.max(Zt,0),re=Math.min(re,vt.count)):wt!=null&&(Zt=Math.max(Zt,0),re=Math.min(re,wt.count));const ae=re-Zt;if(ae<0||ae===1/0)return;kt.setup(U,O,xt,F,vt);let Ce,Kt=Pt;if(vt!==null&&(Ce=B.get(vt),Kt=gt,Kt.setIndex(Ce)),U.isMesh)O.wireframe===!0?(Mt.setLineWidth(O.wireframeLinewidth*ht()),Kt.setMode(T.LINES)):Kt.setMode(T.TRIANGLES);else if(U.isLine){let Et=O.linewidth;Et===void 0&&(Et=1),Mt.setLineWidth(Et*ht()),U.isLineSegments?Kt.setMode(T.LINES):U.isLineLoop?Kt.setMode(T.LINE_LOOP):Kt.setMode(T.LINE_STRIP)}else U.isPoints?Kt.setMode(T.POINTS):U.isSprite&&Kt.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Et=U._multiDrawStarts,me=U._multiDrawCounts,jt=U._multiDrawCount,Ge=vt?B.get(vt).bytesPerElement:1,fi=Tt.get(O).currentProgram.getUniforms();for(let Le=0;Le<jt;Le++)fi.setValue(T,"_gl_DrawID",Le),Kt.render(Et[Le]/Ge,me[Le])}else if(U.isInstancedMesh)Kt.renderInstances(Zt,ae,U.count);else if(F.isInstancedBufferGeometry){const Et=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,me=Math.min(F.instanceCount,Et);Kt.renderInstances(Zt,ae,me)}else Kt.render(Zt,ae)};function pe(S,D,F){S.transparent===!0&&S.side===vn&&S.forceSinglePass===!1?(S.side=Re,S.needsUpdate=!0,Fr(S,D,F),S.side=Bn,S.needsUpdate=!0,Fr(S,D,F),S.side=vn):Fr(S,D,F)}this.compile=function(S,D,F=null){F===null&&(F=S),m=_t.get(F),m.init(D),b.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),S!==F&&S.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const O=new Set;return S.traverse(function(U){const nt=U.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const xt=nt[ut];pe(xt,F,U),O.add(xt)}else pe(nt,F,U),O.add(nt)}),b.pop(),m=null,O},this.compileAsync=function(S,D,F=null){const O=this.compile(S,D,F);return new Promise(U=>{function nt(){if(O.forEach(function(ut){Tt.get(ut).currentProgram.isReady()&&O.delete(ut)}),O.size===0){U(S);return}setTimeout(nt,10)}St.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let $t=null;function cn(S){$t&&$t(S)}function Je(){Gn.stop()}function tl(){Gn.start()}const Gn=new mu;Gn.setAnimationLoop(cn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(S){$t=S,et.setAnimationLoop(S),S===null?Gn.stop():Gn.start()},et.addEventListener("sessionstart",Je),et.addEventListener("sessionend",tl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(D),D=et.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,D,w),m=_t.get(S,b.length),m.init(D),b.push(m),dt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ut.setFromProjectionMatrix(dt),Q=this.localClippingEnabled,V=Nt.init(this.clippingPlanes,Q),x=ot.get(S,f.length),x.init(),f.push(x),et.enabled===!0&&et.isPresenting===!0){const nt=y.xr.getDepthSensingMesh();nt!==null&&Xa(nt,D,-1/0,y.sortObjects)}Xa(S,D,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(H,j),st=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,st&&mt.addToRenderList(x,S),this.info.render.frame++,V===!0&&Nt.beginShadows();const F=m.state.shadowsArray;tt.render(F,S,D),V===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=x.opaque,U=x.transmissive;if(m.setupLights(),D.isArrayCamera){const nt=D.cameras;if(U.length>0)for(let ut=0,xt=nt.length;ut<xt;ut++){const vt=nt[ut];nl(O,U,S,vt)}st&&mt.render(S);for(let ut=0,xt=nt.length;ut<xt;ut++){const vt=nt[ut];el(x,S,vt,vt.viewport)}}else U.length>0&&nl(O,U,S,D),st&&mt.render(S),el(x,S,D);w!==null&&(Dt.updateMultisampleRenderTarget(w),Dt.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(y,S,D),kt.resetDefaultState(),L=-1,g=null,b.pop(),b.length>0?(m=b[b.length-1],V===!0&&Nt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Xa(S,D,F,O){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ut.intersectsSprite(S)){O&&At.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);const ut=J.update(S),xt=S.material;xt.visible&&x.push(S,ut,xt,F,At.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ut.intersectsObject(S))){const ut=J.update(S),xt=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),At.copy(S.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),At.copy(ut.boundingSphere.center)),At.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(xt)){const vt=ut.groups;for(let Ct=0,Lt=vt.length;Ct<Lt;Ct++){const wt=vt[Ct],Zt=xt[wt.materialIndex];Zt&&Zt.visible&&x.push(S,ut,Zt,F,At.z,wt)}}else xt.visible&&x.push(S,ut,xt,F,At.z,null)}}const nt=S.children;for(let ut=0,xt=nt.length;ut<xt;ut++)Xa(nt[ut],D,F,O)}function el(S,D,F,O){const U=S.opaque,nt=S.transmissive,ut=S.transparent;m.setupLightsView(F),V===!0&&Nt.setGlobalState(y.clippingPlanes,F),O&&Mt.viewport(v.copy(O)),U.length>0&&Nr(U,D,F),nt.length>0&&Nr(nt,D,F),ut.length>0&&Nr(ut,D,F),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function nl(S,D,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new li(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?Dr:Sn,minFilter:ii,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const nt=m.state.transmissionRenderTarget[O.id],ut=O.viewport||v;nt.setSize(ut.z,ut.w);const xt=y.getRenderTarget();y.setRenderTarget(nt),y.getClearColor(k),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),st&&mt.render(F);const vt=y.toneMapping;y.toneMapping=On;const Ct=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),V===!0&&Nt.setGlobalState(y.clippingPlanes,O),Nr(S,F,O),Dt.updateMultisampleRenderTarget(nt),Dt.updateRenderTargetMipmap(nt),St.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let wt=0,Zt=D.length;wt<Zt;wt++){const re=D[wt],ae=re.object,Ce=re.geometry,Kt=re.material,Et=re.group;if(Kt.side===vn&&ae.layers.test(O.layers)){const me=Kt.side;Kt.side=Re,Kt.needsUpdate=!0,il(ae,F,O,Ce,Kt,Et),Kt.side=me,Kt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Dt.updateMultisampleRenderTarget(nt),Dt.updateRenderTargetMipmap(nt))}y.setRenderTarget(xt),y.setClearColor(k,X),Ct!==void 0&&(O.viewport=Ct),y.toneMapping=vt}function Nr(S,D,F){const O=D.isScene===!0?D.overrideMaterial:null;for(let U=0,nt=S.length;U<nt;U++){const ut=S[U],xt=ut.object,vt=ut.geometry,Ct=O===null?ut.material:O,Lt=ut.group;xt.layers.test(F.layers)&&il(xt,D,F,vt,Ct,Lt)}}function il(S,D,F,O,U,nt){S.onBeforeRender(y,D,F,O,U,nt),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.transparent===!0&&U.side===vn&&U.forceSinglePass===!1?(U.side=Re,U.needsUpdate=!0,y.renderBufferDirect(F,D,O,U,S,nt),U.side=Bn,U.needsUpdate=!0,y.renderBufferDirect(F,D,O,U,S,nt),U.side=vn):y.renderBufferDirect(F,D,O,U,S,nt),S.onAfterRender(y,D,F,O,U,nt)}function Fr(S,D,F){D.isScene!==!0&&(D=lt);const O=Tt.get(S),U=m.state.lights,nt=m.state.shadowsArray,ut=U.state.version,xt=Z.getParameters(S,U.state,nt,D,F),vt=Z.getProgramCacheKey(xt);let Ct=O.programs;O.environment=S.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(S.isMeshStandardMaterial?M:R).get(S.envMap||O.environment),O.envMapRotation=O.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",Rt),Ct=new Map,O.programs=Ct);let Lt=Ct.get(vt);if(Lt!==void 0){if(O.currentProgram===Lt&&O.lightsStateVersion===ut)return al(S,xt),Lt}else xt.uniforms=Z.getUniforms(S),S.onBeforeCompile(xt,y),Lt=Z.acquireProgram(xt,vt),Ct.set(vt,Lt),O.uniforms=xt.uniforms;const wt=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=Nt.uniform),al(S,xt),O.needsLights=Uu(S),O.lightsStateVersion=ut,O.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Lt,O.uniformsList=null,Lt}function rl(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=wa.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function al(S,D){const F=Tt.get(S);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Du(S,D,F,O,U){D.isScene!==!0&&(D=lt),Dt.resetTextureUnits();const nt=D.fog,ut=O.isMeshStandardMaterial?D.environment:null,xt=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:zn,vt=(O.isMeshStandardMaterial?M:R).get(O.envMap||ut),Ct=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Lt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),wt=!!F.morphAttributes.position,Zt=!!F.morphAttributes.normal,re=!!F.morphAttributes.color;let ae=On;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ae=y.toneMapping);const Ce=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Kt=Ce!==void 0?Ce.length:0,Et=Tt.get(O),me=m.state.lights;if(V===!0&&(Q===!0||S!==g)){const Ne=S===g&&O.id===L;Nt.setState(O,S,Ne)}let jt=!1;O.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==me.state.version||Et.outputColorSpace!==xt||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==vt||O.fog===!0&&Et.fog!==nt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Nt.numPlanes||Et.numIntersection!==Nt.numIntersection)||Et.vertexAlphas!==Ct||Et.vertexTangents!==Lt||Et.morphTargets!==wt||Et.morphNormals!==Zt||Et.morphColors!==re||Et.toneMapping!==ae||Et.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,Et.__version=O.version);let Ge=Et.currentProgram;jt===!0&&(Ge=Fr(O,D,U));let fi=!1,Le=!1,qa=!1;const oe=Ge.getUniforms(),yn=Et.uniforms;if(Mt.useProgram(Ge.program)&&(fi=!0,Le=!0,qa=!0),O.id!==L&&(L=O.id,Le=!0),fi||g!==S){oe.setValue(T,"projectionMatrix",S.projectionMatrix),oe.setValue(T,"viewMatrix",S.matrixWorldInverse);const Ne=oe.map.cameraPosition;Ne!==void 0&&Ne.setValue(T,pt.setFromMatrixPosition(S.matrixWorld)),zt.logarithmicDepthBuffer&&oe.setValue(T,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&oe.setValue(T,"isOrthographic",S.isOrthographicCamera===!0),g!==S&&(g=S,Le=!0,qa=!0)}if(U.isSkinnedMesh){oe.setOptional(T,U,"bindMatrix"),oe.setOptional(T,U,"bindMatrixInverse");const Ne=U.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),oe.setValue(T,"boneTexture",Ne.boneTexture,Dt))}U.isBatchedMesh&&(oe.setOptional(T,U,"batchingTexture"),oe.setValue(T,"batchingTexture",U._matricesTexture,Dt),oe.setOptional(T,U,"batchingIdTexture"),oe.setValue(T,"batchingIdTexture",U._indirectTexture,Dt),oe.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(T,"batchingColorTexture",U._colorsTexture,Dt));const Ya=F.morphAttributes;if((Ya.position!==void 0||Ya.normal!==void 0||Ya.color!==void 0)&&Vt.update(U,F,Ge),(Le||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,oe.setValue(T,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(yn.envMap.value=vt,yn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),Le&&(oe.setValue(T,"toneMappingExposure",y.toneMappingExposure),Et.needsLights&&Iu(yn,qa),nt&&O.fog===!0&&bt.refreshFogUniforms(yn,nt),bt.refreshMaterialUniforms(yn,O,Y,G,m.state.transmissionRenderTarget[S.id]),wa.upload(T,rl(Et),yn,Dt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(wa.upload(T,rl(Et),yn,Dt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&oe.setValue(T,"center",U.center),oe.setValue(T,"modelViewMatrix",U.modelViewMatrix),oe.setValue(T,"normalMatrix",U.normalMatrix),oe.setValue(T,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ne=O.uniformsGroups;for(let $a=0,Nu=Ne.length;$a<Nu;$a++){const sl=Ne[$a];ie.update(sl,Ge),ie.bind(sl,Ge)}}return Ge}function Iu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Uu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,D,F){Tt.get(S.texture).__webglTexture=D,Tt.get(S.depthTexture).__webglTexture=F;const O=Tt.get(S);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const F=Tt.get(S);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,F=0){w=S,I=D,C=F;let O=!0,U=null,nt=!1,ut=!1;if(S){const vt=Tt.get(S);vt.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(T.FRAMEBUFFER,null),O=!1):vt.__webglFramebuffer===void 0?Dt.setupRenderTarget(S):vt.__hasExternalTextures&&Dt.rebindTextures(S,Tt.get(S.texture).__webglTexture,Tt.get(S.depthTexture).__webglTexture);const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ut=!0);const Lt=Tt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?U=Lt[D][F]:U=Lt[D],nt=!0):S.samples>0&&Dt.useMultisampledRTT(S)===!1?U=Tt.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?U=Lt[F]:U=Lt,v.copy(S.viewport),A.copy(S.scissor),z=S.scissorTest}else v.copy(ct).multiplyScalar(Y).floor(),A.copy(ft).multiplyScalar(Y).floor(),z=Bt;if(Mt.bindFramebuffer(T.FRAMEBUFFER,U)&&O&&Mt.drawBuffers(S,U),Mt.viewport(v),Mt.scissor(A),Mt.setScissorTest(z),nt){const vt=Tt.get(S.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,vt.__webglTexture,F)}else if(ut){const vt=Tt.get(S.texture),Ct=D||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,vt.__webglTexture,F||0,Ct)}L=-1},this.readRenderTargetPixels=function(S,D,F,O,U,nt,ut){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Mt.bindFramebuffer(T.FRAMEBUFFER,xt);try{const vt=S.texture,Ct=vt.format,Lt=vt.type;if(!zt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-O&&F>=0&&F<=S.height-U&&T.readPixels(D,F,O,U,It.convert(Ct),It.convert(Lt),nt)}finally{const vt=w!==null?Tt.get(w).__webglFramebuffer:null;Mt.bindFramebuffer(T.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(S,D,F,O,U,nt,ut){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Mt.bindFramebuffer(T.FRAMEBUFFER,xt);try{const vt=S.texture,Ct=vt.format,Lt=vt.type;if(!zt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-O&&F>=0&&F<=S.height-U){const wt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,wt),T.bufferData(T.PIXEL_PACK_BUFFER,nt.byteLength,T.STREAM_READ),T.readPixels(D,F,O,U,It.convert(Ct),It.convert(Lt),0),T.flush();const Zt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await Hm(T,Zt,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,wt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,nt)}finally{T.deleteBuffer(wt),T.deleteSync(Zt)}return nt}}finally{const vt=w!==null?Tt.get(w).__webglFramebuffer:null;Mt.bindFramebuffer(T.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(S,D=null,F=0){S.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const O=Math.pow(2,-F),U=Math.floor(S.image.width*O),nt=Math.floor(S.image.height*O),ut=D!==null?D.x:0,xt=D!==null?D.y:0;Dt.setTexture2D(S,0),T.copyTexSubImage2D(T.TEXTURE_2D,F,0,0,ut,xt,U,nt),Mt.unbindTexture()},this.copyTextureToTexture=function(S,D,F=null,O=null,U=0){S.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1],D=arguments[2],U=arguments[3]||0,F=null);let nt,ut,xt,vt,Ct,Lt;F!==null?(nt=F.max.x-F.min.x,ut=F.max.y-F.min.y,xt=F.min.x,vt=F.min.y):(nt=S.image.width,ut=S.image.height,xt=0,vt=0),O!==null?(Ct=O.x,Lt=O.y):(Ct=0,Lt=0);const wt=It.convert(D.format),Zt=It.convert(D.type);Dt.setTexture2D(D,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);const re=T.getParameter(T.UNPACK_ROW_LENGTH),ae=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ce=T.getParameter(T.UNPACK_SKIP_PIXELS),Kt=T.getParameter(T.UNPACK_SKIP_ROWS),Et=T.getParameter(T.UNPACK_SKIP_IMAGES),me=S.isCompressedTexture?S.mipmaps[U]:S.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,me.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,me.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,xt),T.pixelStorei(T.UNPACK_SKIP_ROWS,vt),S.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,U,Ct,Lt,nt,ut,wt,Zt,me.data):S.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,U,Ct,Lt,me.width,me.height,wt,me.data):T.texSubImage2D(T.TEXTURE_2D,U,Ct,Lt,nt,ut,wt,Zt,me),T.pixelStorei(T.UNPACK_ROW_LENGTH,re),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ae),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ce),T.pixelStorei(T.UNPACK_SKIP_ROWS,Kt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Et),U===0&&D.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(S,D,F=null,O=null,U=0){S.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,S=arguments[2],D=arguments[3],U=arguments[4]||0);let nt,ut,xt,vt,Ct,Lt,wt,Zt,re;const ae=S.isCompressedTexture?S.mipmaps[U]:S.image;F!==null?(nt=F.max.x-F.min.x,ut=F.max.y-F.min.y,xt=F.max.z-F.min.z,vt=F.min.x,Ct=F.min.y,Lt=F.min.z):(nt=ae.width,ut=ae.height,xt=ae.depth,vt=0,Ct=0,Lt=0),O!==null?(wt=O.x,Zt=O.y,re=O.z):(wt=0,Zt=0,re=0);const Ce=It.convert(D.format),Kt=It.convert(D.type);let Et;if(D.isData3DTexture)Dt.setTexture3D(D,0),Et=T.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)Dt.setTexture2DArray(D,0),Et=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);const me=T.getParameter(T.UNPACK_ROW_LENGTH),jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ge=T.getParameter(T.UNPACK_SKIP_PIXELS),fi=T.getParameter(T.UNPACK_SKIP_ROWS),Le=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ae.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ae.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,vt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ct),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Lt),S.isDataTexture||S.isData3DTexture?T.texSubImage3D(Et,U,wt,Zt,re,nt,ut,xt,Ce,Kt,ae.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(Et,U,wt,Zt,re,nt,ut,xt,Ce,ae.data):T.texSubImage3D(Et,U,wt,Zt,re,nt,ut,xt,Ce,Kt,ae),T.pixelStorei(T.UNPACK_ROW_LENGTH,me),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ge),T.pixelStorei(T.UNPACK_SKIP_ROWS,fi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Le),U===0&&D.generateMipmaps&&T.generateMipmap(Et),Mt.unbindTexture()},this.initRenderTarget=function(S){Tt.get(S).__webglFramebuffer===void 0&&Dt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Dt.setTextureCube(S,0):S.isData3DTexture?Dt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Dt.setTexture2DArray(S,0):Dt.setTexture2D(S,0),Mt.unbindTexture()},this.resetState=function(){I=0,C=0,w=null,Mt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===$o?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Ha?"display-p3":"srgb"}}class jo{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=i}clone(){return new jo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jv extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jv extends ye{constructor(t=null,e=1,i=1,r,a,o,s,c,l=Ae,h=Ae,d,u){super(null,o,s,c,l,h,r,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vc extends je{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Di=new Qt,Wc=new Qt,ha=[],Xc=new ui,Qv=new Qt,sr=new Ke,or=new Ki;class tM extends Ke{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Qv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Di),Xc.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(Xc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Di),or.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,o=t*a+1;for(let s=0;s<i.length;s++)i[s]=r[o+s]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(i),t.ray.intersectsSphere(or)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Di),Wc.multiplyMatrices(i,Di),sr.matrixWorld=Wc,sr.raycast(t,ha);for(let o=0,s=ha.length;o<s;o++){const c=ha[o];c.instanceId=a,c.object=this,e.push(c)}ha.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jv(new Float32Array(r*this.count),r,this.count,Wo,rn));const a=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const s=this.geometry.morphTargetsRelative?1:1-o,c=r*t;a[c]=s,a.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jo extends ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Na=new N,Fa=new N,qc=new Qt,lr=new su,ua=new Ki,Fs=new N,Yc=new N;class eM extends xe{constructor(t=new ln,e=new Jo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,a=e.count;r<a;r++)Na.fromBufferAttribute(e,r-1),Fa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Na.distanceTo(Fa);t.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),ua.radius+=a,t.ray.intersectsSphere(ua)===!1)return;qc.copy(r).invert(),lr.copy(t.ray).applyMatrix4(qc);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=l){const f=h.getX(x),b=h.getX(x+1),y=fa(this,t,lr,c,f,b);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(_-1),m=h.getX(p),f=fa(this,t,lr,c,x,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=l){const f=fa(this,t,lr,c,x,x+1);f&&e.push(f)}if(this.isLineLoop){const x=fa(this,t,lr,c,_-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function fa(n,t,e,i,r,a){const o=n.geometry.attributes.position;if(Na.fromBufferAttribute(o,r),Fa.fromBufferAttribute(o,a),e.distanceSqToSegment(Na,Fa,Fs,Yc)>i)return;Fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fs);if(!(c<t.near||c>t.far))return{distance:c,point:Yc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const $c=new N,Zc=new N;class Eu extends eM{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,a=e.count;r<a;r+=2)$c.fromBufferAttribute(e,r),Zc.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$c.distanceTo(Zc);t.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const da=new N,pa=new N,Os=new N,ma=new $e;class nM extends ln{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),a=Math.cos(ba*e),o=t.getIndex(),s=t.getAttribute("position"),c=o?o.count:s.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:x,b:m,c:f}=ma;if(x.fromBufferAttribute(s,l[0]),m.fromBufferAttribute(s,l[1]),f.fromBufferAttribute(s,l[2]),ma.getNormal(Os),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const y=(b+1)%3,E=d[b],I=d[y],C=ma[h[b]],w=ma[h[y]],L=`${E}_${I}`,g=`${I}_${E}`;g in u&&u[g]?(Os.dot(u[g].normal)<=a&&(p.push(C.x,C.y,C.z),p.push(w.x,w.y,w.z)),u[g]=null):L in u||(u[L]={index0:l[b],index1:l[y],normal:Os.clone()})}}for(const _ in u)if(u[_]){const{index0:x,index1:m}=u[_];da.fromBufferAttribute(s,x),pa.fromBufferAttribute(s,m),p.push(da.x,da.y,da.z),p.push(pa.x,pa.y,pa.z)}this.setAttribute("position",new ke(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class iM extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yu extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Bs=new Qt,Kc=new N,jc=new N;class rM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kc),jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jc),e.updateMatrixWorld(),Bs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class aM extends rM{constructor(){super(new _u(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ks extends yu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new aM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sM extends yu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class oM extends Eu{constructor(t=10,e=10,i=4473924,r=8947848){i=new Gt(i),r=new Gt(r);const a=e/2,o=t/e,s=t/2,c=[],l=[];for(let u=0,p=0,_=-s;u<=e;u++,_+=o){c.push(-s,0,_,s,0,_),c.push(_,0,-s,_,0,s);const x=u===a?i:r;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}const h=new ln;h.setAttribute("position",new ke(c,3)),h.setAttribute("color",new ke(l,3));const d=new Jo({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);const Jc={"minecraft:oak_planks":10121536,"minecraft:dark_oak_planks":4008467,"minecraft:spruce_planks":8018992,"minecraft:birch_planks":14076058,"minecraft:acacia_planks":11887147,"minecraft:mangrove_planks":8006686,"minecraft:jungle_planks":11892013,"minecraft:cherry_planks":14988450,"minecraft:bamboo_planks":12892224,"minecraft:crimson_planks":7086131,"minecraft:warped_planks":2845278,"minecraft:oak_wood":7034937,"minecraft:dark_oak_wood":3811860,"minecraft:spruce_wood":3877138,"minecraft:birch_wood":13155488,"minecraft:acacia_wood":6974058,"minecraft:mangrove_wood":5913124,"minecraft:jungle_wood":5524014,"minecraft:cherry_wood":3874856,"minecraft:bamboo_block":6978088,"minecraft:crimson_hyphae":6034982,"minecraft:warped_hyphae":2771526,"minecraft:stripped_oak_wood":11505493,"minecraft:stripped_dark_oak_wood":4863256,"minecraft:stripped_spruce_wood":6967336,"minecraft:stripped_birch_wood":12953962,"minecraft:stripped_acacia_wood":11557424,"minecraft:stripped_mangrove_wood":6958618,"minecraft:stripped_jungle_wood":11040832,"minecraft:stripped_cherry_wood":14065808,"minecraft:stripped_bamboo_block":12103744,"minecraft:stripped_crimson_hyphae":9058896,"minecraft:stripped_warped_hyphae":3836542,"minecraft:stone_bricks":8026746,"minecraft:cobblestone":8947848,"minecraft:iron_block":13620693,"minecraft:gold_block":15779904,"minecraft:obsidian":1706538,"minecraft:glass":10347765,"create:andesite_casing":9079418};function lM(n){if(Jc[n])return Jc[n];let t=0;for(const e of n)t=t*31+e.charCodeAt(0)>>>0;return(t&16777215|4210752)&16777215}class cM{constructor(t){this.canvas=t,this._mesh=null,this._animId=null,this._phi=Math.PI/5,this._theta=-Math.PI/4,this._dist=60,this._center=new N(0,0,0),this._setupScene(),this._setupLights(),this._setupControls(),this._startLoop()}_setupScene(){const t=this.canvas.clientWidth||800,e=this.canvas.clientHeight||600;this.renderer=new Kv({canvas:this.canvas,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,e,!1),this.renderer.setClearColor(855314),this.renderer.shadowMap.enabled=!0,this.scene=new jv,this.scene.fog=new jo(855314,120,300),this.camera=new Oe(45,t/e,.1,1e3),this._updateCamera();const i=new oM(200,40,2236976,1710632);this.scene.add(i)}_setupLights(){this.scene.add(new sM(16777215,.5));const t=new ks(16774368,1.2);t.position.set(5,12,7),t.castShadow=!0,this.scene.add(t);const e=new ks(8952268,.4);e.position.set(-6,-2,-8),this.scene.add(e);const i=new ks(4482696,.3);i.position.set(0,-8,0),this.scene.add(i)}_setupControls(){const t=this.canvas;let e=!1,i=!1,r=0,a=0;t.addEventListener("contextmenu",l=>l.preventDefault()),t.addEventListener("mousedown",l=>{l.button===1||l.button===2||l.button===0&&l.shiftKey?(i=!0,l.preventDefault()):l.button===0&&(e=!0),r=l.clientX,a=l.clientY}),window.addEventListener("mouseup",()=>{e=!1,i=!1}),window.addEventListener("mousemove",l=>{const h=l.clientX-r,d=l.clientY-a;r=l.clientX,a=l.clientY,e?(this._theta-=h*.008,this._phi=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this._phi+d*.006)),this._updateCamera()):i&&this._pan(h,d)}),t.addEventListener("wheel",l=>{l.preventDefault(),this._dist=Math.max(8,Math.min(500,this._dist+l.deltaY*.08)),this._updateCamera()},{passive:!1});let o=0,s=0,c=0;t.addEventListener("touchstart",l=>{l.touches.length===1&&(e=!0,r=l.touches[0].clientX,a=l.touches[0].clientY),l.touches.length===2&&(e=!1,o=Math.hypot(l.touches[0].clientX-l.touches[1].clientX,l.touches[0].clientY-l.touches[1].clientY),s=(l.touches[0].clientX+l.touches[1].clientX)/2,c=(l.touches[0].clientY+l.touches[1].clientY)/2)},{passive:!0}),t.addEventListener("touchmove",l=>{if(l.preventDefault(),l.touches.length===1&&e){const h=l.touches[0].clientX-r,d=l.touches[0].clientY-a;this._theta-=h*.01,this._phi=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this._phi+d*.008)),r=l.touches[0].clientX,a=l.touches[0].clientY,this._updateCamera()}if(l.touches.length===2){const h=Math.hypot(l.touches[0].clientX-l.touches[1].clientX,l.touches[0].clientY-l.touches[1].clientY),d=(l.touches[0].clientX+l.touches[1].clientX)/2,u=(l.touches[0].clientY+l.touches[1].clientY)/2;this._dist=Math.max(8,Math.min(500,this._dist-(h-o)*.2)),this._pan(d-s,u-c),o=h,s=d,c=u}},{passive:!1}),t.addEventListener("touchend",()=>{e=!1})}_pan(t,e){const i=this._dist*.0015,r=Math.cos(this._theta),a=-Math.sin(this._theta),o=-Math.sin(this._phi)*Math.sin(this._theta),s=Math.cos(this._phi),c=-Math.sin(this._phi)*Math.cos(this._theta);this._center.x+=(-t*r+e*o)*i,this._center.y+=e*s*i,this._center.z+=(-t*a+e*c)*i,this._updateCamera()}_updateCamera(){const t=this._dist*Math.cos(this._phi)*Math.sin(this._theta),e=this._dist*Math.sin(this._phi),i=this._dist*Math.cos(this._phi)*Math.cos(this._theta);this.camera.position.set(this._center.x+t,this._center.y+e,this._center.z+i),this.camera.lookAt(this._center)}snapView(t){switch(t){case 0:this._theta=0,this._phi=.08;break;case 1:this._theta=Math.PI/2,this._phi=.08;break;case 2:this._theta=0,this._phi=Math.PI/2-.01;break;case 3:this._theta=-Math.PI/4,this._phi=Math.PI/5;break;case 4:this._theta=0,this._phi=-Math.PI/2+.01;break}this._updateCamera()}updateBlocks(t,e,i,r){if(this._mesh&&(this.scene.remove(this._mesh),this._mesh.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&_.material.dispose()})),t.length===0){this._mesh=null;return}const a=e/2,o=0,s=r/2,c=new Map;for(const _ of t)c.has(_.block)||c.set(_.block,[]),c.get(_.block).push(_);const l=new dr,h=new ci(1,1,1);for(const[_,x]of c){const m=lM(_),f=_.includes("glass"),b=_.includes("iron")||_.includes("gold"),y=new iM({color:m,roughness:f?.05:b?.2:.82,metalness:b?.7:0,transparent:f,opacity:f?.45:1}),E=new tM(h,y,x.length);E.castShadow=!0,E.receiveShadow=!0;const I=new Qt;for(let C=0;C<x.length;C++){const w=x[C];I.setPosition(w.x-a,w.y-o,w.z-s),E.setMatrixAt(C,I)}E.instanceMatrix.needsUpdate=!0,l.add(E)}const d=new ci(e,i,r),u=new nM(d),p=new Eu(u,new Jo({color:3359846,transparent:!0,opacity:.25}));p.position.set(0,i/2,0),l.add(p),d.dispose(),this._hasInitialView?this._center.set(0,i/2,0):(this._center.set(0,i/2,0),this._dist=Math.max(e,i,r)*2,this._hasInitialView=!0),this._updateCamera(),this.scene.add(l),this._mesh=l}_startLoop(){const t=()=>{this._animId=requestAnimationFrame(t),this._handleResize(),this.renderer.render(this.scene,this.camera)};t()}_handleResize(){const t=this.renderer.domElement,e=t.clientWidth,i=t.clientHeight;(t.width!==e||t.height!==i)&&(this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix())}destroy(){this._animId&&cancelAnimationFrame(this._animId),this.renderer.dispose()}}const hM={galleon:`<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M4 22 Q8 14 10 10 Q14 6 18 6 Q24 4 30 8 L32 22 Q18 26 4 22Z"/>
    <line x1="18" y1="6" x2="18" y2="2"/><line x1="15" y1="3" x2="21" y2="3"/>
  </svg>`,cutter:`<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M6 24 L10 8 Q18 4 26 10 L30 24 Q18 27 6 24Z"/>
    <line x1="10" y1="8" x2="10" y2="2"/><line x1="10" y1="5" x2="22" y2="5"/>
  </svg>`,sloop:`<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M5 23 Q10 12 18 10 Q24 10 30 14 L31 23 Q18 27 5 23Z"/>
    <line x1="14" y1="10" x2="14" y2="2"/><line x1="14" y1="3" x2="24" y2="9"/>
  </svg>`,brig:`<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M4 23 L8 11 Q18 8 28 11 L32 23 Q18 26 4 23Z"/>
    <line x1="11" y1="10" x2="11" y2="2"/><line x1="11" y1="3" x2="18" y2="3"/>
    <line x1="23" y1="10" x2="23" y2="3"/><line x1="23" y1="3" x2="30" y2="3"/>
  </svg>`,frigate:`<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M3 23 L7 14 Q10 8 18 8 Q24 8 28 12 L33 23 Q18 26 3 23Z"/>
    <line x1="10" y1="12" x2="10" y2="2"/><line x1="10" y1="3" x2="20" y2="3"/>
    <line x1="22" y1="11" x2="22" y2="4"/><line x1="22" y1="4" x2="30" y2="4"/>
  </svg>`,fluyt:`<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M5 23 Q6 18 8 14 Q12 8 18 8 Q26 8 29 14 Q31 18 31 23 Q18 27 5 23Z"/>
    <line x1="18" y1="8" x2="18" y2="2"/><line x1="15" y1="3" x2="21" y2="3"/>
  </svg>`},bu=[{name:"Oak",plank:"minecraft:oak_planks",log:"minecraft:oak_wood",strip:"minecraft:stripped_oak_wood"},{name:"Dark Oak",plank:"minecraft:dark_oak_planks",log:"minecraft:dark_oak_wood",strip:"minecraft:stripped_dark_oak_wood"},{name:"Spruce",plank:"minecraft:spruce_planks",log:"minecraft:spruce_wood",strip:"minecraft:stripped_spruce_wood"},{name:"Birch",plank:"minecraft:birch_planks",log:"minecraft:birch_wood",strip:"minecraft:stripped_birch_wood"},{name:"Acacia",plank:"minecraft:acacia_planks",log:"minecraft:acacia_wood",strip:"minecraft:stripped_acacia_wood"},{name:"Mangrove",plank:"minecraft:mangrove_planks",log:"minecraft:mangrove_wood",strip:"minecraft:stripped_mangrove_wood"},{name:"Jungle",plank:"minecraft:jungle_planks",log:"minecraft:jungle_wood",strip:"minecraft:stripped_jungle_wood"},{name:"Cherry",plank:"minecraft:cherry_planks",log:"minecraft:cherry_wood",strip:"minecraft:stripped_cherry_wood"},{name:"Bamboo",plank:"minecraft:bamboo_planks",log:"minecraft:bamboo_block",strip:"minecraft:stripped_bamboo_block"},{name:"Crimson",plank:"minecraft:crimson_planks",log:"minecraft:crimson_hyphae",strip:"minecraft:stripped_crimson_hyphae"},{name:"Warped",plank:"minecraft:warped_planks",log:"minecraft:warped_hyphae",strip:"minecraft:stripped_warped_hyphae"}],wu=[{id:"minecraft:stone_bricks",label:"Stone Brick"},{id:"minecraft:cobblestone",label:"Cobblestone"},{id:"minecraft:iron_block",label:"Iron"},{id:"minecraft:obsidian",label:"Obsidian"},{id:"create:andesite_casing",label:"Andesite Casing"}],uM={"minecraft:oak_planks":"#9a7140","minecraft:oak_wood":"#6b5839","minecraft:stripped_oak_wood":"#af8f55","minecraft:dark_oak_planks":"#3d2a13","minecraft:dark_oak_wood":"#3a2a14","minecraft:stripped_dark_oak_wood":"#4a3518","minecraft:spruce_planks":"#7a5c30","minecraft:spruce_wood":"#3b2912","minecraft:stripped_spruce_wood":"#6a5028","minecraft:birch_planks":"#d6c89a","minecraft:birch_wood":"#c8bca0","minecraft:stripped_birch_wood":"#c5a96a","minecraft:acacia_planks":"#b5622b","minecraft:acacia_wood":"#6a6a6a","minecraft:stripped_acacia_wood":"#b05a30","minecraft:mangrove_planks":"#7a2c1e","minecraft:mangrove_wood":"#5a3a24","minecraft:stripped_mangrove_wood":"#6a2e1a","minecraft:jungle_planks":"#b5752d","minecraft:jungle_wood":"#544a2e","minecraft:stripped_jungle_wood":"#a87840","minecraft:cherry_planks":"#e4b4a2","minecraft:cherry_wood":"#3b2028","minecraft:stripped_cherry_wood":"#d6a090","minecraft:bamboo_planks":"#c4b840","minecraft:bamboo_block":"#6a7a28","minecraft:stripped_bamboo_block":"#b8b040","minecraft:crimson_planks":"#6c2033","minecraft:crimson_hyphae":"#5c1626","minecraft:stripped_crimson_hyphae":"#8a3a50","minecraft:warped_planks":"#2b6a5e","minecraft:warped_hyphae":"#2a4a46","minecraft:stripped_warped_hyphae":"#3a8a7e","minecraft:stone_bricks":"#7a7a7a","minecraft:cobblestone":"#888888","minecraft:iron_block":"#cfd5d5","minecraft:obsidian":"#1a0a2a","create:andesite_casing":"#8a8a7a"};function qe(n){return uM[n]||"#666"}function cr(n){return n?n.replace(/^[^:]+:/,"").replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()):""}const at={hullId:Xi[0].meta.id,length:30,beam:14,draft:8,thickness:1,block:"minecraft:oak_planks",tweaks:{},bowRake:0,sternRake:0,bowBulge:0,sternBulge:0,bowRound:0,sternRound:0,ribSpacing:0,ribThickness:0,ribBlock:"",ribsInterior:!1,keelBlock:"",keelWidth:0,deckBlock:"",borderBlock:"",bowRiseLen:0,bowRiseHeight:0,sternRiseLen:0,sternRiseHeight:0};let Tu="hull";function Au(n){at.tweaks={};for(const t of n.meta.tweaks)at.tweaks[t.id]=t.default}Au(Xi[0]);const fM=document.getElementById("hull-type-grid"),zs=document.getElementById("tweaks-group"),dM=document.getElementById("stats"),pM=document.getElementById("export-btn"),mM=document.getElementById("perf"),Po=document.getElementById("ribs-interior"),Qo=document.getElementById("palette-grid"),Qc=document.getElementById("custom-block-id"),_M=document.getElementById("hull-swatch"),th=document.getElementById("rib-swatch"),eh=document.getElementById("keel-swatch"),nh=document.getElementById("deck-swatch"),ih=document.getElementById("border-swatch"),gM=document.getElementById("hull-block-name"),xM=document.getElementById("rib-block-name"),vM=document.getElementById("keel-block-name"),MM=document.getElementById("deck-block-name"),SM=document.getElementById("border-block-name");Xi.forEach(n=>{const t=document.createElement("button");t.className="hull-btn"+(n.meta.id===at.hullId?" active":""),t.title=n.meta.description,t.innerHTML=(hM[n.meta.id]||"")+`<span>${n.meta.name}</span>`,t.addEventListener("click",()=>{at.hullId=n.meta.id,Au(n),document.querySelectorAll(".hull-btn").forEach(e=>e.classList.remove("active")),t.classList.add("active"),Ru(n),He()}),fM.appendChild(t)});function En(n,t,e){const i=document.getElementById(n),r=document.getElementById(t);i.addEventListener("input",()=>{at[e]=parseInt(i.value,10),r.value=at[e],He()}),r.addEventListener("change",()=>{const a=Math.max(+r.min,parseInt(r.value,10)||+r.min);at[e]=a,r.value=a,i.value=Math.min(a,+i.max),He()})}En("dim-length","dim-length-n","length");En("dim-beam","dim-beam-n","beam");En("dim-draft","dim-draft-n","draft");En("dim-thickness","dim-thickness-n","thickness");function Hn(n,t,e){const i=document.getElementById(n),r=document.getElementById(t);!i||!r||(i.addEventListener("input",()=>{at[e]=parseFloat(i.value),r.value=at[e],He()}),r.addEventListener("change",()=>{const a=Math.max(+r.min,parseFloat(r.value)||0);at[e]=a,r.value=a,i.value=Math.min(a,+i.max),He()}))}Hn("bow-rake","bow-rake-n","bowRake");Hn("stern-rake","stern-rake-n","sternRake");Hn("bow-bulge","bow-bulge-n","bowBulge");Hn("stern-bulge","stern-bulge-n","sternBulge");Hn("bow-round","bow-round-n","bowRound");Hn("stern-round","stern-round-n","sternRound");En("rib-spacing","rib-spacing-n","ribSpacing");En("rib-thickness","rib-thickness-n","ribThickness");Hn("bow-rise-len","bow-rise-len-n","bowRiseLen");En("bow-rise-h","bow-rise-h-n","bowRiseHeight");Hn("stern-rise-len","stern-rise-len-n","sternRiseLen");En("stern-rise-h","stern-rise-h-n","sternRiseHeight");En("keel-width","keel-width-n","keelWidth");const EM={rake:{bowRake:0,sternRake:0,bowBulge:0,sternBulge:0,bowRound:0,sternRound:0},"bow-rise":{bowRiseLen:0,bowRiseHeight:0},"stern-rise":{sternRiseLen:0,sternRiseHeight:0},ribs:{ribSpacing:0,ribThickness:0,ribBlock:"",ribsInterior:!1}},yM={bowRake:"bow-rake",sternRake:"stern-rake",bowBulge:"bow-bulge",sternBulge:"stern-bulge",bowRound:"bow-round",sternRound:"stern-round",bowRiseLen:"bow-rise-len",bowRiseHeight:"bow-rise-h",sternRiseLen:"stern-rise-len",sternRiseHeight:"stern-rise-h",ribSpacing:"rib-spacing",ribThickness:"rib-thickness"};document.querySelectorAll(".reset-btn").forEach(n=>{n.addEventListener("click",()=>{const t=EM[n.dataset.reset];if(t){for(const[e,i]of Object.entries(t)){at[e]=i;const r=yM[e];if(r){const a=document.getElementById(r),o=document.getElementById(r+"-n");a&&(a.value=i),o&&(o.value=i)}}n.dataset.reset==="ribs"&&(Po.checked=!1,Wa()),He()}})});function Ru(n){if(zs.innerHTML="",!n.meta.tweaks.length){zs.innerHTML='<span style="color:var(--text-muted);font-size:11px">No shape tweaks for this hull.</span>';return}n.meta.tweaks.forEach(t=>{const e=document.createElement("div");e.className="control-row";const i=document.createElement("label");i.textContent=t.label;const r=document.createElement("input");r.type="range",r.min=t.min,r.max=t.max,r.step=t.step,r.value=at.tweaks[t.id]??t.default;const a=document.createElement("input");a.type="number",a.className="num-input",a.min=t.min,a.max=t.max,a.step=t.step,a.value=at.tweaks[t.id]??t.default,r.addEventListener("input",()=>{at.tweaks[t.id]=parseFloat(r.value),a.value=at.tweaks[t.id],He()}),a.addEventListener("change",()=>{const o=Math.max(t.min,Math.min(t.max,parseFloat(a.value)||0));at.tweaks[t.id]=o,a.value=o,r.value=o,He()}),e.append(i,r,a),zs.appendChild(e)})}Ru(Xi[0]);const Cu={hull:"block",rib:"ribBlock",keel:"keelBlock",deck:"deckBlock",border:"borderBlock"};function Wa(){_M.style.background=qe(at.block),th.style.background=at.ribBlock?qe(at.ribBlock):qe(at.block),eh.style.background=at.keelBlock?qe(at.keelBlock):qe(at.block),nh.style.background=at.deckBlock?qe(at.deckBlock):qe(at.block),ih.style.background=at.borderBlock?qe(at.borderBlock):at.deckBlock?qe(at.deckBlock):qe(at.block),th.style.opacity=at.ribBlock?"1":"0.4",eh.style.opacity=at.keelBlock?"1":"0.4",nh.style.opacity=at.deckBlock?"1":"0.4",ih.style.opacity=at.borderBlock?"1":"0.4",gM.textContent=cr(at.block),xM.textContent=at.ribBlock?cr(at.ribBlock):"= Hull",vM.textContent=at.keelBlock?cr(at.keelBlock):"= Hull",MM.textContent=at.deckBlock?cr(at.deckBlock):"= Hull",SM.textContent=at.borderBlock?cr(at.borderBlock):"= Deck"}Wa();document.querySelectorAll(".block-slot").forEach(n=>{n.addEventListener("click",t=>{t.target.classList.contains("slot-clear")||(Tu=n.dataset.slot,document.querySelectorAll(".block-slot").forEach(e=>e.classList.remove("active")),n.classList.add("active"))})});document.querySelectorAll(".slot-clear").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.dataset.clear;at[Cu[e]]="",Wa(),He()})});Po.addEventListener("change",()=>{at.ribsInterior=Po.checked,He()});function Lu(n){const t=Cu[Tu];at[t]=n,Wa(),He()}function _a(n,t){const e=document.createElement("button");return e.className="pal-btn",e.title=t,e.style.background=qe(n),e.addEventListener("click",()=>Lu(n)),Qo.appendChild(e),e}function ga(){const n=document.createElement("button");n.className="pal-btn empty",Qo.appendChild(n)}function rh(n,t){const e=document.createElement("span");e.className="pal-label"+(t?" pal-label-right":""),e.textContent=n,Qo.appendChild(e)}const bM=Math.max(bu.length,wu.length);for(let n=0;n<bM;n++){const t=bu[n];rh(t?t.name:""),t?(_a(t.plank,t.name+" Plank"),_a(t.log,t.name+" Log"),_a(t.strip,t.name+" Stripped")):(ga(),ga(),ga());const e=wu[n];e?_a(e.id,e.label):ga(),rh(e?e.label:"",!0)}Qc.addEventListener("change",()=>{const n=Qc.value.trim();n&&Lu(n)});const ah=document.getElementById("palette"),sh=document.getElementById("palette-toggle");sh.addEventListener("click",()=>{ah.classList.toggle("collapsed"),sh.innerHTML=ah.classList.contains("collapsed")?"&#x25C0;":"&#x25B6;"});document.querySelectorAll(".view-btn").forEach(n=>{n.addEventListener("click",()=>{Pu.snapView(parseInt(n.dataset.angle,10))})});pM.addEventListener("click",()=>{var o;if(!Do)return;const{blocks:n,sizeX:t,sizeY:e,sizeZ:i}=Do,a=`${(((o=Xi.find(s=>s.meta.id===at.hullId))==null?void 0:o.meta.name)??at.hullId).toLowerCase()}_${t}x${e}x${i}`;Gp(n,t,e,i,a)});const wM=document.getElementById("canvas"),Pu=new cM(wM);function TM(n,t,e,i,r){const a=AM(t,e,i,n.length);dM.innerHTML=`
    <div class="stat-card"><div class="stat-label">Blocks</div><div class="stat-value">${n.length.toLocaleString()}</div></div>
    <div class="stat-card"><div class="stat-label">Interior</div><div class="stat-value">${a.toLocaleString()}</div></div>
    <div class="stat-card"><div class="stat-label">Size X</div><div class="stat-value">${t}</div></div>
    <div class="stat-card"><div class="stat-label">Size Y</div><div class="stat-value">${e}</div></div>
  `,mM.textContent=`${r}ms`}function AM(n,t,e,i){return Math.max(0,n*t*e-i)}let Do=null,oh=null;function He(){clearTimeout(oh),oh=setTimeout(RM,40)}function RM(){const n=Xi.find(r=>r.meta.id===at.hullId);if(!n)return;const t=performance.now(),e=Gu({isSolid:n.isSolid.bind(n),tweaks:{...at.tweaks},length:at.length,beam:at.beam,draft:at.draft,thickness:at.thickness,block:at.block,bowRake:at.sternRake,sternRake:at.bowRake,bowBulge:at.sternBulge,sternBulge:at.bowBulge,bowRound:at.sternRound,sternRound:at.bowRound,ribSpacing:at.ribSpacing,ribThickness:at.ribThickness,ribBlock:at.ribBlock,ribsInterior:at.ribsInterior,keelBlock:at.keelBlock,keelWidth:at.keelWidth,deckBlock:at.deckBlock,borderBlock:at.borderBlock,bowRiseLen:at.sternRiseLen,bowRiseHeight:at.sternRiseHeight,sternRiseLen:at.bowRiseLen,sternRiseHeight:at.bowRiseHeight}),i=Math.round(performance.now()-t);Do=e,Pu.updateBlocks(e.blocks,e.sizeX,e.sizeY,e.sizeZ),TM(e.blocks,e.sizeX,e.sizeY,e.sizeZ,i)}He();
