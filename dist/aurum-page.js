(()=>{var xl="170";var $h=0,bc=1,Yh=2;var Vu=1,Zh=2,bn=3,fn=0,Nt=1,Ht=2,hn=0,Oi=1,fi=2,Sc=3,Ac=4,Jh=5,ci=100,Kh=101,Qh=102,jh=103,ef=104,tf=200,nf=201,sf=202,rf=203,Qo=204,jo=205,of=206,af=207,lf=208,cf=209,uf=210,hf=211,ff=212,df=213,pf=214,ea=0,ta=1,na=2,Gi=3,ia=4,sa=5,ra=6,oa=7,Wu=0,mf=1,gf=2,Xn=0,vl=1,yl=2,Ml=3,Os=4,_f=5,bl=6,Sl=7,wc="attached",xf="detached",Xu=300,ki=301,Vi=302,aa=303,la=304,io=306,di=1e3,An=1001,Ms=1002,Et=1003,Al=1004;var Ni=1005;var Ut=1006,ms=1007;var un=1008;var En=1009,qu=1010,$u=1011,bs=1012,wl=1013,pi=1014,sn=1015,an=1016,Tl=1017,El=1018,Wi=1020,Yu=35902,Zu=1021,Ju=1022,$t=1023,Ku=1024,Qu=1025,zi=1026,Xi=1027,Rl=1028,Cl=1029,ju=1030,Il=1031;var Ll=1033,_r=33776,xr=33777,vr=33778,yr=33779,ca=35840,ua=35841,ha=35842,fa=35843,da=36196,pa=37492,ma=37496,ga=37808,_a=37809,xa=37810,va=37811,ya=37812,Ma=37813,ba=37814,Sa=37815,Aa=37816,wa=37817,Ta=37818,Ea=37819,Ra=37820,Ca=37821,Mr=36492,Ia=36494,La=36495,eh=36283,Da=36284,Pa=36285,Ua=36286;var qi=2300,$i=2301,_o=2302,Tc=2400,Ec=2401,Rc=2402,vf=2500;var th=0,so=1,zs=2,yf=3200,Mf=3201;var nh=0,bf=1,Vn="",yt="srgb",Rt="srgb-linear",ro="linear",Je="srgb";var yi=7680;var Cc=519,Sf=512,Af=513,wf=514,ih=515,Tf=516,Ef=517,Rf=518,Cf=519,Na=35044;var Ic="300 es",wn=2e3,br=2001,qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=1234567,gs=Math.PI/180,Yi=180/Math.PI;function rn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[s&255]+wt[s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function mt(s,e,t){return Math.max(e,Math.min(t,s))}function Dl(s,e){return(s%e+e)%e}function If(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Lf(s,e,t){return s!==e?(t-s)/(e-s):0}function _s(s,e,t){return(1-t)*s+t*e}function Df(s,e,t,n){return _s(s,e,1-Math.exp(-t*n))}function Pf(s,e=1){return e-Math.abs(Dl(s,e*2)-e)}function Uf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ff(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Of(s,e){return s+Math.random()*(e-s)}function zf(s){return s*(.5-Math.random())}function Bf(s){s!==void 0&&(Lc=s);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hf(s){return s*gs}function Gf(s){return s*Yi}function kf(s){return(s&s-1)===0&&s!==0}function Vf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xf(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var sh={DEG2RAD:gs,RAD2DEG:Yi,generateUUID:rn,clamp:mt,euclideanModulo:Dl,mapLinear:If,inverseLerp:Lf,lerp:_s,damp:Df,pingpong:Pf,smoothstep:Uf,smootherstep:Nf,randInt:Ff,randFloat:Of,randFloatSpread:zf,seededRandom:Bf,degToRad:Hf,radToDeg:Gf,isPowerOfTwo:kf,ceilPowerOfTwo:Vf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:Qe,denormalize:nn},ne=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ce=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],x=i[0],m=i[3],p=i[6],A=i[1],S=i[4],M=i[7],P=i[2],R=i[5],w=i[8];return r[0]=o*x+a*A+l*P,r[3]=o*m+a*S+l*R,r[6]=o*p+a*M+l*w,r[1]=c*x+u*A+h*P,r[4]=c*m+u*S+h*R,r[7]=c*p+u*M+h*w,r[2]=f*x+d*A+_*P,r[5]=f*m+d*S+_*R,r[8]=f*p+d*M+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xo.makeScale(e,t)),this}rotate(e){return this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xo=new Ce;function rh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ss(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qf(){let s=Ss("canvas");return s.style.display="block",s}var Dc={};function ds(s){s in Dc||(Dc[s]=!0,console.warn(s))}function $f(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Yf(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zf(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ze={enabled:!0,workingColorSpace:Rt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Je&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Je&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?ro:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Pc=[.64,.33,.3,.6,.15,.06],Uc=[.2126,.7152,.0722],Nc=[.3127,.329],Fc=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ze.define({[Rt]:{primaries:Pc,whitePoint:Nc,transfer:ro,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:Uc,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:Pc,whitePoint:Nc,transfer:Je,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:Uc,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});var Mi,Fa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=Ss("canvas")),Mi.width=e.width,Mi.height=e.height;let n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Tn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jf=0,Sr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vo(i[o].image)):r.push(vo(i[o]))}else r=vo(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function vo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kf=0,Mt=class s extends qn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=An,i=An,r=Ut,o=un,a=$t,l=En,c=s.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=rn(),this.name="",this.source=new Sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Xu;Mt.DEFAULT_ANISOTROPY=1;var Xe=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(d+1)/2,P=(p+1)/2,R=(u+f)/4,w=(h+x)/4,C=(_+m)/4;return S>M&&S>P?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=R/n,r=w/n):M>P?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=R/i,r=C/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=w/r,i=C/r),this.set(n,i,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-x)/A,this.z=(f-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oa=class extends qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Sr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lt=class extends Oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ar=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==_){let m=1-a,p=l*f+c*d+u*_+h*x,A=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let P=Math.sqrt(S),R=Math.atan2(P,p*A);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}let M=a*A;if(l=l*m+f*M,c=c*m+d*M,u=u*m+_*M,h=h*m+x*M,m===1-a){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yo.copy(this).projectOnVector(e),this.sub(yo)}reflect(e){return this.sub(yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yo=new I,zc=new on,Ft=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jt):jt.fromBufferAttribute(r,o),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Ws.subVectors(this.max,rs),bi.subVectors(e.a,rs),Si.subVectors(e.b,rs),Ai.subVectors(e.c,rs),On.subVectors(Si,bi),zn.subVectors(Ai,Si),ni.subVectors(bi,Ai);let t=[0,-On.z,On.y,0,-zn.z,zn.y,0,-ni.z,ni.y,On.z,0,-On.x,zn.z,0,-zn.x,ni.z,0,-ni.x,-On.y,On.x,0,-zn.y,zn.x,0,-ni.y,ni.x,0];return!Mo(t,bi,Si,Ai,Ws)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,bi,Si,Ai,Ws))?!1:(Xs.crossVectors(On,zn),t=[Xs.x,Xs.y,Xs.z],Mo(t,bi,Si,Ai,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gn=[new I,new I,new I,new I,new I,new I,new I,new I],jt=new I,Vs=new Ft,bi=new I,Si=new I,Ai=new I,On=new I,zn=new I,ni=new I,rs=new I,Ws=new I,Xs=new I,ii=new I;function Mo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ii.fromArray(s,r);let a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Qf=new Ft,os=new I,bo=new I,Gt=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);let t=os.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(os,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(bo)),this.expandByPoint(os.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_n=new I,So=new I,qs=new I,Bn=new I,Ao=new I,$s=new I,wo=new I,Zi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){So.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(So);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qs),a=Bn.dot(this.direction),l=-Bn.dot(qs),c=Bn.lengthSq(),u=Math.abs(1-o*o),h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(So).addScaledVector(qs,f),d}intersectSphere(e,t){_n.subVectors(e.center,this.origin);let n=_n.dot(this.direction),i=_n.dot(_n)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,i,r){Ao.subVectors(t,e),$s.subVectors(n,e),wo.crossVectors(Ao,$s);let o=this.direction.dot(wo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);let l=a*this.direction.dot($s.crossVectors(Bn,$s));if(l<0)return null;let c=a*this.direction.dot(Ao.cross(Bn));if(c<0||l+c>o)return null;let u=-a*Bn.dot(wo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,_,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,x,m)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),o=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,_=c*u,x=c*h;t[0]=f+x*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,_=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,ed)}lookAt(e,t,n){let i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Hn.crossVectors(n,zt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Hn.crossVectors(n,zt)),Hn.normalize(),Ys.crossVectors(zt,Hn),i[0]=Hn.x,i[4]=Ys.x,i[8]=zt.x,i[1]=Hn.y,i[5]=Ys.y,i[9]=zt.y,i[2]=Hn.z,i[6]=Ys.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],x=n[6],m=n[10],p=n[14],A=n[3],S=n[7],M=n[11],P=n[15],R=i[0],w=i[4],C=i[8],y=i[12],v=i[1],E=i[5],N=i[9],D=i[13],B=i[2],X=i[6],k=i[10],Q=i[14],W=i[3],se=i[7],de=i[11],Me=i[15];return r[0]=o*R+a*v+l*B+c*W,r[4]=o*w+a*E+l*X+c*se,r[8]=o*C+a*N+l*k+c*de,r[12]=o*y+a*D+l*Q+c*Me,r[1]=u*R+h*v+f*B+d*W,r[5]=u*w+h*E+f*X+d*se,r[9]=u*C+h*N+f*k+d*de,r[13]=u*y+h*D+f*Q+d*Me,r[2]=_*R+x*v+m*B+p*W,r[6]=_*w+x*E+m*X+p*se,r[10]=_*C+x*N+m*k+p*de,r[14]=_*y+x*D+m*Q+p*Me,r[3]=A*R+S*v+M*B+P*W,r[7]=A*w+S*E+M*X+P*se,r[11]=A*C+S*N+M*k+P*de,r[15]=A*y+S*D+M*Q+P*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],x=e[13],m=e[14],p=e[15],A=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,S=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,M=u*x*c-_*h*c+_*a*d-o*x*d-u*a*p+o*h*p,P=_*h*l-u*x*l-_*a*f+o*x*f+u*a*m-o*h*m,R=t*A+n*S+i*M+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=A*w,e[1]=(x*f*r-h*m*r-x*i*d+n*m*d+h*i*p-n*f*p)*w,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*w,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=S*w,e[5]=(u*m*r-_*f*r+_*i*d-t*m*d-u*i*p+t*f*p)*w,e[6]=(_*l*r-o*m*r-_*i*c+t*m*c+o*i*p-t*l*p)*w,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=M*w,e[9]=(_*h*r-u*x*r-_*n*d+t*x*d+u*n*p-t*h*p)*w,e[10]=(o*x*r-_*a*r+_*n*c-t*x*c-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=P*w,e[13]=(u*x*i-_*h*i+_*n*f-t*x*f-u*n*m+t*h*m)*w,e[14]=(_*a*i-o*x*i-_*n*l+t*x*l+o*n*m-t*a*m)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,_=r*h,x=o*u,m=o*h,p=a*h,A=l*c,S=l*u,M=l*h,P=n.x,R=n.y,w=n.z;return i[0]=(1-(x+p))*P,i[1]=(d+M)*P,i[2]=(_-S)*P,i[3]=0,i[4]=(d-M)*R,i[5]=(1-(f+p))*R,i[6]=(m+A)*R,i[7]=0,i[8]=(_+S)*w,i[9]=(m-A)*w,i[10]=(1-(f+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=wi.set(i[0],i[1],i[2]).length(),o=wi.set(i[4],i[5],i[6]).length(),a=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);let c=1/r,u=1/o,h=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=wn){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d,_;if(a===wn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===br)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=wn){let l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*u,_,x;if(a===wn)_=(o+r)*h,x=-2*h;else if(a===br)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wi=new I,en=new Ie,jf=new I(0,0,0),ed=new I(1,1,1),Hn=new I,Ys=new I,zt=new I,Bc=new Ie,Hc=new on,dn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},td=0,Gc=new I,Ti=new on,xn=new Ie,Zs=new I,as=new I,nd=new I,id=new on,kc=new I(1,0,0),Vc=new I(0,1,0),Wc=new I(0,0,1),Xc={type:"added"},sd={type:"removed"},Ei={type:"childadded",child:null},To={type:"childremoved",child:null},ft=class s extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new dn,n=new on,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ce}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zs.copy(e):Zs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(as,Zs,this.up):xn.lookAt(Zs,as,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(xn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xc),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sd),To.child=e,this.dispatchEvent(To),To.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xc),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new I,vn=new I,Eo=new I,yn=new I,Ri=new I,Ci=new I,qc=new I,Ro=new I,Co=new I,Io=new I,Lo=new Xe,Do=new Xe,Po=new Xe,ui=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),vn.subVectors(n,t),Eo.subVectors(e,t);let o=tn.dot(tn),a=tn.dot(vn),l=tn.dot(Eo),c=vn.dot(vn),u=vn.dot(Eo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Lo.setScalar(0),Do.setScalar(0),Po.setScalar(0),Lo.fromBufferAttribute(e,t),Do.fromBufferAttribute(e,n),Po.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Lo,r.x),o.addScaledVector(Do,r.y),o.addScaledVector(Po,r.z),o}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),vn.subVectors(e,t),tn.cross(vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),tn.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ri.subVectors(i,n),Ci.subVectors(r,n),Ro.subVectors(e,n);let l=Ri.dot(Ro),c=Ci.dot(Ro);if(l<=0&&c<=0)return t.copy(n);Co.subVectors(e,i);let u=Ri.dot(Co),h=Ci.dot(Co);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ri,o);Io.subVectors(e,r);let d=Ri.dot(Io),_=Ci.dot(Io);if(_>=0&&d<=_)return t.copy(r);let x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ci,a);let m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return qc.subVectors(r,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(qc,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Uo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ze.workingColorSpace){if(e=Dl(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Uo(o,r,e+1/3),this.g=Uo(o,r,e),this.b=Uo(o,r,e-1/3)}return ze.toWorkingColorSpace(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return ze.fromWorkingColorSpace(Tt.copy(this),e),Math.round(mt(Tt.r*255,0,255))*65536+Math.round(mt(Tt.g*255,0,255))*256+Math.round(mt(Tt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(Tt.copy(this),t);let n=Tt.r,i=Tt.g,r=Tt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=yt){ze.fromWorkingColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,i=Tt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Js);let n=_s(Gn.h,Js.h,t),i=_s(Gn.s,Js.s,t),r=_s(Gn.l,Js.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new pe;pe.NAMES=oh;var rd=0,kt=class extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=rn(),this.name="",this.blending=Oi,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=jo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Dt=class extends kt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pt=new I,Ks=new ne,ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}};var Tr=class extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Er=class extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rt=class extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},od=0,qt=new Ie,No=new ft,Ii=new I,Bt=new Ft,ls=new Ft,vt=new I,dt=class s extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rh(e)?Er:Tr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ce().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Bt.min,ls.min),Bt.expandByPoint(vt),vt.addVectors(Bt.max,ls.max),Bt.expandByPoint(vt)):(Bt.expandByPoint(ls.min),Bt.expandByPoint(ls.max))}Bt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(e,c),vt.add(Ii)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;let c=new I,u=new I,h=new I,f=new ne,d=new ne,_=new ne,x=new I,m=new I;function p(C,y,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,y),_.fromBufferAttribute(r,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);let E=1/(d.x*_.y-_.x*d.y);isFinite(E)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(E),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(E),a[C].add(x),a[y].add(x),a[v].add(x),l[C].add(m),l[y].add(m),l[v].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let C=0,y=A.length;C<y;++C){let v=A[C],E=v.start,N=v.count;for(let D=E,B=E+N;D<B;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let S=new I,M=new I,P=new I,R=new I;function w(C){P.fromBufferAttribute(i,C),R.copy(P);let y=a[C];S.copy(y),S.sub(P.multiplyScalar(P.dot(y))).normalize(),M.crossVectors(R,y);let E=M.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,E)}for(let C=0,y=A.length;C<y;++C){let v=A[C],E=v.start,N=v.count;for(let D=E,B=E+N;D<B;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new ut(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$c=new Ie,si=new Zi,Qs=new Gt,Yc=new I,js=new I,er=new I,tr=new I,Fo=new I,nr=new I,Zc=new I,ir=new I,ct=class extends ft{constructor(e=new dt,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Fo.fromBufferAttribute(h,e),o?nr.addScaledVector(Fo,u):nr.addScaledVector(Fo.sub(t),u))}t.add(nr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(Qs.containsPoint(si.origin)===!1&&(si.intersectSphere(Qs,Yc)===null||si.origin.distanceToSquared(Yc)>(e.far-e.near)**2))&&($c.copy(r).invert(),si.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let m=f[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,P=S;M<P;M+=3){let R=a.getX(M),w=a.getX(M+1),C=a.getX(M+2);i=sr(this,p,e,n,c,u,h,R,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){let A=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);i=sr(this,o,e,n,c,u,h,A,S,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let m=f[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,P=S;M<P;M+=3){let R=M,w=M+1,C=M+2;i=sr(this,p,e,n,c,u,h,R,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){let A=m,S=m+1,M=m+2;i=sr(this,o,e,n,c,u,h,A,S,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function ad(s,e,t,n,i,r,o,a){let l;if(e.side===Nt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===fn,a),l===null)return null;ir.copy(a),ir.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ir);return c<t.near||c>t.far?null:{distance:c,point:ir.clone(),object:s}}function sr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,js),s.getVertexPosition(l,er),s.getVertexPosition(c,tr);let u=ad(s,e,t,n,js,er,tr,Zc);if(u){let h=new I;ui.getBarycoord(Zc,js,er,tr,h),i&&(u.uv=ui.getInterpolatedAttribute(i,a,l,c,h,new ne)),r&&(u.uv1=ui.getInterpolatedAttribute(r,a,l,c,h,new ne)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};ui.getNormal(js,er,tr,f.normal),u.face=f,u.barycoord=h}return u}var As=class s extends dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(h,2));function _(x,m,p,A,S,M,P,R,w,C,y){let v=M/w,E=P/C,N=M/2,D=P/2,B=R/2,X=w+1,k=C+1,Q=0,W=0,se=new I;for(let de=0;de<k;de++){let Me=de*E-D;for(let Le=0;Le<X;Le++){let qe=Le*v-N;se[x]=qe*A,se[m]=Me*S,se[p]=B,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[p]=R>0?1:-1,u.push(se.x,se.y,se.z),h.push(Le/w),h.push(1-de/C),Q+=1}}for(let de=0;de<C;de++)for(let Me=0;Me<w;Me++){let Le=f+Me+X*de,qe=f+Me+X*(de+1),Y=f+(Me+1)+X*(de+1),K=f+(Me+1)+X*de;l.push(Le,qe,K),l.push(qe,Y,K),W+=6}a.addGroup(d,W,y),d+=W,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ji(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(s){let e={};for(let t=0;t<s.length;t++){let n=Ji(s[t]);for(let i in n)e[i]=n[i]}return e}function ld(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ah(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var Qn={clone:Ji,merge:It},cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,et=class extends kt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Rr=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new I,Jc=new ne,Kc=new ne,gt=class extends Rr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,Jc,Kc),t.subVectors(Kc,Jc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Li=-90,Di=1,Ba=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new gt(Li,Di,e,t);i.layers=this.layers,this.add(i);let r=new gt(Li,Di,e,t);r.layers=this.layers,this.add(r);let o=new gt(Li,Di,e,t);o.layers=this.layers,this.add(o);let a=new gt(Li,Di,e,t);a.layers=this.layers,this.add(a);let l=new gt(Li,Di,e,t);l.layers=this.layers,this.add(l);let c=new gt(Li,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Cr=class extends Mt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ki,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ha=class extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Cr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new As(5,5,5),r=new et({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:hn});r.uniforms.tEquirect.value=t;let o=new ct(i,r),a=t.minFilter;return t.minFilter===un&&(t.minFilter=Ut),new Ba(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Oo=new I,hd=new I,fd=new Ce,Sn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Oo.subVectors(n,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Oo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fd.getNormalMatrix(e),i=this.coplanarPoint(Oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new Gt,rr=new I,ws=class{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],x=i[10],m=i[11],p=i[12],A=i[13],S=i[14],M=i[15];if(n[0].setComponents(l-r,f-c,m-d,M-p).normalize(),n[1].setComponents(l+r,f+c,m+d,M+p).normalize(),n[2].setComponents(l+o,f+u,m+_,M+A).normalize(),n[3].setComponents(l-o,f-u,m-_,M-A).normalize(),n[4].setComponents(l-a,f-h,m-x,M-S).normalize(),t===wn)n[5].setComponents(l+a,f+h,m+x,M+S).normalize();else if(t===br)n[5].setComponents(a,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(rr.x=i.normal.x>0?e.max.x:e.min.x,rr.y=i.normal.y>0?e.max.y:e.min.y,rr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function dd(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){let _=h[f],x=h[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){let x=h[d];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Rn=class s extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){let A=p*f-o;for(let S=0;S<c;S++){let M=S*h-r;_.push(M,-A,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){let S=A+c*p,M=A+c*(p+1),P=A+1+c*(p+1),R=A+1+c*p;d.push(S,M,R),d.push(M,P,R)}this.setIndex(d),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
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
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Pm=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:_d,alphatest_fragment:xd,alphatest_pars_fragment:vd,aomap_fragment:yd,aomap_pars_fragment:Md,batching_pars_vertex:bd,batching_vertex:Sd,begin_vertex:Ad,beginnormal_vertex:wd,bsdfs:Td,iridescence_fragment:Ed,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Dd,color_fragment:Pd,color_pars_fragment:Ud,color_pars_vertex:Nd,color_vertex:Fd,common:Od,cube_uv_reflection_fragment:zd,defaultnormal_vertex:Bd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Gd,emissivemap_fragment:kd,emissivemap_pars_fragment:Vd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Yd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:op,envmap_vertex:Jd,fog_vertex:Kd,fog_pars_vertex:Qd,fog_fragment:jd,fog_pars_fragment:ep,gradientmap_pars_fragment:tp,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:sp,lights_pars_begin:rp,lights_toon_fragment:ap,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:up,lights_physical_fragment:hp,lights_physical_pars_fragment:fp,lights_fragment_begin:dp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:vp,map_fragment:yp,map_pars_fragment:Mp,map_particle_fragment:bp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:wp,morphinstance_vertex:Tp,morphcolor_vertex:Ep,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Ip,normal_fragment_begin:Lp,normal_fragment_maps:Dp,normal_pars_fragment:Pp,normal_pars_vertex:Up,normal_vertex:Np,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:Hp,opaque_fragment:Gp,packing:kp,premultiplied_alpha_fragment:Vp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:Jp,shadowmap_vertex:Kp,shadowmask_pars_fragment:Qp,skinbase_vertex:jp,skinning_pars_vertex:em,skinning_vertex:tm,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:om,transmission_fragment:am,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:um,uv_vertex:hm,worldpos_vertex:fm,background_vert:dm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:_m,cube_frag:xm,depth_vert:vm,depth_frag:ym,distanceRGBA_vert:Mm,distanceRGBA_frag:bm,equirect_vert:Sm,equirect_frag:Am,linedashed_vert:wm,linedashed_frag:Tm,meshbasic_vert:Em,meshbasic_frag:Rm,meshlambert_vert:Cm,meshlambert_frag:Im,meshmatcap_vert:Lm,meshmatcap_frag:Dm,meshnormal_vert:Pm,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:Fm,meshphysical_vert:Om,meshphysical_frag:zm,meshtoon_vert:Bm,meshtoon_frag:Hm,points_vert:Gm,points_frag:km,shadow_vert:Vm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:qm},re={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},cn={basic:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:It([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:It([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:It([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:It([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:It([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:It([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:It([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:It([re.lights,re.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};cn.physical={uniforms:It([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var or={r:0,b:0,g:0},oi=new dn,$m=new Ie;function Ym(s,e,t,n,i,r,o){let a=new pe(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?t:e).get(S)),S}function x(A){let S=!1,M=_(A);M===null?p(a,l):M&&M.isColor&&(p(M,1),S=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(A,S){let M=_(S);M&&(M.isCubeTexture||M.mapping===io)?(u===void 0&&(u=new ct(new As(1,1,1),new et({name:"BackgroundCubeMaterial",uniforms:Ji(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),oi.copy(S.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(oi)),u.material.toneMapped=ze.getTransfer(M.colorSpace)!==Je,(h!==M||f!==M.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ct(new Rn(2,2),new et({name:"BackgroundMaterial",uniforms:Ji(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ze.getTransfer(M.colorSpace)!==Je,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,S){A.getRGB(or,ah(s)),n.buffers.color.setClear(or.r,or.g,or.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(A,S=1){a.set(A),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:x,addToRenderList:m}}function Zm(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(v,E,N,D,B){let X=!1,k=h(D,N,E);r!==k&&(r=k,c(r.object)),X=d(v,D,N,B),X&&_(v,D,N,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(v,E,N,D),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,E,N){let D=N.wireframe===!0,B=n[v.id];B===void 0&&(B={},n[v.id]=B);let X=B[E.id];X===void 0&&(X={},B[E.id]=X);let k=X[D];return k===void 0&&(k=f(l()),X[D]=k),k}function f(v){let E=[],N=[],D=[];for(let B=0;B<t;B++)E[B]=0,N[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:D,object:v,attributes:{},index:null}}function d(v,E,N,D){let B=r.attributes,X=E.attributes,k=0,Q=N.getAttributes();for(let W in Q)if(Q[W].location>=0){let de=B[W],Me=X[W];if(Me===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Me=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Me=v.instanceColor)),de===void 0||de.attribute!==Me||Me&&de.data!==Me.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function _(v,E,N,D){let B={},X=E.attributes,k=0,Q=N.getAttributes();for(let W in Q)if(Q[W].location>=0){let de=X[W];de===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(de=v.instanceColor));let Me={};Me.attribute=de,de&&de.data&&(Me.data=de.data),B[W]=Me,k++}r.attributes=B,r.attributesNum=k,r.index=D}function x(){let v=r.newAttributes;for(let E=0,N=v.length;E<N;E++)v[E]=0}function m(v){p(v,0)}function p(v,E){let N=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;N[v]=1,D[v]===0&&(s.enableVertexAttribArray(v),D[v]=1),B[v]!==E&&(s.vertexAttribDivisor(v,E),B[v]=E)}function A(){let v=r.newAttributes,E=r.enabledAttributes;for(let N=0,D=E.length;N<D;N++)E[N]!==v[N]&&(s.disableVertexAttribArray(N),E[N]=0)}function S(v,E,N,D,B,X,k){k===!0?s.vertexAttribIPointer(v,E,N,B,X):s.vertexAttribPointer(v,E,N,D,B,X)}function M(v,E,N,D){x();let B=D.attributes,X=N.getAttributes(),k=E.defaultAttributeValues;for(let Q in X){let W=X[Q];if(W.location>=0){let se=B[Q];if(se===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){let de=se.normalized,Me=se.itemSize,Le=e.get(se);if(Le===void 0)continue;let qe=Le.buffer,Y=Le.type,K=Le.bytesPerElement,me=Y===s.INT||Y===s.UNSIGNED_INT||se.gpuType===wl;if(se.isInterleavedBufferAttribute){let te=se.data,Te=te.stride,Ee=se.offset;if(te.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)p(W.location+Fe,te.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)m(W.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let Fe=0;Fe<W.locationSize;Fe++)S(W.location+Fe,Me/W.locationSize,Y,de,Te*K,(Ee+Me/W.locationSize*Fe)*K,me)}else{if(se.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)p(W.location+te,se.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let te=0;te<W.locationSize;te++)m(W.location+te);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let te=0;te<W.locationSize;te++)S(W.location+te,Me/W.locationSize,Y,de,Me*K,Me/W.locationSize*te*K,me)}}else if(k!==void 0){let de=k[Q];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(W.location,de);break;case 3:s.vertexAttrib3fv(W.location,de);break;case 4:s.vertexAttrib4fv(W.location,de);break;default:s.vertexAttrib1fv(W.location,de)}}}}A()}function P(){C();for(let v in n){let E=n[v];for(let N in E){let D=E[N];for(let B in D)u(D[B].object),delete D[B];delete E[N]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;let E=n[v.id];for(let N in E){let D=E[N];for(let B in D)u(D[B].object),delete D[B];delete E[N]}delete n[v.id]}function w(v){for(let E in n){let N=n[E];if(N[v.id]===void 0)continue;let D=N[v.id];for(let B in D)u(D[B].object),delete D[B];delete N[v.id]}}function C(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function Jm(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Km(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==$t&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===an&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==En&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==sn&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:P,maxSamples:R}}function Qm(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Sn,a=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{let A=r?0:n,S=A*4,M=p.clippingState||null;l.value=M,M=u(_,f,S,d);for(let P=0;P!==S;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let p=d+x*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=d;S!==x;++S,M+=4)o.copy(h[S]).applyMatrix4(A,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function jm(s){let e=new WeakMap;function t(o,a){return a===aa?o.mapping=ki:a===la&&(o.mapping=Vi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===aa||a===la)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ha(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $n=class extends Rr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fi=4,Qc=[.125,.215,.35,.446,.526,.582],hi=20,zo=new $n,jc=new pe,Bo=null,Ho=0,Go=0,ko=!1,li=(1+Math.sqrt(5))/2,Pi=1/li,eu=[new I(-li,Pi,0),new I(li,Pi,0),new I(-Pi,0,li),new I(Pi,0,li),new I(0,li,-Pi),new I(0,li,Pi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Bo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bo,Ho,Go),this._renderer.xr.enabled=ko,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:an,format:$t,colorSpace:Rt,depthBuffer:!1},i=tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(r)),this._blurMaterial=tg(r,e,t)}return i}_compileMaterial(e){let t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,i){let a=new gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(jc),u.toneMapping=Xn,u.autoClear=!1;let d=new Dt({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),_=new ct(new As,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(jc),x=!0);for(let p=0;p<6;p++){let A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let S=this._cubeSize;ar(i,A*S,p>2?S:0,S,S),u.setRenderTarget(i),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ki||e.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ar(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eu[(i-r-1)%eu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ct(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):hi;m>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);let p=[],A=0;for(let w=0;w<hi;++w){let C=w/x,y=Math.exp(-C*C/2);p.push(y),w===0?A+=y:w<m&&(A+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;let M=this._sizeLods[i],P=3*M*(i>S-Fi?i-S+Fi:0),R=4*(this._cubeSize-M);ar(t,P,R,3*M,2*M),l.setRenderTarget(t),l.render(h,zo)}};function eg(s){let e=[],t=[],n=[],i=s,r=s-Fi+1+Qc.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Fi?l=Qc[o-s+Fi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,x=3,m=2,p=1,A=new Float32Array(x*_*d),S=new Float32Array(m*_*d),M=new Float32Array(p*_*d);for(let R=0;R<d;R++){let w=R%3*2/3-1,C=R>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];A.set(y,x*_*R),S.set(f,m*_*R);let v=[R,R,R,R,R,R];M.set(v,p*_*R)}let P=new dt;P.setAttribute("position",new ut(A,x)),P.setAttribute("uv",new ut(S,m)),P.setAttribute("faceIndex",new ut(M,p)),e.push(P),i>Fi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tu(s,e,t){let n=new Lt(s,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function tg(s,e,t){let n=new Float32Array(hi),i=new I(0,1,0);return new et({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function nu(){return new et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function iu(){return new et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function ng(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===aa||l===la,u=l===ki||l===Vi;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ir(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Ir(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ig(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sg(s,e,t,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let x=f.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let _ in f)e.update(f[_],s.ARRAY_BUFFER);let d=h.morphAttributes;for(let _ in d){let x=d[_];for(let m=0,p=x.length;m<p;m++)e.update(x[m],s.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,_=h.attributes.position,x=0;if(d!==null){let A=d.array;x=d.version;for(let S=0,M=A.length;S<M;S+=3){let P=A[S+0],R=A[S+1],w=A[S+2];f.push(P,R,R,w,w,P)}}else if(_!==void 0){let A=_.array;x=_.version;for(let S=0,M=A.length/3-1;S<M;S+=3){let P=S+0,R=S+1,w=S+2;f.push(P,R,R,w,w,P)}}else return;let m=new(rh(f)?Er:Tr)(f,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rg(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function h(f,d,_,x){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,_);let p=0;for(let A=0;A<_;A++)p+=d[A]*x[A];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function og(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ag(s,e,t){let n=new WeakMap,i=new Xe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],S=0;d===!0&&(S=1),_===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let R=new Float32Array(M*P*4*h),w=new Ar(R,M,P,h);w.type=sn,w.needsUpdate=!0;let C=S*4;for(let v=0;v<h;v++){let E=m[v],N=p[v],D=A[v],B=M*P*4*v;for(let X=0;X<E.count;X++){let k=X*C;d===!0&&(i.fromBufferAttribute(E,X),R[B+k+0]=i.x,R[B+k+1]=i.y,R[B+k+2]=i.z,R[B+k+3]=0),_===!0&&(i.fromBufferAttribute(N,X),R[B+k+4]=i.x,R[B+k+5]=i.y,R[B+k+6]=i.z,R[B+k+7]=0),x===!0&&(i.fromBufferAttribute(D,X),R[B+k+8]=i.x,R[B+k+9]=i.y,R[B+k+10]=i.z,R[B+k+11]=D.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new ne(M,P)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function lg(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Lr=class extends Mt{constructor(e,t,n,i,r,o,a,l,c,u=zi){if(u!==zi&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zi&&(n=pi),n===void 0&&u===Xi&&(n=Wi),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ch=new Mt,su=new Lr(1,1),uh=new Ar,hh=new za,fh=new Cr,ru=[],ou=[],au=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function es(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ru[i];if(r===void 0&&(r=new Float32Array(i),ru[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function _t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function oo(s,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function cg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ug(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function hg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function fg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function dg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;cu.set(n),s.uniformMatrix2fv(this.addr,!1,cu),xt(t,n)}}function pg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;lu.set(n),s.uniformMatrix3fv(this.addr,!1,lu),xt(t,n)}}function mg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;au.set(n),s.uniformMatrix4fv(this.addr,!1,au),xt(t,n)}}function gg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function _g(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2iv(this.addr,e),xt(t,e)}}function xg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3iv(this.addr,e),xt(t,e)}}function vg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4iv(this.addr,e),xt(t,e)}}function yg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Mg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2uiv(this.addr,e),xt(t,e)}}function bg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3uiv(this.addr,e),xt(t,e)}}function Sg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4uiv(this.addr,e),xt(t,e)}}function Ag(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(su.compareFunction=ih,r=su):r=ch,t.setTexture2D(e||r,i)}function wg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hh,i)}function Tg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fh,i)}function Eg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uh,i)}function Rg(s){switch(s){case 5126:return cg;case 35664:return ug;case 35665:return hg;case 35666:return fg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return vg;case 5125:return yg;case 36294:return Mg;case 36295:return bg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Eg}}function Cg(s,e){s.uniform1fv(this.addr,e)}function Ig(s,e){let t=es(e,this.size,2);s.uniform2fv(this.addr,t)}function Lg(s,e){let t=es(e,this.size,3);s.uniform3fv(this.addr,t)}function Dg(s,e){let t=es(e,this.size,4);s.uniform4fv(this.addr,t)}function Pg(s,e){let t=es(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ug(s,e){let t=es(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ng(s,e){let t=es(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Fg(s,e){s.uniform1iv(this.addr,e)}function Og(s,e){s.uniform2iv(this.addr,e)}function zg(s,e){s.uniform3iv(this.addr,e)}function Bg(s,e){s.uniform4iv(this.addr,e)}function Hg(s,e){s.uniform1uiv(this.addr,e)}function Gg(s,e){s.uniform2uiv(this.addr,e)}function kg(s,e){s.uniform3uiv(this.addr,e)}function Vg(s,e){s.uniform4uiv(this.addr,e)}function Wg(s,e,t){let n=this.cache,i=e.length,r=oo(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ch,r[o])}function Xg(s,e,t){let n=this.cache,i=e.length,r=oo(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hh,r[o])}function qg(s,e,t){let n=this.cache,i=e.length,r=oo(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||fh,r[o])}function $g(s,e,t){let n=this.cache,i=e.length,r=oo(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||uh,r[o])}function Yg(s){switch(s){case 5126:return Cg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Pg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return zg;case 35669:case 35673:return Bg;case 5125:return Hg;case 36294:return Gg;case 36295:return kg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return $g}}var Ga=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}},ka=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yg(t.type)}},Va=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Vo=/(\w+)(\])?(\[|\.)?/g;function uu(s,e){s.seq.push(e),s.map[e.id]=e}function Zg(s,e,t){let n=s.name,i=n.length;for(Vo.lastIndex=0;;){let r=Vo.exec(n),o=Vo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){uu(t,c===void 0?new Ga(a,s,e):new ka(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Va(a),uu(t,h)),t=h}}}var Hi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Zg(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function hu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Jg=37297,Kg=0;function Qg(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var fu=new Ce;function jg(s){ze._getMatrix(fu,ze.workingColorSpace,s);let e=`mat3( ${fu.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(s)){case ro:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function du(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Qg(s.getShaderSource(e),o)}else return i}function e0(s,e){let t=jg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t0(s,e){let t;switch(e){case vl:t="Linear";break;case yl:t="Reinhard";break;case Ml:t="Cineon";break;case Os:t="ACESFilmic";break;case bl:t="AgX";break;case Sl:t="Neutral";break;case _f:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lr=new I;function n0(){ze.getLuminanceCoefficients(lr);let s=lr.x.toFixed(4),e=lr.y.toFixed(4),t=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function s0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ps(s){return s!==""}function pu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(s){return s.replace(o0,l0)}var a0=new Map;function l0(s,e){let t=Ne[e];if(t===void 0){let n=a0.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}var c0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(s){return s.replace(c0,u0)}function u0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _u(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function f0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ki:case Vi:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function p0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wu:e="ENVMAP_BLENDING_MULTIPLY";break;case mf:e="ENVMAP_BLENDING_MIX";break;case gf:e="ENVMAP_BLENDING_ADD";break}return e}function m0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function g0(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=h0(t),c=f0(t),u=d0(t),h=p0(t),f=m0(t),d=i0(t),_=s0(r),x=i.createProgram(),m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(m=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Xn?t0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,e0("linearToOutputTexel",t.outputColorSpace),n0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),o=Wa(o),o=pu(o,t),o=mu(o,t),a=Wa(a),a=pu(a,t),a=mu(a,t),o=gu(o),a=gu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=A+m+o,M=A+p+a,P=hu(i,i.VERTEX_SHADER,S),R=hu(i,i.FRAGMENT_SHADER,M);i.attachShader(x,P),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(E){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(x).trim(),D=i.getShaderInfoLog(P).trim(),B=i.getShaderInfoLog(R).trim(),X=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,R);else{let Q=du(i,P,"vertex"),W=du(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+Q+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||B==="")&&(k=!1);k&&(E.diagnostics={runnable:X,programLog:N,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(P),i.deleteShader(R),C=new Hi(i,x),y=r0(i,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,Jg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=R,this}var _0=0,Xa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qa(e),t.set(e,n)),n}},qa=class{constructor(e){this.id=_0++,this.code=e,this.usedTimes=0}};function x0(s,e,t,n,i,r,o){let a=new wr,l=new Xa,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,E,N,D){let B=N.fog,X=D.geometry,k=y.isMeshStandardMaterial?N.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),W=Q&&Q.mapping===io?Q.image.height:null,se=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=de!==void 0?de.length:0,Le=0;X.morphAttributes.position!==void 0&&(Le=1),X.morphAttributes.normal!==void 0&&(Le=2),X.morphAttributes.color!==void 0&&(Le=3);let qe,Y,K,me;if(se){let Ke=cn[se];qe=Ke.vertexShader,Y=Ke.fragmentShader}else qe=y.vertexShader,Y=y.fragmentShader,l.update(y),K=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);let te=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ee=D.isInstancedMesh===!0,Fe=D.isBatchedMesh===!0,ot=!!y.map,Ge=!!y.matcap,tt=!!Q,F=!!y.aoMap,St=!!y.lightMap,Oe=!!y.bumpMap,ke=!!y.normalMap,Ae=!!y.displacementMap,$e=!!y.emissiveMap,we=!!y.metalnessMap,T=!!y.roughnessMap,g=y.anisotropy>0,L=y.clearcoat>0,V=y.dispersion>0,Z=y.iridescence>0,$=y.sheen>0,ge=y.transmission>0,ie=g&&!!y.anisotropyMap,ae=L&&!!y.clearcoatMap,Be=L&&!!y.clearcoatNormalMap,j=L&&!!y.clearcoatRoughnessMap,fe=Z&&!!y.iridescenceMap,Se=Z&&!!y.iridescenceThicknessMap,_e=$&&!!y.sheenColorMap,ue=$&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,Ue=!!y.specularColorMap,nt=!!y.specularIntensityMap,U=ge&&!!y.transmissionMap,oe=ge&&!!y.thicknessMap,q=!!y.gradientMap,J=!!y.alphaMap,he=y.alphaTest>0,le=!!y.alphaHash,De=!!y.extensions,ht=Xn;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ht=s.toneMapping);let At={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:Y,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Fe,batchingColor:Fe&&D._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,instancingMorph:Ee&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Rt,alphaToCoverage:!!y.alphaToCoverage,map:ot,matcap:Ge,envMap:tt,envMapMode:tt&&Q.mapping,envMapCubeUVHeight:W,aoMap:F,lightMap:St,bumpMap:Oe,normalMap:ke,displacementMap:f&&Ae,emissiveMap:$e,normalMapObjectSpace:ke&&y.normalMapType===bf,normalMapTangentSpace:ke&&y.normalMapType===nh,metalnessMap:we,roughnessMap:T,anisotropy:g,anisotropyMap:ie,clearcoat:L,clearcoatMap:ae,clearcoatNormalMap:Be,clearcoatRoughnessMap:j,dispersion:V,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:Se,sheen:$,sheenColorMap:_e,sheenRoughnessMap:ue,specularMap:Ve,specularColorMap:Ue,specularIntensityMap:nt,transmission:ge,transmissionMap:U,thicknessMap:oe,gradientMap:q,opaque:y.transparent===!1&&y.blending===Oi&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:le,combine:y.combine,mapUv:ot&&x(y.map.channel),aoMapUv:F&&x(y.aoMap.channel),lightMapUv:St&&x(y.lightMap.channel),bumpMapUv:Oe&&x(y.bumpMap.channel),normalMapUv:ke&&x(y.normalMap.channel),displacementMapUv:Ae&&x(y.displacementMap.channel),emissiveMapUv:$e&&x(y.emissiveMap.channel),metalnessMapUv:we&&x(y.metalnessMap.channel),roughnessMapUv:T&&x(y.roughnessMap.channel),anisotropyMapUv:ie&&x(y.anisotropyMap.channel),clearcoatMapUv:ae&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Be&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ue&&x(y.sheenRoughnessMap.channel),specularMapUv:Ve&&x(y.specularMap.channel),specularColorMapUv:Ue&&x(y.specularColorMap.channel),specularIntensityMapUv:nt&&x(y.specularIntensityMap.channel),transmissionMapUv:U&&x(y.transmissionMap.channel),thicknessMapUv:oe&&x(y.thicknessMap.channel),alphaMapUv:J&&x(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ke||g),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&(ot||J),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Le,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:ot&&y.map.isVideoTexture===!0&&ze.getTransfer(y.map.colorSpace)===Je,decodeVideoTextureEmissive:$e&&y.emissiveMap.isVideoTexture===!0&&ze.getTransfer(y.emissiveMap.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ht,flipSided:y.side===Nt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:De&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&y.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let E in y.defines)v.push(E),v.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(A(v,y),S(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function A(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){let v=_[y.type],E;if(v){let N=cn[v];E=Qn.clone(N.uniforms)}else E=y.uniforms;return E}function P(y,v){let E;for(let N=0,D=u.length;N<D;N++){let B=u[N];if(B.cacheKey===v){E=B,++E.usedTimes;break}}return E===void 0&&(E=new g0(s,v,y,r),u.push(E)),E}function R(y){if(--y.usedTimes===0){let v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:C}}function v0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function y0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,_,x,m){let p=o(h,f,d,_,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,x,m){let p=o(h,f,d,_,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||y0),n.length>1&&n.sort(f||xu),i.length>1&&i.sort(f||xu)}function u(){for(let h=e,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function M0(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new vu,s.set(n,[o])):i>=r.length?(o=new vu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function b0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new pe};break;case"SpotLight":t={position:new I,direction:new I,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function S0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var A0=0;function w0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function T0(s){let e=new b0,t=S0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new Ie,o=new Ie;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,A=0,S=0,M=0,P=0,R=0,w=0;c.sort(w0);for(let y=0,v=c.length;y<v;y++){let E=c[y],N=E.color,D=E.intensity,B=E.distance,X=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=N.r*D,h+=N.g*D,f+=N.b*D;else if(E.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(E.sh.coefficients[k],D);w++}else if(E.isDirectionalLight){let k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Q=E.shadow,W=t.get(E);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=E.shadow.matrix,A++}n.directional[d]=k,d++}else if(E.isSpotLight){let k=e.get(E);k.position.setFromMatrixPosition(E.matrixWorld),k.color.copy(N).multiplyScalar(D),k.distance=B,k.coneCos=Math.cos(E.angle),k.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),k.decay=E.decay,n.spot[x]=k;let Q=E.shadow;if(E.map&&(n.spotLightMap[P]=E.map,P++,Q.updateMatrices(E),E.castShadow&&R++),n.spotLightMatrix[x]=Q.matrix,E.castShadow){let W=t.get(E);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=X,M++}x++}else if(E.isRectAreaLight){let k=e.get(E);k.color.copy(N).multiplyScalar(D),k.halfWidth.set(E.width*.5,0,0),k.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=k,m++}else if(E.isPointLight){let k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),k.distance=E.distance,k.decay=E.decay,E.castShadow){let Q=E.shadow,W=t.get(E);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=E.shadow.matrix,S++}n.point[_]=k,_++}else if(E.isHemisphereLight){let k=e.get(E);k.skyColor.copy(E.color).multiplyScalar(D),k.groundColor.copy(E.groundColor).multiplyScalar(D),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==A||C.numPointShadows!==S||C.numSpotShadows!==M||C.numSpotMaps!==P||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,C.directionalLength=d,C.pointLength=_,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=A,C.numPointShadows=S,C.numSpotShadows=M,C.numSpotMaps=P,C.numLightProbes=w,n.version=A0++)}function l(c,u){let h=0,f=0,d=0,_=0,x=0,m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){let S=c[p];if(S.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(S.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function yu(s){let e=new T0(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function E0(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new yu(s),e.set(i,[a])):r>=o.length?(a=new yu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var $a=class extends kt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ya=class extends kt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},R0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C0=`uniform sampler2D shadow_pass;
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
}`;function I0(s,e,t){let n=new ws,i=new ne,r=new ne,o=new Xe,a=new $a({depthPacking:Mf}),l=new Ya,c={},u=t.maxTextureSize,h={[fn]:Nt,[Nt]:fn,[Ht]:Ht},f=new et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:R0,fragmentShader:C0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new dt;_.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ct(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vu;let p=this.type;this.render=function(R,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let y=s.getRenderTarget(),v=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),N=s.state;N.setBlending(hn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=p!==bn&&this.type===bn,B=p===bn&&this.type!==bn;for(let X=0,k=R.length;X<k;X++){let Q=R[X],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let se=W.getFrameExtents();if(i.multiply(se),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/se.x),i.x=r.x*se.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/se.y),i.y=r.y*se.y,W.mapSize.y=r.y)),W.map===null||D===!0||B===!0){let Me=this.type!==bn?{minFilter:Et,magFilter:Et}:{};W.map!==null&&W.map.dispose(),W.map=new Lt(i.x,i.y,Me),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let de=W.getViewportCount();for(let Me=0;Me<de;Me++){let Le=W.getViewport(Me);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),N.viewport(o),W.updateMatrices(Q,Me),n=W.getFrustum(),M(w,C,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===bn&&A(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,v,E)};function A(R,w){let C=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Lt(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(w,null,C,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(w,null,C,d,x,null)}function S(R,w,C,y){let v=null,E=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)v=E;else if(v=C.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let N=v.uuid,D=w.uuid,B=c[N];B===void 0&&(B={},c[N]=B);let X=B[D];X===void 0&&(X=v.clone(),B[D]=X,w.addEventListener("dispose",P)),v=X}if(v.visible=w.visible,v.wireframe=w.wireframe,y===bn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=s.properties.get(v);N.light=C}return v}function M(R,w,C,y,v){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===bn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);let D=e.update(R),B=R.material;if(Array.isArray(B)){let X=D.groups;for(let k=0,Q=X.length;k<Q;k++){let W=X[k],se=B[W.materialIndex];if(se&&se.visible){let de=S(R,se,y,v);R.onBeforeShadow(s,R,w,C,D,de,W),s.renderBufferDirect(C,null,D,de,R,W),R.onAfterShadow(s,R,w,C,D,de,W)}}}else if(B.visible){let X=S(R,B,y,v);R.onBeforeShadow(s,R,w,C,D,X,null),s.renderBufferDirect(C,null,D,X,R,null),R.onAfterShadow(s,R,w,C,D,X,null)}}let N=R.children;for(let D=0,B=N.length;D<B;D++)M(N[D],w,C,y,v)}function P(R){R.target.removeEventListener("dispose",P);for(let C in c){let y=c[C],v=R.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var L0={[ea]:ta,[na]:ra,[ia]:oa,[Gi]:sa,[ta]:ea,[ra]:na,[oa]:ia,[sa]:Gi};function D0(s,e){function t(){let U=!1,oe=new Xe,q=null,J=new Xe(0,0,0,0);return{setMask:function(he){q!==he&&!U&&(s.colorMask(he,he,he,he),q=he)},setLocked:function(he){U=he},setClear:function(he,le,De,ht,At){At===!0&&(he*=ht,le*=ht,De*=ht),oe.set(he,le,De,ht),J.equals(oe)===!1&&(s.clearColor(he,le,De,ht),J.copy(oe))},reset:function(){U=!1,q=null,J.set(-1,0,0,0)}}}function n(){let U=!1,oe=!1,q=null,J=null,he=null;return{setReversed:function(le){if(oe!==le){let De=e.get("EXT_clip_control");oe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);let ht=he;he=null,this.setClear(ht)}oe=le},getReversed:function(){return oe},setTest:function(le){le?te(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(le){q!==le&&!U&&(s.depthMask(le),q=le)},setFunc:function(le){if(oe&&(le=L0[le]),J!==le){switch(le){case ea:s.depthFunc(s.NEVER);break;case ta:s.depthFunc(s.ALWAYS);break;case na:s.depthFunc(s.LESS);break;case Gi:s.depthFunc(s.LEQUAL);break;case ia:s.depthFunc(s.EQUAL);break;case sa:s.depthFunc(s.GEQUAL);break;case ra:s.depthFunc(s.GREATER);break;case oa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=le}},setLocked:function(le){U=le},setClear:function(le){he!==le&&(oe&&(le=1-le),s.clearDepth(le),he=le)},reset:function(){U=!1,q=null,J=null,he=null,oe=!1}}}function i(){let U=!1,oe=null,q=null,J=null,he=null,le=null,De=null,ht=null,At=null;return{setTest:function(Ke){U||(Ke?te(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!U&&(s.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,Kt,pn){(q!==Ke||J!==Kt||he!==pn)&&(s.stencilFunc(Ke,Kt,pn),q=Ke,J=Kt,he=pn)},setOp:function(Ke,Kt,pn){(le!==Ke||De!==Kt||ht!==pn)&&(s.stencilOp(Ke,Kt,pn),le=Ke,De=Kt,ht=pn)},setLocked:function(Ke){U=Ke},setClear:function(Ke){At!==Ke&&(s.clearStencil(Ke),At=Ke)},reset:function(){U=!1,oe=null,q=null,J=null,he=null,le=null,De=null,ht=null,At=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],_=null,x=!1,m=null,p=null,A=null,S=null,M=null,P=null,R=null,w=new pe(0,0,0),C=0,y=!1,v=null,E=null,N=null,D=null,B=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Q=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=Q>=2);let se=null,de={},Me=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),qe=new Xe().fromArray(Me),Y=new Xe().fromArray(Le);function K(U,oe,q,J){let he=new Uint8Array(4),le=s.createTexture();s.bindTexture(U,le),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<q;De++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(oe+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return le}let me={};me[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(s.DEPTH_TEST),o.setFunc(Gi),Oe(!1),ke(bc),te(s.CULL_FACE),F(hn);function te(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function Te(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function Ee(U,oe){return h[U]!==oe?(s.bindFramebuffer(U,oe),h[U]=oe,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=oe),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function Fe(U,oe){let q=d,J=!1;if(U){q=f.get(oe),q===void 0&&(q=[],f.set(oe,q));let he=U.textures;if(q.length!==he.length||q[0]!==s.COLOR_ATTACHMENT0){for(let le=0,De=he.length;le<De;le++)q[le]=s.COLOR_ATTACHMENT0+le;q.length=he.length,J=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,J=!0);J&&s.drawBuffers(q)}function ot(U){return _!==U?(s.useProgram(U),_=U,!0):!1}let Ge={[ci]:s.FUNC_ADD,[Kh]:s.FUNC_SUBTRACT,[Qh]:s.FUNC_REVERSE_SUBTRACT};Ge[jh]=s.MIN,Ge[ef]=s.MAX;let tt={[tf]:s.ZERO,[nf]:s.ONE,[sf]:s.SRC_COLOR,[Qo]:s.SRC_ALPHA,[uf]:s.SRC_ALPHA_SATURATE,[lf]:s.DST_COLOR,[of]:s.DST_ALPHA,[rf]:s.ONE_MINUS_SRC_COLOR,[jo]:s.ONE_MINUS_SRC_ALPHA,[cf]:s.ONE_MINUS_DST_COLOR,[af]:s.ONE_MINUS_DST_ALPHA,[hf]:s.CONSTANT_COLOR,[ff]:s.ONE_MINUS_CONSTANT_COLOR,[df]:s.CONSTANT_ALPHA,[pf]:s.ONE_MINUS_CONSTANT_ALPHA};function F(U,oe,q,J,he,le,De,ht,At,Ke){if(U===hn){x===!0&&(Te(s.BLEND),x=!1);return}if(x===!1&&(te(s.BLEND),x=!0),U!==Jh){if(U!==m||Ke!==y){if((p!==ci||M!==ci)&&(s.blendEquation(s.FUNC_ADD),p=ci,M=ci),Ke)switch(U){case Oi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fi:s.blendFunc(s.ONE,s.ONE);break;case Sc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ac:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ac:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,S=null,P=null,R=null,w.set(0,0,0),C=0,m=U,y=Ke}return}he=he||oe,le=le||q,De=De||J,(oe!==p||he!==M)&&(s.blendEquationSeparate(Ge[oe],Ge[he]),p=oe,M=he),(q!==A||J!==S||le!==P||De!==R)&&(s.blendFuncSeparate(tt[q],tt[J],tt[le],tt[De]),A=q,S=J,P=le,R=De),(ht.equals(w)===!1||At!==C)&&(s.blendColor(ht.r,ht.g,ht.b,At),w.copy(ht),C=At),m=U,y=!1}function St(U,oe){U.side===Ht?Te(s.CULL_FACE):te(s.CULL_FACE);let q=U.side===Nt;oe&&(q=!q),Oe(q),U.blending===Oi&&U.transparent===!1?F(hn):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),$e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(U){v!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),v=U)}function ke(U){U!==$h?(te(s.CULL_FACE),U!==E&&(U===bc?s.cullFace(s.BACK):U===Yh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),E=U}function Ae(U){U!==N&&(k&&s.lineWidth(U),N=U)}function $e(U,oe,q){U?(te(s.POLYGON_OFFSET_FILL),(D!==oe||B!==q)&&(s.polygonOffset(oe,q),D=oe,B=q)):Te(s.POLYGON_OFFSET_FILL)}function we(U){U?te(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function T(U){U===void 0&&(U=s.TEXTURE0+X-1),se!==U&&(s.activeTexture(U),se=U)}function g(U,oe,q){q===void 0&&(se===null?q=s.TEXTURE0+X-1:q=se);let J=de[q];J===void 0&&(J={type:void 0,texture:void 0},de[q]=J),(J.type!==U||J.texture!==oe)&&(se!==q&&(s.activeTexture(q),se=q),s.bindTexture(U,oe||me[U]),J.type=U,J.texture=oe)}function L(){let U=de[se];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(U){qe.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),qe.copy(U))}function ue(U){Y.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Ve(U,oe){let q=c.get(oe);q===void 0&&(q=new WeakMap,c.set(oe,q));let J=q.get(U);J===void 0&&(J=s.getUniformBlockIndex(oe,U.name),q.set(U,J))}function Ue(U,oe){let J=c.get(oe).get(U);l.get(oe)!==J&&(s.uniformBlockBinding(oe,J,U.__bindingPointIndex),l.set(oe,J))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},se=null,de={},h={},f=new WeakMap,d=[],_=null,x=!1,m=null,p=null,A=null,S=null,M=null,P=null,R=null,w=new pe(0,0,0),C=0,y=!1,v=null,E=null,N=null,D=null,B=null,qe.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:Te,bindFramebuffer:Ee,drawBuffers:Fe,useProgram:ot,setBlending:F,setMaterial:St,setFlipSided:Oe,setCullFace:ke,setLineWidth:Ae,setPolygonOffset:$e,setScissorTest:we,activeTexture:T,bindTexture:g,unbindTexture:L,compressedTexImage2D:V,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Se,updateUBOMapping:Ve,uniformBlockBinding:Ue,texStorage2D:Be,texStorage3D:j,texSubImage2D:$,texSubImage3D:ge,compressedTexSubImage2D:ie,compressedTexSubImage3D:ae,scissor:_e,viewport:ue,reset:nt}}function Mu(s,e,t,n){let i=P0(n);switch(t){case Zu:return s*e;case Ku:return s*e;case Qu:return s*e*2;case Rl:return s*e/i.components*i.byteLength;case Cl:return s*e/i.components*i.byteLength;case ju:return s*e*2/i.components*i.byteLength;case Il:return s*e*2/i.components*i.byteLength;case Ju:return s*e*3/i.components*i.byteLength;case $t:return s*e*4/i.components*i.byteLength;case Ll:return s*e*4/i.components*i.byteLength;case _r:case xr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vr:case yr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ua:case fa:return Math.max(s,16)*Math.max(e,8)/4;case ca:case ha:return Math.max(s,8)*Math.max(e,8)/2;case da:case pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case xa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case va:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ya:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ba:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mr:case Ia:case La:return Math.ceil(s/4)*Math.ceil(e/4)*16;case eh:case Da:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Pa:case Ua:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P0(s){switch(s){case En:case qu:return{byteLength:1,components:1};case bs:case $u:case an:return{byteLength:2,components:1};case Tl:case El:return{byteLength:2,components:4};case pi:case wl:case sn:return{byteLength:4,components:1};case Yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function U0(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return d?new OffscreenCanvas(T,g):Ss("canvas")}function x(T,g,L){let V=1,Z=we(T);if((Z.width>L||Z.height>L)&&(V=L/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(V*Z.width),ge=Math.floor(V*Z.height);h===void 0&&(h=_($,ge));let ie=g?_($,ge):h;return ie.width=$,ie.height=ge,ie.getContext("2d").drawImage(T,0,0,$,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+ge+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(T,g,L,V,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=g;if(g===s.RED&&(L===s.FLOAT&&($=s.R32F),L===s.HALF_FLOAT&&($=s.R16F),L===s.UNSIGNED_BYTE&&($=s.R8)),g===s.RED_INTEGER&&(L===s.UNSIGNED_BYTE&&($=s.R8UI),L===s.UNSIGNED_SHORT&&($=s.R16UI),L===s.UNSIGNED_INT&&($=s.R32UI),L===s.BYTE&&($=s.R8I),L===s.SHORT&&($=s.R16I),L===s.INT&&($=s.R32I)),g===s.RG&&(L===s.FLOAT&&($=s.RG32F),L===s.HALF_FLOAT&&($=s.RG16F),L===s.UNSIGNED_BYTE&&($=s.RG8)),g===s.RG_INTEGER&&(L===s.UNSIGNED_BYTE&&($=s.RG8UI),L===s.UNSIGNED_SHORT&&($=s.RG16UI),L===s.UNSIGNED_INT&&($=s.RG32UI),L===s.BYTE&&($=s.RG8I),L===s.SHORT&&($=s.RG16I),L===s.INT&&($=s.RG32I)),g===s.RGB_INTEGER&&(L===s.UNSIGNED_BYTE&&($=s.RGB8UI),L===s.UNSIGNED_SHORT&&($=s.RGB16UI),L===s.UNSIGNED_INT&&($=s.RGB32UI),L===s.BYTE&&($=s.RGB8I),L===s.SHORT&&($=s.RGB16I),L===s.INT&&($=s.RGB32I)),g===s.RGBA_INTEGER&&(L===s.UNSIGNED_BYTE&&($=s.RGBA8UI),L===s.UNSIGNED_SHORT&&($=s.RGBA16UI),L===s.UNSIGNED_INT&&($=s.RGBA32UI),L===s.BYTE&&($=s.RGBA8I),L===s.SHORT&&($=s.RGBA16I),L===s.INT&&($=s.RGBA32I)),g===s.RGB&&L===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),g===s.RGBA){let ge=Z?ro:ze.getTransfer(V);L===s.FLOAT&&($=s.RGBA32F),L===s.HALF_FLOAT&&($=s.RGBA16F),L===s.UNSIGNED_BYTE&&($=ge===Je?s.SRGB8_ALPHA8:s.RGBA8),L===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),L===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(T,g){let L;return T?g===null||g===pi||g===Wi?L=s.DEPTH24_STENCIL8:g===sn?L=s.DEPTH32F_STENCIL8:g===bs&&(L=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===pi||g===Wi?L=s.DEPTH_COMPONENT24:g===sn?L=s.DEPTH_COMPONENT32F:g===bs&&(L=s.DEPTH_COMPONENT16),L}function P(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==Ut?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function R(T){let g=T.target;g.removeEventListener("dispose",R),C(g),g.isVideoTexture&&u.delete(g)}function w(T){let g=T.target;g.removeEventListener("dispose",w),v(g)}function C(T){let g=n.get(T);if(g.__webglInit===void 0)return;let L=T.source,V=f.get(L);if(V){let Z=V[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(T),Object.keys(V).length===0&&f.delete(L)}n.remove(T)}function y(T){let g=n.get(T);s.deleteTexture(g.__webglTexture);let L=T.source,V=f.get(L);delete V[g.__cacheKey],o.memory.textures--}function v(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let Z=0;Z<g.__webglFramebuffer[V].length;Z++)s.deleteFramebuffer(g.__webglFramebuffer[V][Z]);else s.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)s.deleteFramebuffer(g.__webglFramebuffer[V]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let L=T.textures;for(let V=0,Z=L.length;V<Z;V++){let $=n.get(L[V]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(L[V])}n.remove(T)}let E=0;function N(){E=0}function D(){let T=E;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),E+=1,T}function B(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function X(T,g){let L=n.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){let V=T.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(L,T,g);return}}t.bindTexture(s.TEXTURE_2D,L.__webglTexture,s.TEXTURE0+g)}function k(T,g){let L=n.get(T);if(T.version>0&&L.__version!==T.version){Y(L,T,g);return}t.bindTexture(s.TEXTURE_2D_ARRAY,L.__webglTexture,s.TEXTURE0+g)}function Q(T,g){let L=n.get(T);if(T.version>0&&L.__version!==T.version){Y(L,T,g);return}t.bindTexture(s.TEXTURE_3D,L.__webglTexture,s.TEXTURE0+g)}function W(T,g){let L=n.get(T);if(T.version>0&&L.__version!==T.version){K(L,T,g);return}t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+g)}let se={[di]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[Ms]:s.MIRRORED_REPEAT},de={[Et]:s.NEAREST,[Al]:s.NEAREST_MIPMAP_NEAREST,[Ni]:s.NEAREST_MIPMAP_LINEAR,[Ut]:s.LINEAR,[ms]:s.LINEAR_MIPMAP_NEAREST,[un]:s.LINEAR_MIPMAP_LINEAR},Me={[Sf]:s.NEVER,[Cf]:s.ALWAYS,[Af]:s.LESS,[ih]:s.LEQUAL,[wf]:s.EQUAL,[Rf]:s.GEQUAL,[Tf]:s.GREATER,[Ef]:s.NOTEQUAL};function Le(T,g){if(g.type===sn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ut||g.magFilter===ms||g.magFilter===Ni||g.magFilter===un||g.minFilter===Ut||g.minFilter===ms||g.minFilter===Ni||g.minFilter===un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,se[g.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,se[g.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,se[g.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,de[g.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,de[g.minFilter]),g.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Et||g.minFilter!==Ni&&g.minFilter!==un||g.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function qe(T,g){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",R));let V=g.source,Z=f.get(V);Z===void 0&&(Z={},f.set(V,Z));let $=B(g);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Z[$].usedTimes++;let ge=Z[T.__cacheKey];ge!==void 0&&(Z[T.__cacheKey].usedTimes--,ge.usedTimes===0&&y(g)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return L}function Y(T,g,L){let V=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=s.TEXTURE_3D);let Z=qe(T,g),$=g.source;t.bindTexture(V,T.__webglTexture,s.TEXTURE0+L);let ge=n.get($);if($.version!==ge.__version||Z===!0){t.activeTexture(s.TEXTURE0+L);let ie=ze.getPrimaries(ze.workingColorSpace),ae=g.colorSpace===Vn?null:ze.getPrimaries(g.colorSpace),Be=g.colorSpace===Vn||ie===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let j=x(g.image,!1,i.maxTextureSize);j=$e(g,j);let fe=r.convert(g.format,g.colorSpace),Se=r.convert(g.type),_e=S(g.internalFormat,fe,Se,g.colorSpace,g.isVideoTexture);Le(V,g);let ue,Ve=g.mipmaps,Ue=g.isVideoTexture!==!0,nt=ge.__version===void 0||Z===!0,U=$.dataReady,oe=P(g,j);if(g.isDepthTexture)_e=M(g.format===Xi,g.type),nt&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,_e,j.width,j.height,0,fe,Se,null));else if(g.isDataTexture)if(Ve.length>0){Ue&&nt&&t.texStorage2D(s.TEXTURE_2D,oe,_e,Ve[0].width,Ve[0].height);for(let q=0,J=Ve.length;q<J;q++)ue=Ve[q],Ue?U&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,ue.width,ue.height,fe,Se,ue.data):t.texImage2D(s.TEXTURE_2D,q,_e,ue.width,ue.height,0,fe,Se,ue.data);g.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(s.TEXTURE_2D,oe,_e,j.width,j.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,fe,Se,j.data)):t.texImage2D(s.TEXTURE_2D,0,_e,j.width,j.height,0,fe,Se,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,_e,Ve[0].width,Ve[0].height,j.depth);for(let q=0,J=Ve.length;q<J;q++)if(ue=Ve[q],g.format!==$t)if(fe!==null)if(Ue){if(U)if(g.layerUpdates.size>0){let he=Mu(ue.width,ue.height,g.format,g.type);for(let le of g.layerUpdates){let De=ue.data.subarray(le*he/ue.data.BYTES_PER_ELEMENT,(le+1)*he/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,le,ue.width,ue.height,1,fe,De)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,ue.width,ue.height,j.depth,fe,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,_e,ue.width,ue.height,j.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,ue.width,ue.height,j.depth,fe,Se,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,_e,ue.width,ue.height,j.depth,0,fe,Se,ue.data)}else{Ue&&nt&&t.texStorage2D(s.TEXTURE_2D,oe,_e,Ve[0].width,Ve[0].height);for(let q=0,J=Ve.length;q<J;q++)ue=Ve[q],g.format!==$t?fe!==null?Ue?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,q,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,ue.width,ue.height,fe,Se,ue.data):t.texImage2D(s.TEXTURE_2D,q,_e,ue.width,ue.height,0,fe,Se,ue.data)}else if(g.isDataArrayTexture)if(Ue){if(nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,_e,j.width,j.height,j.depth),U)if(g.layerUpdates.size>0){let q=Mu(j.width,j.height,g.format,g.type);for(let J of g.layerUpdates){let he=j.data.subarray(J*q/j.data.BYTES_PER_ELEMENT,(J+1)*q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,j.width,j.height,1,fe,Se,he)}g.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,fe,Se,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,fe,Se,j.data);else if(g.isData3DTexture)Ue?(nt&&t.texStorage3D(s.TEXTURE_3D,oe,_e,j.width,j.height,j.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,fe,Se,j.data)):t.texImage3D(s.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,fe,Se,j.data);else if(g.isFramebufferTexture){if(nt)if(Ue)t.texStorage2D(s.TEXTURE_2D,oe,_e,j.width,j.height);else{let q=j.width,J=j.height;for(let he=0;he<oe;he++)t.texImage2D(s.TEXTURE_2D,he,_e,q,J,0,fe,Se,null),q>>=1,J>>=1}}else if(Ve.length>0){if(Ue&&nt){let q=we(Ve[0]);t.texStorage2D(s.TEXTURE_2D,oe,_e,q.width,q.height)}for(let q=0,J=Ve.length;q<J;q++)ue=Ve[q],Ue?U&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,fe,Se,ue):t.texImage2D(s.TEXTURE_2D,q,_e,fe,Se,ue);g.generateMipmaps=!1}else if(Ue){if(nt){let q=we(j);t.texStorage2D(s.TEXTURE_2D,oe,_e,q.width,q.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Se,j)}else t.texImage2D(s.TEXTURE_2D,0,_e,fe,Se,j);m(g)&&p(V),ge.__version=$.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function K(T,g,L){if(g.image.length!==6)return;let V=qe(T,g),Z=g.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+L);let $=n.get(Z);if(Z.version!==$.__version||V===!0){t.activeTexture(s.TEXTURE0+L);let ge=ze.getPrimaries(ze.workingColorSpace),ie=g.colorSpace===Vn?null:ze.getPrimaries(g.colorSpace),ae=g.colorSpace===Vn||ge===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Be=g.isCompressedTexture||g.image[0].isCompressedTexture,j=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!Be&&!j?fe[J]=x(g.image[J],!0,i.maxCubemapSize):fe[J]=j?g.image[J].image:g.image[J],fe[J]=$e(g,fe[J]);let Se=fe[0],_e=r.convert(g.format,g.colorSpace),ue=r.convert(g.type),Ve=S(g.internalFormat,_e,ue,g.colorSpace),Ue=g.isVideoTexture!==!0,nt=$.__version===void 0||V===!0,U=Z.dataReady,oe=P(g,Se);Le(s.TEXTURE_CUBE_MAP,g);let q;if(Be){Ue&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ve,Se.width,Se.height);for(let J=0;J<6;J++){q=fe[J].mipmaps;for(let he=0;he<q.length;he++){let le=q[he];g.format!==$t?_e!==null?Ue?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,le.width,le.height,_e,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ve,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,le.width,le.height,_e,ue,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ve,le.width,le.height,0,_e,ue,le.data)}}}else{if(q=g.mipmaps,Ue&&nt){q.length>0&&oe++;let J=we(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(j){Ue?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,_e,ue,fe[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,fe[J].width,fe[J].height,0,_e,ue,fe[J].data);for(let he=0;he<q.length;he++){let De=q[he].image[J].image;Ue?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,De.width,De.height,_e,ue,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ve,De.width,De.height,0,_e,ue,De.data)}}else{Ue?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e,ue,fe[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,_e,ue,fe[J]);for(let he=0;he<q.length;he++){let le=q[he];Ue?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,_e,ue,le.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ve,_e,ue,le.image[J])}}}m(g)&&p(s.TEXTURE_CUBE_MAP),$.__version=Z.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function me(T,g,L,V,Z,$){let ge=r.convert(L.format,L.colorSpace),ie=r.convert(L.type),ae=S(L.internalFormat,ge,ie,L.colorSpace),Be=n.get(g),j=n.get(L);if(j.__renderTarget=g,!Be.__hasExternalTextures){let fe=Math.max(1,g.width>>$),Se=Math.max(1,g.height>>$);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,ae,fe,Se,g.depth,0,ge,ie,null):t.texImage2D(Z,$,ae,fe,Se,0,ge,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),ke(g)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Z,j.__webglTexture,0,Oe(g)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Z,j.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(T,g,L){if(s.bindRenderbuffer(s.RENDERBUFFER,T),g.depthBuffer){let V=g.depthTexture,Z=V&&V.isDepthTexture?V.type:null,$=M(g.stencilBuffer,Z),ge=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=Oe(g);ke(g)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,$,g.width,g.height):L?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,$,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,$,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,T)}else{let V=g.textures;for(let Z=0;Z<V.length;Z++){let $=V[Z],ge=r.convert($.format,$.colorSpace),ie=r.convert($.type),ae=S($.internalFormat,ge,ie,$.colorSpace),Be=Oe(g);L&&ke(g)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,ae,g.width,g.height):ke(g)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be,ae,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,ae,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=n.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);let Z=V.__webglTexture,$=Oe(g);if(g.depthTexture.format===zi)ke(g)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(g.depthTexture.format===Xi)ke(g)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ee(T){let g=n.get(T),L=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let V=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){let Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=V}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Te(g.__webglFramebuffer,T)}else if(L){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=s.createRenderbuffer(),te(g.__webglDepthbuffer[V],T,!1);else{let Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,$)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),te(g.__webglDepthbuffer,T,!1);else{let V=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(T,g,L){let V=n.get(T);g!==void 0&&me(V.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),L!==void 0&&Ee(T)}function ot(T){let g=T.texture,L=n.get(T),V=n.get(g);T.addEventListener("dispose",w);let Z=T.textures,$=T.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=g.version,o.memory.textures++),$){L.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[ie]=[];for(let ae=0;ae<g.mipmaps.length;ae++)L.__webglFramebuffer[ie][ae]=s.createFramebuffer()}else L.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)L.__webglFramebuffer[ie]=s.createFramebuffer()}else L.__webglFramebuffer=s.createFramebuffer();if(ge)for(let ie=0,ae=Z.length;ie<ae;ie++){let Be=n.get(Z[ie]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&ke(T)===!1){L.__webglMultisampledFramebuffer=s.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){let ae=Z[ie];L.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,L.__webglColorRenderbuffer[ie]);let Be=r.convert(ae.format,ae.colorSpace),j=r.convert(ae.type),fe=S(ae.internalFormat,Be,j,ae.colorSpace,T.isXRRenderTarget===!0),Se=Oe(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,L.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=s.createRenderbuffer(),te(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Le(s.TEXTURE_CUBE_MAP,g);for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)me(L.__webglFramebuffer[ie][ae],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else me(L.__webglFramebuffer[ie],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(g)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ie=0,ae=Z.length;ie<ae;ie++){let Be=Z[ie],j=n.get(Be);t.bindTexture(s.TEXTURE_2D,j.__webglTexture),Le(s.TEXTURE_2D,Be),me(L.__webglFramebuffer,T,Be,s.COLOR_ATTACHMENT0+ie,s.TEXTURE_2D,0),m(Be)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,V.__webglTexture),Le(ie,g),g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)me(L.__webglFramebuffer[ae],T,g,s.COLOR_ATTACHMENT0,ie,ae);else me(L.__webglFramebuffer,T,g,s.COLOR_ATTACHMENT0,ie,0);m(g)&&p(ie),t.unbindTexture()}T.depthBuffer&&Ee(T)}function Ge(T){let g=T.textures;for(let L=0,V=g.length;L<V;L++){let Z=g[L];if(m(Z)){let $=A(T),ge=n.get(Z).__webglTexture;t.bindTexture($,ge),p($),t.unbindTexture()}}}let tt=[],F=[];function St(T){if(T.samples>0){if(ke(T)===!1){let g=T.textures,L=T.width,V=T.height,Z=s.COLOR_BUFFER_BIT,$=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(T),ie=g.length>1;if(ie)for(let ae=0;ae<g.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ae=0;ae<g.length;ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[ae]);let Be=n.get(g[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,L,V,0,0,L,V,Z,s.NEAREST),l===!0&&(tt.length=0,F.length=0,tt.push(s.COLOR_ATTACHMENT0+ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(tt.push($),F.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let ae=0;ae<g.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,ge.__webglColorRenderbuffer[ae]);let Be=n.get(g[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,Be,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let g=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function Oe(T){return Math.min(i.maxSamples,T.samples)}function ke(T){let g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ae(T){let g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function $e(T,g){let L=T.colorSpace,V=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==Rt&&L!==Vn&&(ze.getTransfer(L)===Je?(V!==$t||Z!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function we(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ke}function N0(s,e){function t(n,i=Vn){let r,o=ze.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===Tl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===El)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return s.BYTE;if(n===$u)return s.SHORT;if(n===bs)return s.UNSIGNED_SHORT;if(n===wl)return s.INT;if(n===pi)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===an)return s.HALF_FLOAT;if(n===Zu)return s.ALPHA;if(n===Ju)return s.RGB;if(n===$t)return s.RGBA;if(n===Ku)return s.LUMINANCE;if(n===Qu)return s.LUMINANCE_ALPHA;if(n===zi)return s.DEPTH_COMPONENT;if(n===Xi)return s.DEPTH_STENCIL;if(n===Rl)return s.RED;if(n===Cl)return s.RED_INTEGER;if(n===ju)return s.RG;if(n===Il)return s.RG_INTEGER;if(n===Ll)return s.RGBA_INTEGER;if(n===_r||n===xr||n===vr||n===yr)if(o===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ua||n===ha||n===fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===pa||n===ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===da||n===pa)return o===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===_a||n===xa||n===va||n===ya||n===Ma||n===ba||n===Sa||n===Aa||n===wa||n===Ta||n===Ea||n===Ra||n===Ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Aa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===Ia||n===La)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mr)return o===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eh||n===Da||n===Pa||n===Ua)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Za=class extends gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},bt=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},F0={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},O0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z0=`
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

}`,Ja=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new et({vertexShader:O0,fragmentShader:z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ka=class extends qn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null,x=new Ja,m=t.getContextAttributes(),p=null,A=null,S=[],M=[],P=new ne,R=null,w=new gt;w.viewport=new Xe;let C=new gt;C.viewport=new Xe;let y=[w,C],v=new Za,E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=S[Y];return K===void 0&&(K=new xs,S[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=S[Y];return K===void 0&&(K=new xs,S[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=S[Y];return K===void 0&&(K=new xs,S[Y]=K),K.getHandSpace()};function D(Y){let K=M.indexOf(Y.inputSource);if(K===-1)return;let me=S[K];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<S.length;Y++){let K=M[Y];K!==null&&(M[Y]=null,S[Y].disconnect(K))}E=null,N=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,A=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",B),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){let K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Lt(d.framebufferWidth,d.framebufferHeight,{format:$t,type:En,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,me=null,te=null;m.depth&&(te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Xi:zi,me=m.stencil?Wi:pi);let Te={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Te),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Lt(f.textureWidth,f.textureHeight,{format:$t,type:En,depthTexture:new Lr(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(Y){for(let K=0;K<Y.removed.length;K++){let me=Y.removed[K],te=M.indexOf(me);te>=0&&(M[te]=null,S[te].disconnect(me))}for(let K=0;K<Y.added.length;K++){let me=Y.added[K],te=M.indexOf(me);if(te===-1){for(let Ee=0;Ee<S.length;Ee++)if(Ee>=M.length){M.push(me),te=Ee;break}else if(M[Ee]===null){M[Ee]=me,te=Ee;break}if(te===-1)break}let Te=S[te];Te&&Te.connect(me)}}let k=new I,Q=new I;function W(Y,K,me){k.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);let te=k.distanceTo(Q),Te=K.projectionMatrix.elements,Ee=me.projectionMatrix.elements,Fe=Te[14]/(Te[10]-1),ot=Te[14]/(Te[10]+1),Ge=(Te[9]+1)/Te[5],tt=(Te[9]-1)/Te[5],F=(Te[8]-1)/Te[0],St=(Ee[8]+1)/Ee[0],Oe=Fe*F,ke=Fe*St,Ae=te/(-F+St),$e=Ae*-F;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($e),Y.translateZ(Ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let we=Fe+Ae,T=ot+Ae,g=Oe-$e,L=ke+(te-$e),V=Ge*ot/T*we,Z=tt*ot/T*we;Y.projectionMatrix.makePerspective(g,L,V,Z,we,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function se(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let K=Y.near,me=Y.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(me=x.depthFar)),v.near=C.near=w.near=K,v.far=C.far=w.far=me,(E!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,N=v.far),w.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,v.layers.mask=w.layers.mask|C.layers.mask;let te=Y.parent,Te=v.cameras;se(v,te);for(let Ee=0;Ee<Te.length;Ee++)se(Te[Ee],te);Te.length===2?W(v,w,C):v.projectionMatrix.copy(w.projectionMatrix),de(Y,v,te)};function de(Y,K,me){me===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Me=null;function Le(Y,K){if(u=K.getViewerPose(c||o),_=K,u!==null){let me=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let te=!1;me.length!==v.cameras.length&&(v.cameras.length=0,te=!0);for(let Ee=0;Ee<me.length;Ee++){let Fe=me[Ee],ot=null;if(d!==null)ot=d.getViewport(Fe);else{let tt=h.getViewSubImage(f,Fe);ot=tt.viewport,Ee===0&&(e.setRenderTargetTextures(A,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(A))}let Ge=y[Ee];Ge===void 0&&(Ge=new gt,Ge.layers.enable(Ee),Ge.viewport=new Xe,y[Ee]=Ge),Ge.matrix.fromArray(Fe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Fe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ot.x,ot.y,ot.width,ot.height),Ee===0&&(v.matrix.copy(Ge.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),te===!0&&v.cameras.push(Ge)}let Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let Ee=h.getDepthInformation(me[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(e,Ee,i.renderState)}}for(let me=0;me<S.length;me++){let te=M[me],Te=S[me];te!==null&&Te!==void 0&&Te.update(te,K,c||o)}Me&&Me(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let qe=new lh;qe.setAnimationLoop(Le),this.setAnimationLoop=function(Y){Me=Y},this.dispose=function(){}}},ai=new dn,B0=new Ie;function H0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ah(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,A,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=e.get(p),S=A.envMap,M=A.envMapRotation;S&&(m.envMap.value=S,ai.copy(M),ai.x*=-1,ai.y*=-1,ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(ai)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function G0(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,S){let M=S.program;n.uniformBlockBinding(A,M)}function c(A,S){let M=i[A.id];M===void 0&&(_(A),M=u(A),i[A.id]=M,A.addEventListener("dispose",m));let P=S.program;n.updateUBOMapping(A,P);let R=e.render.frame;r[A.id]!==R&&(f(A),r[A.id]=R)}function u(A){let S=h();A.__bindingPointIndex=S;let M=s.createBuffer(),P=A.__size,R=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let S=i[A.id],M=A.uniforms,P=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let R=0,w=M.length;R<w;R++){let C=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,v=C.length;y<v;y++){let E=C[y];if(d(E,R,y,P)===!0){let N=E.__offset,D=Array.isArray(E.value)?E.value:[E.value],B=0;for(let X=0;X<D.length;X++){let k=D[X],Q=x(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,N+B,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,B),B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(A,S,M,P){let R=A.value,w=S+"_"+M;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{let C=P[w];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return P[w]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function _(A){let S=A.uniforms,M=0,P=16;for(let w=0,C=S.length;w<C;w++){let y=Array.isArray(S[w])?S[w]:[S[w]];for(let v=0,E=y.length;v<E;v++){let N=y[v],D=Array.isArray(N.value)?N.value:[N.value];for(let B=0,X=D.length;B<X;B++){let k=D[B],Q=x(k),W=M%P,se=W%Q.boundary,de=W+se;M+=se,de!==0&&P-de<Q.storage&&(M+=P-de),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=Q.storage}}}let R=M%P;return R>0&&(M+=P-R),A.__size=M,A.__cache={},this}function x(A){let S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function m(A){let S=A.target;S.removeEventListener("dispose",m);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(let A in i)s.deleteBuffer(i[A]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Dr=class{constructor(e={}){let{canvas:t=qf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let _=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,A=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=Xn,this.toneMappingExposure=1;let M=this,P=!1,R=0,w=0,C=null,y=-1,v=null,E=new Xe,N=new Xe,D=null,B=new pe(0),X=0,k=t.width,Q=t.height,W=1,se=null,de=null,Me=new Xe(0,0,k,Q),Le=new Xe(0,0,k,Q),qe=!1,Y=new ws,K=!1,me=!1,te=new Ie,Te=new Ie,Ee=new I,Fe=new Xe,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function tt(){return C===null?W:1}let F=n;function St(b,O){return t.getContext(b,O)}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),F===null){let O="webgl2";if(F=St(O,b),F===null)throw St(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Oe,ke,Ae,$e,we,T,g,L,V,Z,$,ge,ie,ae,Be,j,fe,Se,_e,ue,Ve,Ue,nt,U;function oe(){Oe=new ig(F),Oe.init(),Ue=new N0(F,Oe),ke=new Km(F,Oe,e,Ue),Ae=new D0(F,Oe),ke.reverseDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),$e=new og(F),we=new v0,T=new U0(F,Oe,Ae,we,ke,Ue,$e),g=new jm(M),L=new ng(M),V=new dd(F),nt=new Zm(F,V),Z=new sg(F,V,$e,nt),$=new lg(F,Z,V,$e),_e=new ag(F,ke,T),j=new Qm(we),ge=new x0(M,g,L,Oe,ke,nt,j),ie=new H0(M,we),ae=new M0,Be=new E0(Oe),Se=new Ym(M,g,L,Ae,$,d,l),fe=new I0(M,$,ke),U=new G0(F,$e,ke,Ae),ue=new Jm(F,Oe,$e),Ve=new rg(F,Oe,$e),$e.programs=ge.programs,M.capabilities=ke,M.extensions=Oe,M.properties=we,M.renderLists=ae,M.shadowMap=fe,M.state=Ae,M.info=$e}oe();let q=new Ka(M,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=Oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(k,Q,!1))},this.getSize=function(b){return b.set(k,Q)},this.setSize=function(b,O,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,Q=O,t.width=Math.floor(b*W),t.height=Math.floor(O*W),H===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(k*W,Q*W).floor()},this.setDrawingBufferSize=function(b,O,H){k=b,Q=O,W=H,t.width=Math.floor(b*H),t.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,O,H,G){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,O,H,G),Ae.viewport(E.copy(Me).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Le)},this.setScissor=function(b,O,H,G){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,O,H,G),Ae.scissor(N.copy(Le).multiplyScalar(W).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(b){Ae.setScissorTest(qe=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(b=!0,O=!0,H=!0){let G=0;if(b){let z=!1;if(C!==null){let ee=C.texture.format;z=ee===Ll||ee===Il||ee===Cl}if(z){let ee=C.texture.type,ce=ee===En||ee===pi||ee===bs||ee===Wi||ee===Tl||ee===El,xe=Se.getClearColor(),ve=Se.getClearAlpha(),Re=xe.r,Pe=xe.g,ye=xe.b;ce?(_[0]=Re,_[1]=Pe,_[2]=ye,_[3]=ve,F.clearBufferuiv(F.COLOR,0,_)):(x[0]=Re,x[1]=Pe,x[2]=ye,x[3]=ve,F.clearBufferiv(F.COLOR,0,x))}else G|=F.COLOR_BUFFER_BIT}O&&(G|=F.DEPTH_BUFFER_BIT),H&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ae.dispose(),Be.dispose(),we.dispose(),g.dispose(),L.dispose(),$.dispose(),nt.dispose(),U.dispose(),ge.dispose(),q.dispose(),q.removeEventListener("sessionstart",pc),q.removeEventListener("sessionend",mc),ti.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let b=$e.autoReset,O=fe.enabled,H=fe.autoUpdate,G=fe.needsUpdate,z=fe.type;oe(),$e.autoReset=b,fe.enabled=O,fe.autoUpdate=H,fe.needsUpdate=G,fe.type=z}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function De(b){let O=b.target;O.removeEventListener("dispose",De),ht(O)}function ht(b){At(b),we.remove(b)}function At(b){let O=we.get(b).programs;O!==void 0&&(O.forEach(function(H){ge.releaseProgram(H)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,G,z,ee){O===null&&(O=ot);let ce=z.isMesh&&z.matrixWorld.determinant()<0,xe=Wh(b,O,H,G,z);Ae.setMaterial(G,ce);let ve=H.index,Re=1;if(G.wireframe===!0){if(ve=Z.getWireframeAttribute(H),ve===void 0)return;Re=2}let Pe=H.drawRange,ye=H.attributes.position,We=Pe.start*Re,it=(Pe.start+Pe.count)*Re;ee!==null&&(We=Math.max(We,ee.start*Re),it=Math.min(it,(ee.start+ee.count)*Re)),ve!==null?(We=Math.max(We,0),it=Math.min(it,ve.count)):ye!=null&&(We=Math.max(We,0),it=Math.min(it,ye.count));let at=it-We;if(at<0||at===1/0)return;nt.setup(z,G,xe,H,ve);let Pt,Ye=ue;if(ve!==null&&(Pt=V.get(ve),Ye=Ve,Ye.setIndex(Pt)),z.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*tt()),Ye.setMode(F.LINES)):Ye.setMode(F.TRIANGLES);else if(z.isLine){let be=G.linewidth;be===void 0&&(be=1),Ae.setLineWidth(be*tt()),z.isLineSegments?Ye.setMode(F.LINES):z.isLineLoop?Ye.setMode(F.LINE_LOOP):Ye.setMode(F.LINE_STRIP)}else z.isPoints?Ye.setMode(F.POINTS):z.isSprite&&Ye.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ye.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Ye.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let be=z._multiDrawStarts,mn=z._multiDrawCounts,Ze=z._multiDrawCount,Qt=ve?V.get(ve).bytesPerElement:1,vi=we.get(G).currentProgram.getUniforms();for(let Ot=0;Ot<Ze;Ot++)vi.setValue(F,"_gl_DrawID",Ot),Ye.render(be[Ot]/Qt,mn[Ot])}else if(z.isInstancedMesh)Ye.renderInstances(We,at,z.count);else if(H.isInstancedBufferGeometry){let be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,mn=Math.min(H.instanceCount,be);Ye.renderInstances(We,at,mn)}else Ye.render(We,at)};function Ke(b,O,H){b.transparent===!0&&b.side===Ht&&b.forceSinglePass===!1?(b.side=Nt,b.needsUpdate=!0,ks(b,O,H),b.side=fn,b.needsUpdate=!0,ks(b,O,H),b.side=Ht):ks(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),p=Be.get(H),p.init(O),S.push(p),H.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==H&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let G=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ee=z.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){let xe=ee[ce];Ke(xe,H,z),G.add(xe)}else Ke(ee,H,z),G.add(ee)}),S.pop(),p=null,G},this.compileAsync=function(b,O,H=null){let G=this.compile(b,O,H);return new Promise(z=>{function ee(){if(G.forEach(function(ce){we.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){z(b);return}setTimeout(ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Kt=null;function pn(b){Kt&&Kt(b)}function pc(){ti.stop()}function mc(){ti.start()}let ti=new lh;ti.setAnimationLoop(pn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){Kt=b,q.setAnimationLoop(b),b===null?ti.stop():ti.start()},q.addEventListener("sessionstart",pc),q.addEventListener("sessionend",mc),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,C),p=Be.get(b,S.length),p.init(O),S.push(p),Te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(Te),me=this.localClippingEnabled,K=j.init(this.clippingPlanes,me),m=ae.get(b,A.length),m.init(),A.push(m),q.enabled===!0&&q.isPresenting===!0){let ee=M.xr.getDepthSensingMesh();ee!==null&&go(ee,O,-1/0,M.sortObjects)}go(b,O,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(se,de),Ge=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ge&&Se.addToRenderList(m,b),this.info.render.frame++,K===!0&&j.beginShadows();let H=p.state.shadowsArray;fe.render(H,b,O),K===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ee=O.cameras;if(z.length>0)for(let ce=0,xe=ee.length;ce<xe;ce++){let ve=ee[ce];_c(G,z,b,ve)}Ge&&Se.render(b);for(let ce=0,xe=ee.length;ce<xe;ce++){let ve=ee[ce];gc(m,b,ve,ve.viewport)}}else z.length>0&&_c(G,z,b,O),Ge&&Se.render(b),gc(m,b,O);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(M,b,O),nt.resetDefaultState(),y=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],K===!0&&j.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function go(b,O,H,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){G&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Te);let ce=$.update(b),xe=b.material;xe.visible&&m.push(b,ce,xe,H,Fe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let ce=$.update(b),xe=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Fe.copy(ce.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4(Te)),Array.isArray(xe)){let ve=ce.groups;for(let Re=0,Pe=ve.length;Re<Pe;Re++){let ye=ve[Re],We=xe[ye.materialIndex];We&&We.visible&&m.push(b,ce,We,H,Fe.z,ye)}}else xe.visible&&m.push(b,ce,xe,H,Fe.z,null)}}let ee=b.children;for(let ce=0,xe=ee.length;ce<xe;ce++)go(ee[ce],O,H,G)}function gc(b,O,H,G){let z=b.opaque,ee=b.transmissive,ce=b.transparent;p.setupLightsView(H),K===!0&&j.setGlobalState(M.clippingPlanes,H),G&&Ae.viewport(E.copy(G)),z.length>0&&Gs(z,O,H),ee.length>0&&Gs(ee,O,H),ce.length>0&&Gs(ce,O,H),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function _c(b,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Lt(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?an:En,minFilter:un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));let ee=p.state.transmissionRenderTarget[G.id],ce=G.viewport||E;ee.setSize(ce.z,ce.w);let xe=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(B),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Ge&&Se.render(H);let ve=M.toneMapping;M.toneMapping=Xn;let Re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),K===!0&&j.setGlobalState(M.clippingPlanes,G),Gs(b,H,G),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ye=0,We=O.length;ye<We;ye++){let it=O[ye],at=it.object,Pt=it.geometry,Ye=it.material,be=it.group;if(Ye.side===Ht&&at.layers.test(G.layers)){let mn=Ye.side;Ye.side=Nt,Ye.needsUpdate=!0,xc(at,H,G,Pt,Ye,be),Ye.side=mn,Ye.needsUpdate=!0,Pe=!0}}Pe===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}M.setRenderTarget(xe),M.setClearColor(B,X),Re!==void 0&&(G.viewport=Re),M.toneMapping=ve}function Gs(b,O,H){let G=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ee=b.length;z<ee;z++){let ce=b[z],xe=ce.object,ve=ce.geometry,Re=G===null?ce.material:G,Pe=ce.group;xe.layers.test(H.layers)&&xc(xe,O,H,ve,Re,Pe)}}function xc(b,O,H,G,z,ee){b.onBeforeRender(M,O,H,G,z,ee),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(M,O,H,G,b,ee),z.transparent===!0&&z.side===Ht&&z.forceSinglePass===!1?(z.side=Nt,z.needsUpdate=!0,M.renderBufferDirect(H,O,G,z,b,ee),z.side=fn,z.needsUpdate=!0,M.renderBufferDirect(H,O,G,z,b,ee),z.side=Ht):M.renderBufferDirect(H,O,G,z,b,ee),b.onAfterRender(M,O,H,G,z,ee)}function ks(b,O,H){O.isScene!==!0&&(O=ot);let G=we.get(b),z=p.state.lights,ee=p.state.shadowsArray,ce=z.state.version,xe=ge.getParameters(b,z.state,ee,O,H),ve=ge.getProgramCacheKey(xe),Re=G.programs;G.environment=b.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(b.isMeshStandardMaterial?L:g).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",De),Re=new Map,G.programs=Re);let Pe=Re.get(ve);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===ce)return yc(b,xe),Pe}else xe.uniforms=ge.getUniforms(b),b.onBeforeCompile(xe,M),Pe=ge.acquireProgram(xe,ve),Re.set(ve,Pe),G.uniforms=xe.uniforms;let ye=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ye.clippingPlanes=j.uniform),yc(b,xe),G.needsLights=qh(b),G.lightsStateVersion=ce,G.needsLights&&(ye.ambientLightColor.value=z.state.ambient,ye.lightProbe.value=z.state.probe,ye.directionalLights.value=z.state.directional,ye.directionalLightShadows.value=z.state.directionalShadow,ye.spotLights.value=z.state.spot,ye.spotLightShadows.value=z.state.spotShadow,ye.rectAreaLights.value=z.state.rectArea,ye.ltc_1.value=z.state.rectAreaLTC1,ye.ltc_2.value=z.state.rectAreaLTC2,ye.pointLights.value=z.state.point,ye.pointLightShadows.value=z.state.pointShadow,ye.hemisphereLights.value=z.state.hemi,ye.directionalShadowMap.value=z.state.directionalShadowMap,ye.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ye.spotShadowMap.value=z.state.spotShadowMap,ye.spotLightMatrix.value=z.state.spotLightMatrix,ye.spotLightMap.value=z.state.spotLightMap,ye.pointShadowMap.value=z.state.pointShadowMap,ye.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function vc(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Hi.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function yc(b,O){let H=we.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Wh(b,O,H,G,z){O.isScene!==!0&&(O=ot),T.resetTextureUnits();let ee=O.fog,ce=G.isMeshStandardMaterial?O.environment:null,xe=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Rt,ve=(G.isMeshStandardMaterial?L:g).get(G.envMap||ce),Re=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ye=!!H.morphAttributes.position,We=!!H.morphAttributes.normal,it=!!H.morphAttributes.color,at=Xn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(at=M.toneMapping);let Pt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ye=Pt!==void 0?Pt.length:0,be=we.get(G),mn=p.state.lights;if(K===!0&&(me===!0||b!==v)){let Xt=b===v&&G.id===y;j.setState(G,b,Xt)}let Ze=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==mn.state.version||be.outputColorSpace!==xe||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==ve||G.fog===!0&&be.fog!==ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==j.numPlanes||be.numIntersection!==j.numIntersection)||be.vertexAlphas!==Re||be.vertexTangents!==Pe||be.morphTargets!==ye||be.morphNormals!==We||be.morphColors!==it||be.toneMapping!==at||be.morphTargetsCount!==Ye)&&(Ze=!0):(Ze=!0,be.__version=G.version);let Qt=be.currentProgram;Ze===!0&&(Qt=ks(G,O,z));let vi=!1,Ot=!1,is=!1,lt=Qt.getUniforms(),ln=be.uniforms;if(Ae.useProgram(Qt.program)&&(vi=!0,Ot=!0,is=!0),G.id!==y&&(y=G.id,Ot=!0),vi||v!==b){Ae.buffers.depth.getReversed()?(te.copy(b.projectionMatrix),Yf(te),Zf(te),lt.setValue(F,"projectionMatrix",te)):lt.setValue(F,"projectionMatrix",b.projectionMatrix),lt.setValue(F,"viewMatrix",b.matrixWorldInverse);let Nn=lt.map.cameraPosition;Nn!==void 0&&Nn.setValue(F,Ee.setFromMatrixPosition(b.matrixWorld)),ke.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Ot=!0,is=!0)}if(z.isSkinnedMesh){lt.setOptional(F,z,"bindMatrix"),lt.setOptional(F,z,"bindMatrixInverse");let Xt=z.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),lt.setValue(F,"boneTexture",Xt.boneTexture,T))}z.isBatchedMesh&&(lt.setOptional(F,z,"batchingTexture"),lt.setValue(F,"batchingTexture",z._matricesTexture,T),lt.setOptional(F,z,"batchingIdTexture"),lt.setValue(F,"batchingIdTexture",z._indirectTexture,T),lt.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(F,"batchingColorTexture",z._colorsTexture,T));let ss=H.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&_e.update(z,H,Qt),(Ot||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,lt.setValue(F,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ln.envMap.value=ve,ln.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(ln.envMapIntensity.value=O.environmentIntensity),Ot&&(lt.setValue(F,"toneMappingExposure",M.toneMappingExposure),be.needsLights&&Xh(ln,is),ee&&G.fog===!0&&ie.refreshFogUniforms(ln,ee),ie.refreshMaterialUniforms(ln,G,W,Q,p.state.transmissionRenderTarget[b.id]),Hi.upload(F,vc(be),ln,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Hi.upload(F,vc(be),ln,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(F,"center",z.center),lt.setValue(F,"modelViewMatrix",z.modelViewMatrix),lt.setValue(F,"normalMatrix",z.normalMatrix),lt.setValue(F,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Xt=G.uniformsGroups;for(let Nn=0,Fn=Xt.length;Nn<Fn;Nn++){let Mc=Xt[Nn];U.update(Mc,Qt),U.bind(Mc,Qt)}}return Qt}function Xh(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function qh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,O,H){we.get(b.texture).__webglTexture=O,we.get(b.depthTexture).__webglTexture=H;let G=we.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let H=we.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,H=0){C=b,R=O,w=H;let G=!0,z=null,ee=!1,ce=!1;if(b){let ve=we.get(b);if(ve.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(ve.__hasExternalTextures)T.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ye=b.depthTexture;if(ve.__boundDepthTexture!==ye){if(ye!==null&&we.has(ye)&&(b.width!==ye.image.width||b.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ce=!0);let Pe=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?z=Pe[O][H]:z=Pe[O],ee=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?z=we.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?z=Pe[H]:z=Pe,E.copy(b.viewport),N.copy(b.scissor),D=b.scissorTest}else E.copy(Me).multiplyScalar(W).floor(),N.copy(Le).multiplyScalar(W).floor(),D=qe;if(Ae.bindFramebuffer(F.FRAMEBUFFER,z)&&G&&Ae.drawBuffers(b,z),Ae.viewport(E),Ae.scissor(N),Ae.setScissorTest(D),ee){let ve=we.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,H)}else if(ce){let ve=we.get(b.texture),Re=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ve.__webglTexture,H||0,Re)}y=-1},this.readRenderTargetPixels=function(b,O,H,G,z,ee,ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){Ae.bindFramebuffer(F.FRAMEBUFFER,xe);try{let ve=b.texture,Re=ve.format,Pe=ve.type;if(!ke.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&H>=0&&H<=b.height-z&&F.readPixels(O,H,G,z,Ue.convert(Re),Ue.convert(Pe),ee)}finally{let ve=C!==null?we.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(b,O,H,G,z,ee,ce){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){let ve=b.texture,Re=ve.format,Pe=ve.type;if(!ke.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-G&&H>=0&&H<=b.height-z){Ae.bindFramebuffer(F.FRAMEBUFFER,xe);let ye=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.bufferData(F.PIXEL_PACK_BUFFER,ee.byteLength,F.STREAM_READ),F.readPixels(O,H,G,z,Ue.convert(Re),Ue.convert(Pe),0);let We=C!==null?we.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,We);let it=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $f(F,it,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ee),F.deleteBuffer(ye),F.deleteSync(it),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,H=0){b.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);let G=Math.pow(2,-H),z=Math.floor(b.image.width*G),ee=Math.floor(b.image.height*G),ce=O!==null?O.x:0,xe=O!==null?O.y:0;T.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,ce,xe,z,ee),Ae.unbindTexture()},this.copyTextureToTexture=function(b,O,H=null,G=null,z=0){b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],O=arguments[2],z=arguments[3]||0,H=null);let ee,ce,xe,ve,Re,Pe,ye,We,it,at=b.isCompressedTexture?b.mipmaps[z]:b.image;H!==null?(ee=H.max.x-H.min.x,ce=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,ve=H.min.x,Re=H.min.y,Pe=H.isBox3?H.min.z:0):(ee=at.width,ce=at.height,xe=at.depth||1,ve=0,Re=0,Pe=0),G!==null?(ye=G.x,We=G.y,it=G.z):(ye=0,We=0,it=0);let Pt=Ue.convert(O.format),Ye=Ue.convert(O.type),be;O.isData3DTexture?(T.setTexture3D(O,0),be=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),be=F.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),be=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let mn=F.getParameter(F.UNPACK_ROW_LENGTH),Ze=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Qt=F.getParameter(F.UNPACK_SKIP_PIXELS),vi=F.getParameter(F.UNPACK_SKIP_ROWS),Ot=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,at.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ve),F.pixelStorei(F.UNPACK_SKIP_ROWS,Re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pe);let is=b.isDataArrayTexture||b.isData3DTexture,lt=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let ln=we.get(b),ss=we.get(O),Xt=we.get(ln.__renderTarget),Nn=we.get(ss.__renderTarget);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<xe;Fn++)is&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(b).__webglTexture,z,Pe+Fn),b.isDepthTexture?(lt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(O).__webglTexture,z,it+Fn),F.blitFramebuffer(ve,Re,ee,ce,ye,We,ee,ce,F.DEPTH_BUFFER_BIT,F.NEAREST)):lt?F.copyTexSubImage3D(be,z,ye,We,it+Fn,ve,Re,ee,ce):F.copyTexSubImage2D(be,z,ye,We,it+Fn,ve,Re,ee,ce);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else lt?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(be,z,ye,We,it,ee,ce,xe,Pt,Ye,at.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(be,z,ye,We,it,ee,ce,xe,Pt,at.data):F.texSubImage3D(be,z,ye,We,it,ee,ce,xe,Pt,Ye,at):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,ye,We,ee,ce,Pt,Ye,at.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,ye,We,at.width,at.height,Pt,at.data):F.texSubImage2D(F.TEXTURE_2D,z,ye,We,ee,ce,Pt,Ye,at);F.pixelStorei(F.UNPACK_ROW_LENGTH,mn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ze),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qt),F.pixelStorei(F.UNPACK_SKIP_ROWS,vi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ot),z===0&&O.generateMipmaps&&F.generateMipmap(be),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,O,H=null,G=null,z=0){return b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,b=arguments[2],O=arguments[3],z=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,H,G,z)},this.initRenderTarget=function(b){we.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){R=0,w=0,C=null,Ae.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};var Pr=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ts=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Na,this.updateRanges=[],this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ct=new I,Es=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var bu=new I,Su=new Xe,Au=new Xe,k0=new I,wu=new Ie,cr=new I,Wo=new Gt,Tu=new Ie,Xo=new Zi,Ur=class extends ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wc,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cr),this.boundingBox.expandByPoint(cr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cr),this.boundingSphere.expandByPoint(cr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),e.ray.intersectsSphere(Wo)!==!1&&(Tu.copy(i).invert(),Xo.copy(e.ray).applyMatrix4(Tu),!(this.boundingBox!==null&&Xo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Su.fromBufferAttribute(i.attributes.skinIndex,e),Au.fromBufferAttribute(i.attributes.skinWeight,e),bu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Au.getComponent(r);if(o!==0){let a=Su.getComponent(r);wu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(k0.copy(bu).applyMatrix4(wu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Rs=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Nr=class extends Mt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Et,u=Et,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Eu=new Ie,V0=new Ie,Fr=class s{constructor(e=[],t=[]){this.uuid=rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:V0;Eu.multiplyMatrices(a,t[r]),Eu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Nr(t,e,e,$t,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Rs),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Cn=class extends ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ui=new Ie,Ru=new Ie,ur=[],Cu=new Ft,W0=new Ie,cs=new ct,us=new Gt,Or=class extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,W0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),Cu.copy(e.boundingBox).applyMatrix4(Ui),this.boundingBox.union(Cu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),us.copy(e.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),e.ray.intersectsSphere(us)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ui),Ru.multiplyMatrices(n,Ui),cs.matrixWorld=Ru,cs.raycast(e,ur);for(let o=0,a=ur.length;o<a;o++){let l=ur[o];l.instanceId=r,l.object=this,t.push(l)}ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nr(new Float32Array(i*this.count),i,this.count,Rl,sn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Cs=class extends kt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zr=new I,Br=new I,Iu=new Ie,hs=new Zi,hr=new Gt,qo=new I,Lu=new I,Ki=class extends ft{constructor(e=new dt,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)zr.fromBufferAttribute(t,i-1),Br.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zr.distanceTo(Br);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=r,e.ray.intersectsSphere(hr)===!1)return;Iu.copy(i).invert(),hs.copy(e.ray).applyMatrix4(Iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=d,m=_-1;x<m;x+=c){let p=u.getX(x),A=u.getX(x+1),S=fr(this,e,hs,l,p,A);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(_-1),m=u.getX(d),p=fr(this,e,hs,l,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=d,m=_-1;x<m;x+=c){let p=fr(this,e,hs,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=fr(this,e,hs,l,_-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fr(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(zr.fromBufferAttribute(o,i),Br.fromBufferAttribute(o,r),t.distanceSqToSegment(zr,Br,qo,Lu)>n)return;qo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(qo);if(!(l<e.near||l>e.far))return{distance:l,point:Lu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Du=new I,Pu=new I,Hr=class extends Ki{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Du.fromBufferAttribute(t,i),Pu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Du.distanceTo(Pu);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Gr=class extends Ki{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Is=class extends kt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Uu=new Ie,Qa=new Zi,dr=new Gt,pr=new I,mi=class extends ft{constructor(e=new dt,t=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=r,e.ray.intersectsSphere(dr)===!1)return;Uu.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(Uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,x=d;_<x;_++){let m=c.getX(_);pr.fromBufferAttribute(h,m),Nu(pr,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,x=d;_<x;_++)pr.fromBufferAttribute(h,_),Nu(pr,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nu(s,e,t,n,i,r,o){let a=Qa.distanceSqToPoint(s);if(a<t){let l=new I;Qa.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ls=class extends Mt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ne:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,i=[],r=[],o=[],a=new I,l=new Ie;for(let d=0;d<=e;d++){let _=d/e;i[d]=this.getTangentAt(_,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(mt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(mt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ds=class extends Yt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ne){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ja=class extends Ds{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ul(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var mr=new I,$o=new Ul,Yo=new Ul,Zo=new Ul,el=class extends Yt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(mr.subVectors(i[0],i[1]).add(i[0]),c=mr);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(mr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=mr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),$o.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,x,m),Yo.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,x,m),Zo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&($o.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Yo.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Zo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set($o.calc(l),Yo.calc(l),Zo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fu(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function X0(s,e){let t=1-s;return t*t*e}function q0(s,e){return 2*(1-s)*s*e}function $0(s,e){return s*s*e}function vs(s,e,t,n){return X0(s,e)+q0(s,t)+$0(s,n)}function Y0(s,e){let t=1-s;return t*t*t*e}function Z0(s,e){let t=1-s;return 3*t*t*s*e}function J0(s,e){return 3*(1-s)*s*s*e}function K0(s,e){return s*s*s*e}function ys(s,e,t,n,i){return Y0(s,e)+Z0(s,t)+J0(s,n)+K0(s,i)}var kr=class extends Yt{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(e,i.x,r.x,o.x,a.x),ys(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tl=class extends Yt{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(e,i.x,r.x,o.x,a.x),ys(e,i.y,r.y,o.y,a.y),ys(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vr=class extends Yt{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends Yt{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends Yt{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(vs(e,i.x,r.x,o.x),vs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends Yt{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(vs(e,i.x,r.x,o.x),vs(e,i.y,r.y,o.y),vs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends Yt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Fu(a,l.x,c.x,u.x,h.x),Fu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ne().fromArray(i))}return this}},Ou=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:el,CubicBezierCurve:kr,CubicBezierCurve3:tl,EllipseCurve:Ds,LineCurve:Vr,LineCurve3:nl,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:il,SplineCurve:Xr}),sl=class extends Yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ou[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ou[i.type]().fromJSON(i))}return this}},rl=class extends sl{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Vr(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Wr(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new kr(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Ds(e,t,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ol=class s extends dt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=mt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new I,f=new ne,d=new I,_=new I,x=new I,m=0,p=0;for(let A=0;A<=e.length-1;A++)switch(A){case 0:m=e[A+1].x-e[A].x,p=e[A+1].y-e[A].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[A+1].x-e[A].x,p=e[A+1].y-e[A].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(_)}for(let A=0;A<=t;A++){let S=n+A*u*i,M=Math.sin(S),P=Math.cos(S);for(let R=0;R<=e.length-1;R++){h.x=e[R].x*M,h.y=e[R].y,h.z=e[R].x*P,o.push(h.x,h.y,h.z),f.x=A/t,f.y=R/(e.length-1),a.push(f.x,f.y);let w=l[3*R+0]*M,C=l[3*R+1],y=l[3*R+0]*P;c.push(w,C,y)}}for(let A=0;A<t;A++)for(let S=0;S<e.length-1;S++){let M=S+A*e.length,P=M,R=M+e.length,w=M+e.length+1,C=M+1;r.push(P,R,C),r.push(w,C,R)}this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("uv",new rt(a,2)),this.setAttribute("normal",new rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},gi=class s extends ol{constructor(e=1,t=1,n=4,i=8){let r=new rl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}};var Ps=class s extends dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],_=0,x=[],m=n/2,p=0;A(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function A(){let M=new I,P=new I,R=0,w=(t-e)/n;for(let C=0;C<=r;C++){let y=[],v=C/r,E=v*(t-e)+e;for(let N=0;N<=i;N++){let D=N/i,B=D*l+a,X=Math.sin(B),k=Math.cos(B);P.x=E*X,P.y=-v*n+m,P.z=E*k,h.push(P.x,P.y,P.z),M.set(X,w,k).normalize(),f.push(M.x,M.y,M.z),d.push(D,1-v),y.push(_++)}x.push(y)}for(let C=0;C<i;C++)for(let y=0;y<r;y++){let v=x[y][C],E=x[y+1][C],N=x[y+1][C+1],D=x[y][C+1];(e>0||y!==0)&&(u.push(v,E,D),R+=3),(t>0||y!==r-1)&&(u.push(E,N,D),R+=3)}c.addGroup(p,R,0),p+=R}function S(M){let P=_,R=new ne,w=new I,C=0,y=M===!0?e:t,v=M===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),_++;let E=_;for(let N=0;N<=i;N++){let B=N/i*l+a,X=Math.cos(B),k=Math.sin(B);w.x=y*k,w.y=m*v,w.z=y*X,h.push(w.x,w.y,w.z),f.push(0,v,0),R.x=X*.5+.5,R.y=k*.5*v+.5,d.push(R.x,R.y),_++}for(let N=0;N<i;N++){let D=P+N,B=E+N;M===!0?u.push(B,B+1,D):u.push(B+1,B,D),C+=3}c.addGroup(p,C,M===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qr=class s extends Ps{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $r=class s extends dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,f=new I,d=[],_=[],x=[],m=[];for(let p=0;p<=n;p++){let A=[],S=p/n,M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){let R=P/t;h.x=-e*Math.cos(i+R*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(i+R*r)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(R+M,1-S),A.push(c++)}u.push(A)}for(let p=0;p<n;p++)for(let A=0;A<t;A++){let S=u[p][A+1],M=u[p][A],P=u[p+1][A],R=u[p+1][A+1];(p!==0||o>0)&&d.push(S,M,R),(p!==n-1||l<Math.PI)&&d.push(M,P,R)}this.setIndex(d),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yr=class extends et{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Qi=class extends kt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vt=class extends Qi{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function gr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Q0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function j0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function zu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function dh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Yn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},al=class extends Yn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:r=e,a=2*t-n;break;case Rc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=e,l=2*n-t;break;case Rc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),x=_*_,m=x*_,p=-f*m+2*f*x-f*_,A=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,S=(-1-d)*m+(1.5+d)*x+.5*_,M=d*m-d*x;for(let P=0;P!==a;++P)r[P]=p*o[u+P]+A*o[c+P]+S*o[l+P]+M*o[h+P];return r}},ll=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},cl=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gr(t,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gr(e.times,Array),values:gr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new al(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qi:t=this.InterpolantFactoryMethodDiscrete;break;case $i:t=this.InterpolantFactoryMethodLinear;break;case _o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qi;case this.InterpolantFactoryMethodLinear:return $i;case this.InterpolantFactoryMethodSmooth:return _o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Q0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_o,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){let x=t[h+_];if(x!==t[f+_]||x!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=$i;var Zn=class extends Zt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=qi;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends Zt{};Zr.prototype.ValueTypeName="color";var In=class extends Zt{};In.prototype.ValueTypeName="number";var ul=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ln=class extends Zt{InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Ln.prototype.ValueTypeName="quaternion";Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Zt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=qi;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Dn=class extends Zt{};Dn.prototype.ValueTypeName="vector";var Jr=class{constructor(e="",t=-1,n=[],i=vf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=rn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(t_(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Zt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=j0(l);l=zu(l,1,u),c=zu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new In(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,_,x){if(d.length!==0){let m=[],p=[];dh(d,m,p,_),m.length!==0&&x.push(new h(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let x=0;x<f[_].morphTargets.length;x++)d[f[_].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let A=0;A!==f[_].morphTargets.length;++A){let S=f[_];m.push(S.time),p.push(S.morphTarget===x?1:0)}i.push(new In(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{let d=".bones["+t[h].name+"]";n(Dn,d+".position",f,"pos",i),n(Ln,d+".quaternion",f,"rot",i),n(Dn,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function e_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return In;case"vector":case"vector2":case"vector3":case"vector4":return Dn;case"color":return Zr;case"quaternion":return Ln;case"bool":case"boolean":return Zn;case"string":return Jn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function t_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=e_(s.type);if(s.times===void 0){let t=[],n=[];dh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Wn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},hl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}},n_=new hl,Pn=class{constructor(e){this.manager=e!==void 0?e:n_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Pn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mn={},fl=class extends Error{constructor(e,t){super(e),this.response=t}},Us=class extends Pn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:n,onError:i});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Mn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0,x=0,m=new ReadableStream({start(p){A();function A(){h.read().then(({done:S,value:M})=>{if(S)p.close();else{x+=M.byteLength;let P=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:d});for(let R=0,w=u.length;R<w;R++){let C=u[R];C.onProgress&&C.onProgress(P)}p.enqueue(M),A()}},S=>{p.error(S)})}}});return new Response(m)}else throw new fl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Wn.add(e,c);let u=Mn[e];delete Mn[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Mn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mn[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var dl=class extends Pn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ss("img");function l(){u(),Wn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Kr=class extends Pn{constructor(e){super(e)}load(e,t,n,i){let r=new Mt,o=new dl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ns=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Jo=new Ie,Bu=new I,Hu=new I,Fs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pl=class extends Fs{constructor(){super(new gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Yi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Qr=class extends Ns{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new pl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Gu=new Ie,fs=new I,Ko=new I,ml=class extends Fs{constructor(){super(new gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fs.setFromMatrixPosition(e.matrixWorld),n.position.copy(fs),Ko.copy(n.position),Ko.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ko),n.updateMatrixWorld(),i.makeTranslation(-fs.x,-fs.y,-fs.z),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu)}},jr=class extends Ns{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gl=class extends Fs{constructor(){super(new $n(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eo=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new gl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Kn=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},to=class extends dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var no=class extends Pn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Wn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(e,l),r.manager.itemStart(e)}};var ji=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ku();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ku(){return performance.now()}var Nl="\\[\\]\\.:\\/",i_=new RegExp("["+Nl+"]","g"),Fl="[^"+Nl+"]",s_="[^"+Nl.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",Fl),o_=/(WCOD+)?/.source.replace("WCOD",s_),a_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),c_=new RegExp("^"+r_+o_+a_+l_+"$"),u_=["material","materials","bones","map"],_l=class{constructor(e,t,n){let i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},st=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(e){let t=c_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);u_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=_l;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);var ao={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Wt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},h_=new $n(-1,1,1,-1,0,1),Ol=class extends dt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},f_=new Ol,jn=class{constructor(e){this._mesh=new ct(f_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,h_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _i=class extends Wt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qn.clone(e.uniforms),this.material=new et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Bs=class extends Wt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},lo=class extends Wt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var co=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _i(ao),this.copyPass.material.blending=hn,this.clock=new ji}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bs!==void 0&&(o instanceof Bs?n=!0:o instanceof lo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var uo=class extends Wt{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var mh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ts=class s extends Wt{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Lt(r,o,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Lt(r,o,{type:an});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Lt(r,o,{type:an});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=mh;this.highPassUniforms=Qn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new et({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ao;this.copyUniforms=Qn.clone(u.uniforms),this.blendMaterial=new et({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:fi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pe,this.oldClearAlpha=1,this.basic=new Dt,this.fsQuad=new jn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new et({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ts.BlurDirectionX=new ne(1,0);ts.BlurDirectionY=new ne(0,1);var gh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ho=class extends Wt{constructor(){super();let e=gh;this.uniforms=Qn.clone(e.uniforms),this.material=new Yr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new jn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ze.getTransfer(this._outputColorSpace)===Je&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ml?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _h={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ne(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};var xh=`
void main() {
  gl_Position = vec4(position.xy, 0.9999, 1.0);
}`,vh=`
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
uniform float uStars;
uniform float uTanh;       // tan(fov/2): the lens (mouse wheel / ruler)
uniform mat3 uCamRot;      // camera -> world rotation
uniform vec3 uHoleDir;     // world direction from the camera to the black hole
uniform float uCamD;       // distance to the hole in Schwarzschild radii
uniform float uInc;        // how far above the disk plane the viewer sits
uniform float uROut;       // outer edge of the accretion disk
uniform float uDopp;       // strength of the Doppler asymmetry
uniform float uGain;       // brightness of the disk
uniform float uSky;        // 0 = night sky (Aurum), 1 = hazy dusk (Viola)
uniform vec3 uSkyTop;
uniform vec3 uSkyLow;
uniform vec3 uBandCol;     // light of the haze lying on the far ground (Viola)

#ifndef STEPS
#define STEPS 240
#endif

const float RIN = 3.0;
const float K0 = 0.245;    // default lens (49 mm): the screen scale the water ripples and meteors were tuned for

vec3 gR; vec3 gU; vec3 gF; // frame attached to the hole: right, up, towards the hole

float h21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float h31(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

// 2D value noise that wraps in x with the given period (no seam around the disk)
float pn(vec2 p, float per) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float x0 = mod(i.x, per), x1 = mod(i.x + 1.0, per);
  float a = h21(vec2(x0, i.y)), b = h21(vec2(x1, i.y));
  float c = h21(vec2(x0, i.y + 1.0)), d = h21(vec2(x1, i.y + 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float pfbm(vec2 p, float per) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * pn(p, per); p *= 2.0; per *= 2.0; a *= 0.5; }
  return v;
}
float vn(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(h31(i), h31(i + vec3(1, 0, 0)), f.x), mix(h31(i + vec3(0, 1, 0)), h31(i + vec3(1, 1, 0)), f.x), f.y);
  float b = mix(mix(h31(i + vec3(0, 0, 1)), h31(i + vec3(1, 0, 1)), f.x), mix(h31(i + vec3(0, 1, 1)), h31(i + vec3(1, 1, 1)), f.x), f.y);
  return mix(a, b, f.z);
}

// the celestial sphere the black hole bends: stars in 3D cells + a faint galactic band
vec3 background(vec3 d) {
  if (uSky > 0.99) return vec3(0.0);   // Viola: the haze hides the stars
  vec3 acc = vec3(0.0);
  float band = exp(-pow(dot(d, normalize(vec3(0.35, 1.0, 0.25))) / 0.20, 2.0));
  for (int L = 0; L < 3; L++) {
    float K = L == 0 ? 60.0 : (L == 1 ? 130.0 : 260.0);
    vec3 g = d * K;
    vec3 id = floor(g);
    vec3 f = fract(g) - 0.5;
    float hh = h31(id + float(L) * 17.0);
    float on = step(0.93 - 0.10 * band, hh);
    vec3 off = (vec3(h31(id + 3.1), h31(id + 5.7), h31(id + 9.3)) - 0.5) * 0.6;
    float dd = length(f - off);
    float tw = 0.7 + 0.3 * sin(uTime * (1.0 + hh * 5.0) + hh * 60.0);
    float s = on * smoothstep(0.11, 0.0, dd) * (0.35 + hh) * tw;
    vec3 tint = mix(vec3(0.75, 0.88, 1.0), vec3(1.0, 0.78, 0.55), h31(id + 9.0));
    acc += tint * s * (L == 0 ? 2.6 : 2.0);
  }
  // galactic band: layered cloud noise, dark dust lanes and colour drifting between the palette's tones (only evaluated where the band is)
  if (band < 0.02) return acc * uStars * (1.0 - 0.92 * uSky);
  vec3 w = d * 3.0 + vec3(1.7, 4.1, 2.3);
  float neb = vn(w * 1.3 + vn(w * 2.0) * 1.2) * 0.55 + vn(d * 9.0) * 0.3 + vn(d * 22.0) * 0.15;
  float dust = smoothstep(0.52, 0.78, vn(d * 6.5 + 3.0)) * band;
  vec3 tone = mix(uCool * 1.4, uHot, smoothstep(0.3, 0.8, vn(d * 2.2 + 9.0)));
  acc += tone * band * (0.12 + 1.1 * neb * neb) * 0.12 * (1.0 - 0.75 * dust);
  return acc * uStars * (1.0 - 0.92 * uSky);
}

// accretion disk emission at a hit point on the equatorial plane
vec4 diskSample(vec3 hit, vec3 rayDir) {
  float rr = length(hit.xz);
  float edge = smoothstep(RIN, RIN + 0.6, rr) * smoothstep(uROut, uROut * 0.5, rr);
  float phi = atan(hit.z, hit.x);
  float omega = 2.6 / (rr * sqrt(rr));                  // Keplerian: inner gas orbits much faster
  float ph = phi - uTime * omega * 0.45;
  float a01 = ph / 6.2831853 + 0.5;
  float warp = pn(vec2(a01 * 5.0, rr * 1.3), 5.0);
  float coarse = pfbm(vec2(a01 * 6.0 + warp * 0.9, rr * 1.7), 6.0);
  float fine = pfbm(vec2(a01 * 20.0, rr * 9.0), 20.0);
  float fil = pfbm(vec2(a01 * 24.0 + warp, rr * 26.0), 24.0);          // thin strands along the orbit
  float turb = 0.15 + 1.7 * smoothstep(0.22, 0.82, coarse * 0.42 + fine * 0.28 + fil * 0.38);

  float T = pow(RIN / rr, 0.75) * 1.3;
  vec3 vdir = normalize(vec3(-hit.z, 0.0, hit.x));      // sense of rotation (approaching side ends up on the left)
  float beta = sqrt(0.5 / rr) * uDopp;
  float cosA = dot(vdir, -rayDir);
  float g = sqrt(1.0 - beta * beta) / (1.0 - beta * cosA) * sqrt(max(1.0 - 1.0 / rr, 0.03));

  float spot = 1.0 + 0.9 * exp(-pow((abs(fract(phi / 6.2831853 - uTime * 0.02 + 0.5) - 0.5)) / 0.06, 2.0));
  float I = pow(T, 2.2) * turb * pow(g, 3.2) * edge * spot * (1.0 + 0.08 * sin(uTime * 0.7)) * uGain;
  float tt = T * g;
  vec3 col = mix(uCool, uMid, smoothstep(0.1, 0.7, tt));
  col = mix(col, uHot, smoothstep(0.8, 1.9, tt));
  float alpha = clamp(edge * (0.30 + 0.55 * turb), 0.0, 0.92);
  return vec4(col * I, alpha);
}

// follow one world-space view ray through the curved space around the hole
vec3 trace(vec3 rdW) {
  vec3 l = vec3(dot(rdW, gR), dot(rdW, gU), dot(rdW, gF));
  if (l.z < 0.12) return background(rdW);
  l = normalize(l);

  float inc = uInc + 0.03 * sin(uTime * 0.09);
  float yaw = sin(uTime * 0.05) * 0.20;
  vec3 ro = uCamD * vec3(sin(yaw) * cos(inc), sin(inc), -cos(yaw) * cos(inc));
  vec3 f = normalize(-ro);
  vec3 rgt = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 up = cross(f, rgt);
  vec3 rd = normalize(rgt * l.x + up * l.y + f * l.z);

  // rays that pass far from the hole only get a weak-field deflection
  vec3 perp = ro - dot(ro, rd) * rd;
  float b = length(perp);
  vec3 vel = rd;
  bool swallowed = false;
  vec3 col = vec3(0.0);
  float trans = 1.0;
  if (b > uROut * 1.8 + 6.0) {
    vel = normalize(rd - normalize(perp) * (2.0 / b));
  } else {
    vec3 pos = ro;
    for (int i = 0; i < STEPS; i++) {
      float r = length(pos);
      if (r < 1.0) { swallowed = true; break; }
      if (r > 50.0 && dot(pos, vel) > 0.0) break;
      vec3 L = cross(pos, vel);
      float h2 = dot(L, L);
      float dt = clamp(0.055 * r + 0.012, 0.02, 1.2);
      vec3 acc = -1.5 * h2 * pos / (r * r * r * r * r);
      vec3 nv = normalize(vel + acc * dt);
      vec3 np = pos + nv * dt;
      if (pos.y * np.y < 0.0) {
        float t = pos.y / (pos.y - np.y);
        vec3 hit = mix(pos, np, t);
        float rr = length(hit.xz);
        if (rr > RIN * 0.9 && rr < uROut) {
          vec4 d = diskSample(hit, nv);
          col += trans * d.rgb;
          trans *= 1.0 - d.a;
          if (trans < 0.02) break;
        }
      }
      pos = np; vel = nv;
    }
  }
  if (!swallowed && trans > 0.02) {
    vec3 wv = gR * dot(vel, rgt) + gU * dot(vel, up) + gF * dot(vel, f);   // back into world space
    col += trans * background(normalize(wv));
  }
  return col;
}

// a few meteors crossing the (world-fixed) sky; p is in default-lens screen units
vec3 meteor(vec2 p, float k) {
  float cyc = uTime / (5.0 + k) + k * 0.37;
  float id = floor(cyc), ph = fract(cyc);
  float on = step(0.4, h21(vec2(id, 3.0 + k * 7.0)));
  vec2 st = vec2(mix(-1.6, 1.4, h21(vec2(id, 1.0 + k * 7.0))), mix(0.1, 1.2, h21(vec2(id, 2.0 + k * 7.0))));
  vec2 dir = normalize(vec2(1.0, -0.45));
  vec2 rel = p - (st + dir * ph * 1.5);
  float along = dot(rel, -dir);
  float perp = dot(rel, vec2(-dir.y, dir.x));
  float tail = step(0.0, along) * exp(-along * 8.0) * exp(-perp * perp * 90000.0);
  return uHot * tail * 3.0 * on * smoothstep(0.0, 0.08, ph) * smoothstep(0.55, 0.3, ph);
}

vec3 sky(vec3 d) {
  float hxz = max(length(d.xz), 1e-4);
  float te = d.y / hxz;                      // tan(elevation)
  float eE = te / 0.39;                      // height above the horizon in the units the glows were tuned in
  float lz = dot(d, gF);
  float R = 2.57 / uCamD;                    // tan of the angular radius of the shadow
  vec2 ql = lz > 0.05 ? vec2(dot(d, gR), dot(d, gU)) / lz : vec2(9.0);
  float hx = ql.x / 0.39 * (uCamD / 22.0);

  vec3 night = uCool * 0.03 * (1.0 - clamp(eE * 0.6, 0.0, 1.0));
  night += uMid * 0.12 * exp(-eE / 0.22) * exp(-abs(hx) * 0.25);
  night *= smoothstep(0.9 * R, 1.07 * R, length(ql));   // the shadow stays black
  vec3 dusk = mix(uSkyLow, uSkyTop, smoothstep(0.0, 1.4, eE));
  dusk += uBandCol * 0.55 * exp(-eE * 9.0);
  vec3 col = mix(night, dusk, uSky);
  col += trace(d);
  float az = atan(d.x, -d.z);
  vec2 mp = vec2(az, te) / 0.39;
  vec3 met = meteor(mp, 0.0) + meteor(mp + vec2(0.7, 0.2), 2.0) + meteor(mp + vec2(-0.5, -0.1), 4.0);
  col += met * uStars * (1.0 - uSky) * smoothstep(0.0, 0.2, eE);
  return col;
}

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  vec3 rd = normalize(uCamRot * vec3(p * uTanh, -1.0));
  gF = normalize(uHoleDir);
  gR = normalize(cross(gF, vec3(0.0, 1.0, 0.0)));
  gU = cross(gR, gF);

  float hxz = max(length(rd.xz), 1e-4);
  float te = rd.y / hxz;
  float az = atan(rd.x, -rd.z);
  vec3 col;
  if (rd.y >= 0.0) {
    col = sky(rd);
    col += uMid * exp(-abs(te) / 0.0014) * 0.45 * exp(-abs(dot(rd, gR) / max(dot(rd, gF), 0.05)) * 1.3) * (1.0 - uSky);
  } else {
    float dy = -te / K0;                     // depth below the horizon, in default-lens screen units
    float px = az / K0;
    float rip = pn(vec2(px * 2.5 + uTime * 0.2, dy * 70.0 - uTime * 0.6), 1000.0) - 0.5;
    float streak = 0.55 + 0.9 * pn(vec2(px * 4.0, dy * 200.0 + uTime * 0.4), 1000.0);
    vec3 rm = normalize(vec3(rd.x + rip * 0.03 * (dy * 8.0 + 0.2) * K0, -rd.y, rd.z));
    vec3 refl = sky(rm);                     // one trace per water pixel, shared by the Aurum water and the Viola haze
    vec3 water = refl * 0.8 * streak + uCool * 0.012;
    // glints dancing on the water under the hole
    float gl = pow(pn(vec2(px * 40.0 + uTime * 0.7, dy * 520.0 - uTime * 1.6), 1000.0), 9.0);
    float hxw = dot(rm, gR) / max(dot(rm, gF), 0.05) / 0.39;
    water += mix(uMid, uHot, 0.6) * gl * 3.5 * exp(-abs(hxw) * 2.2) * exp(-dy * 4.4);
    water += uMid * exp(-dy * 180.0) * 0.45 * exp(-abs(hxw) * 0.5);
    // Viola: the far ground is a bright haze lit by the disk, with only a faint reflection of the arc
    vec3 haze = uBandCol * (0.82 + 0.30 * exp(-dy * 2.5)) + refl * 0.10;
    col = mix(water, haze, uSky);
  }
  gl_FragColor = vec4(col, 1.0);
}`,yh=`
uniform float uTime;
uniform float uWind;
attribute vec3 aInst;   // x, z, seed
varying float vH;
varying float vDepth;
varying float vX;
varying float vSeed;
varying float vFace;

void main() {
  float hgt = position.y;
  float side = position.x;                         // -0.5 .. 0.5 across the blade
  float seed = aInst.z;
  float depth = -aInst.y;
  float yaw = fract(seed * 91.7) * 3.14159;
  vec2 sideDir = vec2(cos(yaw), sin(yaw));
  float tall = step(0.93, fract(seed * 37.1));     // the odd tall seed stalk
  float height = mix(0.5, 1.2, fract(seed * 7.31)) * (1.0 + tall * 0.55) * mix(1.0, 0.4, smoothstep(10.0, 55.0, depth));   // the field flattens toward the far edge
  float width = (0.035 + depth * 0.004) * (1.0 - hgt * 0.88);
  vec3 pos = vec3(aInst.x + sideDir.x * side * width, hgt * height, aInst.y + sideDir.y * side * width);
  float w = sin(uTime * uWind * 1.3 + aInst.x * 0.35 + aInst.y * 0.2 + seed * 6.0) * 0.5
          + sin(uTime * uWind * 2.1 + aInst.x * 0.8 + seed * 11.0) * 0.5;
  float gust = sin(aInst.x * 0.09 - uTime * uWind * 0.9 + aInst.y * 0.05);   // wind front rolling across the field
  float bend = hgt * hgt;
  pos.x += (w * 0.22 + gust * 0.34) * bend * (1.0 + tall * 0.4);
  pos.z += (w * 0.06 + gust * 0.12) * bend;
  pos.y -= bend * 0.12 * abs(gust);
  vec4 mv = viewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  vH = hgt; vDepth = length(mv.xyz); vX = pos.x; vSeed = seed; vFace = abs(cos(yaw));
}`,Mh=`
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
varying float vH;
varying float vDepth;
varying float vX;
varying float vSeed;
varying float vFace;

void main() {
  float far = smoothstep(6.0, 75.0, vDepth);
  float lit = 0.55 + 0.6 * smoothstep(20.0, -75.0, vX);
  float s = fract(vSeed * 13.7);
  vec3 dry = mix(vec3(0.62, 0.38, 0.09), vec3(0.64, 0.46, 0.14), s);          // golden to olive straw
  vec3 base = mix(dry * 0.04, dry * 0.22, vH);                                  // dark roots
  float back = pow(vH, 1.6) * mix(0.12, 1.0, far * far) * lit;                  // light shining through the blade
  float trans = 0.55 + 0.9 * vFace;
  vec3 glow = mix(uMid, uHot, smoothstep(0.55, 1.0, vH) * 0.75) * back * trans * (0.65 + 0.7 * s);
  float glint = step(0.97, fract(vSeed * 53.1)) * pow(vH, 3.0) * mix(0.3, 1.6, far);
  vec3 col = base + glow + uHot * glint * 0.8;
  col *= mix(0.20, 1.0, smoothstep(4.0, 60.0, vDepth));                         // foreground sits in shadow
  col = mix(col, uMid * 0.14, smoothstep(50.0, 78.0, vDepth) * 0.6);            // horizon mist
  gl_FragColor = vec4(col, 1.0);
}`,bh=`
varying vec3 vP;
void main() {
  vP = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Sh=`
uniform vec3 uMid;
uniform vec3 uHot;
uniform vec3 uCool;
varying vec3 vP;
void main() {
  float vDepth = length(vP - cameraPosition);   // per fragment: the plane is huge, a per-vertex distance would interpolate wrongly
  float vX = vP.x;
  float far = smoothstep(10.0, 75.0, vDepth);
  // light from the hole spills over the far field, strongest toward its side
  float spill = exp(-pow((vX + 10.0) / 40.0, 2.0));
  vec3 col = uCool * 0.03 + uMid * 0.08 * far * far + mix(uMid, uHot, 0.4) * 0.22 * far * far * spill;
  gl_FragColor = vec4(col, 1.0);
}`;var Ah=`
varying vec3 vN;
varying vec3 vV;
varying vec3 vW;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  vW = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * mv;
}`,wh=`
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uBase;
uniform float uRim;
varying vec3 vN;
varying vec3 vV;
varying vec3 vW;
void main() {
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float rim = pow(f, 3.6);
  float side = 0.55 + 0.6 * smoothstep(25.0, -35.0, vW.x);   // the left of the frame sits closer to the bright disk side
  float top = 0.7 + 0.5 * smoothstep(0.0, 6.0, vW.y);
  vec3 col = uBase + mix(uMid, uHot, 0.35) * rim * 1.5 * side * top * uRim;
  gl_FragColor = vec4(col, 1.0);
}`,Th=`
uniform float uTime;
uniform float uPx;
attribute vec4 aSeed;
varying float vA;
void main() {
  float t = uTime * 0.14 * (0.5 + aSeed.w);
  vec3 p = position;
  p.y = mod(position.y + t * 4.0, 9.0) + 0.2;
  p.x += sin(uTime * 0.5 + aSeed.x * 20.0) * 1.2 + uTime * 0.25 * (0.3 + aSeed.z);
  p.x = mod(p.x + 60.0, 120.0) - 60.0;
  p.z += cos(uTime * 0.4 + aSeed.y * 20.0) * 0.8;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uPx * (0.6 + aSeed.z) * clamp(70.0 / max(-mv.z, 1.0), 1.0, 14.0);
  vA = (0.4 + 0.6 * sin(uTime * (1.0 + aSeed.w * 2.0) + aSeed.x * 40.0)) * smoothstep(0.0, 1.5, p.y) * smoothstep(9.2, 6.0, p.y);
}`,Eh=`
uniform vec3 uHot;
varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.0, d);
  gl_FragColor = vec4(uHot * 1.6 * a * a * max(vA, 0.0), 1.0);
}`,Rh=`
uniform float uTime;
uniform float uPx;
attribute float aSeed;
varying float vA;
void main() {
  float life = fract(uTime * 0.06 + aSeed);
  vec3 p = position;
  p.y += life * 10.0;
  p.x += life * life * 9.0 + sin(life * 6.0 + aSeed * 20.0) * 0.5 * life;
  p.z += sin(aSeed * 30.0) * 0.4 * life;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uPx * 3900.0 * (0.6 + 3.0 * life) / max(-mv.z, 1.0);
  vA = smoothstep(0.0, 0.12, life) * (1.0 - life) * 0.55;
}`,Ch=`
varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.0, d);
  gl_FragColor = vec4(vec3(0.03, 0.018, 0.011), a * a * vA);
}`,Ih={uniforms:{tDiffuse:{value:null},uTime:{value:0},uTexel:{value:[.0005208333333333333,.000925925925925926]},uHoleUV:{value:[.5,.7]},uRays:{value:1},uFade:{value:0},uHaze:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uTexel;
    uniform vec2 uHoleUV;
    uniform float uRays;
    uniform float uFade;
    uniform float uHaze;
    varying vec2 vUv;
    float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 q = vUv - 0.5;
      vec2 ca = q * 0.0035;   // slight chromatic aberration toward the edges
      vec3 c = vec3(texture2D(tDiffuse, vUv + ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - ca).b);
      // anamorphic lens streak: bright pixels smear sideways with a cool tint
      vec3 streak = vec3(0.0);
      for (int i = -20; i <= 20; i++) {
        float fi = float(i);
        vec3 s = texture2D(tDiffuse, vUv + vec2(fi * uTexel.x * 5.0, 0.0)).rgb;
        streak += max(s - 0.82, 0.0) * exp(-abs(fi) * 0.14);
      }
      c += streak * vec3(0.35, 0.55, 1.0) * 0.16 * (1.0 - 0.6 * uHaze);
      // crepuscular rays: bright light marched toward the hole; silhouettes and grass cast dark shafts into it
      vec3 rays = vec3(0.0);
      float decay = 1.0;
      for (int k = 0; k < 28; k++) {
        vec2 sp = mix(vUv, uHoleUV, float(k) / 28.0 * 0.6);
        rays += max(texture2D(tDiffuse, sp).rgb - 0.86, 0.0) * decay;
        decay *= 0.93;
      }
      c += rays * 0.032 * uRays * (1.0 - 0.7 * uHaze);
      c *= 1.0 - dot(q, q) * 0.9;
      c += (h(vUv * 1000.0 + fract(uTime) * 7.0) - 0.5) * 0.018;
      c *= 1.0 - uFade;
      gl_FragColor = vec4(c, 1.0);
    }`};var d_="'JetBrains Mono','Cascadia Mono',Consolas,monospace",Lh="'Cormorant Garamond','Iowan Old Style','Palatino Linotype',Georgia,serif",fo=[[23,0],[26,.155],[34,.384],[49,.613],[70,.806],[107,1]];function p_(s){let e=fo;if(s<=e[0][0])return 0;for(let t=1;t<e.length;t++)if(s<=e[t][0])return e[t-1][1]+(e[t][1]-e[t-1][1])*(s-e[t-1][0])/(e[t][0]-e[t-1][0]);return 1}function m_(s){let e=fo;for(let t=1;t<e.length;t++)if(s<=e[t][1])return e[t-1][0]+(e[t][0]-e[t-1][0])*(s-e[t-1][1])/(e[t][1]-e[t-1][1]);return e[e.length-1][0]}function je(s,e,t,n="div"){let i=document.createElement(n);return i.style.cssText=e,t!==void 0&&(i.textContent=t),s.appendChild(i),i}function Dh(s){let e=je(document.body,`position:fixed;inset:0;pointer-events:none;display:none;font:10px/1.7 ${d_};letter-spacing:.16em;color:rgba(255,236,214,.86);text-shadow:0 0 10px rgba(0,0,0,.55);user-select:none;-webkit-user-select:none`);for(let[v,E]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]])je(e,`position:absolute;${v}:22px;${E}:22px;width:12px;height:12px;border:0 solid rgba(255,236,214,.28);border-${v}-width:1px;border-${E}-width:1px`);let t=je(e,"position:absolute;left:40px;top:38px");je(t,"font-size:9px;letter-spacing:.34em;opacity:.55","TWO HORIZONS");let n=je(t,`font:400 34px/1.15 ${Lh};letter-spacing:.01em;margin-top:2px;color:rgba(255,244,230,.96)`,""),i=je(t,"font-size:9.5px;letter-spacing:.1em;opacity:.55;margin-top:6px;max-width:190px;line-height:1.5",""),r=je(e,"position:absolute;left:40px;bottom:36px;white-space:pre;font-size:9.5px;opacity:.9"),o="opacity:.5",a=je(r,""),l=v=>je(a,o+";margin-right:.6em",v,"span");l("ALT");let c=je(a,"margin-right:1.6em","","span");l("HORIZON");let u=je(a,"","","span");je(a,"font-size:.75em;margin-left:.2em;opacity:.6","Rs","span");let h=je(r,"");(v=>je(h,o+";margin-right:.6em",v,"span"))("T");let d=je(h,"margin-right:1.6em","","span"),_=je(h,"","","span"),x=je(e,"position:absolute;right:30px;top:30%;height:40%;width:78px;pointer-events:auto;cursor:ns-resize;touch-action:none");je(x,"position:absolute;right:0;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,transparent,rgba(255,236,214,.45) 12%,rgba(255,236,214,.45) 88%,transparent)");let m=fo.map(([v,E])=>{let N=je(x,`position:absolute;right:8px;top:${E*100}%;transform:translateY(-50%);font-size:8px;opacity:.4;transition:opacity .2s`,String(v));return je(x,`position:absolute;right:0;top:${E*100}%;width:4px;height:1px;background:rgba(255,236,214,.4)`),N}),p=je(x,"position:absolute;right:-4px;top:0;width:9px;height:9px;margin-top:-4.5px;border:1px solid rgba(255,244,230,.95);border-radius:50%;box-shadow:0 0 8px rgba(255,200,140,.5)"),A=je(x,"position:absolute;right:18px;top:0;transform:translateY(-50%);font-size:9px;white-space:nowrap"),S=!1,M=v=>{let E=x.getBoundingClientRect();s.onLens(m_(Math.min(1,Math.max(0,(v.clientY-E.top)/E.height))))};x.addEventListener("pointerdown",v=>{var E;S=!0,(E=x.setPointerCapture)==null||E.call(x,v.pointerId),M(v),v.stopPropagation()}),x.addEventListener("pointermove",v=>{S&&(M(v),v.stopPropagation())});let P=v=>{var E;S=!1,(E=x.releasePointerCapture)==null||E.call(x,v.pointerId)};x.addEventListener("pointerup",P),x.addEventListener("pointercancel",P);for(let v of["mousedown","dblclick"])x.addEventListener(v,E=>E.stopPropagation());let R=je(e,"position:absolute;left:50%;bottom:30px;transform:translateX(-50%);display:flex;align-items:baseline;gap:26px;white-space:nowrap"),w={};s.scenes.length<2&&(R.style.display="none"),s.scenes.forEach((v,E)=>{E>0&&je(R,"width:46px;height:1px;background:rgba(255,236,214,.22);align-self:center");let N=je(R,"pointer-events:auto;cursor:pointer;display:flex;align-items:baseline;gap:8px;padding:6px 4px;transition:opacity .35s,color .35s");je(N,"font-size:7px;letter-spacing:.1em",["I","II","III"][E],"span"),je(N,`font:400 17px ${Lh};letter-spacing:.06em`,v.name,"span");let D=je(N,"position:absolute;left:8px;right:8px;bottom:0;height:1px;background:rgba(255,236,214,.7);transition:opacity .35s");N.style.position="relative",N.addEventListener("click",B=>{B.stopPropagation(),s.onScene(v.id)});for(let B of["mousedown","pointerdown","dblclick"])N.addEventListener(B,X=>X.stopPropagation());w[v.id]={b:N,bar:D}});let C=v=>String(v).padStart(2,"0"),y={scene:"",mm:-1,last:0};return{show(v){e.style.display=v?"block":"none"},get visible(){return e.style.display!=="none"},update(v){if(v.scene!==y.scene){y.scene=v.scene;let D=s.scenes.find(B=>B.id===v.scene);n.textContent=D.name,i.textContent=D.tagline;for(let B in w){let X=B===v.scene;w[B].b.style.opacity=X?"1":".38",w[B].bar.style.opacity=X?"1":"0"}}let E=p_(v.mm);if(p.style.top=E*100+"%",A.style.top=E*100+"%",A.textContent=Math.round(v.mm)+" mm",m.forEach((D,B)=>{D.style.opacity=Math.abs(fo[B][1]-E)<.07?"0":".4"}),v.t-y.last<.2)return;y.last=v.t,c.textContent=v.alt.toFixed(v.alt<10?2:1)+" M",u.textContent=v.dist.toFixed(1);let N=Math.floor(v.t);d.textContent=`00:${C(Math.floor(N/60)%60)}:${C(N%60)}`,_.textContent=`${v.fps} FPS \xB7 ${v.scale}%`}}}function Ph(s){let e={},t={},n=s.map(g=>g.config.id);for(let g of s)e[g.config.id]=g.config;let i=n[0],r=16,o=.7,a=23,l=107,c={low:{pixelRatio:.6,grass:14e3,flowers:18e3,embers:60,fireflies:120,bloom:!1,steps:90},medium:{pixelRatio:.85,grass:45e3,flowers:55e3,embers:140,fireflies:300,bloom:!0,steps:160},high:{pixelRatio:1,grass:12e4,flowers:11e4,embers:300,fireflies:600,bloom:!0,steps:240}},u=new URLSearchParams(location.search),h={scene:u.get("scene")||(u.get("palette")==="violet"?"viola":u.get("palette")==="cycle"?"cycle":i),quality:u.get("q")||"high",fps:Number(u.get("fps"))||60,bloom:1,speed:1,parallax:!0,mode:u.get("mode")||"follow",stars:1},f=u.get("freeze")==="1",d={uTime:{value:0},uRes:{value:new ne(1,1)},uHot:{value:new pe},uMid:{value:new pe},uCool:{value:new pe},uStars:{value:1},uTanh:{value:.245},uCamRot:{value:new Ce},uHoleDir:{value:new I(0,0,-1)},uCamD:{value:17.8},uInc:{value:.115},uROut:{value:13},uDopp:{value:1},uGain:{value:1},uSky:{value:0},uSkyTop:{value:new pe},uSkyLow:{value:new pe},uBandCol:{value:new pe},uFogD:{value:20},uWind:{value:1}},_=new Dr({antialias:!1,powerPreference:"high-performance"});_.toneMapping=Os,_.toneMappingExposure=1,document.body.appendChild(_.domElement);let x=new Pr,m=new gt(38,1,.1,1500);m.rotation.order="YXZ";let p=new ct(new Rn(2,2),new et({vertexShader:xh,fragmentShader:vh,uniforms:d,depthTest:!1,depthWrite:!1,defines:{STEPS:240}}));p.frustumCulled=!1,p.renderOrder=-10,x.add(p);for(let g of s)t[g.config.id]=g.create(d),t[g.config.id].group.visible=!1,x.add(t[g.config.id].group);let A=()=>t[w],S=new co(_);S.addPass(new uo(x,m));let M=new ts(new ne(1,1),.7,.4,.9);S.addPass(M),S.addPass(new ho);let P=new _i(_h);S.addPass(P);let R=new _i(Ih);S.addPass(R);let w=i,C=null,y=0,v=!1,E=0,N={yaw:0,alt:2.09,tanh:.245,fx:0,fy:0},D={yaw:0,alt:2.09,tanh:.245},B={x:0,y:0};function X(g){let L=e[g];w=g,d.uHot.value.setRGB(...L.hot),d.uMid.value.setRGB(...L.mid),d.uCool.value.setRGB(...L.cool),d.uSkyTop.value.setRGB(...L.skyTop),d.uSkyLow.value.setRGB(...L.skyLow),d.uBandCol.value.setRGB(...L.band),d.uCamD.value=L.camD,d.uInc.value=L.inc,d.uROut.value=L.rOut,d.uDopp.value=L.dopp,d.uGain.value=L.gain,d.uSky.value=L.sky;for(let V in t)t[V].group.visible=V===g;R.uniforms.uHaze.value=L.sky,_.toneMappingExposure=L.exposure,W(),k()}function k(){let g=e[w];D.yaw=0,D.alt=g.alt,D.tanh=12/g.mm}function Q(g){if(g==="cycle"){if(n.length<2)return;v=!0,E=d.uTime.value+45;return}v=!1,!(!e[g]||g===w&&!C)&&(C=g)}function W(){let g=e[w];M.strength=g.bloom*h.bloom,M.radius=g.bloomRadius,M.enabled=(c[h.quality]||c.high).bloom&&h.bloom>.01}let se=Dh({scenes:n.map(g=>({id:g,name:e[g].name,tagline:e[g].tagline})),onScene:Q,onLens:g=>{D.tanh=12/g}}),de=0,Me=0,Le=performance.now();se.show(u.get("hud")!=="0");function qe(){let g=c[h.quality]||c.high;_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)*g.pixelRatio);for(let L in t)t[L].build(g);p.material.defines.STEPS!==g.steps&&(p.material.defines.STEPS=g.steps,p.material.needsUpdate=!0),W(),Y()}function Y(){let g=window.innerWidth,L=window.innerHeight;_.setSize(g,L,!1),_.domElement.style.width="100vw",_.domElement.style.height="100vh",S.setPixelRatio(_.getPixelRatio()),S.setSize(g,L);let V=_.getPixelRatio();d.uRes.value.set(g*V,L*V),P.material.uniforms.resolution.value.set(1/(g*V),1/(L*V)),R.uniforms.uTexel.value=[1/(g*V),1/(L*V)];for(let Z in t)t[Z].setPx(L*V/1080);m.aspect=g/L,m.updateProjectionMatrix()}window.addEventListener("resize",Y);let K=(g,L,V)=>Math.min(V,Math.max(L,g)),me={down:0,move:0,wheel:0},te={on:!1,x:0,y:0};function Te(g,L){me.down++,h.mode!=="off"&&(te.on=!0,te.x=g,te.y=L)}function Ee(){te.on=!1}function Fe(g,L){me.move++,B.x=g/window.innerWidth*2-1,B.y=-(L/window.innerHeight*2-1),te.on&&h.mode!=="off"&&(D.yaw=K(D.yaw+(g-te.x)*.0035,-1.2,1.2),D.alt=K(D.alt*Math.exp(-(L-te.y)*.006),o,r),te.x=g,te.y=L)}function ot(g){me.wheel++,h.mode!=="off"&&(D.tanh=K(D.tanh*Math.exp(g*8e-4),12/l,12/a))}for(let g of["pointerdown","mousedown"])window.addEventListener(g,L=>Te(L.clientX,L.clientY));for(let g of["pointerup","mouseup"])window.addEventListener(g,Ee);for(let g of["pointermove","mousemove"])window.addEventListener(g,L=>Fe(L.clientX,L.clientY));window.addEventListener("wheel",g=>ot(g.deltaY),{passive:!0}),window.addEventListener("dblclick",k),window.addEventListener("keydown",g=>{g.key==="1"||g.key==="2"?n[Number(g.key)-1]&&Q(n[Number(g.key)-1]):g.key==="ArrowUp"?D.alt=K(D.alt*1.15,o,r):g.key==="ArrowDown"&&(D.alt=K(D.alt/1.15,o,r))}),window.wallpaperPropertyListener={applyUserProperties(g){let L=!1;g.scene&&Q(g.scene.value),g.quality&&g.quality.value!==h.quality&&(h.quality=g.quality.value,L=!0),g.fps&&(h.fps=g.fps.value),g.bloom&&(h.bloom=g.bloom.value,W()),g.speed&&(h.speed=g.speed.value),g.parallax&&(h.parallax=!!g.parallax.value),g.stars&&(h.stars=g.stars.value,d.uStars.value=h.stars),g.hud&&se.show(!!g.hud.value),g.mousemode&&(h.mode=g.mousemode.value),g.rays&&(R.uniforms.uRays.value=g.rays.value),L&&qe()}};let Ge=new I,tt=new I,F=new I,St=0;function Oe(g){let L=K(g-St,0,.1);St=g,Ae=g,d.uTime.value=g,R.uniforms.uTime.value=g,v&&!C&&g>E&&(E=g+45,C=n[(n.indexOf(w)+1)%n.length]),C?(y=Math.min(1,y+L/.55),y>=1&&(X(C),C=null)):y>0&&(y=Math.max(0,y-L/.8)),R.uniforms.uFade.value=y*y*(3-2*y);let V=e[w],Z=h.mode==="follow"&&h.parallax,$=f?1:1-Math.exp(-L*6.5),ge={yaw:D.yaw,alt:D.alt,tanh:D.tanh,fx:Z?B.x:0,fy:Z?B.y:0};for(let ue in ge)N[ue]+=(ge[ue]-N[ue])*$;let ie=K(N.alt*Math.exp(N.fy*.4),o,r),ae=K(Math.log(ie/V.alt)/Math.log(r/V.alt),0,1),Be=V.hs0+(V.hs1-V.hs0)*ae*ae*(3-2*ae)-N.fy*.05,j=N.yaw+N.fx*.09+Math.sin(g*.05)*.02;m.position.set(N.yaw*3.5+N.fx*.7+Math.sin(g*.12)*.7,ie,Math.sin(g*.06)*.8+Math.max(ie-V.alt,0)*V.dolly),m.rotation.set(Math.atan(-Be*N.tanh),-j,0),m.fov=2*Math.atan(N.tanh)*180/Math.PI,m.updateProjectionMatrix(),m.updateMatrixWorld(!0),d.uTanh.value=N.tanh,d.uCamRot.value.setFromMatrix4(m.matrixWorld),d.uFogD.value=12+11*ie;let fe=V.holeAz+Math.sin(g*.11)*.006,Se=V.holeEl+Math.sin(g*.07)*.002;tt.set(Math.sin(fe)*Math.cos(Se),Math.sin(Se),-Math.cos(fe)*Math.cos(Se)),d.uHoleDir.value.copy(tt),Ge.copy(m.position),F.copy(tt).multiplyScalar(1e3).add(Ge).project(m);let _e=tt.dot(new I(0,0,-1).applyQuaternion(m.quaternion))>0;R.uniforms.uHoleUV.value=_e?[(F.x+1)/2,(F.y+1)/2]:[-5,-5],A().update(g,m),se.update({scene:w,mm:12/N.tanh,alt:m.position.y,dist:V.camD,t:g,fps:de,scale:Math.round((c[h.quality]||c.high).pixelRatio*100)})}window.__bench=(g=20,L={})=>{let V=_.getContext(),Z=A().bench(),$=[...Z.models,...Z.grass?[Z.grass]:[]],ge=$.map(_e=>_e.visible),ie=p.visible,ae=M.enabled;$.forEach(_e=>{_e.visible=_e===Z.grass?!L.noGrass:!L.noModels}),p.visible=!L.noSky,M.enabled=ae&&!L.noBloom;let Be=new Uint8Array(4),j=()=>V.readPixels(0,0,1,1,V.RGBA,V.UNSIGNED_BYTE,Be);S.render(),j();let fe=performance.now();for(let _e=0;_e<g;_e++)Oe(30+_e*.016),S.render(),j();let Se=(performance.now()-fe)/g;return $.forEach((_e,ue)=>{_e.visible=ge[ue]}),p.visible=ie,M.enabled=ae,Se},window.__capture=g=>(g!==void 0&&Oe(g),S.render(),_.domElement.toDataURL("image/jpeg",.92)),window.__scene=g=>{X(g),y=0,C=null},X(h.scene==="cycle"||!e[h.scene]?i:h.scene),h.scene==="cycle"&&Q("cycle"),u.get("alt")&&(D.alt=N.alt=K(Number(u.get("alt")),o,r)),u.get("yaw")&&(D.yaw=N.yaw=Number(u.get("yaw"))),u.get("lens")&&(D.tanh=N.tanh=12/K(Number(u.get("lens")),a,l)),u.get("cx")&&(B.x=Number(u.get("cx")),B.y=Number(u.get("cy")||0)),qe();let ke=new ji,Ae=Number(u.get("t"))||0,$e=0,we=0;function T(){if(requestAnimationFrame(T),f&&we>=4)return;let g=ke.getDelta();$e+=g;let L=1/Math.max(h.fps,5);if($e<L-5e-4)return;let V=f?.016:Math.min($e,.1)*h.speed;$e=0,Oe(Ae+V),S.render(),we++,Me++;let Z=performance.now();Z-Le>1e3&&(de=Math.round(Me*1e3/(Z-Le)),Me=0,Le=Z)}St=Ae,T()}function zl(s,e){if(e===th)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===zs||e===so){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===zs)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var po=class extends Pn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xl(t)}),this.register(function(t){return new ql(t)}),this.register(function(t){return new tc(t)}),this.register(function(t){return new nc(t)}),this.register(function(t){return new ic(t)}),this.register(function(t){return new Yl(t)}),this.register(function(t){return new Zl(t)}),this.register(function(t){return new Jl(t)}),this.register(function(t){return new Kl(t)}),this.register(function(t){return new Wl(t)}),this.register(function(t){return new Ql(t)}),this.register(function(t){return new $l(t)}),this.register(function(t){return new ec(t)}),this.register(function(t){return new jl(t)}),this.register(function(t){return new kl(t)}),this.register(function(t){return new sc(t)}),this.register(function(t){return new rc(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Kn.extractUrlBase(e);o=Kn.resolveURL(c,this.path)}else o=Kn.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Us(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zh){try{o[He.KHR_BINARY_GLTF]=new oc(e)}catch(h){i&&i(h);return}r=JSON.parse(o[He.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new dc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case He.KHR_MATERIALS_UNLIT:o[h]=new Vl;break;case He.KHR_DRACO_MESH_COMPRESSION:o[h]=new ac(r,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:o[h]=new lc;break;case He.KHR_MESH_QUANTIZATION:o[h]=new cc;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function g_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kl=class{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Rt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new eo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new jr(u),c.distance=h;break;case"spot":c=new Qr(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Un(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Vl=class{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){let i=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Rt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(i)}},Wl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Xl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(a,a)}return Promise.all(r)}},ql=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},$l=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Yl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Rt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Zl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Jl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(a[0],a[1],a[2],Rt),Promise.all(r)}},Kl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ql=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(a[0],a[1],a[2],Rt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}},jl=class{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},ec=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},tc=class{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},nc=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ic=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},sc=class{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},rc=class{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let _ of h){let x=new Ie,m=new I,p=new on,A=new I(1,1,1),S=new Or(_.geometry,_.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&A.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,x.compose(m,p,A));for(let M in l)if(M==="_COLOR_0"){let P=l[M];S.instanceColor=new Cn(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,l[M]);ft.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},zh="glTF",Hs=12,Uh={JSON:1313821514,BIN:5130562},oc=class{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Hs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Hs,r=new DataView(e,Hs),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Uh.JSON){let c=new Uint8Array(e,Hs+o,a);this.content=n.decode(c)}else if(l===Uh.BIN){let c=Hs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ac=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=hc[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=hc[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=ns[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let _ in d.attributes){let x=d.attributes[_],m=l[_];m!==void 0&&(x.normalized=m)}h(d)},a,c,Rt,f)})})}},lc=class{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},cc=class{constructor(){this.name=He.KHR_MESH_QUANTIZATION}},mo=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,x=_-c,m=-2*d+3*f,p=d-f,A=1-m,S=p-f+h;for(let M=0;M!==a;M++){let P=o[x+M+a],R=o[x+M+l]*u,w=o[_+M+a],C=o[_+M]*u;r[M]=A*P+S*R+m*w+p*C}return r}},__=new on,uc=class extends mo{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return __.fromArray(r).normalize().toArray(r),r}},Jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nh={9728:Et,9729:Ut,9984:Al,9985:ms,9986:Ni,9987:un},Fh={33071:An,33648:Ms,10497:di},Bl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},x_={CUBICSPLINE:void 0,LINEAR:$i,STEP:qi},Hl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function v_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fn})),s.DefaultMaterial}function xi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Un(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function y_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function M_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function b_(s){let e,t=s.extensions&&s.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gl(t.attributes):e=s.indices+":"+Gl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Gl(s.targets[n]);return e}function Gl(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function fc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function S_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var A_=new Ie,dc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new g_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Kr(this.options.manager):this.textureLoader=new no(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Us(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return xi(r,a,i),Un(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Kn.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Bl[i.type],a=ns[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new ut(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Bl[i.type],c=ns[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),A="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,S=t.cache.get(A);S||(x=new c(a,p*d,i.count*d/u),S=new Ts(x,d/u),t.cache.add(A,S)),m=new Es(S,l,f%d/u,_)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),m=new ut(x,l,_);if(i.sparse!==void 0){let p=Bl.SCALAR,A=ns[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,P=new A(o[1],S,i.sparse.count*p),R=new c(o[2],M,i.sparse.count*l);a!==null&&(m=new ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,C=P.length;w<C;w++){let y=P[w];if(m.setX(y,R[w*l]),l>=2&&m.setY(y,R[w*l+1]),l>=3&&m.setZ(y,R[w*l+2]),l>=4&&m.setW(y,R[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Nh[f.magFilter]||Ut,u.minFilter=Nh[f.minFilter]||un,u.wrapS=Fh[f.wrapS]||di,u.wrapT=Fh[f.wrapT]||di,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Et&&u.minFilter!==Ut,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(x){let m=new Mt(x);m.needsUpdate=!0,f(m)}),t.load(Kn.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Un(h,o),h.userData.mimeType=o.mimeType||S_(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[He.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Is,kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Cs,kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Qi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){let h=i[He.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Rt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,yt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ht);let u=r.alphaMode||Hl.OPAQUE;if(u===Hl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Hl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Dt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ne(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Dt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Dt){let h=r.emissiveFactor;a.emissive=new pe().setRGB(h[0],h[1],h[2],Rt)}return r.emissiveTexture!==void 0&&o!==Dt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Un(h,r),t.associations.set(h,{materials:e}),r.extensions&&xi(i,h,r),h})}createUniqueName(e){let t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Oh(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=b_(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Oh(new dt,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?v_(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){let x=u[d],m=o[d],p,A=c[d];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ur(x,A):new ct(x,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?p.geometry=zl(p.geometry,so):m.mode===Jt.TRIANGLE_FAN&&(p.geometry=zl(p.geometry,zs));else if(m.mode===Jt.LINES)p=new Hr(x,A);else if(m.mode===Jt.LINE_STRIP)p=new Ki(x,A);else if(m.mode===Jt.LINE_LOOP)p=new Gr(x,A);else if(m.mode===Jt.POINTS)p=new mi(x,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&M_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Un(p,r),m.extensions&&xi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&xi(i,h[0],r),h[0];let f=new bt;r.extensions&&xi(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gt(sh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new $n(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Un(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Ie;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fr(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],_=i.samplers[d.sampler],x=d.target,m=x.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,A=i.parameters!==void 0?i.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(_),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],_=h[2],x=h[3],m=h[4],p=[];for(let A=0,S=f.length;A<S;A++){let M=f[A],P=d[A],R=_[A],w=x[A],C=m[A];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let y=n._createAnimationTracks(M,P,R,w,C);if(y)for(let v=0;v<y.length;v++)p.push(y[v])}return new Jr(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,A_)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Rs:c.length>1?u=new bt:c.length===1?u=c[0]:u=new ft,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Un(u,r),r.extensions&&xi(n,u,r),r.matrix!==void 0){let h=new Ie;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new bt;n.name&&(r.name=i.createUniqueName(n.name)),Un(r,n),n.extensions&&xi(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof kt||f instanceof Mt)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];ei[r.path]===ei.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ei[r.path]){case ei.weights:c=In;break;case ei.rotation:c=Ln;break;case ei.position:case ei.scale:c=Dn;break;default:switch(n.itemSize){case 1:c=In;break;case 2:case 3:default:c=Dn;break}break}let u=i.interpolation!==void 0?x_[i.interpolation]:$i,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let _=new c(l[f]+"."+ei[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=fc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ln?uc:mo;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function w_(s,e,t){let n=e.attributes,i=new Ft;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=fc(ns[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){let x=fc(ns[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Gt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Oh(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=hc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ze.workingColorSpace!==Rt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),Un(s,e),w_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?y_(s,e.targets,t):s})}var Bh="data:application/octet-stream;base64,Z2xURgIAAAAgvgAArBAAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NS4yLjQxIiwidmVyc2lvbiI6IjIuMCJ9LCJleHRlbnNpb25zVXNlZCI6WyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIl0sInNjZW5lIjowLCJzY2VuZXMiOlt7Im5hbWUiOiJTY2VuZSIsIm5vZGVzIjpbMF19XSwibm9kZXMiOlt7Im1lc2giOjAsIm5hbWUiOiJGYXJtSG91c2UyIn1dLCJtYXRlcmlhbHMiOlt7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoidHJpbSIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuODE5OTk5OTkyODQ3NDQyNiwwLjgwMDAwMDAxMTkyMDkyOSwwLjc1OTk5OTk5MDQ2MzI1NjgsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuODAwMDAwMDExOTIwOTI5fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwibmFtZSI6IndhbGwiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjcyMDAwMDAyODYxMDIyOTUsMC42NjAwMDAwMjYyMjYwNDM3LDAuNTYwMDAwMDAyMzg0MTg1OCwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC44OTk5OTk5NzYxNTgxNDIxfX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwibmFtZSI6InJvb2YiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjIxOTk5OTk5ODgwNzkwNzEsMC4xNzAwMDAwMDE3ODgxMzkzNCwwLjE1OTk5OTk5NjQyMzcyMTMsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuOTQ5OTk5OTg4MDc5MDcxfX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwiZW1pc3NpdmVGYWN0b3IiOlsxLDAuNTUwMDAwMDExOTIwOTI5LDAuMTgwMDAwMDA3MTUyNTU3MzddLCJleHRlbnNpb25zIjp7IktIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgiOnsiZW1pc3NpdmVTdHJlbmd0aCI6Nn19LCJuYW1lIjoiZ2xhc3MiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wNTAwMDAwMDA3NDUwNTgwNiwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC41fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwibmFtZSI6ImRvb3IiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjMxOTk5OTk5Mjg0NzQ0MjYsMC4yMDAwMDAwMDI5ODAyMzIyNCwwLjE0MDAwMDAwMDU5NjA0NjQ1LDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjgwMDAwMDAxMTkyMDkyOX19XSwibWVzaGVzIjpbeyJuYW1lIjoiaF9mb3VuZF9tZXNoIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MCwiTk9STUFMIjoxfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MywiTk9STUFMIjo0fSwiaW5kaWNlcyI6NSwibWF0ZXJpYWwiOjF9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NiwiTk9STUFMIjo3fSwiaW5kaWNlcyI6OCwibWF0ZXJpYWwiOjJ9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6OSwiTk9STUFMIjoxMH0sImluZGljZXMiOjExLCJtYXRlcmlhbCI6M30seyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxMiwiTk9STUFMIjoxM30sImluZGljZXMiOjE0LCJtYXRlcmlhbCI6NH1dfV0sImFjY2Vzc29ycyI6W3siYnVmZmVyVmlldyI6MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjEyMDAsIm1heCI6WzQuNDAwMDAwMDk1MzY3NDMyLDUuMTE5OTk5ODg1NTU5MDgyLDMuMDQ5OTk5OTUyMzE2Mjg0XSwibWluIjpbLTMuMDk5OTk5OTA0NjMyNTY4NCwtMC4xMDAwMDAwMDE0OTAxMTYxMiwtMi4yNV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTIwMCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoxODAwLCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjozLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NzIsIm1heCI6WzQuMzAwMDAwMTkwNzM0ODYzLDUsMS43MDAwMDAwNDc2ODM3MTU4XSwibWluIjpbLTIuNTk5OTk5OTA0NjMyNTY4NCwwLC0xLjcwMDAwMDA0NzY4MzcxNThdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjcyLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjEwOCwidHlwZSI6IlNDQUxBUiJ9LHsiYnVmZmVyVmlldyI6NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjYwLCJtYXgiOls0LjY5OTk5OTgwOTI2NTEzNyw0LjU5OTk5OTkwNDYzMjU2OCwyLjk1MDAwMDA0NzY4MzcxNl0sIm1pbiI6Wy0zLjA0OTk5OTk1MjMxNjI4NCwxLjk1MDAwMDA0NzY4MzcxNTgsLTIuMjAwMDAwMDQ3NjgzNzE2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo2MCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjgsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50Ijo4NCwidHlwZSI6IlNDQUxBUiJ9LHsiYnVmZmVyVmlldyI6OSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwibWF4IjpbMy41LDMuNzUsMi43NDAwMDAwMDk1MzY3NDNdLCJtaW4iOlstMi4zOTAwMDAxMDQ5MDQxNzUsMC44MDAwMDAwMTE5MjA5MjksMS4zOTk5OTk5NzYxNTgxNDJdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNDQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjIxNiwidHlwZSI6IlNDQUxBUiJ9LHsiYnVmZmVyVmlldyI6MTIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNjgsIm1heCI6WzMuOTAwMDAwMDk1MzY3NDMxNiwyLjIxMDAwMDAzODE0Njk3MjcsMS43NTk5OTk5OTA0NjMyNTY4XSwibWluIjpbLTIuNzg5OTk5OTYxODUzMDI3MywwLjI1LDEuNDE5OTk5OTU3MDg0NjU1OF0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2OCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE0LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyLCJ0eXBlIjoiU0NBTEFSIn1dLCJidWZmZXJWaWV3cyI6W3siYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNDQwMCwiYnl0ZU9mZnNldCI6MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE0NDAwLCJieXRlT2Zmc2V0IjoxNDQwMCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjM2MDAsImJ5dGVPZmZzZXQiOjI4ODAwLCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6ODY0LCJieXRlT2Zmc2V0IjozMjQwMCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjg2NCwiYnl0ZU9mZnNldCI6MzMyNjQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyMTYsImJ5dGVPZmZzZXQiOjM0MTI4LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NzIwLCJieXRlT2Zmc2V0IjozNDM0NCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjcyMCwiYnl0ZU9mZnNldCI6MzUwNjQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNjgsImJ5dGVPZmZzZXQiOjM1Nzg0LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6MzU5NTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNzI4LCJieXRlT2Zmc2V0IjozNzY4MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjQzMiwiYnl0ZU9mZnNldCI6Mzk0MDgsInRhcmdldCI6MzQ5NjN9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyMDE2LCJieXRlT2Zmc2V0IjozOTg0MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjIwMTYsImJ5dGVPZmZzZXQiOjQxODU2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NTA0LCJieXRlT2Zmc2V0Ijo0Mzg3MiwidGFyZ2V0IjozNDk2M31dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo0NDM3Nn1dfVitAABCSU4AzcwswM3MzL1mZuY/zcwswM3MzL1mZuY/zcwswM3MzL1mZuY/zcyMQM3MzL1mZuY/zcyMQM3MzL1mZuY/zcyMQM3MzL1mZuY/zcyMQM3MzL1mZua/zcyMQM3MzL1mZua/zcyMQM3MzL1mZua/zcwswM3MzL1mZua/zcwswM3MzL1mZua/zcwswM3MzL1mZua/zcwswJqZmT5mZuY/zcwswJqZmT5mZuY/zcwswJqZmT5mZuY/zcyMQJqZmT5mZuY/zcyMQJqZmT5mZuY/zcyMQJqZmT5mZuY/zcyMQJqZmT5mZua/zcyMQJqZmT5mZua/zcyMQJqZmT5mZua/zcwswJqZmT5mZua/zcwswJqZmT5mZua/zcwswJqZmT5mZua/ZmZGwKRwHUAAABBAZmZGwKRwHUAAABBAZmZGwKRwHUAAABBAAAAgQKRwHUAAABBAAAAgQKRwHUAAABBAAAAgQKRwHUAAABBAzcwcQArXI0AAABBAzcwcQArXI0AAABBAzcwcQArXI0AAABBAMzNDwArXI0AAABBAMzNDwArXI0AAABBAMzNDwArXI0AAABBAZmZGwKRwHUAAABDAZmZGwKRwHUAAABDAZmZGwKRwHUAAABDAAAAgQKRwHUAAABDAAAAgQKRwHUAAABDAAAAgQKRwHUAAABDAzcwcQArXI0AAABDAzcwcQArXI0AAABDAzcwcQArXI0AAABDAMzNDwArXI0AAABDAMzNDwArXI0AAABDAMzNDwArXI0AAABDAmpn5vwAAoEDNzMw9mpn5vwAAoEDNzMw9mpn5vwAAoEDNzMw9AACgvwAAoEDNzMw9AACgvwAAoEDNzMw9AACgvwAAoEDNzMw9AACgvwAAoECamRm/AACgvwAAoECamRm/AACgvwAAoECamRm/mpn5vwAAoECamRm/mpn5vwAAoECamRm/mpn5vwAAoECamRm/mpn5vwrXo0DNzMw9mpn5vwrXo0DNzMw9mpn5vwrXo0DNzMw9AACgvwrXo0DNzMw9AACgvwrXo0DNzMw9AACgvwrXo0DNzMw9AACgvwrXo0CamRm/AACgvwrXo0CamRm/AACgvwrXo0CamRm/mpn5vwrXo0CamRm/mpn5vwrXo0CamRm/mpn5vwrXo0CamRm/AAAgwAAAAAAAADBAAAAgwAAAAAAAADBAAAAgwAAAAAAAADBAzczMPgAAAAAAADBAzczMPgAAAAAAADBAzczMPgAAAAAAADBAzczMPgAAAACamdk/zczMPgAAAACamdk/zczMPgAAAACamdk/AAAgwAAAAACamdk/AAAgwAAAAACamdk/AAAgwAAAAACamdk/AAAgwAAAgD4AADBAAAAgwAAAgD4AADBAAAAgwAAAgD4AADBAzczMPgAAgD4AADBAzczMPgAAgD4AADBAzczMPgAAgD4AADBAzczMPgAAgD6amdk/zczMPgAAgD6amdk/zczMPgAAgD6amdk/AAAgwAAAgD6amdk/AAAgwAAAgD6amdk/AAAgwAAAgD6amdk/UrgewAAAgD7XozBAUrgewAAAgD7XozBAUrgewAAAgD7XozBA4noUwAAAgD7XozBA4noUwAAAgD7XozBA4noUwAAAgD7XozBA4noUwAAAgD5nZiZA4noUwAAAgD5nZiZA4noUwAAAgD5nZiZAUrgewAAAgD5nZiZAUrgewAAAgD5nZiZAUrgewAAAgD5nZiZAUrgewDMzE0DXozBAUrgewDMzE0DXozBAUrgewDMzE0DXozBA4noUwDMzE0DXozBA4noUwDMzE0DXozBA4noUwDMzE0DXozBA4noUwDMzE0BnZiZA4noUwDMzE0BnZiZA4noUwDMzE0BnZiZAUrgewDMzE0BnZiZAUrgewDMzE0BnZiZAUrgewDMzE0BnZiZAr0dhPgAAgD7XozBAr0dhPgAAgD7XozBAr0dhPgAAgD7XozBAXI/CPgAAgD7XozBAXI/CPgAAgD7XozBAXI/CPgAAgD7XozBAXI/CPgAAgD5nZiZAXI/CPgAAgD5nZiZAXI/CPgAAgD5nZiZAr0dhPgAAgD5nZiZAr0dhPgAAgD5nZiZAr0dhPgAAgD5nZiZAr0dhPjMzE0DXozBAr0dhPjMzE0DXozBAr0dhPjMzE0DXozBAXI/CPjMzE0DXozBAXI/CPjMzE0DXozBAXI/CPjMzE0DXozBAXI/CPjMzE0BnZiZAXI/CPjMzE0BnZiZAXI/CPjMzE0BnZiZAr0dhPjMzE0BnZiZAr0dhPjMzE0BnZiZAr0dhPjMzE0BnZiZAmpkZwDMzcz+uRylAmpkZwDMzcz+uRylAmpkZwDMzcz+uRylAmpkZwGZmhj+uRylAmpkZwGZmhj+uRylAmpkZwGZmhj+uRylAmpkZwGZmhj+Qwi1AmpkZwGZmhj+Qwi1AmpkZwGZmhj+Qwi1AmpkZwDMzcz+Qwi1AmpkZwDMzcz+Qwi1AmpkZwDMzcz+Qwi1AmpmZPjMzcz+uRylAmpmZPjMzcz+uRylAmpmZPjMzcz+uRylAmpmZPmZmhj+uRylAmpmZPmZmhj+uRylAmpmZPmZmhj+uRylAmpmZPmZmhj+Qwi1AmpmZPmZmhj+Qwi1AmpmZPmZmhj+Qwi1AmpmZPjMzcz+Qwi1AmpmZPjMzcz+Qwi1AmpmZPjMzcz+Qwi1AzcwUwAAAgD65Hi1AzcwUwAAAgD65Hi1AzcwUwAAAgD65Hi1AmZkRwAAAgD65Hi1AmZkRwAAAgD65Hi1AmZkRwAAAgD65Hi1AmZkRwAAAgD6F6ylAmZkRwAAAgD6F6ylAmZkRwAAAgD6F6ylAzcwUwAAAgD6F6ylAzcwUwAAAgD6F6ylAzcwUwAAAgD6F6ylAzcwUwAAAgD+5Hi1AzcwUwAAAgD+5Hi1AzcwUwAAAgD+5Hi1AmZkRwAAAgD+5Hi1AmZkRwAAAgD+5Hi1AmZkRwAAAgD+5Hi1AmZkRwAAAgD+F6ylAmZkRwAAAgD+F6ylAmZkRwAAAgD+F6ylAzcwUwAAAgD+F6ylAzcwUwAAAgD+F6ylAzcwUwAAAgD+F6ylAmpkBwAAAgD65Hi1AmpkBwAAAgD65Hi1AmpkBwAAAgD65Hi1Azcz8vwAAgD65Hi1Azcz8vwAAgD65Hi1Azcz8vwAAgD65Hi1Azcz8vwAAgD6F6ylAzcz8vwAAgD6F6ylAzcz8vwAAgD6F6ylAmpkBwAAAgD6F6ylAmpkBwAAAgD6F6ylAmpkBwAAAgD6F6ylAmpkBwAAAgD+5Hi1AmpkBwAAAgD+5Hi1AmpkBwAAAgD+5Hi1Azcz8vwAAgD+5Hi1Azcz8vwAAgD+5Hi1Azcz8vwAAgD+5Hi1Azcz8vwAAgD+F6ylAzcz8vwAAgD+F6ylAzcz8vwAAgD+F6ylAmpkBwAAAgD+F6ylAmpkBwAAAgD+F6ylAmpkBwAAAgD+F6ylAzczcvwAAgD65Hi1AzczcvwAAgD65Hi1AzczcvwAAgD65Hi1AZ2bWvwAAgD65Hi1AZ2bWvwAAgD65Hi1AZ2bWvwAAgD65Hi1AZ2bWvwAAgD6F6ylAZ2bWvwAAgD6F6ylAZ2bWvwAAgD6F6ylAzczcvwAAgD6F6ylAzczcvwAAgD6F6ylAzczcvwAAgD6F6ylAzczcvwAAgD+5Hi1AzczcvwAAgD+5Hi1AzczcvwAAgD+5Hi1AZ2bWvwAAgD+5Hi1AZ2bWvwAAgD+5Hi1AZ2bWvwAAgD+5Hi1AZ2bWvwAAgD+F6ylAZ2bWvwAAgD+F6ylAZ2bWvwAAgD+F6ylAzczcvwAAgD+F6ylAzczcvwAAgD+F6ylAzczcvwAAgD+F6ylAZma2vwAAgD65Hi1AZma2vwAAgD65Hi1AZma2vwAAgD65Hi1AAACwvwAAgD65Hi1AAACwvwAAgD65Hi1AAACwvwAAgD65Hi1AAACwvwAAgD6F6ylAAACwvwAAgD6F6ylAAACwvwAAgD6F6ylAZma2vwAAgD6F6ylAZma2vwAAgD6F6ylAZma2vwAAgD6F6ylAZma2vwAAgD+5Hi1AZma2vwAAgD+5Hi1AZma2vwAAgD+5Hi1AAACwvwAAgD+5Hi1AAACwvwAAgD+5Hi1AAACwvwAAgD+5Hi1AAACwvwAAgD+F6ylAAACwvwAAgD+F6ylAAACwvwAAgD+F6ylAZma2vwAAgD+F6ylAZma2vwAAgD+F6ylAZma2vwAAgD+F6ylAZ2ZmvgAAgD65Hi1AZ2ZmvgAAgD65Hi1AZ2ZmvgAAgD65Hi1AMzMzvgAAgD65Hi1AMzMzvgAAgD65Hi1AMzMzvgAAgD65Hi1AMzMzvgAAgD6F6ylAMzMzvgAAgD6F6ylAMzMzvgAAgD6F6ylAZ2ZmvgAAgD6F6ylAZ2ZmvgAAgD6F6ylAZ2ZmvgAAgD6F6ylAZ2ZmvgAAgD+5Hi1AZ2ZmvgAAgD+5Hi1AZ2ZmvgAAgD+5Hi1AMzMzvgAAgD+5Hi1AMzMzvgAAgD+5Hi1AMzMzvgAAgD+5Hi1AMzMzvgAAgD+F6ylAMzMzvgAAgD+F6ylAMzMzvgAAgD+F6ylAZ2ZmvgAAgD+F6ylAZ2ZmvgAAgD+F6ylAZ2ZmvgAAgD+F6ylAmpmZPQAAgD65Hi1AmpmZPQAAgD65Hi1AmpmZPQAAgD65Hi1AAAAAPgAAgD65Hi1AAAAAPgAAgD65Hi1AAAAAPgAAgD65Hi1AAAAAPgAAgD6F6ylAAAAAPgAAgD6F6ylAAAAAPgAAgD6F6ylAmpmZPQAAgD6F6ylAmpmZPQAAgD6F6ylAmpmZPQAAgD6F6ylAmpmZPQAAgD+5Hi1AmpmZPQAAgD+5Hi1AmpmZPQAAgD+5Hi1AAAAAPgAAgD+5Hi1AAAAAPgAAgD+5Hi1AAAAAPgAAgD+5Hi1AAAAAPgAAgD+F6ylAAAAAPgAAgD+F6ylAAAAAPgAAgD+F6ylAmpmZPQAAgD+F6ylAmpmZPQAAgD+F6ylAmpmZPQAAgD+F6ylAZmamvwAAAAAzM0NAZmamvwAAAAAzM0NAZmamvwAAAAAzM0NAzczMvgAAAAAzM0NAzczMvgAAAAAzM0NA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zczMPaRwDUBcj+I/AACAP6RwDUBcj+I/AACAP6RwDUBcj+I/AACAP6RwDUBcj+I/AACAP6RwDUD2KNw/AACAP6RwDUD2KNw/AACAP6RwDUD2KNw/zczMPaRwDUD2KNw/zczMPaRwDUD2KNw/zczMPaRwDUD2KNw/CtcjPQrXYz9mZuY/CtcjPQrXYz9mZuY/CtcjPQrXYz9mZuY/FK6HPwrXYz9mZuY/FK6HPwrXYz9mZuY/FK6HPwrXYz9mZuY/FK6HPwrXYz/2KNw/FK6HPwrXYz/2KNw/FK6HPwrXYz/2KNw/CtcjPQrXYz/2KNw/CtcjPQrXYz/2KNw/CtcjPQrXYz/2KNw/CtcjPTMzcz9mZuY/CtcjPTMzcz9mZuY/CtcjPTMzcz9mZuY/FK6HPzMzcz9mZuY/FK6HPzMzcz9mZuY/FK6HPzMzcz9mZuY/FK6HPzMzcz/2KNw/FK6HPzMzcz/2KNw/FK6HPzMzcz/2KNw/CtcjPTMzcz/2KNw/CtcjPTMzcz/2KNw/CtcjPTMzcz/2KNw/zczMPTMzcz9cj+I/zczMPTMzcz9cj+I/zczMPTMzcz9cj+I/CtcjPjMzcz9cj+I/CtcjPjMzcz9cj+I/CtcjPjMzcz9cj+I/CtcjPjMzcz/2KNw/CtcjPjMzcz/2KNw/CtcjPjMzcz/2KNw/zczMPTMzcz/2KNw/zczMPTMzcz/2KNw/zczMPTMzcz/2KNw/zczMPZqZCUBcj+I/zczMPZqZCUBcj+I/zczMPZqZCUBcj+I/CtcjPpqZCUBcj+I/CtcjPpqZCUBcj+I/CtcjPpqZCUBcj+I/CtcjPpqZCUD2KNw/CtcjPpqZCUD2KNw/CtcjPpqZCUD2KNw/zczMPZqZCUD2KNw/zczMPZqZCUD2KNw/zczMPZqZCUD2KNw/16NwPzMzcz9cj+I/16NwPzMzcz9cj+I/16NwPzMzcz9cj+I/AACAPzMzcz9cj+I/AACAPzMzcz9cj+I/AACAPzMzcz9cj+I/AACAPzMzcz/2KNw/AACAPzMzcz/2KNw/AACAPzMzcz/2KNw/16NwPzMzcz/2KNw/16NwPzMzcz/2KNw/16NwPzMzcz/2KNw/16NwP5qZCUBcj+I/16NwP5qZCUBcj+I/16NwP5qZCUBcj+I/AACAP5qZCUBcj+I/AACAP5qZCUBcj+I/AACAP5qZCUBcj+I/AACAP5qZCUD2KNw/AACAP5qZCUD2KNw/AACAP5qZCUD2KNw/16NwP5qZCUD2KNw/16NwP5qZCUD2KNw/16NwP5qZCUD2KNw/FK4HPzMzcz9cj+I/FK4HPzMzcz9cj+I/FK4HPzMzcz9cj+I/hesRPzMzcz9cj+I/hesRPzMzcz9cj+I/hesRPzMzcz9cj+I/hesRPzMzcz/2KNw/hesRPzMzcz/2KNw/hesRPzMzcz/2KNw/FK4HPzMzcz/2KNw/FK4HPzMzcz/2KNw/FK4HPzMzcz/2KNw/FK4HP5qZCUBcj+I/FK4HP5qZCUBcj+I/FK4HP5qZCUBcj+I/hesRP5qZCUBcj+I/hesRP5qZCUBcj+I/hesRP5qZCUBcj+I/hesRP5qZCUD2KNw/hesRP5qZCUD2KNw/hesRP5qZCUD2KNw/FK4HP5qZCUD2KNw/FK4HP5qZCUD2KNw/FK4HP5qZCUD2KNw/CtcjPnE9qj9cj+I/CtcjPnE9qj9cj+I/CtcjPnE9qj9cj+I/16NwP3E9qj9cj+I/16NwP3E9qj9cj+I/16NwP3E9qj9cj+I/16NwP3E9qj/2KNw/16NwP3E9qj/2KNw/16NwP3E9qj/2KNw/CtcjPnE9qj/2KNw/CtcjPnE9qj/2KNw/CtcjPnE9qj/2KNw/CtcjPilcrz9cj+I/CtcjPilcrz9cj+I/CtcjPilcrz9cj+I/16NwPylcrz9cj+I/16NwPylcrz9cj+I/16NwPylcrz9cj+I/16NwPylcrz/2KNw/16NwPylcrz/2KNw/16NwPylcrz/2KNw/CtcjPilcrz/2KNw/CtcjPilcrz/2KNw/CtcjPilcrz/2KNw/CtcjPqRw3T9cj+I/CtcjPqRw3T9cj+I/CtcjPqRw3T9cj+I/16NwP6Rw3T9cj+I/16NwP6Rw3T9cj+I/16NwP6Rw3T9cj+I/16NwP6Rw3T/2KNw/16NwP6Rw3T/2KNw/16NwP6Rw3T/2KNw/CtcjPqRw3T/2KNw/CtcjPqRw3T/2KNw/CtcjPqRw3T/2KNw/CtcjPlyP4j9cj+I/CtcjPlyP4j9cj+I/CtcjPlyP4j9cj+I/16NwP1yP4j9cj+I/16NwP1yP4j9cj+I/16NwP1yP4j9cj+I/16NwP1yP4j/2KNw/16NwP1yP4j/2KNw/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MzMzQM3MTD/2KLw/MzMzQM3MTD+PwrU/MzMzQM3MTD+PwrU/MzMzQM3MTD+PwrU/KVwvQM3MTD+PwrU/KVwvQM3MTD+PwrU/KVwvQM3MTD+PwrU/KVwvQJqZ2T/2KLw/KVwvQJqZ2T/2KLw/KVwvQJqZ2T/2KLw/MzMzQJqZ2T/2KLw/MzMzQJqZ2T/2KLw/MzMzQJqZ2T/2KLw/MzMzQJqZ2T+PwrU/MzMzQJqZ2T+PwrU/MzMzQJqZ2T+PwrU/KVwvQJqZ2T+PwrU/KVwvQJqZ2T+PwrU/KVwvQJqZ2T+PwrU/AABgQM3MTD/2KLw/AABgQM3MTD/2KLw/AABgQM3MTD/2KLw/CtdjQM3MTD/2KLw/CtdjQM3MTD/2KLw/CtdjQM3MTD/2KLw/CtdjQM3MTD+PwrU/CtdjQM3MTD+PwrU/CtdjQM3MTD+PwrU/AABgQM3MTD+PwrU/AABgQM3MTD+PwrU/AABgQM3MTD+PwrU/AABgQJqZ2T/2KLw/AABgQJqZ2T/2KLw/AABgQJqZ2T/2KLw/CtdjQJqZ2T/2KLw/CtdjQJqZ2T/2KLw/CtdjQJqZ2T/2KLw/CtdjQJqZ2T+PwrU/CtdjQJqZ2T+PwrU/CtdjQJqZ2T+PwrU/AABgQJqZ2T+PwrU/AABgQJqZ2T+PwrU/AABgQJqZ2T+PwrU/7FFIQM3MTD/2KLw/7FFIQM3MTD/2KLw/7FFIQM3MTD/2KLw/SOFKQM3MTD/2KLw/SOFKQM3MTD/2KLw/SOFKQM3MTD/2KLw/SOFKQM3MTD+PwrU/SOFKQM3MTD+PwrU/SOFKQM3MTD+PwrU/7FFIQM3MTD+PwrU/7FFIQM3MTD+PwrU/7FFIQM3MTD+PwrU/7FFIQJqZ2T/2KLw/7FFIQJqZ2T/2KLw/7FFIQJqZ2T/2KLw/SOFKQJqZ2T/2KLw/SOFKQJqZ2T/2KLw/SOFKQJqZ2T/2KLw/SOFKQJqZ2T+PwrU/SOFKQJqZ2T+PwrU/SOFKQJqZ2T+PwrU/7FFIQJqZ2T+PwrU/7FFIQJqZ2T+PwrU/7FFIQJqZ2T+PwrU/MzMzQHE9ij/2KLw/MzMzQHE9ij/2KLw/MzMzQHE9ij/2KLw/AABgQHE9ij/2KLw/AABgQHE9ij/2KLw/AABgQHE9ij/2KLw/AABgQHE9ij+PwrU/AABgQHE9ij+PwrU/AABgQHE9ij+PwrU/MzMzQHE9ij+PwrU/MzMzQHE9ij+PwrU/MzMzQHE9ij+PwrU/MzMzQClcjz/2KLw/MzMzQClcjz/2KLw/MzMzQClcjz/2KLw/AABgQClcjz/2KLw/AABgQClcjz/2KLw/AABgQClcjz/2KLw/AABgQClcjz+PwrU/AABgQClcjz+PwrU/AABgQClcjz+PwrU/MzMzQClcjz+PwrU/MzMzQClcjz+PwrU/MzMzQClcjz+PwrU/MzMzQNejsD/2KLw/MzMzQNejsD/2KLw/MzMzQNejsD/2KLw/AABgQNejsD/2KLw/AABgQNejsD/2KLw/AABgQNejsD/2KLw/AABgQNejsD+PwrU/AABgQNejsD+PwrU/AABgQNejsD+PwrU/MzMzQNejsD+PwrU/MzMzQNejsD+PwrU/MzMzQNejsD+PwrU/MzMzQI/CtT/2KLw/MzMzQI/CtT/2KLw/MzMzQI/CtT/2KLw/AABgQI/CtT/2KLw/AABgQI/CtT/2KLw/AABgQI/CtT/2KLw/AABgQI/CtT+PwrU/AABgQI/CtT+PwrU/AABgQI/CtT+PwrU/MzMzQI/CtT+PwrU/MzMzQI/CtT+PwrU/MzMzQI/CtT+PwrU/w/UovwAAcEAzMxNAw/UovwAAcEAzMxNAw/UovwAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAAABBAj8J1PQAAcEAAABBAj8J1PQAAcEAAABBAw/UovwAAcEAAABBAw/UovwAAcEAAABBAw/UovwAAcEAAABBAw/UovwrXc0AzMxNAw/UovwrXc0AzMxNAw/UovwrXc0AzMxNAj8J1PQrXc0AzMxNAj8J1PQrXc0AzMxNAj8J1PQrXc0AzMxNAj8J1PQrXc0AAABBAj8J1PQrXc0AAABBAj8J1PQrXc0AAABBAw/UovwrXc0AAABBAw/UovwrXc0AAABBAw/UovwrXc0AAABBA7FE4v8P1OEC4HhVA7FE4v8P1OEC4HhVA7FE4v8P1OEC4HhVAj8L1PcP1OEC4HhVAj8L1PcP1OEC4HhVAj8L1PcP1OEC4HhVAj8L1PcP1OEAAABBAj8L1PcP1OEAAABBAj8L1PcP1OEAAABBA7FE4v8P1OEAAABBA7FE4v8P1OEAAABBA7FE4v8P1OEAAABBA7FE4v83MPEC4HhVA7FE4v83MPEC4HhVA7FE4v83MPEC4HhVAj8L1Pc3MPEC4HhVAj8L1Pc3MPEC4HhVAj8L1Pc3MPEC4HhVAj8L1Pc3MPEAAABBAj8L1Pc3MPEAAABBAj8L1Pc3MPEAAABBA7FE4v83MPEAAABBA7FE4v83MPEAAABBA7FE4v83MPEAAABBAw/Uov83MPEAzMxNAw/Uov83MPEAzMxNAw/Uov83MPEAzMxNAmpkZv83MPEAzMxNAmpkZv83MPEAzMxNAmpkZv83MPEAzMxNAmpkZv83MPEAAABBAmpkZv83MPEAAABBAmpkZv83MPEAAABBAw/Uov83MPEAAABBAw/Uov83MPEAAABBAw/Uov83MPEAAABBAw/UovwAAcEAzMxNAw/UovwAAcEAzMxNAw/UovwAAcEAzMxNAmpkZvwAAcEAzMxNAmpkZvwAAcEAzMxNAmpkZvwAAcEAzMxNAmpkZvwAAcEAAABBAmpkZvwAAcEAAABBAmpkZvwAAcEAAABBAw/UovwAAcEAAABBAw/UovwAAcEAAABBAw/UovwAAcEAAABBAAAAAAM3MPEAzMxNAAAAAAM3MPEAzMxNAAAAAAM3MPEAzMxNAj8J1Pc3MPEAzMxNAj8J1Pc3MPEAzMxNAj8J1Pc3MPEAzMxNAj8J1Pc3MPEAAABBAj8J1Pc3MPEAAABBAj8J1Pc3MPEAAABBAAAAAAM3MPEAAABBAAAAAAM3MPEAAABBAAAAAAM3MPEAAABBAAAAAAAAAcEAzMxNAAAAAAAAAcEAzMxNAAAAAAAAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAAABBAj8J1PQAAcEAAABBAj8J1PQAAcEAAABBAAAAAAAAAcEAAABBAAAAAAAAAcEAAABBAAAAAAAAAcEAAABBACtejvs3MPEAzMxNACtejvs3MPEAzMxNACtejvs3MPEAzMxNAKVyPvs3MPEAzMxNAKVyPvs3MPEAzMxNAKVyPvs3MPEAzMxNAKVyPvs3MPEAAABBAKVyPvs3MPEAAABBAKVyPvs3MPEAAABBACtejvs3MPEAAABBACtejvs3MPEAAABBACtejvs3MPEAAABBACtejvgAAcEAzMxNACtejvgAAcEAzMxNACtejvgAAcEAzMxNAKVyPvgAAcEAzMxNAKVyPvgAAcEAzMxNAKVyPvgAAcEAzMxNAKVyPvgAAcEAAABBAKVyPvgAAcEAAABBAKVyPvgAAcEAAABBACtejvgAAcEAAABBACtejvgAAcEAAABBACtejvgAAcEAAABBAmpkZvzCWTEAzMxNAmpkZvzCWTEAzMxNAmpkZvzCWTEAzMxNAAAAAADCWTEAzMxNAAAAAADCWTEAzMxNAAAAAADCWTEAzMxNAAAAAADCWTEAAABBAAAAAADCWTEAAABBAAAAAADCWTEAAABBAmpkZvzCWTEAAABBAmpkZvzCWTEAAABBAmpkZvzCWTEAAABBAmpkZv4wlT0AzMxNAmpkZv4wlT0AzMxNAmpkZv4wlT0AzMxNAAAAAAIwlT0AzMxNAAAAAAIwlT0AzMxNAAAAAAIwlT0AzMxNAAAAAAIwlT0AAABBAAAAAAIwlT0AAABBAAAAAAIwlT0AAABBAmpkZv4wlT0AAABBAmpkZv4wlT0AAABBAmpkZv4wlT0AAABBAmpkZv0GnXUAzMxNAmpkZv0GnXUAzMxNAmpkZv0GnXUAzMxNAAAAAAEGnXUAzMxNAAAAAAEGnXUAzMxNAAAAAAEGnXUAzMxNAAAAAAEGnXUAAABBAAAAAAEGnXUAAABBAAAAAAEGnXUAAABBAmpkZv0GnXUAAABBAmpkZv0GnXUAAABBAmpkZv0GnXUAAABBAmpkZv502YEAzMxNAmpkZv502YEAzMxNAmpkZv502YEAzMxNAAAAAAJ02YEAzMxNAAAAAAJ02YEAzMxNAAAAAAJ02YEAzMxNAAAAAAJ02YEAAABBAAAAAAJ02YEAAABBAAAAAAJ02YEAAABBAmpkZv502YEAAABBAmpkZv502YEAAABBAmpkZv502YEAAABBAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAALvlkvy755D4AAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAALvlkPy755D4AAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAALvlkPy755D4AAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAALvlkvy755D4AAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAALvlkvy755D4AAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAALvlkPy755D4AAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAALvlkPy755D4AAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAALvlkvy755D4AAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAADAA8AAAAPAAwABQAIABQABQAUABEABgAJABUABgAVABIACwACAA4ACwAOABcACgAHAAQACgAEAAEADQAQABMADQATABYAGQAlACgAGQAoABwAHQApACwAHQAsACAAHwArAC4AHwAuACIAIwAvACYAIwAmABoAIQAYABsAIQAbAB4AJAAtACoAJAAqACcAMAAzAD8AMAA/ADwANQA4AEQANQBEAEEANgA5AEUANgBFAEIAOwAyAD4AOwA+AEcAOgA3ADQAOgA0ADEAPQBAAEMAPQBDAEYASABLAFcASABXAFQATQBQAFwATQBcAFkATgBRAF0ATgBdAFoAUwBKAFYAUwBWAF8AUgBPAEwAUgBMAEkAVQBYAFsAVQBbAF4AYABjAG8AYABvAGwAZQBoAHQAZQB0AHEAZgBpAHUAZgB1AHIAawBiAG4AawBuAHcAagBnAGQAagBkAGEAbQBwAHMAbQBzAHYAeAB7AIcAeACHAIQAfQCAAIwAfQCMAIkAfgCBAI0AfgCNAIoAgwB6AIYAgwCGAI8AggB/AHwAggB8AHkAhQCIAIsAhQCLAI4AkACTAJ8AkACfAJwAlACXAKMAlACjAKAAlgCZAKUAlgClAKIAmgCRAJ0AmgCdAKYAmwCYAJUAmwCVAJIAngChAKQAngCkAKcAqACrALcAqAC3ALQArQCwALwArQC8ALkArgCxAL0ArgC9ALoAswCqALYAswC2AL8AsgCvAKwAsgCsAKkAtQC4ALsAtQC7AL4AwADDAM8AwADPAMwAxQDIANQAxQDUANEAxgDJANUAxgDVANIAywDCAM4AywDOANcAygDHAMQAygDEAMEAzQDQANMAzQDTANYA2ADbAOcA2ADnAOQA3QDgAOwA3QDsAOkA3gDhAO0A3gDtAOoA4wDaAOYA4wDmAO8A4gDfANwA4gDcANkA5QDoAOsA5QDrAO4A8ADzAP8A8AD/APwA9QD4AAQB9QAEAQEB9gD5AAUB9gAFAQIB+wDyAP4A+wD+AAcB+gD3APQA+gD0APEA/QAAAQMB/QADAQYBCAELARcBCAEXARQBDQEQARwBDQEcARkBDgERAR0BDgEdARoBEwEKARYBEwEWAR8BEgEPAQwBEgEMAQkBFQEYARsBFQEbAR4BIAEjAS8BIAEvASwBJQEoATQBJQE0ATEBJgEpATUBJgE1ATIBKwEiAS4BKwEuATcBKgEnASQBKgEkASEBLQEwATMBLQEzATYBOAE7AUcBOAFHAUQBPQFAAUwBPQFMAUkBPgFBAU0BPgFNAUoBQwE6AUYBQwFGAU8BQgE/ATwBQgE8ATkBRQFIAUsBRQFLAU4BUAFTAV8BUAFfAVwBVQFYAWQBVQFkAWEBVgFZAWUBVgFlAWIBWwFSAV4BWwFeAWcBWgFXAVQBWgFUAVEBXQFgAWMBXQFjAWYBaAFrAXcBaAF3AXQBbQFwAXwBbQF8AXkBbgFxAX0BbgF9AXoBcwFqAXYBcwF2AX8BcgFvAWwBcgFsAWkBdQF4AXsBdQF7AX4BgAGDAY8BgAGPAYwBhQGIAZQBhQGUAZEBhgGJAZUBhgGVAZIBiwGCAY4BiwGOAZcBigGHAYQBigGEAYEBjQGQAZMBjQGTAZYBmAGbAacBmAGnAaQBnQGgAawBnQGsAakBngGhAa0BngGtAaoBowGaAaYBowGmAa8BogGfAZwBogGcAZkBpQGoAasBpQGrAa4BsAGzAb8BsAG/AbwBtQG4AcQBtQHEAcEBtgG5AcUBtgHFAcIBuwGyAb4BuwG+AccBugG3AbQBugG0AbEBvQHAAcMBvQHDAcYByAHLAdcByAHXAdQBzQHQAdwBzQHcAdkBzgHRAd0BzgHdAdoB0wHKAdYB0wHWAd8B0gHPAcwB0gHMAckB1QHYAdsB1QHbAd4B4AHjAe8B4AHvAewB5QHoAfQB5QH0AfEB5gHpAfUB5gH1AfIB6wHiAe4B6wHuAfcB6gHnAeQB6gHkAeEB7QHwAfMB7QHzAfYB+AH7AQcC+AEHAgQC/QEAAgwC/QEMAgkC/gEBAg0C/gENAgoCAwL6AQYCAwIGAg8CAgL/AfwBAgL8AfkBBQIIAgsCBQILAg4CEAITAh8CEAIfAhwCFQIYAiQCFQIkAiECFgIZAiUCFgIlAiICGwISAh4CGwIeAicCGgIXAhQCGgIUAhECHQIgAiMCHQIjAiYCKAIrAjcCKAI3AjQCLQIwAjwCLQI8AjkCLgIxAj0CLgI9AjoCMwIqAjYCMwI2Aj8CMgIvAiwCMgIsAikCNQI4AjsCNQI7Aj4CQAJDAk8CQAJPAkwCRQJIAlQCRQJUAlECRgJJAlUCRgJVAlICSwJCAk4CSwJOAlcCSgJHAkQCSgJEAkECTQJQAlMCTQJTAlYCWAJbAmcCWAJnAmQCXQJgAmwCXQJsAmkCXgJhAm0CXgJtAmoCYwJaAmYCYwJmAm8CYgJfAlwCYgJcAlkCZQJoAmsCZQJrAm4CcAJzAn8CcAJ/AnwCdQJ4AoQCdQKEAoECdgJ5AoUCdgKFAoICewJyAn4CewJ+AocCegJ3AnQCegJ0AnECfQKAAoMCfQKDAoYCiAKLApcCiAKXApQCjQKQApwCjQKcApkCjgKRAp0CjgKdApoCkwKKApYCkwKWAp8CkgKPAowCkgKMAokClQKYApsClQKbAp4CoAKjAq8CoAKvAqwCpQKoArQCpQK0ArECpgKpArUCpgK1ArICqwKiAq4CqwKuArcCqgKnAqQCqgKkAqECrQKwArMCrQKzArYCuAK7AscCuALHAsQCvQLAAswCvQLMAskCvgLBAs0CvgLNAsoCwwK6AsYCwwLGAs8CwgK/ArwCwgK8ArkCxQLIAssCxQLLAs4C0ALTAt8C0ALfAtwC1QLYAuQC1QLkAuEC1gLZAuUC1gLlAuIC2wLSAt4C2wLeAucC2gLXAtQC2gLUAtEC3QLgAuMC3QLjAuYC6ALrAvcC6AL3AvQC7QLwAvwC7QL8AvkC7gLxAv0C7gL9AvoC8wLqAvYC8wL2Av8C8gLvAuwC8gLsAukC9QL4AvsC9QL7Av4CAAMDAw8DAAMPAwwDBQMIAxQDBQMUAxEDBgMJAxUDBgMVAxIDCwMCAw4DCwMOAxcDCgMHAwQDCgMEAwEDDQMQAxMDDQMTAxYDGAMbAycDGAMnAyQDHQMgAywDHQMsAykDHgMhAy0DHgMtAyoDIwMaAyYDIwMmAy8DIgMfAxwDIgMcAxkDJQMoAysDJQMrAy4DMAMzAz8DMAM/AzwDNQM4A0QDNQNEA0EDNgM5A0UDNgNFA0IDOwMyAz4DOwM+A0cDOgM3AzQDOgM0AzEDPQNAA0MDPQNDA0YDSANLA1cDSANXA1QDTQNQA1wDTQNcA1kDTgNRA10DTgNdA1oDUwNKA1YDUwNWA18DUgNPA0wDUgNMA0kDVQNYA1sDVQNbA14DYANjA28DYANvA2wDZQNoA3QDZQN0A3EDZgNpA3UDZgN1A3IDawNiA24DawNuA3cDagNnA2QDagNkA2EDbQNwA3MDbQNzA3YDeAN7A4cDeAOHA4QDfQOAA4wDfQOMA4kDfgOBA40DfgONA4oDgwN6A4YDgwOGA48DggN/A3wDggN8A3kDhQOIA4sDhQOLA44DkAOTA58DkAOfA5wDlQOYA6QDlQOkA6EDlgOZA6UDlgOlA6IDmwOSA54DmwOeA6cDmgOXA5QDmgOUA5EDnQOgA6MDnQOjA6YDqAOrA7cDqAO3A7QDrQOwA7wDrQO8A7kDrgOxA70DrgO9A7oDswOqA7YDswO2A78DsgOvA6wDsgOsA6kDtQO4A7sDtQO7A74DwAPDA88DwAPPA8wDxQPIA9QDxQPUA9EDxgPJA9UDxgPVA9IDywPCA84DywPOA9cDygPHA8QDygPEA8EDzQPQA9MDzQPTA9YD2APbA+cD2APnA+QD3QPgA+wD3QPsA+kD3gPhA+0D3gPtA+oD4wPaA+YD4wPmA+8D4gPfA9wD4gPcA9kD5QPoA+sD5QPrA+4D8APzA/8D8AP/A/wD9QP4AwQE9QMEBAEE9gP5AwUE9gMFBAIE+wPyA/4D+wP+AwcE+gP3A/QD+gP0A/ED/QMABAME/QMDBAYECAQLBBcECAQXBBQEDQQQBBwEDQQcBBkEDgQRBB0EDgQdBBoEEwQKBBYEEwQWBB8EEgQPBAwEEgQMBAkEFQQYBBsEFQQbBB4EIAQjBC8EIAQvBCwEJQQoBDQEJQQ0BDEEJgQpBDUEJgQ1BDIEKwQiBC4EKwQuBDcEKgQnBCQEKgQkBCEELQQwBDMELQQzBDYEOAQ7BEcEOARHBEQEPQRABEwEPQRMBEkEPgRBBE0EPgRNBEoEQwQ6BEYEQwRGBE8EQgQ/BDwEQgQ8BDkERQRIBEsERQRLBE4EUARTBF8EUARfBFwEVQRYBGQEVQRkBGEEVgRZBGUEVgRlBGIEWwRSBF4EWwReBGcEWgRXBFQEWgRUBFEEXQRgBGMEXQRjBGYEaARrBHcEaAR3BHQEbQRwBHwEbQR8BHkEbgRxBH0EbgR9BHoEcwRqBHYEcwR2BH8EcgRvBGwEcgRsBGkEdQR4BHsEdQR7BH4EgASDBI8EgASPBIwEhQSIBJQEhQSUBJEEhgSJBJUEhgSVBJIEiwSCBI4EiwSOBJcEigSHBIQEigSEBIEEjQSQBJMEjQSTBJYEmASbBKcEmASnBKQEnQSgBKwEnQSsBKkEngShBK0EngStBKoEowSaBKYEowSmBK8EogSfBJwEogScBJkEpQSoBKsEpQSrBK4EZmYmwAAAAACamdk/ZmYmwAAAAACamdk/ZmYmwAAAAACamdk/AAAAQAAAAACamdk/AAAAQAAAAACamdk/AAAAQAAAAACamdk/AAAAQAAAAACamdm/AAAAQAAAAACamdm/AAAAQAAAAACamdm/ZmYmwAAAAACamdm/ZmYmwAAAAACamdm/ZmYmwAAAAACamdm/ZmYmwGZmJkCamdk/ZmYmwGZmJkCamdk/ZmYmwGZmJkCamdk/AAAAQGZmJkCamdk/AAAAQGZmJkCamdk/AAAAQGZmJkCamdk/AAAAQGZmJkCamdm/AAAAQGZmJkCamdm/AAAAQGZmJkCamdm/ZmYmwGZmJkCamdm/ZmYmwGZmJkCamdm/ZmYmwGZmJkCamdm/AAAAQAAAAAAzM7M/AAAAQAAAAAAzM7M/AAAAQAAAAAAzM7M/mpmJQAAAAAAzM7M/mpmJQAAAAAAzM7M/mpmJQAAAAAAzM7M/mpmJQAAAAAAzM7O/mpmJQAAAAAAzM7O/mpmJQAAAAAAzM7O/AAAAQAAAAAAzM7O/AAAAQAAAAAAzM7O/AAAAQAAAAAAzM7O/AAAAQAAAAEAzM7M/AAAAQAAAAEAzM7M/AAAAQAAAAEAzM7M/mpmJQAAAAEAzM7M/mpmJQAAAAEAzM7M/mpmJQAAAAEAzM7M/mpmJQAAAAEAzM7O/mpmJQAAAAEAzM7O/mpmJQAAAAEAzM7O/AAAAQAAAAEAzM7O/AAAAQAAAAEAzM7O/AAAAQAAAAEAzM7O/zczsvwAAQEAAAACAzczsvwAAQEAAAACAzczsvwAAQEAAAACAzcysvwAAQEAAAACAzcysvwAAQEAAAACAzcysvwAAQEAAAACAzcysvwAAQEAAAAC/zcysvwAAQEAAAAC/zcysvwAAQEAAAAC/zczsvwAAQEAAAAC/zczsvwAAQEAAAAC/zczsvwAAQEAAAAC/mpnpvwAAoEDNzMy8mpnpvwAAoEDNzMy8mpnpvwAAoEDNzMy8AACwvwAAoEDNzMy8AACwvwAAoEDNzMy8AACwvwAAoEDNzMy8AACwvwAAoEAzM/O+AACwvwAAoEAzM/O+AACwvwAAoEAzM/O+mpnpvwAAoEAzM/O+mpnpvwAAoEAzM/O+mpnpvwAAoEAzM/O+AAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAA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MzOzvpqZ+T8UridAMzOzvpqZ+T8UridAMzOzvpqZ+T8UridAw/UYwDMzcz+kcN0/w/UYwDMzcz+kcN0/w/UYwDMzcz+kcN0/exTOvzMzcz+kcN0/exTOvzMzcz+kcN0/exTOvzMzcz+kcN0/exTOvzMzcz+amdk/exTOvzMzcz+amdk/exTOvzMzcz+amdk/w/UYwDMzcz+amdk/w/UYwDMzcz+amdk/w/UYwDMzcz+amdk/w/UYwJqZCUCkcN0/w/UYwJqZCUCkcN0/w/UYwJqZCUCkcN0/exTOv5qZCUCkcN0/exTOv5qZCUCkcN0/exTOv5qZCUCkcN0/exTOv5qZCUCamdk/exTOv5qZCUCamdk/exTOv5qZCUCamdk/w/UYwJqZCUCamdk/w/UYwJqZCUCamdk/w/UYwJqZCUCamdk/CtcjPjMzcz+kcN0/CtcjPjMzcz+kcN0/CtcjPjMzcz+kcN0/16NwPzMzcz+kcN0/16NwPzMzcz+kcN0/16NwPzMzcz+kcN0/16NwPzMzcz+amdk/16NwPzMzcz+amdk/16NwPzMzcz+amdk/CtcjPjMzcz+amdk/CtcjPjMzcz+amdk/CtcjPjMzcz+amdk/CtcjPpqZCUCkcN0/CtcjPpqZCUCkcN0/CtcjPpqZCUCkcN0/16NwP5qZCUCkcN0/16NwP5qZCUCkcN0/16NwP5qZCUCkcN0/16NwP5qZCUCamdk/16NwP5qZCUCamdk/16NwP5qZCUCamdk/CtcjPpqZCUCamdk/CtcjPpqZCUCamdk/CtcjPpqZCUCamdk/exSOPzMzcz+kcN0/exSOPzMzcz+kcN0/exSOPzMzcz+kcN0/hevxPzMzcz+kcN0/hevxPzMzcz+kcN0/hevxPzMzcz+kcN0/hevxPzMzcz+amdk/hevxPzMzcz+amdk/hevxPzMzcz+amdk/exSOPzMzcz+amdk/exSOPzMzcz+amdk/exSOPzMzcz+amdk/exSOP5qZCUCkcN0/exSOP5qZCUCkcN0/exSOP5qZCUCkcN0/hevxP5qZCUCkcN0/hevxP5qZCUCkcN0/hevxP5qZCUCkcN0/hevxP5qZCUCamdk/hevxP5qZCUCamdk/hevxP5qZCUCamdk/exSOP5qZCUCamdk/exSOP5qZCUCamdk/exSOP5qZCUCamdk/MzMzQM3MTD89Crc/MzMzQM3MTD89Crc/MzMzQM3MTD89Crc/AABgQM3MTD89Crc/AABgQM3MTD89Crc/AABgQM3MTD89Crc/AABgQM3MTD8zM7M/AABgQM3MTD8zM7M/AABgQM3MTD8zM7M/MzMzQM3MTD8zM7M/MzMzQM3MTD8zM7M/MzMzQM3MTD8zM7M/MzMzQJqZ2T89Crc/MzMzQJqZ2T89Crc/MzMzQJqZ2T89Crc/AABgQJqZ2T89Crc/AABgQJqZ2T89Crc/AABgQJqZ2T89Crc/AABgQJqZ2T8zM7M/AABgQJqZ2T8zM7M/AABgQJqZ2T8zM7M/MzMzQJqZ2T8zM7M/MzMzQJqZ2T8zM7M/MzMzQJqZ2T8zM7M/mpkZv83MPEDXoxBAmpkZv83MPEDXoxBAmpkZv83MPEDXoxBAAAAAAM3MPEDXoxBAAAAAAM3MPEDXoxBAAAAAAM3MPEDXoxBAAAAAAM3MPEBSuA5AAAAAAM3MPEBSuA5AAAAAAM3MPEBSuA5AmpkZv83MPEBSuA5AmpkZv83MPEBSuA5AmpkZv83MPEBSuA5AmpkZvwAAcEDXoxBAmpkZvwAAcEDXoxBAmpkZvwAAcEDXoxBAAAAAAAAAcEDXoxBAAAAAAAAAcEDXoxBAAAAAAAAAcEDXoxBAAAAAAAAAcEBSuA5AAAAAAAAAcEBSuA5AAAAAAAAAcEBSuA5AmpkZvwAAcEBSuA5AmpkZvwAAcEBSuA5AmpkZvwAAcEBSuA5AAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAA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mpl5QKRwPT9I4bo/mpl5QKRwPT9I4bo/mpl5QKRwPT9I4bo/mpl5QKRwPT+PwrU/mpl5QKRwPT+PwrU/mpl5QKRwPT+PwrU/ZmZmQKRwPT+PwrU/ZmZmQKRwPT+PwrU/ZmZmQKRwPT+PwrU/ZmZmQK5H4T9I4bo/ZmZmQK5H4T9I4bo/ZmZmQK5H4T9I4bo/mpl5QK5H4T9I4bo/mpl5QK5H4T9I4bo/mpl5QK5H4T9I4bo/mpl5QK5H4T+PwrU/mpl5QK5H4T+PwrU/mpl5QK5H4T+PwrU/ZmZmQK5H4T+PwrU/ZmZmQK5H4T+PwrU/ZmZmQK5H4T+PwrU/AAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAADAA8AAAAPAAwABQAIABQABQAUABEABgAJABUABgAVABIACwACAA4ACwAOABcACgAHAAQACgAEAAEADQAQABMADQATABYAGAAbACcAGAAnACQAHQAgACwAHQAsACkAHgAhAC0AHgAtACoAIwAaACYAIwAmAC8AIgAfABwAIgAcABkAJQAoACsAJQArAC4AMAAzAD8AMAA/ADwANQA4AEQANQBEAEEANgA5AEUANgBFAEIAOwAyAD4AOwA+AEcAOgA3ADQAOgA0ADEAPQBAAEMAPQBDAEYASABLAFcASABXAFQATQBQAFwATQBcAFkATgBRAF0ATgBdAFoAUwBKAFYAUwBWAF8AUgBPAEwAUgBMAEkAVQBYAFsAVQBbAF4AYABjAG8AYABvAGwAZQBoAHQAZQB0AHEAZgBpAHUAZgB1AHIAawBiAG4AawBuAHcAagBnAGQAagBkAGEAbQBwAHMAbQBzAHYAeAB7AIcAeACHAIQAfQCAAIwAfQCMAIkAfgCBAI0AfgCNAIoAgwB6AIYAgwCGAI8AggB/AHwAggB8AHkAhQCIAIsAhQCLAI4AkACTAJ8AkACfAJwAlQCYAKQAlQCkAKEAlgCZAKUAlgClAKIAmwCSAJ4AmwCeAKcAmgCXAJQAmgCUAJEAnQCgAKMAnQCjAKYA";var Hh="data:application/octet-stream;base64,Z2xURgIAAAD0nAAA4BAAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NS4yLjQxIiwidmVyc2lvbiI6IjIuMCJ9LCJleHRlbnNpb25zVXNlZCI6WyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIl0sInNjZW5lIjowLCJzY2VuZXMiOlt7Im5hbWUiOiJTY2VuZSIsIm5vZGVzIjpbMF19XSwibm9kZXMiOlt7Im1lc2giOjAsIm5hbWUiOiJQaWNrdXBUcnVja0IifV0sIm1hdGVyaWFscyI6W3siZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJwYWludCIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuNDQ5OTk5OTg4MDc5MDcxMDQsMC4xMTk5OTk5OTczMTc3OTA5OSwwLjA5MDAwMDAwMzU3NjI3ODY5LDFdLCJtZXRhbGxpY0ZhY3RvciI6MC4yMDAwMDAwMDI5ODAyMzIyNCwicm91Z2huZXNzRmFjdG9yIjowLjQ0OTk5OTk4ODA3OTA3MTA0fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwibmFtZSI6ImRhcmsiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wNTAwMDAwMDA3NDUwNTgwNiwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC44MDAwMDAwMTE5MjA5Mjl9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoidGlyZSIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjk0OTk5OTk4ODA3OTA3MX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJjaHJvbWUiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjY5OTk5OTk4ODA3OTA3MSwwLjY5OTk5OTk4ODA3OTA3MSwwLjcyMDAwMDAyODYxMDIyOTUsMV0sInJvdWdobmVzc0ZhY3RvciI6MC4yNX19LHsiZG91YmxlU2lkZWQiOnRydWUsImVtaXNzaXZlRmFjdG9yIjpbMSwwLjU1MDAwMDAxMTkyMDkyOSwwLjE4MDAwMDAwNzE1MjU1NzM3XSwiZXh0ZW5zaW9ucyI6eyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIjp7ImVtaXNzaXZlU3RyZW5ndGgiOjZ9fSwibmFtZSI6ImdsYXNzIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC4wNTAwMDAwMDA3NDUwNTgwNiwwLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuNX19XSwibWVzaGVzIjpbeyJuYW1lIjoidF9ib2R5X21lc2guMDAyIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MCwiTk9STUFMIjoxfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MywiTk9STUFMIjo0fSwiaW5kaWNlcyI6NSwibWF0ZXJpYWwiOjF9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NiwiTk9STUFMIjo3fSwiaW5kaWNlcyI6OCwibWF0ZXJpYWwiOjJ9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6OSwiTk9STUFMIjoxMH0sImluZGljZXMiOjExLCJtYXRlcmlhbCI6M30seyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxMiwiTk9STUFMIjoxM30sImluZGljZXMiOjE0LCJtYXRlcmlhbCI6NH1dfV0sImFjY2Vzc29ycyI6W3siYnVmZmVyVmlldyI6MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE4MCwibWF4IjpbMi43Nzk5OTk5NzEzODk3NzA1LDIuMjk5OTk5OTUyMzE2Mjg0LDAuOTQ5OTk5OTg4MDc5MDcxXSwibWluIjpbLTIuNjQwMDAwMTA0OTA0MTc1LDAuNSwtMC45NDk5OTk5ODgwNzkwNzFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE4MCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoyODgsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNDAsIm1heCI6WzIuODE5OTk5OTMzMjQyNzk4LDIuMjIwMDAwMDI4NjEwMjI5NSwxLjA4MDAwMDA0MjkxNTM0NDJdLCJtaW4iOlstMC40Njk5OTk5OTg4MDc5MDcxLDAuNTUwMDAwMDExOTIwOTI5LC0xLjA4MDAwMDA0MjkxNTM0NDJdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0MCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjozNzIsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjYsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0NDAsIm1heCI6WzIuMjEwMDAwMDM4MTQ2OTcyNywwLjkxMzAxMTU1MDkwMzMyMDMsMC45ODAwMDAwMTkwNzM0ODYzXSwibWluIjpbLTIuMTA5OTk5ODk1MDk1ODI1LDAuMDA2OTg4NDMzNjU1MzUxNCwtMC45ODAwMDAwMTkwNzM0ODYzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0NDAsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo4LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6ODY0LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3Ijo5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MzQ0LCJtYXgiOlsyLjkyMDAwMDA3NjI5Mzk0NTMsMC44MTk5OTk5OTI4NDc0NDI2LDFdLCJtaW4iOlstMi43NTk5OTk5OTA0NjMyNTcsMC4yMzk5OTk5OTQ2MzU1ODE5NywtMV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjM0NCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjExLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NjQ4LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoxMiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlsyLjc4OTk5OTk2MTg1MzAyNzMsMS4wNDk5OTk5NTIzMTYyODQyLDAuODk5OTk5OTc2MTU4MTQyMV0sIm1pbiI6Wy0yLjY3MDAwMDA3NjI5Mzk0NTMsMC43Nzk5OTk5NzEzODk3NzA1LC0wLjg5OTk5OTk3NjE1ODE0MjFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE0LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MTQ0LCJ0eXBlIjoiU0NBTEFSIn1dLCJidWZmZXJWaWV3cyI6W3siYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyMTYwLCJieXRlT2Zmc2V0IjowLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MjE2MCwiYnl0ZU9mZnNldCI6MjE2MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjU3NiwiYnl0ZU9mZnNldCI6NDMyMCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4ODAsImJ5dGVPZmZzZXQiOjQ4OTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVy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9ihcvwAAAL8AAIA/9ihcvwAAAL8AAIA/9ihcvwAAAL8AAIA/MzNzvwAAAL8AAIA/MzNzvwAAAL8AAIA/MzNzv2ZmJsAAAIA/MzNzv2ZmJsAAAIA/MzNzv2ZmJsAAAIA/MzNzv2ZmJsCkcL0/9ihcv2ZmJsCkcL0/9ihcv2ZmJsCkcL0/9ihcvwAAAL+kcL0/9ihcvwAAAL+kcL0/9ihcvwAAAL+kcL0/9ihcvwAAAL+kcL0/MzNzvwAAAL+kcL0/MzNzvwAAAL+kcL0/MzNzv2ZmJsCkcL0/MzNzv2ZmJsCkcL0/MzNzv2ZmJsCkcL0/MzNzv2ZmJsAAAIA/MzNzP2ZmJsAAAIA/MzNzP2ZmJsAAAIA/MzNzPwAAAL8AAIA/MzNzPwAAAL8AAIA/MzNzPwAAAL8AAIA/MzNzPwAAAL8AAIA/9ihcPwAAAL8AAIA/9ihcPwAAAL8AAIA/9ihcP2ZmJsAAAIA/9ihcP2ZmJsAAAIA/9ihcP2ZmJsAAAIA/9ihcP2ZmJsCkcL0/MzNzP2ZmJsCkcL0/MzNzP2ZmJsCkcL0/MzNzPwAAAL+kcL0/MzNzPwAAAL+kcL0/MzNzPwAAAL+kcL0/MzNzPwAAAL+kcL0/9ihcPwAAAL+kcL0/9ihcPwAAAL+kcL0/9ihcP2ZmJsCkcL0/9ihcP2ZmJsCkcL0/9ihcP2ZmJsCkcL0/9ihcP83MDL8AAIA/MzNzP83MDL8AAIA/MzNzP83MDL8AAIA/MzNzP2Zm5r4AAIA/MzNzP2Zm5r4AAIA/MzNzP2Zm5r4AAIA/MzNzP2Zm5r4AAIA/MzNzv2Zm5r4AAIA/MzNzv2Zm5r4AAIA/MzNzv83MDL8AAIA/MzNzv83MDL8AAIA/MzNzv83MDL8AAIA/MzNzv83MDL+kcL0/MzNzP83MDL+kcL0/MzNzP83MDL+kcL0/MzNzP2Zm5r6kcL0/MzNzP2Zm5r6kcL0/MzNzP2Zm5r6kcL0/MzNzP2Zm5r6kcL0/MzNzv2Zm5r6kcL0/MzNzv2Zm5r6kcL0/MzNzv83MDL+kcL0/MzNzv83MDL+kcL0/MzNzv83MDL+kcL0/MzNzv8P1KMAAAIA/MzNzP8P1KMAAAIA/MzNzP8P1KMAAAIA/MzNzP7geJcAAAIA/MzNzP7geJcAAAIA/MzNzP7geJcAAAIA/MzNzP7geJcAAAIA/MzNzv7geJcAAAIA/MzNzv7geJcAAAIA/MzNzv8P1KMAAAIA/MzNzv8P1KMAAAIA/MzNzv8P1KMAAAIA/MzNzv8P1KMAAAMA/MzNzP8P1KMAAAMA/MzNzP8P1KMAAAMA/MzNzP7geJcAAAMA/MzNzP7geJcAAAMA/MzNzP7geJcAAAMA/MzNzP7geJcAAAMA/MzNzv7geJcAAAMA/MzNzv7geJcAAAMA/MzNzv8P1KMAAAMA/MzNzv8P1KMAAAMA/MzNzv8P1KMAAAMA/MzNzvwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAMXAfT87YAe+AAAAAAAAAAAAAAAAAACAP5jcXj8W8fs+AAAAAMXAfT87YAe+AAAAAAAAAAAAAAAAAACAP+8pVD0HqH8/AAAAAJjcXj8W8fs+AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAO8pVD0HqH8/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAMXAfT87YAe+AAAAAAAAAAAAAAAAAACAv5jcXj8W8fs+AAAAAMXAfT87YAe+AAAAAAAAAAAAAAAAAACAv+8pVD0HqH8/AAAAAJjcXj8W8fs+AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAO8pVD0HqH8/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAALoNYT8HBvQ+AAAAAAAAAAAAAAAAAACAP1IeKT9IL0A/AAAAALoNYT8HBvQ+AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAFIeKT9IL0A/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAEhRUL9oyxQ/AAAAAAAAAAAAAAAAAACAP0hRUL9oyxQ/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAALoNYT8HBvQ+AAAAAAAAAAAAAAAAAACAv1IeKT9IL0A/AAAAALoNYT8HBvQ+AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAFIeKT9IL0A/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAEhRUL9oyxQ/AAAAAAAAAAAAAAAAAACAv0hRUL9oyxQ/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAA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AACAPzoQcL+e07E+AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAv9SSKD+tqUA/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAANSSKD+tqUA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAADoQcL+e07E+AAAAAAAAAAAAAAAAAACAvzoQcL+e07E+AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAP9SSKD+tqUA/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAANSSKD+tqUA/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAADoQcL+e07E+AAAAAAAAAAAAAAAAAACAPzoQcL+e07E+AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAv9SSKD+tqUA/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAANSSKD+tqUA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAADoQcL+e07E+AAAAAAAAAAAAAAAAAACAvzoQcL+e07E+AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAwAGAAAABgAJABUAEgAPABUADwAMAAEADQAQAAEAEAAEAAUAEQATAAUAEwAHAAgAFAAWAAgAFgAKAAsAFwAOAAsADgACACcAGAAbABsAHgAhACEAJAAnABsAIQAnACoAOQA2ADYAMwAwADAALQAqADYAMAAqABkAKwAuABkALgAcAB0ALwAyAB0AMgAgAB8AMQA1AB8ANQAjACIANAA3ACIANwAlACYAOAA6ACYAOgAoACkAOwAsACkALAAaAEsAPAA/AD8AQgBFAEUASABLAD8ARQBLAE4AXQBaAFoAVwBUAFQAUQBOAFoAVABOAD0ATwBSAD0AUgBAAEEAUwBWAEEAVgBEAEMAVQBZAEMAWQBHAEYAWABbAEYAWwBJAEoAXABeAEoAXgBMAE0AXwBQAE0AUAA+AGEAagBnAGEAZwBkAG0AcABzAG0AcwB2AGAAYwBvAGAAbwBsAGUAaAB0AGUAdABxAGYAaQB1AGYAdQByAGsAYgBuAGsAbgB3AHkAggB/AHkAfwB8AIUAiACLAIUAiwCOAHgAewCHAHgAhwCEAH0AgACMAH0AjACJAH4AgQCNAH4AjQCKAIMAegCGAIMAhgCPAJEAmgCXAJEAlwCUAJ0AoACjAJ0AowCmAJAAkwCfAJAAnwCcAJUAmACkAJUApAChAJYAmQClAJYApQCiAJsAkgCeAJsAngCnAKkAsgCvAKkArwCsALUAuAC7ALUAuwC+AKgAqwC3AKgAtwC0AK0AsAC8AK0AvAC5AK4AsQC9AK4AvQC6ALMAqgC2ALMAtgC/AMEAygDHAMEAxwDEAM0A0ADTAM0A0wDWAMAAwwDPAMAAzwDMAMUAyADUAMUA1ADRAMYAyQDVAMYA1QDSAMsAwgDOAMsAzgDXANkA4gDfANkA3wDcAOUA6ADrAOUA6wDuANgA2wDnANgA5wDkAN0A4ADsAN0A7ADpAN4A4QDtAN4A7QDqAOMA2gDmAOMA5gDvAOxRmL8fhes+w/Uov+xRmL8fhes+w/Uov+xRmL8fhes+w/Uov+xRmL8fhes+SOF6v+xRmL8fhes+SOF6v+xRmL8fhes+SOF6v/Pem79KCR4/w/Uov/Pem79KCR4/w/Uov/Pem79KCR4/w/Uov/Pem79KCR4/SOF6v/Pem79KCR4/SOF6v/Pem79KCR4/SOF6v2YYpr9ldEE/w/Uov2YYpr9ldEE/w/Uov2YYpr9ldEE/w/Uov2YYpr9ldEE/SOF6v2YYpr9ldEE/SOF6v2YYpr9ldEE/SOF6v4/Ctb8/vls/w/Uov4/Ctb8/vls/w/Uov4/Ctb8/vls/w/Uov4/Ctb8/vls/SOF6v4/Ctb8/vls/SOF6v4/Ctb8/vls/SOF6v8H5yL8gu2k/w/Uov8H5yL8gu2k/w/Uov8H5yL8gu2k/w/Uov8H5yL8gu2k/SOF6v8H5yL8gu2k/SOF6v8H5yL8gu2k/SOF6v6Zs3b8gu2k/w/Uov6Zs3b8gu2k/w/Uov6Zs3b8gu2k/w/Uov6Zs3b8gu2k/SOF6v6Zs3b8gu2k/SOF6v6Zs3b8gu2k/SOF6v9ej8L8/vls/w/Uov9ej8L8/vls/w/Uov9ej8L8/vls/w/Uov9ej8L8/vls/SOF6v9ej8L8/vls/SOF6v9ej8L8/vls/SOF6vwAnAMBldEE/w/UovwAnAMBldEE/w/UovwAnAMBldEE/w/UovwAnAMBldEE/SOF6vwAnAMBldEE/SOF6vwAnAMBldEE/SOF6v7pDBcBKCR4/w/Uov7pDBcBKCR4/w/Uov7pDBcBKCR4/w/Uov7pDBcBKCR4/SOF6v7pDBcBKCR4/SOF6v7pDBcBKCR4/SOF6vz0KB8Afhes+w/Uovz0KB8Afhes+w/Uovz0KB8Afhes+w/Uovz0KB8Afhes+SOF6vz0KB8Afhes+SOF6vz0KB8Afhes+SOF6v7pDBcCp95o+w/Uov7pDBcCp95o+w/Uov7pDBcCp95o+w/Uov7pDBcCp95o+SOF6v7pDBcCp95o+SOF6v7pDBcCp95o+SOF6vwAnAMDmQig+w/UovwAnAMDmQig+w/UovwAnAMDmQig+w/UovwAnAMDmQig+SOF6vwAnAMDmQig+SOF6vwAnAMDmQig+SOF6v9ej8L/5bXw9w/Uov9ej8L/5bXw9w/Uov9ej8L/5bXw9w/Uov9ej8L/5bXw9SOF6v9ej8L/5bXw9SOF6v9ej8L/5bXw9SOF6v6Zs3b87/+Q7w/Uov6Zs3b87/+Q7w/Uov6Zs3b87/+Q7w/Uov6Zs3b87/+Q7SOF6v6Zs3b87/+Q7SOF6v6Zs3b87/+Q7SOF6v8H5yL87/+Q7w/Uov8H5yL87/+Q7w/Uov8H5yL87/+Q7w/Uov8H5yL87/+Q7SOF6v8H5yL87/+Q7SOF6v8H5yL87/+Q7SOF6v4/Ctb/5bXw9w/Uov4/Ctb/5bXw9w/Uov4/Ctb/5bXw9w/Uov4/Ctb/5bXw9SOF6v4/Ctb/5bXw9SOF6v4/Ctb/5bXw9SOF6v2YYpr/mQig+w/Uov2YYpr/mQig+w/Uov2YYpr/mQig+w/Uov2YYpr/mQig+SOF6v2YYpr/mQig+SOF6v2YYpr/mQig+SOF6v/Pem7+p95o+w/Uov/Pem7+p95o+w/Uov/Pem7+p95o+w/Uov/Pem7+p95o+SOF6v/Pem7+p95o+SOF6v/Pem7+p95o+SOF6vzMz078fhes+w/UovzMz078fhes+SOF6v+xRmL8fhes+SOF6P+xRmL8fhes+SOF6P+xRmL8fhes+SOF6P+xRmL8fhes+w/UoP+xRmL8fhes+w/UoP+xRmL8fhes+w/UoP/Pem79KCR4/SOF6P/Pem79KCR4/SOF6P/Pem79KCR4/SOF6P/Pem79KCR4/w/UoP/Pem79KCR4/w/UoP/Pem79KCR4/w/UoP2YYpr9ldEE/SOF6P2YYpr9ldEE/SOF6P2YYpr9ldEE/SOF6P2YYpr9ldEE/w/UoP2YYpr9ldEE/w/UoP2YYpr9ldEE/w/UoP4/Ctb8/vls/SOF6P4/Ctb8/vls/SOF6P4/Ctb8/vls/SOF6P4/Ctb8/vls/w/UoP4/Ctb8/vls/w/UoP4/Ctb8/vls/w/UoP8H5yL8gu2k/SOF6P8H5yL8gu2k/SOF6P8H5yL8gu2k/SOF6P8H5yL8gu2k/w/UoP8H5yL8gu2k/w/UoP8H5yL8gu2k/w/UoP6Zs3b8gu2k/SOF6P6Zs3b8gu2k/SOF6P6Zs3b8gu2k/SOF6P6Zs3b8gu2k/w/UoP6Zs3b8gu2k/w/UoP6Zs3b8gu2k/w/UoP9ej8L8/vls/SOF6P9ej8L8/vls/SOF6P9ej8L8/vls/SOF6P9ej8L8/vls/w/UoP9ej8L8/vls/w/UoP9ej8L8/vls/w/UoPwAnAMBldEE/SOF6PwAnAMBldEE/SOF6PwAnAMBldEE/SOF6PwAnAMBldEE/w/UoPwAnAMBldEE/w/UoPwAnAMBldEE/w/UoP7pDBcBKCR4/SOF6P7pDBcBKCR4/SOF6P7pDBcBKCR4/SOF6P7pDBcBKCR4/w/UoP7pDBcBKCR4/w/UoP7pDBcBKCR4/w/UoPz0KB8Afhes+SOF6Pz0KB8Afhes+SOF6Pz0KB8Afhes+SOF6Pz0KB8Afhes+w/UoPz0KB8Afhes+w/UoPz0KB8Afhes+w/UoP7pDBcCp95o+SOF6P7pDBcCp95o+SOF6P7pDBcCp95o+SOF6P7pDBcCp95o+w/UoP7pDBcCp95o+w/UoP7pDBcCp95o+w/UoPwAnAMDmQig+SOF6PwAnAMDmQig+SOF6PwAnAMDmQig+SOF6PwAnAMDmQig+w/UoPwAnAMDmQig+w/UoPwAnAMDmQig+w/UoP9ej8L/5bXw9SOF6P9ej8L/5bXw9SOF6P9ej8L/5bXw9SOF6P9ej8L/5bXw9w/UoP9ej8L/5bXw9w/UoP9ej8L/5bXw9w/UoP6Zs3b87/+Q7SOF6P6Zs3b87/+Q7SOF6P6Zs3b87/+Q7SOF6P6Zs3b87/+Q7w/UoP6Zs3b87/+Q7w/UoP6Zs3b87/+Q7w/UoP8H5yL87/+Q7SOF6P8H5yL87/+Q7SOF6P8H5yL87/+Q7SOF6P8H5yL87/+Q7w/UoP8H5yL87/+Q7w/UoP8H5yL87/+Q7w/UoP4/Ctb/5bXw9SOF6P4/Ctb/5bXw9SOF6P4/Ctb/5bXw9SOF6P4/Ctb/5bXw9w/UoP4/Ctb/5bXw9w/UoP4/Ctb/5bXw9w/UoP2YYpr/mQig+SOF6P2YYpr/mQig+SOF6P2YYpr/mQig+SOF6P2YYpr/mQig+w/UoP2YYpr/mQig+w/UoP2YYpr/mQig+w/UoP/Pem7+p95o+SOF6P/Pem7+p95o+SOF6P/Pem7+p95o+SOF6P/Pem7+p95o+w/UoP/Pem7+p95o+w/UoP/Pem7+p95o+w/UoPzMz078fhes+SOF6PzMz078fhes+w/UoP6RwDUAfhes+w/Uov6RwDUAfhes+w/Uov6RwDUAfhes+w/Uov6RwDUAfhes+SOF6v6RwDUAfhes+SOF6v6RwDUAfhes+SOF6vyCqC0BKCR4/w/UovyCqC0BKCR4/w/UovyCqC0BKCR4/w/UovyCqC0BKCR4/SOF6vyCqC0BKCR4/SOF6vyCqC0BKCR4/SOF6v2eNBkBldEE/w/Uov2eNBkBldEE/w/Uov2eNBkBldEE/w/Uov2eNBkBldEE/SOF6v2eNBkBldEE/SOF6v2eNBkBldEE/SOF6v6Rw/T8/vls/w/Uov6Rw/T8/vls/w/Uov6Rw/T8/vls/w/Uov6Rw/T8/vls/SOF6v6Rw/T8/vls/SOF6v6Rw/T8/vls/SOF6v3M56j8gu2k/w/Uov3M56j8gu2k/w/Uov3M56j8gu2k/w/Uov3M56j8gu2k/SOF6v3M56j8gu2k/SOF6v3M56j8gu2k/SOF6v43G1T8gu2k/w/Uov43G1T8gu2k/w/Uov43G1T8gu2k/w/Uov43G1T8gu2k/SOF6v43G1T8gu2k/SOF6v43G1T8gu2k/SOF6v1yPwj8/vls/w/Uov1yPwj8/vls/w/Uov1yPwj8/vls/w/Uov1yPwj8/vls/SOF6v1yPwj8/vls/SOF6v1yPwj8/vls/SOF6vzPlsj9ldEE/w/UovzPlsj9ldEE/w/UovzPlsj9ldEE/w/UovzPlsj9ldEE/SOF6vzPlsj9ldEE/SOF6vzPlsj9ldEE/SOF6v8CrqD9KCR4/w/Uov8CrqD9KCR4/w/Uov8CrqD9KCR4/w/Uov8CrqD9KCR4/SOF6v8CrqD9KCR4/SOF6v8CrqD9KCR4/SOF6v7gepT8fhes+w/Uov7gepT8fhes+w/Uov7gepT8fhes+w/Uov7gepT8fhes+SOF6v7gepT8fhes+SOF6v7gepT8fhes+SOF6v8CrqD+p95o+w/Uov8CrqD+p95o+w/Uov8CrqD+p95o+w/Uov8CrqD+p95o+SOF6v8CrqD+p95o+SOF6v8CrqD+p95o+SOF6vzPlsj/mQig+w/UovzPlsj/mQig+w/UovzPlsj/mQig+w/UovzPlsj/mQig+SOF6vzPlsj/mQig+SOF6vzPlsj/mQig+SOF6v1yPwj/5bXw9w/Uov1yPwj/5bXw9w/Uov1yPwj/5bXw9w/Uov1yPwj/5bXw9SOF6v1yPwj/5bXw9SOF6v1yPwj/5bXw9SOF6v43G1T87/+Q7w/Uov43G1T87/+Q7w/Uov43G1T87/+Q7w/Uov43G1T87/+Q7SOF6v43G1T87/+Q7SOF6v43G1T87/+Q7SOF6v3M56j87/+Q7w/Uov3M56j87/+Q7w/Uov3M56j87/+Q7w/Uov3M56j87/+Q7SOF6v3M56j87/+Q7SOF6v3M56j87/+Q7SOF6v6Rw/T/5bXw9w/Uov6Rw/T/5bXw9w/Uov6Rw/T/5bXw9w/Uov6Rw/T/5bXw9SOF6v6Rw/T/5bXw9SOF6v6Rw/T/5bXw9SOF6v2eNBkDmQig+w/Uov2eNBkDmQig+w/Uov2eNBkDmQig+w/Uov2eNBkDmQig+SOF6v2eNBkDmQig+SOF6v2eNBkDmQig+SOF6vyCqC0Cp95o+w/UovyCqC0Cp95o+w/UovyCqC0Cp95o+w/UovyCqC0Cp95o+SOF6vyCqC0Cp95o+SOF6vyCqC0Cp95o+SOF6vwAA4D8fhes+w/UovwAA4D8fhes+SOF6v6RwDUAfhes+SOF6P6RwDUAfhes+SOF6P6RwDUAfhes+SOF6P6RwDUAfhes+w/UoP6RwDUAfhes+w/UoP6RwDUAfhes+w/UoPyCqC0BKCR4/SOF6PyCqC0BKCR4/SOF6PyCqC0BKCR4/SOF6PyCqC0BKCR4/w/UoPyCqC0BKCR4/w/UoPyCqC0BKCR4/w/UoP2eNBkBldEE/SOF6P2eNBkBldEE/SOF6P2eNBkBldEE/SOF6P2eNBkBldEE/w/UoP2eNBkBldEE/w/UoP2eNBkBldEE/w/UoP6Rw/T8/vls/SOF6P6Rw/T8/vls/SOF6P6Rw/T8/vls/SOF6P6Rw/T8/vls/w/UoP6Rw/T8/vls/w/UoP6Rw/T8/vls/w/UoP3M56j8gu2k/SOF6P3M56j8gu2k/SOF6P3M56j8gu2k/SOF6P3M56j8gu2k/w/UoP3M56j8gu2k/w/UoP3M56j8gu2k/w/UoP43G1T8gu2k/SOF6P43G1T8gu2k/SOF6P43G1T8gu2k/SOF6P43G1T8gu2k/w/UoP43G1T8gu2k/w/UoP43G1T8gu2k/w/UoP1yPwj8/vls/SOF6P1yPwj8/vls/SOF6P1yPwj8/vls/SOF6P1yPwj8/vls/w/UoP1yPwj8/vls/w/UoP1yPwj8/vls/w/UoPzPlsj9ldEE/SOF6PzPlsj9ldEE/SOF6PzPlsj9ldEE/SOF6PzPlsj9ldEE/w/UoPzPlsj9ldEE/w/UoPzPlsj9ldEE/w/UoP8CrqD9KCR4/SOF6P8CrqD9KCR4/SOF6P8CrqD9KCR4/SOF6P8CrqD9KCR4/w/UoP8CrqD9KCR4/w/UoP8CrqD9KCR4/w/UoP7gepT8fhes+SOF6P7gepT8fhes+SOF6P7gepT8fhes+SOF6P7gepT8fhes+w/UoP7gepT8fhes+w/UoP7gepT8fhes+w/UoP8CrqD+p95o+SOF6P8CrqD+p95o+SOF6P8CrqD+p95o+SOF6P8CrqD+p95o+w/UoP8CrqD+p95o+w/UoP8CrqD+p95o+w/UoPzPlsj/mQig+SOF6PzPlsj/mQig+SOF6PzPlsj/mQig+SOF6PzPlsj/mQig+w/UoPzPlsj/mQig+w/UoPzPlsj/mQig+w/UoP1yPwj/5bXw9SOF6P1yPwj/5bXw9SOF6P1yPwj/5bXw9SOF6P1yPwj/5bXw9w/UoP1yPwj/5bXw9w/UoP1yPwj/5bXw9w/UoP43G1T87/+Q7SOF6P43G1T87/+Q7SOF6P43G1T87/+Q7SOF6P43G1T87/+Q7w/UoP43G1T87/+Q7w/UoP43G1T87/+Q7w/UoP3M56j87/+Q7SOF6P3M56j87/+Q7SOF6P3M56j87/+Q7SOF6P3M56j87/+Q7w/UoP3M56j87/+Q7w/UoP3M56j87/+Q7w/UoP6Rw/T/5bXw9SOF6P6Rw/T/5bXw9SOF6P6Rw/T/5bXw9SOF6P6Rw/T/5bXw9w/UoP6Rw/T/5bXw9w/UoP6Rw/T/5bXw9w/UoP2eNBkDmQig+SOF6P2eNBkDmQig+SOF6P2eNBkDmQig+SOF6P2eNBkDmQig+w/UoP2eNBkDmQig+w/UoP2eNBkDmQig+w/UoPyCqC0Cp95o+SOF6PyCqC0Cp95o+SOF6PyCqC0Cp95o+SOF6PyCqC0Cp95o+w/UoPyCqC0Cp95o+w/UoPyCqC0Cp95o+w/UoPwAA4D8fhes+SOF6PwAA4D8fhes+w/UoPwAAAAAAAAAAAACAP+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAP22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAv22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAP6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAP6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAP6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAP22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAv22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAP+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAP6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAv6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAP6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAP22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAP+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAP22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAv22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAP6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAP6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAP6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAP22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAv22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAP+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAP6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAv6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAP6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAP22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAP+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAP22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAv22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAP6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAP6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAP6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAP22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAv22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAP+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAP6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAv6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAP6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAP22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAP+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAP22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAv22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAP6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAP6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAP6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAP22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAv22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAP+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAP6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAv6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAP6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAP22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwEABAALAAEACwAIAGwAAAAGAG0ACQADAAcACgARAAcAEQAOAGwABgAMAG0ADwAJAA0AEAAXAA0AFwAUAGwADAASAG0AFQAPABMAFgAdABMAHQAaAGwAEgAYAG0AGwAVABkAHAAiABkAIgAfAGwAGAAeAG0AIQAbACAAIwAoACAAKAAlAGwAHgAkAG0AJwAhACYAKQAuACYALgArAGwAJAAqAG0ALQAnACwALwA0ACwANAAxAGwAKgAwAG0AMwAtADIANQA6ADIAOgA3AGwAMAA2AG0AOQAzADgAOwBBADgAQQA+AGwANgA8AG0APwA5AD0AQABHAD0ARwBEAGwAPABCAG0ARQA/AEMARgBNAEMATQBKAGwAQgBIAG0ASwBFAEkATABTAEkAUwBQAGwASABOAG0AUQBLAE8AUgBYAE8AWABVAGwATgBUAG0AVwBRAFYAWQBeAFYAXgBbAGwAVABaAG0AXQBXAFwAXwBkAFwAZABhAGwAWgBgAG0AYwBdAGIAZQBqAGIAagBnAGwAYABmAG0AaQBjAGgAawAFAGgABQACAGwAZgAAAG0AAwBpAG8AcgB5AG8AeQB2ANoAbgB0ANsAdwBxAHUAeAB/AHUAfwB8ANoAdAB6ANsAfQB3AHsAfgCFAHsAhQCCANoAegCAANsAgwB9AIEAhACLAIEAiwCIANoAgACGANsAiQCDAIcAigCQAIcAkACNANoAhgCMANsAjwCJAI4AkQCWAI4AlgCTANoAjACSANsAlQCPAJQAlwCcAJQAnACZANoAkgCYANsAmwCVAJoAnQCiAJoAogCfANoAmACeANsAoQCbAKAAowCoAKAAqAClANoAngCkANsApwChAKYAqQCvAKYArwCsANoApACqANsArQCnAKsArgC1AKsAtQCyANoAqgCwANsAswCtALEAtAC7ALEAuwC4ANoAsAC2ANsAuQCzALcAugDBALcAwQC+ANoAtgC8ANsAvwC5AL0AwADGAL0AxgDDANoAvADCANsAxQC/AMQAxwDMAMQAzADJANoAwgDIANsAywDFAMoAzQDSAMoA0gDPANoAyADOANsA0QDLANAA0wDYANAA2ADVANoAzgDUANsA1wDRANYA2QBzANYAcwBwANoA1ABuANsAcQDXAN0A4ADnAN0A5wDkAEgB3ADiAEkB5QDfAOMA5gDtAOMA7QDqAEgB4gDoAEkB6wDlAOkA7ADzAOkA8wDwAEgB6ADuAEkB8QDrAO8A8gD5AO8A+QD2AEgB7gD0AEkB9wDxAPUA+AD+APUA/gD7AEgB9AD6AEkB/QD3APwA/wAEAfwABAEBAUgB+gAAAUkBAwH9AAIBBQEKAQIBCgEHAUgBAAEGAUkBCQEDAQgBCwEQAQgBEAENAUgBBgEMAUkBDwEJAQ4BEQEWAQ4BFgETAUgBDAESAUkBFQEPARQBFwEdARQBHQEaAUgBEgEYAUkBGwEVARkBHAEjARkBIwEgAUgBGAEeAUkBIQEbAR8BIgEpAR8BKQEmAUgBHgEkAUkBJwEhASUBKAEvASUBLwEsAUgBJAEqAUkBLQEnASsBLgE0ASsBNAExAUgBKgEwAUkBMwEtATIBNQE6ATIBOgE3AUgBMAE2AUkBOQEzATgBOwFAATgBQAE9AUgBNgE8AUkBPwE5AT4BQQFGAT4BRgFDAUgBPAFCAUkBRQE/AUQBRwHhAEQB4QDeAEgBQgHcAEkB3wBFAUsBTgFVAUsBVQFSAbYBSgFQAbcBUwFNAVEBVAFbAVEBWwFYAbYBUAFWAbcBWQFTAVcBWgFhAVcBYQFeAbYBVgFcAbcBXwFZAV0BYAFnAV0BZwFkAbYBXAFiAbcBZQFfAWMBZgFsAWMBbAFpAbYBYgFoAbcBawFlAWoBbQFyAWoBcgFvAbYBaAFuAbcBcQFrAXABcwF4AXABeAF1AbYBbgF0AbcBdwFxAXYBeQF+AXYBfgF7AbYBdAF6AbcBfQF3AXwBfwGEAXwBhAGBAbYBegGAAbcBgwF9AYIBhQGLAYIBiwGIAbYBgAGGAbcBiQGDAYcBigGRAYcBkQGOAbYBhgGMAbcBjwGJAY0BkAGXAY0BlwGUAbYBjAGSAbcBlQGPAZMBlgGdAZMBnQGaAbYBkgGYAbcBmwGVAZkBnAGiAZkBogGfAbYBmAGeAbcBoQGbAaABowGoAaABqAGlAbYBngGkAbcBpwGhAaYBqQGuAaYBrgGrAbYBpAGqAbcBrQGnAawBrwG0AawBtAGxAbYBqgGwAbcBswGtAbIBtQFPAbIBTwFMAbYBsAFKAbcBTQGzAT0Kt78fhes+exQuvz0Kt78fhes+exQuvz0Kt78fhes+exQuvz0Kt78fhes+AACAvz0Kt78fhes+AACAvz0Kt78fhes+AACAvw/Qur+F6xE/exQuvw/Qur+F6xE/exQuvw/Qur+F6xE/exQuvw/Qur+F6xE/AACAvw/Qur+F6xE/AACAvw/Qur+F6xE/AACAv7gexb/YiCY/exQuv7gexb/YiCY/exQuv7gexb/YiCY/exQuv7gexb/YiCY/AACAv7gexb/YiCY/AACAv7gexb/YiCY/AACAvzMz0797FC4/exQuvzMz0797FC4/exQuvzMz0797FC4/exQuvzMz0797FC4/AACAvzMz0797FC4/AACAvzMz0797FC4/AACAv65H4b/YiCY/exQuv65H4b/YiCY/exQuv65H4b/YiCY/exQuv65H4b/YiCY/AACAv65H4b/YiCY/AACAv65H4b/YiCY/AACAv1iW67+F6xE/exQuv1iW67+F6xE/exQuv1iW67+F6xE/exQuv1iW67+F6xE/AACAv1iW67+F6xE/AACAv1iW67+F6xE/AACAvylc778fhes+exQuvylc778fhes+exQuvylc778fhes+exQuvylc778fhes+AACAvylc778fhes+AACAvylc778fhes+AACAv1iW678zM7M+exQuv1iW678zM7M+exQuv1iW678zM7M+exQuv1iW678zM7M+AACAv1iW678zM7M+AACAv1iW678zM7M+AACAv65H4b+N+Ik+exQuv65H4b+N+Ik+exQuv65H4b+N+Ik+exQuv65H4b+N+Ik+AACAv65H4b+N+Ik+AACAv65H4b+N+Ik+AACAvzMz07+PwnU+exQuvzMz07+PwnU+exQuvzMz07+PwnU+exQuvzMz07+PwnU+AACAvzMz07+PwnU+AACAvzMz07+PwnU+AACAv7gexb+N+Ik+exQuv7gexb+N+Ik+exQuv7gexb+N+Ik+exQuv7gexb+N+Ik+AACAv7gexb+N+Ik+AACAv7gexb+N+Ik+AACAvw/Qur8zM7M+exQuvw/Qur8zM7M+exQuvw/Qur8zM7M+exQuvw/Qur8zM7M+AACAvw/Qur8zM7M+AACAvw/Qur8zM7M+AACAvzMz078fhes+exQuvzMz078fhes+AACAvz0Kt78fhes+AACAPz0Kt78fhes+AACAPz0Kt78fhes+AACAPz0Kt78fhes+exQuPz0Kt78fhes+exQuPz0Kt78fhes+exQuPw/Qur+F6xE/AACAPw/Qur+F6xE/AACAPw/Qur+F6xE/AACAPw/Qur+F6xE/exQuPw/Qur+F6xE/exQuPw/Qur+F6xE/exQuP7gexb/YiCY/AACAP7gexb/YiCY/AACAP7gexb/YiCY/AACAP7gexb/YiCY/exQuP7gexb/YiCY/exQuP7gexb/YiCY/exQuPzMz0797FC4/AACAPzMz0797FC4/AACAPzMz0797FC4/AACAPzMz0797FC4/exQuPzMz0797FC4/exQuPzMz0797FC4/exQuP65H4b/YiCY/AACAP65H4b/YiCY/AACAP65H4b/YiCY/AACAP65H4b/YiCY/exQuP65H4b/YiCY/exQuP65H4b/YiCY/exQuP1iW67+F6xE/AACAP1iW67+F6xE/AACAP1iW67+F6xE/AACAP1iW67+F6xE/exQuP1iW67+F6xE/exQuP1iW67+F6xE/exQuPylc778fhes+AACAPylc778fhes+AACAPylc778fhes+AACAPylc778fhes+exQuPylc778fhes+exQuPylc778fhes+exQuP1iW678zM7M+AACAP1iW678zM7M+AACAP1iW678zM7M+AACAP1iW678zM7M+exQuP1iW678zM7M+exQuP1iW678zM7M+exQuP65H4b+N+Ik+AACAP65H4b+N+Ik+AACAP65H4b+N+Ik+AACAP65H4b+N+Ik+exQuP65H4b+N+Ik+exQuP65H4b+N+Ik+exQuPzMz07+PwnU+AACAPzMz07+PwnU+AACAPzMz07+PwnU+AACAPzMz07+PwnU+exQuPzMz07+PwnU+exQuPzMz07+PwnU+exQuP7gexb+N+Ik+AACAP7gexb+N+Ik+AACAP7gexb+N+Ik+AACAP7gexb+N+Ik+exQuP7gexb+N+Ik+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AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAP3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAv3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAP/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAv/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAPx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAvx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAv/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAv3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAP/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAv/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAPx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAvx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAP/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAv/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAP3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAv3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAP/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAv/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAPx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAvx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAv/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAv3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAP/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAv/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAPx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAvx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAP/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAv/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAP3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAv3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAP/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAv/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAPx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAvx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAv/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAv3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAP/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAv/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAPx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAvx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAP/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAv/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAP3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAv3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAP/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAv/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAPx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAvx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAv/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAv3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAP/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAv/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAA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AAAAv1yPMkBmZoY/hetRv1yPMkBmZoY/hetRv1yPMkBmZoY/hetRv83MLEBmZoY/hetRv83MLEBmZoY/hetRv83MLEBmZoY/hetRv0jhKsAUrkc/MzMzv0jhKsAUrkc/MzMzv0jhKsAUrkc/MzMzv2ZmJsAUrkc/MzMzv2ZmJsAUrkc/MzMzv2ZmJsAUrkc/MzMzv2ZmJsAUrkc/ZmZmv2ZmJsAUrkc/ZmZmv2ZmJsAUrkc/ZmZmv0jhKsAUrkc/ZmZmv0jhKsAUrkc/ZmZmv0jhKsAUrkc/ZmZmv0jhKsBmZmY/MzMzv0jhKsBmZmY/MzMzv0jhKsBmZmY/MzMzv2ZmJsBmZmY/MzMzv2ZmJsBmZmY/MzMzv2ZmJsBmZmY/MzMzv2ZmJsBmZmY/ZmZmv2ZmJsBmZmY/ZmZmv2ZmJsBmZmY/ZmZmv0jhKsBmZmY/ZmZmv0jhKsBmZmY/ZmZmv0jhKsBmZmY/ZmZmv83MLECamVk/hetRP83MLECamVk/hetRP83MLECamVk/hetRP1yPMkCamVk/hetRP1yPMkCamVk/hetRP1yPMkCamVk/hetRP1yPMkCamVk/AAAAP1yPMkCamVk/AAAAP1yPMkCamVk/AAAAP83MLECamVk/AAAAP83MLECamVk/AAAAP83MLECamVk/AAAAP83MLEBmZoY/hetRP83MLEBmZoY/hetRP83MLEBmZoY/hetRP1yPMkBmZoY/hetRP1yPMkBmZoY/hetRP1yPMkBmZoY/hetRP1yPMkBmZoY/AAAAP1yPMkBmZoY/AAAAP1yPMkBmZoY/AAAAP83MLEBmZoY/AAAAP83MLEBmZoY/AAAAP83MLEBmZoY/AAAAP0jhKsAUrkc/ZmZmP0jhKsAUrkc/ZmZmP0jhKsAUrkc/ZmZmP2ZmJsAUrkc/ZmZmP2ZmJsAUrkc/ZmZmP2ZmJsAUrkc/ZmZmP2ZmJsAUrkc/MzMzP2ZmJsAUrkc/MzMzP2ZmJsAUrkc/MzMzP0jhKsAUrkc/MzMzP0jhKsAUrkc/MzMzP0jhKsAUrkc/MzMzP0jhKsBmZmY/ZmZmP0jhKsBmZmY/ZmZmP0jhKsBmZmY/ZmZmP2ZmJsBmZmY/ZmZmP2ZmJsBmZmY/ZmZmP2ZmJsBmZmY/ZmZmP2ZmJsBmZmY/MzMzP2ZmJsBmZmY/MzMzP2ZmJsBmZmY/MzMzP0jhKsBmZmY/MzMzP0jhKsBmZmY/MzMzP0jhKsBmZmY/MzMzPwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAEACgAHAAEABwAEAA0AEAATAA0AEwAWAAAAAwAPAAAADwAMAAUACAAUAAUAFAARAAYACQAVAAYAFQASAAsAAgAOAAsADgAXABkAIgAfABkAHwAcACUAKAArACUAKwAuABgAGwAnABgAJwAkAB0AIAAsAB0ALAApAB4AIQAtAB4ALQAqACMAGgAmACMAJgAvADEAOgA3ADEANwA0AD0AQABDAD0AQwBGADAAMwA/ADAAPwA8ADUAOABEADUARABBADYAOQBFADYARQBCADsAMgA+ADsAPgBHAEkAUgBPAEkATwBMAFUAWABbAFUAWwBeAEgASwBXAEgAVwBUAE0AUABcAE0AXABZAE4AUQBdAE4AXQBaAFMASgBWAFMAVgBfAA==";var Gh="data:application/octet-stream;base64,Z2xURgIAAADUJgEA6AYAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NS4yLjQxIiwidmVyc2lvbiI6IjIuMCJ9LCJzY2VuZSI6MCwic2NlbmVzIjpbeyJuYW1lIjoiU2NlbmUiLCJub2RlcyI6WzAsMV19XSwibm9kZXMiOlt7Im1lc2giOjAsIm5hbWUiOiJXaW5kQm9keVoifSx7Im1lc2giOjEsIm5hbWUiOiJXaW5kUm90b3JaIiwidHJhbnNsYXRpb24iOlswLDkuNSwwLjc1XX1dLCJtYXRlcmlhbHMiOlt7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiZGFyayIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wNTAwMDAwMDA3NDUwNTgwNiwwLjA1MDAwMDAwMDc0NTA1ODA2LDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjgwMDAwMDAxMTkyMDkyOX19XSwibWVzaGVzIjpbeyJuYW1lIjoid19sZWcwX21lc2giLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjF9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJyX2h1Yl9tZXNoIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MywiTk9STUFMIjo0fSwiaW5kaWNlcyI6NSwibWF0ZXJpYWwiOjB9XX1dLCJhY2Nlc3NvcnMiOlt7ImJ1ZmZlclZpZXciOjAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxMzQ0LCJtYXgiOlsxLjQyNjY5OTI4MDczODgzMDYsMTAuMzk5OTk5NjE4NTMwMjczLDEuNDI3NDUyMzI1ODIwOTIyOV0sIm1pbiI6Wy0xLjQyNjgxNDY3NTMzMTExNTcsLTAuMDE4NTcwODk4MTAwNzMzNzU3LC00LjY5OTk5OTgwOTI2NTEzN10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTM0NCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoyMDE2LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjozLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTM4MiwibWF4IjpbMi43MzQ0NjgyMjE2NjQ0Mjg3LDIuNjkzOTgxMTcwNjU0Mjk3LDAuMTcwMDAwMDE2Njg5MzAwNTRdLCJtaW4iOlstMi43MzQ0NjgyMjE2NjQ0Mjg3LC0yLjY5Mzk4MTE3MDY1NDI5NywtMC4xNzAwMDAwMTY2ODkzMDA1NF0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTM4MiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoyMTEyLCJ0eXBlIjoiU0NBTEFSIn1dLCJidWZmZXJWaWV3cyI6W3siYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNjEyOCwiYnl0ZU9mZnNldCI6MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE2MTI4LCJieXRlT2Zmc2V0IjoxNjEyOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjQwMzIsImJ5dGVPZmZzZXQiOjMyMjU2LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTY1ODQsImJ5dGVPZmZzZXQiOjM2Mjg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTY1ODQsImJ5dGVPZmZzZXQiOjUyODcyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NDIyNCwiYnl0ZU9mZnNldCI6Njk0NTYsInRhcmdldCI6MzQ5NjN9XSwiYnVmZmVycyI6W3siYnl0ZUxlbmd0aCI6NzM2ODB9XX0g0B8BAEJJTgBTgqM/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szG7vfTUfr9fsb89Tr99v1+xvz0rx34/ITTEPRJgmDwYeOC8szG7PfTUfj9fsb+9Tr99P1+xv70rx36/ITTEvRJgmLwrx34/ITTEPRJgmDwYeOC8szG7PfTUfj9fsb+9Tr99P1+xv70YeOA8szG7vfTUfr9fsb+9Tr99P1+xv70rx36/ITTEvRJgmLwYeOA8szG7vfTUfr8rx34/ITTEPRJgmDxfsb+9Tr99P1+xv70AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAACwR649AAAAAEgSfz/ddz0/9WQrv3Vvgb3rwiq/0io+vyB8aT2wR649AAAAAEgSfz/rwio/0io+PyB8ab3ddz0/9WQrv3Vvgb3ddz0/9WQrv3Vvgb2wR669AAAAAEgSf7/rwiq/0io+vyB8aT3rwio/0io+PyB8ab3ddz0/9WQrv3Vvgb2wR669AAAAAEgSf7+wR649AAAAAEgSfz/rwiq/0io+vyB8aT3ddz2/9WQrP3VvgT2wR649AAAAAEgSfz/rwio/0io+PyB8ab3ddz2/9WQrP3VvgT2wR669AAAAAEgSf7/rwiq/0io+vyB8aT3ddz2/9WQrP3VvgT3rwio/0io+PyB8ab2wR669AAAAAEgSf7/ddz2/9WQrP3VvgT2wR649AAAAAEgSf7/rwio/0io+vyB8aT3ddz2/9WQrv3Vvgb2wR649AAAAAEgSf7/rwiq/0io+PyB8ab3ddz2/9WQrv3Vvgb3rwio/0io+vyB8aT2wR669AAAAAEgSfz/ddz2/9WQrv3Vvgb2wR669AAAAAEgSfz/rwiq/0io+PyB8ab3ddz2/9WQrv3Vvgb2wR649AAAAAEgSf7/rwio/0io+vyB8aT3ddz0/9WQrP3VvgT2wR649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y5RgPwPGqT2zvTC+AAAAAHQofD/rNV2/2sL1PskIG74AAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAgfGk90io+v+vCKj9IEn8/AAAAALBHrr11b4G99WQrv913Pb9IEn8/AAAAALBHrr0gfGm90io+P+vCKr91b4G99WQrv913Pb8gfGk90io+v+vCKj91b4G99WQrv913Pb9IEn+/AAAAALBHrj0gfGm90io+P+vCKr91b4G99WQrv913Pb9IEn+/AAAAALBHrj0gfGk90io+v+vCKj91b4E99WQrP913PT9IEn8/AAAAALBHrr11b4E99WQrP913PT9IEn8/AAAAALBHrr0gfGm90io+P+vCKr8gfGk90io+v+vCKj91b4E99WQrP913PT9IEn+/AAAAALBHrj11b4E99WQrP913PT8gfGm90io+P+vCKr9IEn+/AAAAALBHrj0gfGk90io+v+vCKr91b4G99WQrv913PT9IEn+/AAAAALBHrr0gfGm90io+P+vCKj91b4G99WQrv913PT9IEn+/AAAAALBHrr0gfGk90io+v+vCKr9IEn8/AAAAALBHrj11b4G99WQrv913PT9IEn8/AAAAALBHrj0gfGm90io+P+vCKj91b4G99WQrv913PT8gfGk90io+v+vCKr91b4E99WQrP913Pb9IEn+/AAAAALBHrr11b4E99WQrP913Pb8gfGm90io+P+vCKj9IEn+/AAAAALBHrr0gfGk90io+v+vCKr91b4E99WQrP913Pb9IEn8/AAAAALBHrj11b4E99WQrP913Pb9IEn8/AAAAALBHrj0gfGm90io+P+vCKj89apo9iXwtv0dCOz/Npn4/AAAAAEnt0b0IVY6930E8v5+QLL/Npn4/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AAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAA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AAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAB1b4E99WQrv913PT8gfGm90io+v+vCKr9IEn+/AAAAALBHrj0gfGk90io+P+vCKj91b4E99WQrv913PT9IEn+/AAAAALBHrj11b4E99WQrv913PT9IEn8/AAAAALBHrr0gfGm90io+v+vCKr8gfGk90io+P+vCKj91b4E99WQrv913PT9IEn8/AAAAALBHrr0gfGm90io+v+vCKr91b4G99WQrP913Pb9IEn+/AAAAALBHrj0gfGk90io+P+vCKj91b4G99WQrP913Pb9IEn+/AAAAALBHrj1IEn8/AAAAALBHrr0gfGm90io+v+vCKr91b4G99WQrP913Pb8gfGk90io+P+vCKj9IEn8/AAAAALBHrr11b4G99WQrP913Pb91b4E99WQrv913Pb9IEn8/AAAAALBHrj0gfGm90io+v+vCKj8gfGk90io+P+vCKr91b4E99WQrv913Pb9IEn8/AAAAALBHrj11b4E99WQrv913Pb8gfGm90io+v+vCKj9IEn+/AAAAALBHrr0gfGk90io+P+vCKr91b4E99WQrv913Pb9IEn+/AAAAALBHrr1IEn8/AAAAALBHrj0gfGm90io+v+vCKj91b4G99WQrP913PT8gfGk90io+P+vCKr9IEn8/AAAAALBHrj11b4G99WQrP913PT8gfGm90io+v+vCKj91b4G99WQrP913PT9IEn+/AAAAALBHrr0gfGk90io+P+vCKr91b4G99WQrP913PT9IEn+/AAAAALBHrr0IVY4930E8v5+QLD89apq9iXwtv0dCO7/Npn6/AAAAAEnt0T0IVY4930E8v5+QLD89apo9iXwtP0dCOz/Npn6/AAAAAEnt0T0IVY4930E8v5+QLD/Npn4/AAAAAEnt0b09apq9iXwtv0dCO78IVY4930E8v5+QLD89apo9iXwtP0dCOz/Npn4/AAAAAEnt0b0IVY6930E8P5+QLL89apq9iXwtv0dCO7/Npn6/AAAAAEnt0T09apo9iXwtP0dCOz8IVY6930E8P5+QLL/Npn6/AAAAAEnt0T3Npn4/AAAAAEnt0b0IVY6930E8P5+QLL89apq9iXwtv0dCO789apo9iXwtP0dCOz/Npn4/AAAAAEnt0b0IVY6930E8P5+QLL8IVY4930E8v5+QLL/Npn4/AAAAAEnt0T09apq9iXwtv0dCOz8IVY4930E8v5+QLL89apo9iXwtP0dCO7/Npn4/AAAAAEnt0T0IVY4930E8v5+QLL89apq9iXwtv0dCOz/Npn6/AAAAAEnt0b0IVY4930E8v5+QLL89apo9iXwtP0dCO7/Npn6/AAAAAEnt0b3Npn4/AAAAAEnt0T0IVY6930E8P5+QLD89apq9iXwtv0dCOz89apo9iXwtP0dCO7/Npn4/AAAAAEnt0T0IVY6930E8P5+QLD8IVY6930E8P5+QLD89apq9iXwtv0dCOz/Npn6/AAAAAEnt0b09apo9iXwtP0dCO78IVY6930E8P5+QLD/Npn6/AAAAAEnt0b372ps9AmROv50yFj/TktS9CXgXv9ipTL//3n2/AAAAAGPJAz772ps9AmROv50yFj/TktQ9CXgXP9ipTD//3n2/AAAAAGPJAz772ps9AmROv50yFj//3n0/AAAAAGPJA77TktS9CXgXv9ipTL/72ps9AmROv50yFj/TktQ9CXgXP9ipTD//3n0/AAAAAGPJA74cD5y9m2NOP1IyFr/TktS9CXgXv9ipTL//3n2/AAAAAGPJAz7TktQ9CXgXP9ipTD8cD5y9m2NOP1IyFr//3n2/AAAAAGPJAz7/3n0/AAAAAGPJA74cD5y9m2NOP1IyFr/TktS9CXgXv9ipTL/TktQ9CXgXP9ipTD//3n0/AAAAAGPJA74cD5y9m2NOP1IyFr/72ps9AmROv50yFr//3n0/AAAAAGPJAz7TktS9CXgXv9ipTD/72ps9AmROv50yFr/TktQ9CXgXP9ipTL//3n0/AAAAAGPJAz772ps9AmROv50yFr/TktS9CXgXv9ipTD//3n2/AAAAAGPJA7772ps9AmROv50yFr/TktQ9CXgXP9ipTL//3n2/AAAAAGPJA77/3n0/AAAAAGPJAz4cD5y9m2NOP1IyFj/TktS9CXgXv9ipTD/TktQ9CXgXP9ipTL//3n0/AAAAAGPJAz4cD5y9m2NOP1IyFj8cD5y9m2NOP1IyFj/TktS9CXgXv9ipTD//3n2/AAAAAGPJA77TktQ9CXgXP9ipTL8cD5y9m2NOP1IyFj//3n2/AAAAAGPJA74Dxqk9y5Rgv8AQ8j7JCBu+2sL1vus1Xb90KHy/AAAAALO9MD4Dxqk9y5Rgv8AQ8j7JCBs+2sL1Pus1XT90KHy/AAAAALO9MD4Dxqk9y5Rgv8AQ8j50KHw/AAAAALO9ML7JCBu+2sL1vus1Xb8Dxqk9y5Rgv8AQ8j7JCBs+2sL1Pus1XT90KHw/AAAAALO9ML4Dxqm9y5RgP8AQ8r7JCBu+2sL1vus1Xb90KHy/AAAAALO9MD7JCBs+2sL1Pus1XT8Dxqm9y5RgP8AQ8r50KHy/AAAAALO9MD50KHw/AAAAALO9ML4Dxqm9y5RgP8AQ8r7JCBu+2sL1vus1Xb/JCBs+2sL1Pus1XT90KHw/AAAAALO9ML4Dxqm9y5RgP8AQ8r4Dxqk9y5Rgv8AQ8r50KHw/AAAAALO9MD7JCBu+2sL1vus1XT8Dxqk9y5Rgv8AQ8r7JCBs+2sL1Pus1Xb90KHw/AAAAALO9MD4Dxqk9y5Rgv8AQ8r7JCBu+2sL1vus1XT90KHy/AAAAALO9ML4Dxqk9y5Rgv8AQ8r7JCBs+2sL1Pus1Xb90KHy/AAAAALO9ML50KHw/AAAAALO9MD4Dxqm9y5RgP8AQ8j7JCBu+2sL1vus1XT/JCBs+2sL1Pus1Xb90KHw/AAAAALO9MD4Dxqm9y5RgP8AQ8j4Dxqm9y5RgP8AQ8j7JCBu+2sL1vus1XT90KHy/AAAAALO9ML7JCBs+2sL1Pus1Xb8Dxqm9y5RgP8AQ8j50KHy/AAAAALO9ML4AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAF80QPnZtfT8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAANlgovlGEfL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAUYR8PzZYKL4AAAAANlgovlGEfL8AAIC/AAAAAAAAAAAAAAAAF80QPnZtfT8AAAAAUYR8PzZYKL4AAIC/AAAAAAAAAAAAAAAAF80QPnZtfT8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAANlgovlGEfL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAUYR8PzZYKL4AAAAANlgovlGEfL8AAIA/AAAAAAAAAAAAAAAAF80QPnZtfT8AAAAAUYR8PzZYKL4AAIA/AAAAAAAAAAABAAYACQABAAkABAANABEAFwANABcAEwAAAAMADwAAAA8ADAAHABIAFgAHABYACwACAA4AFAACABQACAAFAAoAFQAFABUAEAAZAB8AIwAZACMAHQAlACgALQAlAC0AKgAYABsAJwAYACcAJAAeACsALwAeAC8AIgAaACYALAAaACwAIAAcACEALgAcAC4AKQAxADcAOwAxADsANQA8AD8ARgA8AEYAQwAwADQAQQAwAEEAPQA2AEIARQA2AEUAOQAyAD4ARAAyAEQAOAAzADoARwAzAEcAQABIAE8AUgBIAFIASwBVAFkAXwBVAF8AWwBJAE0AWABJAFgAVABOAFoAXQBOAF0AUQBKAFYAXABKAFwAUABMAFMAXgBMAF4AVwBiAGgAawBiAGsAZQBuAHEAdwBuAHcAdABgAGMAbwBgAG8AbABmAHIAdQBmAHUAaQBhAG0AcwBhAHMAZwBkAGoAdgBkAHYAcAB6AIAAgwB6AIMAfQCGAIkAjwCGAI8AjAB4AHsAhwB4AIcAhAB+AIoAjQB+AI0AgQB5AIUAiwB5AIsAfwB8AIIAjgB8AI4AiACSAJgAmwCSAJsAlQCeAKEApwCeAKcApACQAJMAnwCQAJ8AnACWAKIApQCWAKUAmQCRAJ0AowCRAKMAlwCUAJoApgCUAKYAoACqALAAswCqALMArQC2ALkAvwC2AL8AvACoAKsAtwCoALcAtACuALoAvQCuAL0AsQCpALUAuwCpALsArwCsALIAvgCsAL4AuADBAMYAygDBAMoAxQDOANEA1wDOANcA1ADAAMMAzwDAAM8AzADHANIA1gDHANYAywDCAM0A0wDCANMAyADEAMkA1QDEANUA0ADaAOAA4wDaAOMA3QDmAOgA7QDmAO0A6wDYANsA5wDYAOcA5ADfAOwA7gDfAO4A4QDZAOUA6gDZAOoA3gDcAOIA7wDcAO8A6QDxAPYA+QDxAPkA9AD9AAEBBwH9AAcBAwHwAPMA/wDwAP8A/AD3AAIBBgH3AAYB+wDyAP4ABAHyAAQB+AD1APoABQH1AAUBAAEKARABEgEKARIBDAEVARgBHQEVAR0BGgEIAQsBFwEIARcBFAEPARwBHgEPAR4BEQEJARYBGwEJARsBDgENARMBHwENAR8BGQEhASYBKQEhASkBJAEtATEBNwEtATcBMwEgASMBLwEgAS8BLAEnATIBNgEnATYBKwEiAS4BNAEiATQBKAElASoBNQElATUBMAE6AUABQgE6AUIBPAFFAUgBTQFFAU0BSgE4ATsBRwE4AUcBRAE/AUwBTgE/AU4BQQE5AUYBSwE5AUsBPgE9AUMBTwE9AU8BSQFRAVYBWQFRAVkBVAFdAWEBZwFdAWcBYwFQAVMBXwFQAV8BXAFXAWIBZgFXAWYBWwFSAV4BZAFSAWQBWAFVAVoBZQFVAWUBYAFqAXABcgFqAXIBbAF1AXgBfQF1AX0BegFoAWsBdwFoAXcBdAFvAXwBfgFvAX4BcQFpAXYBewFpAXsBbgFtAXMBfwFtAX8BeQGAAYYBiQGAAYkBgwGMAY8BlQGMAZUBkgGCAYUBkQGCAZEBjgGIAZQBlwGIAZcBiwGBAY0BkwGBAZMBhwGEAYoBlgGEAZYBkAGYAZ4BoQGYAaEBmwGkAacBrQGkAa0BqgGaAZ0BqQGaAakBpgGgAawBrwGgAa8BowGZAaUBqwGZAasBnwGcAaIBrgGcAa4BqAGwAbYBuQGwAbkBswG8Ab8BxQG8AcUBwgGyAbUBwQGyAcEBvgG4AcQBxwG4AccBuwGxAb0BwwGxAcMBtwG0AboBxgG0AcYBwAHIAc4B0QHIAdEBywHUAdcB3QHUAd0B2gHKAc0B2QHKAdkB1gHQAdwB3wHQAd8B0wHJAdUB2wHJAdsBzwHMAdIB3gHMAd4B2AHiAecB6gHiAeoB5QHtAe8B9QHtAfUB8wHhAeMB8AHhAfAB7gHoAfQB9wHoAfcB6wHgAewB8gHgAfIB5gHkAekB9gHkAfYB8QH5AQACAwL5AQMC/AEFAgcCDQIFAg0CCwL6Af0BCQL6AQkCBgL/AQwCDgL/AQ4CAQL4AQQCCgL4AQoC/gH7AQICDwL7AQ8CCAISAhcCGQISAhkCFAIcAh8CJQIcAiUCIgIRAhMCIAIRAiACHgIYAiQCJwIYAicCGwIQAh0CIwIQAiMCFgIVAhoCJgIVAiYCIQIpAjACMgIpAjICKwI0AjcCPQI0Aj0COgIqAi0COQIqAjkCNgIvAjwCPgIvAj4CMQIoAjUCOwIoAjsCLgIsAjMCPwIsAj8COAJCAkcCSQJCAkkCRAJMAk8CVQJMAlUCUgJBAkMCUAJBAlACTgJIAlQCVwJIAlcCSwJAAk0CUwJAAlMCRgJFAkoCVgJFAlYCUQJZAmACYgJZAmICWwJkAmcCbQJkAm0CagJaAl0CaQJaAmkCZgJfAmwCbgJfAm4CYQJYAmUCawJYAmsCXgJcAmMCbwJcAm8CaAJyAncCeQJyAnkCdAJ8An8ChQJ8AoUCggJxAnMCgAJxAoACfgJ4AoQChwJ4AocCewJwAn0CgwJwAoMCdgJ1AnoChgJ1AoYCgQKJApACkgKJApICiwKUApcCnQKUAp0CmgKKAo0CmQKKApkClgKPApwCngKPAp4CkQKIApUCmwKIApsCjgKMApMCnwKMAp8CmAKiAqgCqwKiAqsCpQKuArECtwKuArcCtAKgAqMCrwKgAq8CrAKmArICtQKmArUCqQKhAq0CswKhArMCpwKkAqoCtgKkArYCsAK6AsACwwK6AsMCvQLGAskCzwLGAs8CzAK4ArsCxwK4AscCxAK+AsoCzQK+As0CwQK5AsUCywK5AssCvwK8AsICzgK8As4CyALSAtgC2wLSAtsC1QLeAuEC5wLeAucC5ALQAtMC3wLQAt8C3ALWAuIC5QLWAuUC2QLRAt0C4wLRAuMC1wLUAtoC5gLUAuYC4ALqAvAC8wLqAvMC7QL2AvkC/wL2Av8C/ALoAusC9wLoAvcC9ALuAvoC/QLuAv0C8QLpAvUC+wLpAvsC7wLsAvIC/gLsAv4C+AICAwgDCwMCAwsDBQMNAw8DFgMNAxYDFAMBAwMDEAMBAxADDgMGAxIDFQMGAxUDCQMAAwwDEwMAAxMDBwMEAwoDFwMEAxcDEQMYAx8DIwMYAyMDHAMmAykDLwMmAy8DLAMZAx0DKAMZAygDJAMeAyoDLQMeAy0DIQMaAyUDKwMaAysDIAMbAyIDLgMbAy4DJwMyAzgDOgMyAzoDNAM8Az8DRgM8A0YDQwMxAzMDQAMxA0ADPgM2A0IDRQM2A0UDOQMwAz0DRAMwA0QDNwM1AzsDRwM1A0cDQQNIA08DUgNIA1IDSwNVA1kDXwNVA18DWwNJA00DWANJA1gDVANOA1oDXQNOA10DUQNKA1YDXANKA1wDUANMA1MDXgNMA14DVwNiA2gDagNiA2oDZANsA28DdgNsA3YDcwNhA2MDcANhA3ADbgNmA3IDdQNmA3UDaQNgA20DdANgA3QDZwNlA2sDdwNlA3cDcQN4A38DggN4A4IDewOFA4kDjwOFA48DiwN5A30DiAN5A4gDhAN+A4oDjQN+A40DgQN6A4YDjAN6A4wDgAN8A4MDjgN8A44DhwOSA5gDmgOSA5oDlAOcA58DpgOcA6YDowORA5MDoAORA6ADngOWA6IDpQOWA6UDmQOQA50DpAOQA6QDlwOVA5sDpwOVA6cDoQOoA68DsgOoA7IDqwO1A7kDvwO1A78DuwOpA60DuAOpA7gDtAOuA7oDvQOuA70DsQOqA7YDvAOqA7wDsAOsA7MDvgOsA74DtwPAA8YDyQPAA8kDwwPMA88D1QPMA9UD0gPCA8UD0QPCA9EDzgPIA9QD1wPIA9cDywPBA80D0wPBA9MDxwPEA8oD1gPEA9YD0APYA94D4QPYA+ED2wPkA+cD7QPkA+0D6gPaA90D6QPaA+kD5gPgA+wD7wPgA+8D4wPZA+UD6wPZA+sD3wPcA+ID7gPcA+4D6APwA/YD+QPwA/kD8wP8A/8DBQT8AwUEAgTyA/UDAQTyAwEE/gP4AwQEBwT4AwcE+wPxA/0DAwTxAwME9wP0A/oDBgT0AwYEAAQIBA4EEQQIBBEECwQUBBcEHQQUBB0EGgQKBA0EGQQKBBkEFgQQBBwEHwQQBB8EEwQJBBUEGwQJBBsEDwQMBBIEHgQMBB4EGAQgBCYEKgQgBCoEJAQtBDAENwQtBDcENAQiBCUEMQQiBDEELgQnBDIENgQnBDYEKwQhBCwEMwQhBDMEKAQjBCkENQQjBDUELwQ4BD4EQgQ4BEIEPARGBEkETgRGBE4ESwQ5BD0ESAQ5BEgERARABEwETwRABE8EQwQ6BEUESgQ6BEoEPwQ7BEEETQQ7BE0ERwRQBFYEWQRQBFkEUwRcBGAEZwRcBGcEYwRSBFUEYQRSBGEEXgRXBGIEZgRXBGYEWwRRBF0EZARRBGQEWARUBFoEZQRUBGUEXwRoBG4EcQRoBHEEawR1BHkEfgR1BH4EegRpBG0EeARpBHgEdARwBHwEfwRwBH8EcwRqBHYEewRqBHsEbwRsBHIEfQRsBH0EdwSABIYEiQSABIkEgwSMBJAElwSMBJcEkwSCBIUEkQSCBJEEjgSHBJIElgSHBJYEiwSBBI0ElASBBJQEiASEBIoElQSEBJUEjwSYBJ4EoQSYBKEEmwSlBKkErgSlBK4EqgSZBJ0EqASZBKgEpASgBKwErwSgBK8EowSaBKYEqwSaBKsEnwScBKIErQScBK0EpwSwBLYEuQSwBLkEswS8BMAExwS8BMcEwwSyBLUEwQSyBMEEvgS3BMIExgS3BMYEuwSxBL0ExASxBMQEuAS0BLoExQS0BMUEvwTIBM4E0QTIBNEEywTVBNkE3gTVBN4E2gTJBM0E2ATJBNgE1ATQBNwE3wTQBN8E0wTKBNYE2wTKBNsEzwTMBNIE3QTMBN0E1wThBOoE5wThBOcE5ATtBPAE8wTtBPME9gTgBOME7wTgBO8E7ATlBOgE9ATlBPQE8QTmBOkE9QTmBPUE8gTrBOIE7gTrBO4E9wT5BAIF/wT5BP8E/AQFBQgFCwUFBQsFDgX4BPsEBwX4BAcFBAX9BAAFDAX9BAwFCQX+BAEFDQX+BA0FCgUDBfoEBgUDBQYFDwUQBRYFGQUQBRkFEwUcBR8FJQUcBSUFIgUSBRUFIQUSBSEFHgUYBSQFJwUYBScFGwURBR0FIwURBSMFFwUUBRoFJgUUBSYFIAUqBTMFMAUqBTAFLQU/BTYFOQU/BTkFPAUpBSwFOAUpBTgFNQUrBS8FOwUrBTsFNwUuBTIFPgUuBT4FOgUxBSgFNAUxBTQFPQUpXI8+AAAAAHwULj4pXI8+AAAAAHwULj4pXI8+AAAAAHwULj4pXI8+AAAAAHwULr4pXI8+AAAAAHwULr4pXI8+AAAAAHwULr60KYE+gM74PXwULj60KYE+gM74PXwULj60KYE+gM74PXwULj60KYE+gM74PXwULr60KYE+gM74PXwULr60KYE+gM74PXwULr5axDI+wCpgPnwULj5axDI+wCpgPnwULj5axDI+wCpgPnwULj5axDI+wCpgPnwULr5axDI+wCpgPnwULr5axDI+wCpgPnwULr5uNH89AMSLPnwULj5uNH89AMSLPnwULj5uNH89AMSLPnwULj5uNH89AMSLPnwULr5uNH89AMSLPnwULr5uNH89AMSLPnwULr5uNH+9AMSLPnwULj5uNH+9AMSLPnwULj5uNH+9AMSLPnwULj5uNH+9AMSLPnwULr5uNH+9AMSLPnwULr5uNH+9AMSLPnwULr5axDK+wCpgPnwULj5axDK+wCpgPnwULj5axDK+wCpgPnwULj5axDK+wCpgPnwULr5axDK+wCpgPnwULr5axDK+wCpgPnwULr60KYG+gM74PXwULj60KYG+gM74PXwULj60KYG+gM74PXwULj60KYG+gM74PXwULr60KYG+gM74PXwULr60KYG+gM74PXwULr4pXI++AAAAAHwULj4pXI++AAAAAHwULj4pXI++AAAAAHwULj4pXI++AAAAAHwULr4pXI++AAAAAHwULr4pXI++AAAAAHwULr60KYG+gM74vXwULj60KYG+gM74vXwULj60KYG+gM74vXwULj60KYG+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OGOov4DC9TwApEC/OGOov4DC9TwApEC/OGOov4DC9bwApEC/OGOov4DC9bwApEC/OGOov4DC9bzqdkm/gAewv4DC9Tzqdkm/gAewv4DC9Tzqdkm/gAewv4DC9Tzqdkm/gAewv4DC9bzqdkm/gAewv4DC9bzqdkm/gAewv4DC9bzjVUO/EJynv4DC9TzjVUO/EJynv4DC9TzjVUO/EJynv4DC9TzjVUO/EJynv4DC9bzjVUO/EJynv4DC9bzjVUO/EJynv4DC9byq74++gJjHv4DC9Tyq74++gJjHv4DC9Tyq74++gJjHv4DC9Tyq74++gJjHv4DC9byq74++gJjHv4DC9byq74++gJjHv4DC9byerYO+EC2/v4DC9TyerYO+EC2/v4DC9TyerYO+EC2/v4DC9TyerYO+EC2/v4DC9byerYO+EC2/v4DC9byerYO+EC2/v4DC9bykzom+qN3Hv4DC9Tykzom+qN3Hv4DC9Tykzom+qN3Hv4DC9Tykzom+qN3Hv4DC9bykzom+qN3Hv4DC9bykzom+qN3Hv4DC9bykzom+6Oe+v4DC9Tykzom+6Oe+v4DC9Tykzom+6Oe+v4DC9Tykzom+6Oe+v4DC9bykzom+6Oe+v4DC9bykzom+6Oe+v4DC9bykzok+qN3Hv4DC9Tykzok+qN3Hv4DC9Tykzok+qN3Hv4DC9Tykzok+qN3Hv4DC9bykzok+qN3Hv4DC9bykzok+qN3Hv4DC9bykzok+6Oe+v4DC9Tykzok+6Oe+v4DC9Tykzok+6Oe+v4DC9Tykzok+6Oe+v4DC9bykzok+6Oe+v4DC9bykzok+6Oe+v4DC9byq748+gJjHv4DC9Tyq748+gJjHv4DC9Tyq748+gJjHv4DC9Tyq748+gJjHv4DC9byq748+gJjHv4DC9byq748+gJjHv4DC9byerYM+EC2/v4DC9TyerYM+EC2/v4DC9TyerYM+EC2/v4DC9TyerYM+EC2/v4DC9byerYM+EC2/v4DC9byerYM+EC2/v4DC9bzqdkk/gAewv4DC9Tzqdkk/gAewv4DC9Tzqdkk/gAewv4DC9Tzqdkk/gAewv4DC9bzqdkk/gAewv4DC9bzqdkk/gAewv4DC9bzjVUM/EJynv4DC9TzjVUM/EJynv4DC9TzjVUM/EJynv4DC9TzjVUM/EJynv4DC9bzjVUM/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AACAPwAAAAAmJt4+3qVmPwAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAmJt4+3qVmPwAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAmJt6+3qVmPwAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAmJt6+3qVmPwAAAAAAAAAAAAAAAAAAgD8mJt6+3qVmPwAAAAD7JEi/cZ4fPwAAAAAAAAAAAAAAAAAAgL8mJt6+3qVmPwAAAAD7JEi/cZ4fPwAAAAAAAAAAAAAAAAAAgD/7JEi/cZ4fPwAAAAAWlXm/5thjPgAAAAAAAAAAAAAAAAAAgL/7JEi/cZ4fPwAAAAAWlXm/5thjPgAAAAAAAAAAAAAAAAAAgD8WlXm/5thjPgAAAAAWlXm/5thjvgAAAAAAAAAAAAAAAAAAgL8WlXm/5thjPgAAAAAWlXm/5thjvgAAAAAAAAAAAAAAAAAAgD/7JEi/cZ4fvwAAAAAWlXm/5thjvgAAAAAAAAAAAAAAAAAAgL/7JEi/cZ4fvwAAAAAWlXm/5thjvgAAAAAAAAAAAAAAAAAAgD8mJt6+3qVmvwAAAAD7JEi/cZ4fvwAAAAAAAAAAAAAAAAAAgL8mJt6+3qVmvwAAAAD7JEi/cZ4fvwAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAmJt6+3qVmvwAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAmJt6+3qVmvwAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAmJt4+3qVmvwAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAmJt4+3qVmvwAAAAAAAAAAAAAAAAAAgD8mJt4+3qVmvwAAAAD7JEg/cZ4fvwAAAAAAAAAAAAAAAAAAgL8mJt4+3qVmvwAAAAD7JEg/cZ4fvwAAAAAAAAAAAAAAAAAAgD/7JEg/cZ4fvwAAAAAWlXk/5thjvgAAAAAAAAAAAAAAAAAAgL/7JEg/cZ4fvwAAAAAWlXk/5thjvgAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAgL8AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgD9b3jG+xBt8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL9b3jG+xBt8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxvgAAAABb3jG+xBt8vwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxvgAAAABb3jG+xBt8vwAAAAAAAAAAAAAAAAAAgD9b3jG+xBt8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL9b3jG+xBt8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAABb3jG+xBt8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAABb3jG+xBt8PwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgD9b3jG+xBt8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL9b3jG+xBt8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxvgAAAABb3jG+xBt8vwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxvgAAAABb3jG+xBt8vwAAAAAAAAAAAAAAAAAAgD9b3jG+xBt8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL9b3jG+xBt8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAABb3jG+xBt8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAABb3jG+xBt8PwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/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4ADOAOAA1ADRANcA4wDRAOMA3QDnAO0A8ADnAPAA6gD0APcA/AD0APwA+QDoAOsA9gDoAPYA8wDuAPoA/QDuAP0A8QDmAPIA+ADmAPgA7ADpAO8A+wDpAPsA9QAAAQUBCAEAAQgBAwEMAQ8BFQEMARUBEgH/AAIBDgH/AA4BCwEGAREBFAEGARQBCQH+AAoBEAH+ABABBAEBAQcBEwEBARMBDQEYAR0BIAEYASABGwEkAScBLQEkAS0BKgEXARoBJgEXASYBIwEeASkBLAEeASwBIQEWASIBKAEWASgBHAEZAR8BKwEZASsBJQEwATYBOQEwATkBMwE8AT8BRQE8AUUBQgEvATIBPgEvAT4BOwE1AUEBRAE1AUQBOAEuAToBQAEuAUABNAExATcBQwExAUMBPQFHAU4BUQFHAVEBSgFUAVcBXQFUAV0BWgFIAUsBVgFIAVYBUwFNAVkBXAFNAVwBUAFGAVIBWAFGAVgBTAFJAU8BWwFJAVsBVQFfAWYBaQFfAWkBYgFsAW8BdQFsAXUBcgFgAWMBbgFgAW4BawFlAXEBdAFlAXQBaAFeAWoBcAFeAXABZAFhAWcBcwFhAXMBbQF3AX0BgAF3AYABegGDAYYBjQGDAY0BigF4AXsBhwF4AYcBhAF+AYkBjAF+AYwBgQF2AYIBiAF2AYgBfAF5AX8BiwF5AYsBhQGPAZUBmAGPAZgBkgGbAZ4BpQGbAaUBogGQAZMBnwGQAZ8BnAGWAaEBpAGWAaQBmQGOAZoBoAGOAaABlAGRAZcBowGRAaMBnQGnAa4BsQGnAbEBqgGzAbYBvAGzAbwBuQGoAasBtwGoAbcBtAGtAboBvQGtAb0BsAGmAbIBuAGmAbgBrAGpAa8BuwGpAbsBtQG/AcYByQG/AckBwgHLAc4B1AHLAdQB0QHAAcMBzwHAAc8BzAHFAdIB1QHFAdUByAG+AcoB0AG+AdABxAHBAccB0wHBAdMBzQHYAd4B4QHYAeEB2wHjAeYB7QHjAe0B6gHXAdoB5wHXAecB5AHdAekB7AHdAewB4AHWAeIB6AHWAegB3AHZAd8B6wHZAesB5QHwAfYB+QHwAfkB8wH7Af4BBQL7AQUCAgLvAfIB/wHvAf8B/AH1AQECBAL1AQQC+AHuAfoBAALuAQAC9AHxAfcBAwLxAQMC/QEHAg0CEAIHAhACCgIUAhcCHAIUAhwCGQIIAgsCFgIIAhYCEwIOAhoCHQIOAh0CEQIGAhICGAIGAhgCDAIJAg8CGwIJAhsCFQIfAiUCKAIfAigCIgIsAi8CNAIsAjQCMQIgAiMCLgIgAi4CKwImAjICNQImAjUCKQIeAioCMAIeAjACJAIhAicCMwIhAjMCLQI4Aj0CQAI4AkACOwJEAkcCTQJEAk0CSgI3AjoCRgI3AkYCQwI+AkkCTAI+AkwCQQI2AkICSAI2AkgCPAI5Aj8CSwI5AksCRQJQAlUCWAJQAlgCUwJcAl8CZQJcAmUCYgJPAlICXgJPAl4CWwJWAmECZAJWAmQCWQJOAloCYAJOAmACVAJRAlcCYwJRAmMCXQJoAm4CcQJoAnECawJ0AncCfQJ0An0CegJnAmoCdgJnAnYCcwJtAnkCfAJtAnwCcAJmAnICeAJmAngCbAJpAm8CewJpAnsCdQJ/AoYCiQJ/AokCggKMAo8ClQKMApUCkgKAAoMCjgKAAo4CiwKFApEClAKFApQCiAJ+AooCkAJ+ApAChAKBAocCkwKBApMCjQKXAp4CoQKXAqECmgKkAqcCrQKkAq0CqgKYApsCpgKYAqYCowKdAqkCrAKdAqwCoAKWAqICqAKWAqgCnAKZAp8CqwKZAqsCpQKvArUCuAKvArgCsgK7Ar4CxQK7AsUCwgKwArMCvwKwAr8CvAK2AsECxAK2AsQCuQKuAroCwAKuAsACtAKxArcCwwKxAsMCvQLHAs0C0ALHAtACygLTAtYC3QLTAt0C2gLIAssC1wLIAtcC1ALOAtkC3ALOAtwC0QLGAtIC2ALGAtgCzALJAs8C2wLJAtsC1QLfAuYC6QLfAukC4gLrAu4C9ALrAvQC8QLgAuMC7wLgAu8C7ALlAvIC9QLlAvUC6ALeAuoC8ALeAvAC5ALhAucC8wLhAvMC7QL3Av4CAQP3AgED+gIDAwYDDAMDAwwDCQP4AvsCBwP4AgcDBAP9AgoDDQP9Ag0DAAP2AgIDCAP2AggD/AL5Av8CCwP5AgsDBQMQAxYDGQMQAxkDEwMbAx4DJQMbAyUDIgMPAxIDHwMPAx8DHAMVAyEDJAMVAyQDGAMOAxoDIAMOAyADFAMRAxcDIwMRAyMDHQMoAy4DMQMoAzEDKwMzAzYDPQMzAz0DOgMnAyoDNwMnAzcDNAMtAzkDPAMtAzwDMAMmAzIDOAMmAzgDLAMpAy8DOwMpAzsDNQNAA0YDSQNAA0kDQwNMA08DVQNMA1UDUgM/A0IDTgM/A04DSwNFA1EDVANFA1QDSAM+A0oDUAM+A1ADRANBA0cDUwNBA1MDTQNYA14DYQNYA2EDWwNkA2cDbANkA2wDaQNXA1oDZgNXA2YDYwNdA2oDbQNdA20DYANWA2IDaANWA2gDXANZA18DawNZA2sDZQNwA3YDeQNwA3kDcwN8A38DhAN8A4QDgQNvA3IDfgNvA34DewN1A4IDhQN1A4UDeANuA3oDgANuA4ADdANxA3cDgwNxA4MDfQOIA40DkAOIA5ADiwOTA5YDnAOTA5wDmQOHA4oDlwOHA5cDlAOOA5oDnQOOA50DkQOGA5IDmAOGA5gDjAOJA48DmwOJA5sDlQOgA6UDqAOgA6gDowOrA64DtAOrA7QDsQOfA6IDrwOfA68DrAOmA7IDtQOmA7UDqQOeA6oDsAOeA7ADpAOhA6cDswOhA7MDrQO3A70DwAO3A8ADugPEA8cDzAPEA8wDyQO4A7sDxgO4A8YDwwO+A8oDzQO+A80DwQO2A8IDyAO2A8gDvAO5A78DywO5A8sDxQPPA9UD2APPA9gD0gPcA98D5APcA+QD4QPQA9MD3gPQA94D2wPWA+ID5QPWA+UD2QPOA9oD4APOA+AD1APRA9cD4wPRA+MD3QPoA+0D8APoA/AD6wP0A/cD/QP0A/0D+gPnA+oD9gPnA/YD8wPuA/kD/APuA/wD8QPmA/ID+APmA/gD7APpA+8D+wPpA/sD9QMABAUECAQABAgEAwQMBA8EFQQMBBUEEgT/AwIEDgT/Aw4ECwQGBBEEFAQGBBQECQT+AwoEEAT+AxAEBAQBBAcEEwQBBBMEDQQYBB4EIQQYBCEEGwQkBCcELQQkBC0EKgQXBBoEJgQXBCYEIwQdBCkELAQdBCwEIAQWBCIEKAQWBCgEHAQZBB8EKwQZBCsEJQQvBDYEOQQvBDkEMgQ8BD8ERQQ8BEUEQgQwBDMEPgQwBD4EOwQ1BEEERAQ1BEQEOAQuBDoEQAQuBEAENAQxBDcEQwQxBEMEPQRHBE4EUQRHBFEESgRUBFcEXQRUBF0EWgRIBEsEVgRIBFYEUwRNBFkEXARNBFwEUARGBFIEWARGBFgETARJBE8EWwRJBFsEVQRfBGUEaARfBGgEYgRrBG4EdQRrBHUEcgRgBGMEbwRgBG8EbARmBHEEdARmBHQEaQReBGoEcAReBHAEZARhBGcEcwRhBHMEbQR3BH0EgAR3BIAEegSDBIYEjQSDBI0EigR4BHsEhwR4BIcEhAR+BIkEjAR+BIwEgQR2BIIEiAR2BIgEfAR5BH8EiwR5BIsEhQSPBJYEmQSPBJkEkgSbBJ4EpASbBKQEoQSQBJMEnwSQBJ8EnASVBKIEpQSVBKUEmASOBJoEoASOBKAElASRBJcEowSRBKMEnQSnBK4EsQSnBLEEqgSzBLYEvASzBLwEuQSoBKsEtwSoBLcEtAStBLoEvQStBL0EsASmBLIEuASmBLgErASpBK8EuwSpBLsEtQTABMYEyQTABMkEwwTLBM4E1QTLBNUE0gS/BMIEzwS/BM8EzATFBNEE1ATFBNQEyAS+BMoE0AS+BNAExATBBMcE0wTBBNMEzQTYBN4E4QTYBOEE2wTjBOYE7QTjBO0E6gTXBNoE5wTXBOcE5ATdBOkE7ATdBOwE4ATWBOIE6ATWBOgE3ATZBN8E6wTZBOsE5QTwBPYE+QTwBPkE8wT8BP8EBQX8BAUFAgXvBPIE/gTvBP4E+wT1BAEFBAX1BAQF+ATuBPoEAAXuBAAF9ATxBPcEAwXxBAMF/QQIBQ4FEQUIBREFCwUUBRcFHAUUBRwFGQUHBQoFFgUHBRYFEwUNBRoFHQUNBR0FEAUGBRIFGAUGBRgFDAUJBQ8FGwUJBRsFFQUgBSYFKQUgBSkFIwUsBS8FNAUsBTQFMQUfBSIFLgUfBS4FKwUlBTIFNQUlBTUFKAUeBSoFMAUeBTAFJAUhBScFMwUhBTMFLQU4BT0FQAU4BUAFOwVDBUYFTAVDBUwFSQU3BToFRwU3BUcFRAU+BUoFTQU+BU0FQQU2BUIFSAU2BUgFPAU5BT8FSwU5BUsFRQVQBVUFWAVQBVgFUwVbBV4FZAVbBWQFYQVPBVIFXwVPBV8FXAVWBWIFZQVWBWUFWQVOBVoFYAVOBWAFVAVRBVcFYwVRBWMFXQU=";var kh={id:"aurum",name:"Aurum",tagline:"The last farm before the event horizon",hot:[1,.82,.5],mid:[1,.45,.1],cool:[.5,.12,.03],camD:17.8,inc:.1,rOut:9,dopp:1,gain:1,sky:0,skyTop:[0,0,0],skyLow:[0,0,0],band:[0,0,0],alt:2.09,hs0:-.57,hs1:.32,dolly:0,mm:49,holeAz:-.04,holeEl:.078,bloom:.4,bloomRadius:.25,exposure:.85};function Vh(s){let e=new bt,t=-112,n=new ct(new Rn(700,170).rotateX(-Math.PI/2).translate(0,0,-73),new et({vertexShader:bh,fragmentShader:Sh,uniforms:s}));e.add(n);let i=new I(-2,0,-72),r=new I(22,0,-92),o=null;function a(w){o&&(e.remove(o),o.geometry.dispose());let C=new to,y=4,v=[],E=[];for(let B=0;B<y;B++)v.push(-.5,B/y,0,.5,B/y,0);v.push(0,1,0);for(let B=0;B<y-1;B++){let X=B*2;E.push(X,X+1,X+2,X+1,X+3,X+2)}let N=(y-1)*2;E.push(N,N+1,y*2),C.setAttribute("position",new rt(v,3)),C.setIndex(E);let D=new Float32Array(w*3);for(let B=0;B<w;B++){let X=-(1.5+(-t-2-1.5)*Math.pow(Math.random(),1.6)),k=(Math.random()*2-1)*(8+-X*1);D[B*3]=k,D[B*3+1]=X,D[B*3+2]=Math.random()}C.setAttribute("aInst",new Cn(D,3)),C.instanceCount=w,o=new ct(C,new et({vertexShader:yh,fragmentShader:Mh,uniforms:s,side:Ht})),o.frustumCulled=!1,e.add(o)}let l=new et({vertexShader:Ah,fragmentShader:wh,uniforms:{uHot:s.uHot,uMid:s.uMid,uBase:{value:new pe(.016,.01,.007)},uRim:{value:1}}}),c=new Dt({color:new pe(5,2.2,.55),toneMapped:!1});function u(){let w=document.createElement("canvas");w.width=w.height=128;let C=w.getContext("2d");if(!C)return new Ls(w);let y=C.createRadialGradient(64,64,0,64,64,64);return y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.35,"rgba(255,255,255,0.35)"),y.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=y,C.fillRect(0,0,128,128),new Ls(w)}let h=u();function f(w,C,y,v){let E=new ct(new Rn(w,C).rotateX(-Math.PI/2),new Dt({map:h,color:new pe(y).multiplyScalar(v),transparent:!0,blending:fi,depthWrite:!1,toneMapped:!1}));return E.position.y=.05,E}function d(w,C,y,v){new po().load(C,E=>{let N=E.scene;N.traverse(k=>{if(!k.isMesh)return;let Q=W=>W.name.startsWith("glass")?c:l;k.material=Array.isArray(k.material)?k.material.map(Q):Q(k.material)});let D=new Ft().setFromObject(N),B=D.getCenter(new I);N.position.set(-B.x,-D.min.y,-B.z);let X=new bt;X.add(N),X.scale.setScalar(y),w.add(X),w.updateMatrixWorld(!0),v&&v(w,N)})}function _(w,C){let y=new I,v=[],E=-1/0;w.traverse(B=>{if(!B.isMesh)return;let X=B.geometry.attributes.position;for(let k=0;k<X.count;k++)y.fromBufferAttribute(X,k).applyMatrix4(B.matrixWorld),v.push(y.clone()),y.y>E&&(E=y.y)});let N=v.filter(B=>B.y>E-C),D=new I;return N.forEach(B=>D.add(B)),D.multiplyScalar(1/N.length)}function x(){let w=new bt,C=(y,v,E,N,D=0,B=0,X=0)=>{let k=new ct(y,l);return k.position.set(v,E,N),k.rotation.set(D,B,X),w.add(k),k};C(new gi(.15,.42,4,10),0,.46,0,0,0,Math.PI/2),C(new gi(.075,.2,4,8),.34,.66,0,0,0,-.55),C(new $r(.105,12,10),.43,.8,0),C(new gi(.045,.1,4,8),.55,.77,0,0,0,Math.PI/2-.2);for(let y of[-.05,.05])C(new qr(.04,.12,5),.39,.92,y,0,0,.2);for(let[y,v]of[[.2,.07],[.2,-.07],[-.2,.07],[-.2,-.07]])C(new Ps(.03,.025,.38,6),y,.19,v);return C(new gi(.025,.3,3,6),-.4,.56,0,0,0,1),w}let m=new bt;m.position.copy(i),m.rotation.y=.28,d(m,Hh,1.15,w=>{let C=f(7,3,new pe(1,.85,.6),.9);C.position.set(7,.05,0),w.add(C)});let p=null,A=new bt;A.position.copy(r),A.rotation.y=-.08,d(A,Bh,2.1,(w,C)=>{let y=f(18,10,new pe(1,.55,.18),1.3);y.position.set(0,.05,9),w.add(y);let v=x();v.position.set(-8.1,.5,4.9),v.scale.setScalar(1.15),w.add(v);let E=_(C,.15);if(!p)return;let N=p.geometry.attributes.position;for(let D=0;D<N.count;D++)N.setXYZ(D,E.x,E.y,E.z);N.needsUpdate=!0});let S=null,M=new bt;M.position.set(-24,0,-84),M.rotation.y=.18,d(M,Gh,1.5,(w,C)=>{S=C.getObjectByName("WindRotorZ")||null}),e.add(m,A,M);let P=null;function R(w){P&&(e.remove(P),P.geometry.dispose());let C=new Float32Array(w*3),y=new Float32Array(w*4);for(let E=0;E<w;E++){C[E*3]=(Math.random()*2-1)*60,C[E*3+1]=Math.random()*9,C[E*3+2]=-4-Math.random()*66;for(let N=0;N<4;N++)y[E*4+N]=Math.random()}let v=new dt;v.setAttribute("position",new ut(C,3)),v.setAttribute("aSeed",new ut(y,4)),P=new mi(v,new et({vertexShader:Th,fragmentShader:Eh,uniforms:{uTime:s.uTime,uHot:s.uHot,uPx:{value:1}},transparent:!0,depthWrite:!1,blending:fi})),P.frustumCulled=!1,e.add(P)}{let C=new Float32Array(108),y=new Float32Array(36);for(let E=0;E<36;E++)C.set([r.x+4,11,r.z],E*3),y[E]=E/36;let v=new dt;v.setAttribute("position",new ut(C,3)),v.setAttribute("aSeed",new ut(y,1)),p=new mi(v,new et({vertexShader:Rh,fragmentShader:Ch,uniforms:{uTime:s.uTime,uPx:{value:1}},transparent:!0,depthWrite:!1})),p.frustumCulled=!1,p.renderOrder=5,e.add(p)}return{group:e,bench:()=>({models:[m,A,M],grass:o}),build(w){a(w.grass),R(w.embers)},setPx(w){P&&(P.material.uniforms.uPx.value=w),p&&(p.material.uniforms.uPx.value=w)},update(w){let C=.92+.08*Math.sin(w*7)*Math.sin(w*3.1);c.color.setRGB(5*C,2.2*C,.55*C),S&&(S.rotation.z=-(w*.45+.35*Math.sin(w*.37)))}}}Ph([{config:kh,create:Vh}]);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
