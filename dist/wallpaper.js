(()=>{var jl="170";var nd=0,fu=1,id=2;var Nh=1,sd=2,Rn=3,xn=0,Ot=1,Ut=2,_n=0,Yi=1,Mi=2,du=3,pu=4,rd=5,xi=100,od=101,ad=102,ld=103,cd=104,ud=200,hd=201,fd=202,dd=203,Pa=204,Ua=205,pd=206,md=207,gd=208,_d=209,xd=210,vd=211,yd=212,Md=213,Sd=214,Na=0,Oa=1,Fa=2,Qi=3,za=4,Ba=5,Ha=6,Ga=7,Oh=0,bd=1,Ad=2,Qn=0,ec=1,tc=2,nc=3,nr=4,Td=5,ic=6,sc=7,mu="attached",wd="detached",Fh=300,ji=301,es=302,Va=303,ka=304,Do=306,Si=1e3,In=1001,Fs=1002,Rt=1003,rc=1004;var Xi=1005;var Nt=1006,Is=1007;var gn=1008;var Pn=1009,zh=1010,Bh=1011,zs=1012,oc=1013,bi=1014,ln=1015,un=1016,ac=1017,lc=1018,ts=1020,Hh=35902,Gh=1021,Vh=1022,Jt=1023,kh=1024,Wh=1025,Zi=1026,ns=1027,cc=1028,uc=1029,Xh=1030,hc=1031;var fc=1033,Gr=33776,Vr=33777,kr=33778,Wr=33779,Wa=35840,Xa=35841,qa=35842,$a=35843,Ya=36196,Za=37492,Ja=37496,Ka=37808,Qa=37809,ja=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,ol=37817,al=37818,ll=37819,cl=37820,ul=37821,Xr=36492,hl=36494,fl=36495,qh=36283,dl=36284,pl=36285,ml=36286;var is=2300,ss=2301,Qo=2302,gu=2400,_u=2401,xu=2402,Ed=2500;var $h=0,Po=1,ir=2,Rd=3200,Cd=3201;var Yh=0,Id=1,Jn="",Mt="srgb",Ct="srgb-linear",Uo="linear",Ze="srgb";var Ii=7680;var vu=519,Ld=512,Dd=513,Pd=514,Zh=515,Ud=516,Nd=517,Od=518,Fd=519,gl=35044;var yu="300 es",Ln=2e3,qr=2001,jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=1234567,Ls=Math.PI/180,rs=180/Math.PI;function Kt(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function dc(i,e){return(i%e+e)%e}function zd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Bd(i,e,t){return i!==e?(t-i)/(e-i):0}function Ds(i,e,t){return(1-t)*i+t*e}function Hd(i,e,t,n){return Ds(i,e,1-Math.exp(-t*n))}function Gd(i,e=1){return e-Math.abs(dc(i,e*2)-e)}function Vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xd(i,e){return i+Math.random()*(e-i)}function qd(i){return i*(.5-Math.random())}function $d(i){i!==void 0&&(Mu=i);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yd(i){return i*Ls}function Zd(i){return i*rs}function Jd(i){return(i&i-1)===0&&i!==0}function Kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Jh={DEG2RAD:Ls,RAD2DEG:rs,generateUUID:Kt,clamp:St,euclideanModulo:dc,mapLinear:zd,inverseLerp:Bd,lerp:Ds,damp:Hd,pingpong:Gd,smoothstep:Vd,smootherstep:kd,randInt:Wd,randFloat:Xd,randFloatSpread:qd,seededRandom:$d,degToRad:Yd,radToDeg:Zd,isPowerOfTwo:Jd,ceilPowerOfTwo:Kd,floorPowerOfTwo:Qd,setQuaternionFromProperEuler:jd,normalize:Ke,denormalize:an},K=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],A=s[1],v=s[4],_=s[7],L=s[2],w=s[5],R=s[8];return r[0]=o*x+a*A+l*L,r[3]=o*m+a*v+l*w,r[6]=o*p+a*_+l*R,r[1]=c*x+u*A+h*L,r[4]=c*m+u*v+h*w,r[7]=c*p+u*_+h*R,r[2]=f*x+d*A+g*L,r[5]=f*m+d*v+g*w,r[8]=f*p+d*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jo.makeScale(e,t)),this}rotate(e){return this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jo=new De;function Kh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ep(){let i=Bs("canvas");return i.style.display="block",i}var Su={};function Rs(i){i in Su||(Su[i]=!0,console.warn(i))}function tp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function np(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ip(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ne={enabled:!0,workingColorSpace:Ct,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ze&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ze&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?Uo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bu=[.64,.33,.3,.6,.15,.06],Au=[.2126,.7152,.0722],Tu=[.3127,.329],wu=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ne.define({[Ct]:{primaries:bu,whitePoint:Tu,transfer:Uo,toXYZ:wu,fromXYZ:Eu,luminanceCoefficients:Au,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:bu,whitePoint:Tu,transfer:Ze,toXYZ:wu,fromXYZ:Eu,luminanceCoefficients:Au,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}});var Li,_l=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=Bs("canvas")),Li.width=e.width,Li.height=e.height;let n=Li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sp=0,$r=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Kt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ea(s[o].image)):r.push(ea(s[o]))}else r=ea(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_l.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rp=0,bt=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=Nt,o=gn,a=Jt,l=Pn,c=i.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Kt(),this.name="",this.source=new $r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Fh;bt.DEFAULT_ANISOTROPY=1;var qe=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(d+1)/2,L=(p+1)/2,w=(u+f)/4,R=(h+x)/4,C=(g+m)/4;return v>_&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=R/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=C/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=C/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-x)/A,this.z=(f-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $r(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dt=class extends xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yr=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*x,A=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let L=Math.sqrt(v),w=Math.atan2(L,p*A);m=Math.sin(m*w)/L,a=Math.sin(a*w)/L}let _=a*A;if(l=l*m+f*_,c=c*m+d*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new E,Ru=new cn,Ft=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),fr.subVectors(this.max,ys),Di.subVectors(e.a,ys),Pi.subVectors(e.b,ys),Ui.subVectors(e.c,ys),Wn.subVectors(Pi,Di),Xn.subVectors(Ui,Pi),hi.subVectors(Di,Ui);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-hi.z,hi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,hi.z,0,-hi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-hi.y,hi.x,0];return!na(t,Di,Pi,Ui,fr)||(t=[1,0,0,0,1,0,0,0,1],!na(t,Di,Pi,Ui,fr))?!1:(dr.crossVectors(Wn,Xn),t=[dr.x,dr.y,dr.z],na(t,Di,Pi,Ui,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Sn=[new E,new E,new E,new E,new E,new E,new E,new E],sn=new E,hr=new Ft,Di=new E,Pi=new E,Ui=new E,Wn=new E,Xn=new E,hi=new E,ys=new E,fr=new E,dr=new E,fi=new E;function na(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);let a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var op=new Ft,Ms=new E,ia=new E,Vt=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):op.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);let t=Ms.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(ia)),this.expandByPoint(Ms.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bn=new E,sa=new E,pr=new E,qn=new E,ra=new E,mr=new E,oa=new E,os=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sa.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(sa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(pr),a=qn.dot(this.direction),l=-qn.dot(pr),c=qn.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(sa).addScaledVector(pr,f),d}intersectSphere(e,t){bn.subVectors(e.center,this.origin);let n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,s,r){ra.subVectors(t,e),mr.subVectors(n,e),oa.crossVectors(ra,mr);let o=this.direction.dot(oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);let l=a*this.direction.dot(mr.crossVectors(qn,mr));if(l<0)return null;let c=a*this.direction.dot(ra.cross(qn));if(c<0||l+c>o)return null;let u=-a*qn.dot(oa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),o=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ap,e,lp)}lookAt(e,t,n){let s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),$n.crossVectors(n,Ht),$n.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),$n.crossVectors(n,Ht)),$n.normalize(),gr.crossVectors(Ht,$n),s[0]=$n.x,s[4]=gr.x,s[8]=Ht.x,s[1]=$n.y,s[5]=gr.y,s[9]=Ht.y,s[2]=$n.z,s[6]=gr.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],A=n[3],v=n[7],_=n[11],L=n[15],w=s[0],R=s[4],C=s[8],b=s[12],M=s[1],I=s[5],H=s[9],B=s[13],k=s[2],Z=s[6],W=s[10],ee=s[14],V=s[3],se=s[7],ue=s[11],Me=s[15];return r[0]=o*w+a*M+l*k+c*V,r[4]=o*R+a*I+l*Z+c*se,r[8]=o*C+a*H+l*W+c*ue,r[12]=o*b+a*B+l*ee+c*Me,r[1]=u*w+h*M+f*k+d*V,r[5]=u*R+h*I+f*Z+d*se,r[9]=u*C+h*H+f*W+d*ue,r[13]=u*b+h*B+f*ee+d*Me,r[2]=g*w+x*M+m*k+p*V,r[6]=g*R+x*I+m*Z+p*se,r[10]=g*C+x*H+m*W+p*ue,r[14]=g*b+x*B+m*ee+p*Me,r[3]=A*w+v*M+_*k+L*V,r[7]=A*R+v*I+_*Z+L*se,r[11]=A*C+v*H+_*W+L*ue,r[15]=A*b+v*B+_*ee+L*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],A=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,_=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,L=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,w=t*A+n*v+s*_+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=A*R,e[1]=(x*f*r-h*m*r-x*s*d+n*m*d+h*s*p-n*f*p)*R,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*R,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*R,e[4]=v*R,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*R,e[8]=_*R,e[9]=(g*h*r-u*x*r-g*n*d+t*x*d+u*n*p-t*h*p)*R,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*R,e[12]=L*R,e[13]=(u*x*s-g*h*s+g*n*f-t*x*f-u*n*m+t*h*m)*R,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,A=l*c,v=l*u,_=l*h,L=n.x,w=n.y,R=n.z;return s[0]=(1-(x+p))*L,s[1]=(d+_)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(f+p))*w,s[6]=(m+A)*w,s[7]=0,s[8]=(g+v)*R,s[9]=(m-A)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ni.set(s[0],s[1],s[2]).length(),o=Ni.set(s[4],s[5],s[6]).length(),a=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);let c=1/r,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ln){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),d,g;if(a===Ln)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ln){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,d=(n+s)*u,g,x;if(a===Ln)g=(o+r)*h,x=-2*h;else if(a===qr)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ni=new E,rn=new Ce,ap=new E(0,0,0),lp=new E(1,1,1),$n=new E,gr=new E,Ht=new E,Cu=new Ce,Iu=new cn,vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cp=0,Lu=new E,Oi=new cn,An=new Ce,_r=new E,Ss=new E,up=new E,hp=new cn,Du=new E(1,0,0),Pu=new E(0,1,0),Uu=new E(0,0,1),Nu={type:"added"},fp={type:"removed"},Fi={type:"childadded",child:null},aa={type:"childremoved",child:null},ht=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new vn,n=new cn,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new De}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ss,_r,this.up):An.lookAt(_r,Ss,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(An),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nu),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nu),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ht.DEFAULT_UP=new E(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new E,Tn=new E,la=new E,wn=new E,zi=new E,Bi=new E,Ou=new E,ca=new E,ua=new E,ha=new E,fa=new qe,da=new qe,pa=new qe,vi=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Tn.subVectors(n,t),la.subVectors(e,t);let o=on.dot(on),a=on.dot(Tn),l=on.dot(la),c=Tn.dot(Tn),u=Tn.dot(la),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return fa.setScalar(0),da.setScalar(0),pa.setScalar(0),fa.fromBufferAttribute(e,t),da.fromBufferAttribute(e,n),pa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(fa,r.x),o.addScaledVector(da,r.y),o.addScaledVector(pa,r.z),o}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Tn.subVectors(e,t),on.cross(Tn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),on.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;zi.subVectors(s,n),Bi.subVectors(r,n),ca.subVectors(e,n);let l=zi.dot(ca),c=Bi.dot(ca);if(l<=0&&c<=0)return t.copy(n);ua.subVectors(e,s);let u=zi.dot(ua),h=Bi.dot(ua);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(zi,o);ha.subVectors(e,r);let d=zi.dot(ha),g=Bi.dot(ha);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Bi,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ou.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Ou,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(zi,o).addScaledVector(Bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ne.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ne.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ne.workingColorSpace){if(e=dc(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ma(o,r,e+1/3),this.g=ma(o,r,e),this.b=ma(o,r,e-1/3)}return Ne.toWorkingColorSpace(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ne.fromWorkingColorSpace(Et.copy(this),e),Math.round(St(Et.r*255,0,255))*65536+Math.round(St(Et.g*255,0,255))*256+Math.round(St(Et.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Et.copy(this),t);let n=Et.r,s=Et.g,r=Et.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Mt){Ne.fromWorkingColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,s=Et.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(xr);let n=Ds(Yn.h,xr.h,t),s=Ds(Yn.s,xr.s,t),r=Ds(Yn.l,xr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new fe;fe.NAMES=Qh;var dp=0,kt=class extends jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Kt(),this.name="",this.blending=Yi,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Ua,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},At=class extends kt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pt=new E,vr=new K,at=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gl,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=an(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=an(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=an(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=an(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}};var Jr=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Kr=class extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}},pp=0,Zt=new Ce,ga=new ht,Hi=new E,Gt=new Ft,bs=new Ft,yt=new E,ft=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Kt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kh(e)?Kr:Jr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Gt.min,bs.min),Gt.expandByPoint(yt),yt.addVectors(Gt.max,bs.max),Gt.expandByPoint(yt)):(Gt.expandByPoint(bs.min),Gt.expandByPoint(bs.max))}Gt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(e,c),yt.add(Hi)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new E,l[C]=new E;let c=new E,u=new E,h=new E,f=new K,d=new K,g=new K,x=new E,m=new E;function p(C,b,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[C].add(x),a[b].add(x),a[M].add(x),l[C].add(m),l[b].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let C=0,b=A.length;C<b;++C){let M=A[C],I=M.start,H=M.count;for(let B=I,k=I+H;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let v=new E,_=new E,L=new E,w=new E;function R(C){L.fromBufferAttribute(s,C),w.copy(L);let b=a[C];v.copy(b),v.sub(L.multiplyScalar(L.dot(b))).normalize(),_.crossVectors(w,b);let I=_.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,b=A.length;C<b;++C){let M=A[C],I=M.start,H=M.count;for(let B=I,k=I+H;B<k;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new E,r=new E,o=new E,a=new E,l=new E,c=new E,u=new E,h=new E;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new at(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fu=new Ce,di=new os,yr=new Vt,zu=new E,Mr=new E,Sr=new E,br=new E,_a=new E,Ar=new E,Bu=new E,Tr=new E,Xe=class extends ht{constructor(e=new ft,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(_a.fromBufferAttribute(h,e),o?Ar.addScaledVector(_a,u):Ar.addScaledVector(_a.sub(t),u))}t.add(Ar)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(yr.containsPoint(di.origin)===!1&&(di.intersectSphere(yr,zu)===null||di.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(Fu.copy(r).invert(),di.copy(e.ray).applyMatrix4(Fu),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=A,L=v;_<L;_+=3){let w=a.getX(_),R=a.getX(_+1),C=a.getX(_+2);s=wr(this,p,e,n,c,u,h,w,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let A=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=wr(this,o,e,n,c,u,h,A,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=A,L=v;_<L;_+=3){let w=_,R=_+1,C=_+2;s=wr(this,p,e,n,c,u,h,w,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let A=m,v=m+1,_=m+2;s=wr(this,o,e,n,c,u,h,A,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function mp(i,e,t,n,s,r,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===xn,a),l===null)return null;Tr.copy(a),Tr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Tr);return c<t.near||c>t.far?null:{distance:c,point:Tr.clone(),object:i}}function wr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Mr),i.getVertexPosition(l,Sr),i.getVertexPosition(c,br);let u=mp(i,e,t,n,Mr,Sr,br,Bu);if(u){let h=new E;vi.getBarycoord(Bu,Mr,Sr,br,h),s&&(u.uv=vi.getInterpolatedAttribute(s,a,l,c,h,new K)),r&&(u.uv1=vi.getInterpolatedAttribute(r,a,l,c,h,new K)),o&&(u.normal=vi.getInterpolatedAttribute(o,a,l,c,h,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new E,materialIndex:0};vi.getNormal(Mr,Sr,br,f.normal),u.face=f,u.barycoord=h}return u}var Un=class i extends ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function g(x,m,p,A,v,_,L,w,R,C,b){let M=_/R,I=L/C,H=_/2,B=L/2,k=w/2,Z=R+1,W=C+1,ee=0,V=0,se=new E;for(let ue=0;ue<W;ue++){let Me=ue*I-B;for(let Oe=0;Oe<Z;Oe++){let je=Oe*M-H;se[x]=je*A,se[m]=Me*v,se[p]=k,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[p]=w>0?1:-1,u.push(se.x,se.y,se.z),h.push(Oe/R),h.push(1-ue/C),ee+=1}}for(let ue=0;ue<C;ue++)for(let Me=0;Me<R;Me++){let Oe=f+Me+Z*ue,je=f+Me+Z*(ue+1),q=f+(Me+1)+Z*(ue+1),te=f+(Me+1)+Z*ue;l.push(Oe,je,te),l.push(je,q,te),V+=6}a.addGroup(d,V,b),d+=V,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function as(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){let e={};for(let t=0;t<i.length;t++){let n=as(i[t]);for(let s in n)e[s]=n[s]}return e}function gp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}var oi={clone:as,merge:Lt},_p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,it=class extends kt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qr=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new E,Hu=new K,Gu=new K,mt=class extends Qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Hu,Gu),t.subVectors(Gu,Hu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gi=-90,Vi=1,yl=class extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mt(Gi,Vi,e,t);s.layers=this.layers,this.add(s);let r=new mt(Gi,Vi,e,t);r.layers=this.layers,this.add(r);let o=new mt(Gi,Vi,e,t);o.layers=this.layers,this.add(o);let a=new mt(Gi,Vi,e,t);a.layers=this.layers,this.add(a);let l=new mt(Gi,Vi,e,t);l.layers=this.layers,this.add(l);let c=new mt(Gi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jr=class extends bt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ml=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new it({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:_n});r.uniforms.tEquirect.value=t;let o=new Xe(s,r),a=t.minFilter;return t.minFilter===gn&&(t.minFilter=Nt),new yl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},xa=new E,vp=new E,yp=new De,Cn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xa.subVectors(n,t).cross(vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yp.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new Vt,Er=new E,Hs=class{constructor(e=new Cn,t=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],A=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-d,_-p).normalize(),n[1].setComponents(l+r,f+c,m+d,_+p).normalize(),n[2].setComponents(l+o,f+u,m+g,_+A).normalize(),n[3].setComponents(l-o,f-u,m-g,_-A).normalize(),n[4].setComponents(l-a,f-h,m-x,_-v).normalize(),t===Ln)n[5].setComponents(l+a,f+h,m+x,_+v).normalize();else if(t===qr)n[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Er.x=s.normal.x>0?e.max.x:e.min.x,Er.y=s.normal.y>0?e.max.y:e.min.y,Er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ef(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mp(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ei=class i extends ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let A=p*f-o;for(let v=0;v<c;v++){let _=v*h-r;g.push(_,-A,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){let v=A+c*p,_=A+c*(p+1),L=A+1+c*(p+1),w=A+1+c*p;d.push(v,_,w),d.push(_,L,w)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
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
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
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
#endif`,ym=`struct PhysicalMaterial {
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
}`,Mm=`
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lm=`#if defined( USE_POINTS_UV )
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
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,og=`float getShadowMask() {
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
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,Rg=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Ig=`#define DISTANCE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Og=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,zg=`#define LAMBERT
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
}`,Bg=`#define MATCAP
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
}`,Hg=`#define MATCAP
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
}`,Gg=`#define NORMAL
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
}`,Vg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Wg=`#define PHONG
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define STANDARD
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
}`,$g=`#define TOON
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
}`,Yg=`#define TOON
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
}`,Zg=`uniform float size;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Qg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
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
}`,e0=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Sp,alphahash_pars_fragment:bp,alphamap_fragment:Ap,alphamap_pars_fragment:Tp,alphatest_fragment:wp,alphatest_pars_fragment:Ep,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Ip,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Pp,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Op,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:Hp,color_fragment:Gp,color_pars_fragment:Vp,color_pars_vertex:kp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Yp,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Kp,colorspace_fragment:Qp,colorspace_pars_fragment:jp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:um,lights_lambert_fragment:hm,lights_lambert_pars_fragment:fm,lights_pars_begin:dm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:xm,lights_physical_fragment:vm,lights_physical_pars_fragment:ym,lights_fragment_begin:Mm,lights_fragment_maps:Sm,lights_fragment_end:bm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Em,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Im,map_particle_pars_fragment:Lm,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Pm,morphinstance_vertex:Um,morphcolor_vertex:Nm,morphnormal_vertex:Om,morphtarget_pars_vertex:Fm,morphtarget_vertex:zm,normal_fragment_begin:Bm,normal_fragment_maps:Hm,normal_pars_fragment:Gm,normal_pars_vertex:Vm,normal_vertex:km,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Ym,opaque_fragment:Zm,packing:Jm,premultiplied_alpha_fragment:Km,project_vertex:Qm,dithering_fragment:jm,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:og,skinbase_vertex:ag,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:ug,specularmap_fragment:hg,specularmap_pars_fragment:fg,tonemapping_fragment:dg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:xg,uv_vertex:vg,worldpos_vertex:yg,background_vert:Mg,background_frag:Sg,backgroundCube_vert:bg,backgroundCube_frag:Ag,cube_vert:Tg,cube_frag:wg,depth_vert:Eg,depth_frag:Rg,distanceRGBA_vert:Cg,distanceRGBA_frag:Ig,equirect_vert:Lg,equirect_frag:Dg,linedashed_vert:Pg,linedashed_frag:Ug,meshbasic_vert:Ng,meshbasic_frag:Og,meshlambert_vert:Fg,meshlambert_frag:zg,meshmatcap_vert:Bg,meshmatcap_frag:Hg,meshnormal_vert:Gg,meshnormal_frag:Vg,meshphong_vert:kg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:qg,meshtoon_vert:$g,meshtoon_frag:Yg,points_vert:Zg,points_frag:Jg,shadow_vert:Kg,shadow_frag:Qg,sprite_vert:jg,sprite_frag:e0},ne={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},mn={basic:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Lt([ne.points,ne.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Lt([ne.common,ne.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Lt([ne.sprite,ne.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Lt([ne.common,ne.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Lt([ne.lights,ne.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};mn.physical={uniforms:Lt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Rr={r:0,b:0,g:0},mi=new vn,t0=new Ce;function n0(i,e,t,n,s,r,o){let a=new fe(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(A){let v=A.isScene===!0?A.background:null;return v&&v.isTexture&&(v=(A.backgroundBlurriness>0?t:e).get(v)),v}function x(A){let v=!1,_=g(A);_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===Do)?(u===void 0&&(u=new Xe(new Un(1,1,1),new it({name:"BackgroundCubeMaterial",uniforms:as(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),mi.copy(v.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(mi)),u.material.toneMapped=Ne.getTransfer(_.colorSpace)!==Ze,(h!==_||f!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Xe(new ei(2,2),new it({name:"BackgroundMaterial",uniforms:as(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ne.getTransfer(_.colorSpace)!==Ze,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,v){A.getRGB(Rr,jh(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(A,v=1){a.set(A),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:x,addToRenderList:m}}function i0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,I,H,B,k){let Z=!1,W=h(B,H,I);r!==W&&(r=W,c(r.object)),Z=d(M,B,H,k),Z&&g(M,B,H,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(M,I,H,B),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,I,H){let B=H.wireframe===!0,k=n[M.id];k===void 0&&(k={},n[M.id]=k);let Z=k[I.id];Z===void 0&&(Z={},k[I.id]=Z);let W=Z[B];return W===void 0&&(W=f(l()),Z[B]=W),W}function f(M){let I=[],H=[],B=[];for(let k=0;k<t;k++)I[k]=0,H[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:B,object:M,attributes:{},index:null}}function d(M,I,H,B){let k=r.attributes,Z=I.attributes,W=0,ee=H.getAttributes();for(let V in ee)if(ee[V].location>=0){let ue=k[V],Me=Z[V];if(Me===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),ue===void 0||ue.attribute!==Me||Me&&ue.data!==Me.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(M,I,H,B){let k={},Z=I.attributes,W=0,ee=H.getAttributes();for(let V in ee)if(ee[V].location>=0){let ue=Z[V];ue===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));let Me={};Me.attribute=ue,ue&&ue.data&&(Me.data=ue.data),k[V]=Me,W++}r.attributes=k,r.attributesNum=W,r.index=B}function x(){let M=r.newAttributes;for(let I=0,H=M.length;I<H;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let H=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;H[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),k[M]!==I&&(i.vertexAttribDivisor(M,I),k[M]=I)}function A(){let M=r.newAttributes,I=r.enabledAttributes;for(let H=0,B=I.length;H<B;H++)I[H]!==M[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function v(M,I,H,B,k,Z,W){W===!0?i.vertexAttribIPointer(M,I,H,k,Z):i.vertexAttribPointer(M,I,H,B,k,Z)}function _(M,I,H,B){x();let k=B.attributes,Z=H.getAttributes(),W=I.defaultAttributeValues;for(let ee in Z){let V=Z[ee];if(V.location>=0){let se=k[ee];if(se===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){let ue=se.normalized,Me=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;let je=Oe.buffer,q=Oe.type,te=Oe.bytesPerElement,xe=q===i.INT||q===i.UNSIGNED_INT||se.gpuType===oc;if(se.isInterleavedBufferAttribute){let re=se.data,Te=re.stride,Re=se.offset;if(re.isInstancedInterleavedBuffer){for(let Fe=0;Fe<V.locationSize;Fe++)p(V.location+Fe,re.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Fe=0;Fe<V.locationSize;Fe++)m(V.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Fe=0;Fe<V.locationSize;Fe++)v(V.location+Fe,Me/V.locationSize,q,ue,Te*te,(Re+Me/V.locationSize*Fe)*te,xe)}else{if(se.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)p(V.location+re,se.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);i.bindBuffer(i.ARRAY_BUFFER,je);for(let re=0;re<V.locationSize;re++)v(V.location+re,Me/V.locationSize,q,ue,Me*te,Me/V.locationSize*re*te,xe)}}else if(W!==void 0){let ue=W[ee];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(V.location,ue);break;case 3:i.vertexAttrib3fv(V.location,ue);break;case 4:i.vertexAttrib4fv(V.location,ue);break;default:i.vertexAttrib1fv(V.location,ue)}}}}A()}function L(){C();for(let M in n){let I=n[M];for(let H in I){let B=I[H];for(let k in B)u(B[k].object),delete B[k];delete I[H]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let H in I){let B=I[H];for(let k in B)u(B[k].object),delete B[k];delete I[H]}delete n[M.id]}function R(M){for(let I in n){let H=n[I];if(H[M.id]===void 0)continue;let B=H[M.id];for(let k in B)u(B[k].object),delete B[k];delete H[M.id]}}function C(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function s0(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function r0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Jt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ln&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:L,maxSamples:w}}function o0(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Cn,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let A=r?0:n,v=A*4,_=p.clippingState||null;l.value=_,_=u(g,f,v,d);for(let L=0;L!==v;++L)_[L]=t[L];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=d;v!==x;++v,_+=4)o.copy(h[v]).applyMatrix4(A,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function a0(i){let e=new WeakMap;function t(o,a){return a===Va?o.mapping=ji:a===ka&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Va||a===ka)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ml(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ti=class extends Qr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qi=4,Vu=[.125,.215,.35,.446,.526,.582],yi=20,va=new ti,ku=new fe,ya=null,Ma=0,Sa=0,ba=!1,_i=(1+Math.sqrt(5))/2,ki=1/_i,Wu=[new E(-_i,ki,0),new E(_i,ki,0),new E(-ki,0,_i),new E(ki,0,_i),new E(0,_i,-ki),new E(0,_i,ki),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ya=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,Ma,Sa),this._renderer.xr.enabled=ba,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:un,format:Jt,colorSpace:Ct,depthBuffer:!1},s=Xu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(r)),this._blurMaterial=c0(r,e,t)}return s}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,s){let a=new mt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ku),u.toneMapping=Qn,u.autoClear=!1;let d=new At({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new Xe(new Un,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(ku),x=!0);for(let p=0;p<6;p++){let A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Cr(s,A*v,p>2?v:0,v,v),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ji||e.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,va)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wu[(s-r-1)%Wu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Xe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*yi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);let p=[],A=0;for(let R=0;R<yi;++R){let C=R/x,b=Math.exp(-C*C/2);p.push(b),R===0?A+=b:R<m&&(A+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let _=this._sizeLods[s],L=3*_*(s>v-qi?s-v+qi:0),w=4*(this._cubeSize-_);Cr(t,L,w,3*_,2*_),l.setRenderTarget(t),l.render(h,va)}};function l0(i){let e=[],t=[],n=[],s=i,r=i-qi+1+Vu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-qi?l=Vu[o-i+qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,A=new Float32Array(x*g*d),v=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let w=0;w<d;w++){let R=w%3*2/3-1,C=w>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];A.set(b,x*g*w),v.set(f,m*g*w);let M=[w,w,w,w,w,w];_.set(M,p*g*w)}let L=new ft;L.setAttribute("position",new at(A,x)),L.setAttribute("uv",new at(v,m)),L.setAttribute("faceIndex",new at(_,p)),e.push(L),s>qi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xu(i,e,t){let n=new Dt(i,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function c0(i,e,t){let n=new Float32Array(yi),s=new E(0,1,0);return new it({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pc(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function qu(){return new it({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function $u(){return new it({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function u0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Va||l===ka,u=l===ji||l===es;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new eo(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new eo(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function h0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function f0(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let A=d.array;x=d.version;for(let v=0,_=A.length;v<_;v+=3){let L=A[v+0],w=A[v+1],R=A[v+2];f.push(L,w,w,R,R,L)}}else if(g!==void 0){let A=g.array;x=g.version;for(let v=0,_=A.length/3-1;v<_;v+=3){let L=v+0,w=v+1,R=v+2;f.push(L,w,w,R,R,L)}}else return;let m=new(Kh(f)?Kr:Jr)(f,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function d0(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A]*x[A];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function p0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m0(i,e,t){let n=new WeakMap,s=new qe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*L*4*h),R=new Yr(w,_,L,h);R.type=ln,R.needsUpdate=!0;let C=v*4;for(let M=0;M<h;M++){let I=m[M],H=p[M],B=A[M],k=_*L*4*M;for(let Z=0;Z<I.count;Z++){let W=Z*C;d===!0&&(s.fromBufferAttribute(I,Z),w[k+W+0]=s.x,w[k+W+1]=s.y,w[k+W+2]=s.z,w[k+W+3]=0),g===!0&&(s.fromBufferAttribute(H,Z),w[k+W+4]=s.x,w[k+W+5]=s.y,w[k+W+6]=s.z,w[k+W+7]=0),x===!0&&(s.fromBufferAttribute(B,Z),w[k+W+8]=s.x,w[k+W+9]=s.y,w[k+W+10]=s.z,w[k+W+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new K(_,L)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function g0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var to=class extends bt{constructor(e,t,n,s,r,o,a,l,c,u=Zi){if(u!==Zi&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zi&&(n=bi),n===void 0&&u===ns&&(n=ts),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},tf=new bt,Yu=new to(1,1),nf=new Yr,sf=new vl,rf=new jr,Zu=[],Ju=[],Ku=new Float32Array(16),Qu=new Float32Array(9),ju=new Float32Array(4);function hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function No(i,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function M0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),xt(t,n)}}function S0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),xt(t,n)}}function b0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Ku.set(n),i.uniformMatrix4fv(this.addr,!1,Ku),xt(t,n)}}function A0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function T0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function w0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function R0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function L0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function D0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yu.compareFunction=Zh,r=Yu):r=tf,t.setTexture2D(e||r,s)}function P0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sf,s)}function U0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rf,s)}function N0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nf,s)}function O0(i){switch(i){case 5126:return _0;case 35664:return x0;case 35665:return v0;case 35666:return y0;case 35674:return M0;case 35675:return S0;case 35676:return b0;case 5124:case 35670:return A0;case 35667:case 35671:return T0;case 35668:case 35672:return w0;case 35669:case 35673:return E0;case 5125:return R0;case 36294:return C0;case 36295:return I0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}function F0(i,e){i.uniform1fv(this.addr,e)}function z0(i,e){let t=hs(e,this.size,2);i.uniform2fv(this.addr,t)}function B0(i,e){let t=hs(e,this.size,3);i.uniform3fv(this.addr,t)}function H0(i,e){let t=hs(e,this.size,4);i.uniform4fv(this.addr,t)}function G0(i,e){let t=hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V0(i,e){let t=hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function k0(i,e){let t=hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function W0(i,e){i.uniform1iv(this.addr,e)}function X0(i,e){i.uniform2iv(this.addr,e)}function q0(i,e){i.uniform3iv(this.addr,e)}function $0(i,e){i.uniform4iv(this.addr,e)}function Y0(i,e){i.uniform1uiv(this.addr,e)}function Z0(i,e){i.uniform2uiv(this.addr,e)}function J0(i,e){i.uniform3uiv(this.addr,e)}function K0(i,e){i.uniform4uiv(this.addr,e)}function Q0(i,e,t){let n=this.cache,s=e.length,r=No(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||tf,r[o])}function j0(i,e,t){let n=this.cache,s=e.length,r=No(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sf,r[o])}function e_(i,e,t){let n=this.cache,s=e.length,r=No(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||rf,r[o])}function t_(i,e,t){let n=this.cache,s=e.length,r=No(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nf,r[o])}function n_(i){switch(i){case 5126:return F0;case 35664:return z0;case 35665:return B0;case 35666:return H0;case 35674:return G0;case 35675:return V0;case 35676:return k0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return $0;case 5125:return Y0;case 36294:return Z0;case 36295:return J0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}var Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=O0(t.type)}},bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n_(t.type)}},Al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Aa=/(\w+)(\])?(\[|\.)?/g;function eh(i,e){i.seq.push(e),i.map[e.id]=e}function i_(i,e,t){let n=i.name,s=n.length;for(Aa.lastIndex=0;;){let r=Aa.exec(n),o=Aa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){eh(t,c===void 0?new Sl(a,i,e):new bl(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Al(a),eh(t,h)),t=h}}}var Ki=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);i_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function th(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var s_=37297,r_=0;function o_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var nh=new De;function a_(i){Ne._getMatrix(nh,Ne.workingColorSpace,i);let e=`mat3( ${nh.elements.map(t=>t.toFixed(4))} )`;switch(Ne.getTransfer(i)){case Uo:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ih(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+o_(i.getShaderSource(e),o)}else return s}function l_(i,e){let t=a_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function c_(i,e){let t;switch(e){case ec:t="Linear";break;case tc:t="Reinhard";break;case nc:t="Cineon";break;case nr:t="ACESFilmic";break;case ic:t="AgX";break;case sc:t="Neutral";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ir=new E;function u_(){Ne.getLuminanceCoefficients(Ir);let i=Ir.x.toFixed(4),e=Ir.y.toFixed(4),t=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function f_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Cs(i){return i!==""}function sh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(p_,g_)}var m_=new Map;function g_(i,e){let t=Ue[e];if(t===void 0){let n=m_.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}var __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(i){return i.replace(__,x_)}function x_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function y_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case es:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function S_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oh:e="ENVMAP_BLENDING_MULTIPLY";break;case bd:e="ENVMAP_BLENDING_MIX";break;case Ad:e="ENVMAP_BLENDING_ADD";break}return e}function b_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function A_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=v_(t),c=y_(t),u=M_(t),h=S_(t),f=b_(t),d=h_(t),g=f_(r),x=s.createProgram(),m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(m=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Qn?c_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,l_("linearToOutputTexel",t.outputColorSpace),u_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),o=Tl(o),o=sh(o,t),o=rh(o,t),a=Tl(a),a=sh(a,t),a=rh(a,t),o=oh(o),a=oh(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=A+m+o,_=A+p+a,L=th(s,s.VERTEX_SHADER,v),w=th(s,s.FRAGMENT_SHADER,_);s.attachShader(x,L),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(I){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(L).trim(),k=s.getShaderInfoLog(w).trim(),Z=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,w);else{let ee=ih(s,L,"vertex"),V=ih(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+ee+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||k==="")&&(W=!1);W&&(I.diagnostics={runnable:Z,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(L),s.deleteShader(w),C=new Ki(s,x),b=d_(s,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,s_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=w,this}var T_=0,wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new El(e),t.set(e,n)),n}},El=class{constructor(e){this.id=T_++,this.code=e,this.usedTimes=0}};function w_(i,e,t,n,s,r,o){let a=new Zr,l=new wl,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,H,B){let k=H.fog,Z=B.geometry,W=b.isMeshStandardMaterial?H.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),V=ee&&ee.mapping===Do?ee.image.height:null,se=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=ue!==void 0?ue.length:0,Oe=0;Z.morphAttributes.position!==void 0&&(Oe=1),Z.morphAttributes.normal!==void 0&&(Oe=2),Z.morphAttributes.color!==void 0&&(Oe=3);let je,q,te,xe;if(se){let Je=mn[se];je=Je.vertexShader,q=Je.fragmentShader}else je=b.vertexShader,q=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),xe=l.getFragmentShaderID(b);let re=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Re=B.isInstancedMesh===!0,Fe=B.isBatchedMesh===!0,lt=!!b.map,Ve=!!b.matcap,dt=!!ee,N=!!b.aoMap,$t=!!b.lightMap,Be=!!b.bumpMap,He=!!b.normalMap,be=!!b.displacementMap,st=!!b.emissiveMap,Se=!!b.metalnessMap,T=!!b.roughnessMap,y=b.anisotropy>0,O=b.clearcoat>0,$=b.dispersion>0,J=b.iridescence>0,X=b.sheen>0,ve=b.transmission>0,oe=y&&!!b.anisotropyMap,he=O&&!!b.clearcoatMap,ke=O&&!!b.clearcoatNormalMap,Q=O&&!!b.clearcoatRoughnessMap,de=J&&!!b.iridescenceMap,Ae=J&&!!b.iridescenceThicknessMap,we=X&&!!b.sheenColorMap,pe=X&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,Pe=!!b.specularColorMap,et=!!b.specularIntensityMap,D=ve&&!!b.transmissionMap,ie=ve&&!!b.thicknessMap,G=!!b.gradientMap,Y=!!b.alphaMap,ce=b.alphaTest>0,ae=!!b.alphaHash,Ie=!!b.extensions,ut=Qn;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ut=i.toneMapping);let Tt={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:q,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Fe,batchingColor:Fe&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ct,alphaToCoverage:!!b.alphaToCoverage,map:lt,matcap:Ve,envMap:dt,envMapMode:dt&&ee.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:$t,bumpMap:Be,normalMap:He,displacementMap:f&&be,emissiveMap:st,normalMapObjectSpace:He&&b.normalMapType===Id,normalMapTangentSpace:He&&b.normalMapType===Yh,metalnessMap:Se,roughnessMap:T,anisotropy:y,anisotropyMap:oe,clearcoat:O,clearcoatMap:he,clearcoatNormalMap:ke,clearcoatRoughnessMap:Q,dispersion:$,iridescence:J,iridescenceMap:de,iridescenceThicknessMap:Ae,sheen:X,sheenColorMap:we,sheenRoughnessMap:pe,specularMap:Ge,specularColorMap:Pe,specularIntensityMap:et,transmission:ve,transmissionMap:D,thicknessMap:ie,gradientMap:G,opaque:b.transparent===!1&&b.blending===Yi&&b.alphaToCoverage===!1,alphaMap:Y,alphaTest:ce,alphaHash:ae,combine:b.combine,mapUv:lt&&x(b.map.channel),aoMapUv:N&&x(b.aoMap.channel),lightMapUv:$t&&x(b.lightMap.channel),bumpMapUv:Be&&x(b.bumpMap.channel),normalMapUv:He&&x(b.normalMap.channel),displacementMapUv:be&&x(b.displacementMap.channel),emissiveMapUv:st&&x(b.emissiveMap.channel),metalnessMapUv:Se&&x(b.metalnessMap.channel),roughnessMapUv:T&&x(b.roughnessMap.channel),anisotropyMapUv:oe&&x(b.anisotropyMap.channel),clearcoatMapUv:he&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&x(b.sheenRoughnessMap.channel),specularMapUv:Ge&&x(b.specularMap.channel),specularColorMapUv:Pe&&x(b.specularColorMap.channel),specularIntensityMapUv:et&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:ie&&x(b.thicknessMap.channel),alphaMapUv:Y&&x(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(He||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(lt||Y),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:lt&&b.map.isVideoTexture===!0&&Ne.getTransfer(b.map.colorSpace)===Ze,decodeVideoTextureEmissive:st&&b.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(b.emissiveMap.colorSpace)===Ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ut,flipSided:b.side===Ot,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(A(M,b),v(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function A(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=g[b.type],I;if(M){let H=mn[M];I=oi.clone(H.uniforms)}else I=b.uniforms;return I}function L(b,M){let I;for(let H=0,B=u.length;H<B;H++){let k=u[H];if(k.cacheKey===M){I=k,++I.usedTimes;break}}return I===void 0&&(I=new A_(i,M,b,r),u.push(I)),I}function w(b){if(--b.usedTimes===0){let M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:C}}function E_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function R_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ch(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||R_),n.length>1&&n.sort(f||lh),s.length>1&&s.sort(f||lh)}function u(){for(let h=e,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function C_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ch,i.set(n,[o])):s>=r.length?(o=new ch,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function I_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new fe};break;case"SpotLight":t={position:new E,direction:new E,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function L_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var D_=0;function P_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function U_(i){let e=new I_,t=L_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);let s=new E,r=new Ce,o=new Ce;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,A=0,v=0,_=0,L=0,w=0,R=0;c.sort(P_);for(let b=0,M=c.length;b<M;b++){let I=c[b],H=I.color,B=I.intensity,k=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=H.r*B,h+=H.g*B,f+=H.b*B;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],B);R++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,V=t.get(I);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=I.shadow.matrix,A++}n.directional[d]=W,d++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(H).multiplyScalar(B),W.distance=k,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[x]=W;let ee=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,ee.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[x]=ee.matrix,I.castShadow){let V=t.get(I);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=Z,_++}x++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(H).multiplyScalar(B),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let ee=I.shadow,V=t.get(I);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(B),W.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==A||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==L||C.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=A,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=L,C.numLightProbes=R,n.version=D_++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){let v=c[p];if(v.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(v.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function uh(i){let e=new U_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function N_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new uh(i),e.set(s,[a])):r>=o.length?(a=new uh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Rl=class extends kt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cl=class extends kt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},O_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F_=`uniform sampler2D shadow_pass;
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
}`;function z_(i,e,t){let n=new Hs,s=new K,r=new K,o=new qe,a=new Rl({depthPacking:Cd}),l=new Cl,c={},u=t.maxTextureSize,h={[xn]:Ot,[Ot]:xn,[Ut]:Ut},f=new it({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:O_,fragmentShader:F_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ft;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let p=this.type;this.render=function(w,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),H=i.state;H.setBlending(_n),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=p!==Rn&&this.type===Rn,k=p===Rn&&this.type!==Rn;for(let Z=0,W=w.length;Z<W;Z++){let ee=w[Z],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let se=V.getFrameExtents();if(s.multiply(se),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||B===!0||k===!0){let Me=this.type!==Rn?{minFilter:Rt,magFilter:Rt}:{};V.map!==null&&V.map.dispose(),V.map=new Dt(s.x,s.y,Me),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ue=V.getViewportCount();for(let Me=0;Me<ue;Me++){let Oe=V.getViewport(Me);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),H.viewport(o),V.updateMatrices(ee,Me),n=V.getFrustum(),_(R,C,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Rn&&A(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,I)};function A(w,R){let C=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dt(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,C,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,C,d,x,null)}function v(w,R,C,b){let M=null,I=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let H=M.uuid,B=R.uuid,k=c[H];k===void 0&&(k={},c[H]=k);let Z=k[B];Z===void 0&&(Z=M.clone(),k[B]=Z,R.addEventListener("dispose",L)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,b===Rn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=i.properties.get(M);H.light=C}return M}function _(w,R,C,b,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Rn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let B=e.update(w),k=w.material;if(Array.isArray(k)){let Z=B.groups;for(let W=0,ee=Z.length;W<ee;W++){let V=Z[W],se=k[V.materialIndex];if(se&&se.visible){let ue=v(w,se,b,M);w.onBeforeShadow(i,w,R,C,B,ue,V),i.renderBufferDirect(C,null,B,ue,w,V),w.onAfterShadow(i,w,R,C,B,ue,V)}}}else if(k.visible){let Z=v(w,k,b,M);w.onBeforeShadow(i,w,R,C,B,Z,null),i.renderBufferDirect(C,null,B,Z,w,null),w.onAfterShadow(i,w,R,C,B,Z,null)}}let H=w.children;for(let B=0,k=H.length;B<k;B++)_(H[B],R,C,b,M)}function L(w){w.target.removeEventListener("dispose",L);for(let C in c){let b=c[C],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var B_={[Na]:Oa,[Fa]:Ha,[za]:Ga,[Qi]:Ba,[Oa]:Na,[Ha]:Fa,[Ga]:za,[Ba]:Qi};function H_(i,e){function t(){let D=!1,ie=new qe,G=null,Y=new qe(0,0,0,0);return{setMask:function(ce){G!==ce&&!D&&(i.colorMask(ce,ce,ce,ce),G=ce)},setLocked:function(ce){D=ce},setClear:function(ce,ae,Ie,ut,Tt){Tt===!0&&(ce*=ut,ae*=ut,Ie*=ut),ie.set(ce,ae,Ie,ut),Y.equals(ie)===!1&&(i.clearColor(ce,ae,Ie,ut),Y.copy(ie))},reset:function(){D=!1,G=null,Y.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,G=null,Y=null,ce=null;return{setReversed:function(ae){if(ie!==ae){let Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);let ut=ce;ce=null,this.setClear(ut)}ie=ae},getReversed:function(){return ie},setTest:function(ae){ae?re(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ae){G!==ae&&!D&&(i.depthMask(ae),G=ae)},setFunc:function(ae){if(ie&&(ae=B_[ae]),Y!==ae){switch(ae){case Na:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=ae}},setLocked:function(ae){D=ae},setClear:function(ae){ce!==ae&&(ie&&(ae=1-ae),i.clearDepth(ae),ce=ae)},reset:function(){D=!1,G=null,Y=null,ce=null,ie=!1}}}function s(){let D=!1,ie=null,G=null,Y=null,ce=null,ae=null,Ie=null,ut=null,Tt=null;return{setTest:function(Je){D||(Je?re(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Je){ie!==Je&&!D&&(i.stencilMask(Je),ie=Je)},setFunc:function(Je,tn,yn){(G!==Je||Y!==tn||ce!==yn)&&(i.stencilFunc(Je,tn,yn),G=Je,Y=tn,ce=yn)},setOp:function(Je,tn,yn){(ae!==Je||Ie!==tn||ut!==yn)&&(i.stencilOp(Je,tn,yn),ae=Je,Ie=tn,ut=yn)},setLocked:function(Je){D=Je},setClear:function(Je){Tt!==Je&&(i.clearStencil(Je),Tt=Je)},reset:function(){D=!1,ie=null,G=null,Y=null,ce=null,ae=null,Ie=null,ut=null,Tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,A=null,v=null,_=null,L=null,w=null,R=new fe(0,0,0),C=0,b=!1,M=null,I=null,H=null,B=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ee=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ee>=2);let se=null,ue={},Me=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),je=new qe().fromArray(Me),q=new qe().fromArray(Oe);function te(D,ie,G,Y){let ce=new Uint8Array(4),ae=i.createTexture();i.bindTexture(D,ae),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<G;Ie++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ie+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ae}let xe={};xe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(Qi),Be(!1),He(fu),re(i.CULL_FACE),N(_n);function re(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Te(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Re(D,ie){return h[D]!==ie?(i.bindFramebuffer(D,ie),h[D]=ie,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ie),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Fe(D,ie){let G=d,Y=!1;if(D){G=f.get(ie),G===void 0&&(G=[],f.set(ie,G));let ce=D.textures;if(G.length!==ce.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ie=ce.length;ae<Ie;ae++)G[ae]=i.COLOR_ATTACHMENT0+ae;G.length=ce.length,Y=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Y=!0);Y&&i.drawBuffers(G)}function lt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Ve={[xi]:i.FUNC_ADD,[od]:i.FUNC_SUBTRACT,[ad]:i.FUNC_REVERSE_SUBTRACT};Ve[ld]=i.MIN,Ve[cd]=i.MAX;let dt={[ud]:i.ZERO,[hd]:i.ONE,[fd]:i.SRC_COLOR,[Pa]:i.SRC_ALPHA,[xd]:i.SRC_ALPHA_SATURATE,[gd]:i.DST_COLOR,[pd]:i.DST_ALPHA,[dd]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[_d]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[vd]:i.CONSTANT_COLOR,[yd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[Sd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,ie,G,Y,ce,ae,Ie,ut,Tt,Je){if(D===_n){x===!0&&(Te(i.BLEND),x=!1);return}if(x===!1&&(re(i.BLEND),x=!0),D!==rd){if(D!==m||Je!==b){if((p!==xi||_!==xi)&&(i.blendEquation(i.FUNC_ADD),p=xi,_=xi),Je)switch(D){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mi:i.blendFunc(i.ONE,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,v=null,L=null,w=null,R.set(0,0,0),C=0,m=D,b=Je}return}ce=ce||ie,ae=ae||G,Ie=Ie||Y,(ie!==p||ce!==_)&&(i.blendEquationSeparate(Ve[ie],Ve[ce]),p=ie,_=ce),(G!==A||Y!==v||ae!==L||Ie!==w)&&(i.blendFuncSeparate(dt[G],dt[Y],dt[ae],dt[Ie]),A=G,v=Y,L=ae,w=Ie),(ut.equals(R)===!1||Tt!==C)&&(i.blendColor(ut.r,ut.g,ut.b,Tt),R.copy(ut),C=Tt),m=D,b=!1}function $t(D,ie){D.side===Ut?Te(i.CULL_FACE):re(i.CULL_FACE);let G=D.side===Ot;ie&&(G=!G),Be(G),D.blending===Yi&&D.transparent===!1?N(_n):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Y=D.stencilWrite;a.setTest(Y),Y&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),st(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function He(D){D!==nd?(re(i.CULL_FACE),D!==I&&(D===fu?i.cullFace(i.BACK):D===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),I=D}function be(D){D!==H&&(W&&i.lineWidth(D),H=D)}function st(D,ie,G){D?(re(i.POLYGON_OFFSET_FILL),(B!==ie||k!==G)&&(i.polygonOffset(ie,G),B=ie,k=G)):Te(i.POLYGON_OFFSET_FILL)}function Se(D){D?re(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+Z-1),se!==D&&(i.activeTexture(D),se=D)}function y(D,ie,G){G===void 0&&(se===null?G=i.TEXTURE0+Z-1:G=se);let Y=ue[G];Y===void 0&&(Y={type:void 0,texture:void 0},ue[G]=Y),(Y.type!==D||Y.texture!==ie)&&(se!==G&&(i.activeTexture(G),se=G),i.bindTexture(D,ie||xe[D]),Y.type=D,Y.texture=ie)}function O(){let D=ue[se];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(D){je.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),je.copy(D))}function pe(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Ge(D,ie){let G=c.get(ie);G===void 0&&(G=new WeakMap,c.set(ie,G));let Y=G.get(D);Y===void 0&&(Y=i.getUniformBlockIndex(ie,D.name),G.set(D,Y))}function Pe(D,ie){let Y=c.get(ie).get(D);l.get(ie)!==Y&&(i.uniformBlockBinding(ie,Y,D.__bindingPointIndex),l.set(ie,Y))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,ue={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,A=null,v=null,_=null,L=null,w=null,R=new fe(0,0,0),C=0,b=!1,M=null,I=null,H=null,B=null,k=null,je.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Te,bindFramebuffer:Re,drawBuffers:Fe,useProgram:lt,setBlending:N,setMaterial:$t,setFlipSided:Be,setCullFace:He,setLineWidth:be,setPolygonOffset:st,setScissorTest:Se,activeTexture:T,bindTexture:y,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:de,texImage3D:Ae,updateUBOMapping:Ge,uniformBlockBinding:Pe,texStorage2D:ke,texStorage3D:Q,texSubImage2D:X,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:we,viewport:pe,reset:et}}function hh(i,e,t,n){let s=G_(n);switch(t){case Gh:return i*e;case kh:return i*e;case Wh:return i*e*2;case cc:return i*e/s.components*s.byteLength;case uc:return i*e/s.components*s.byteLength;case Xh:return i*e*2/s.components*s.byteLength;case hc:return i*e*2/s.components*s.byteLength;case Vh:return i*e*3/s.components*s.byteLength;case Jt:return i*e*4/s.components*s.byteLength;case fc:return i*e*4/s.components*s.byteLength;case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case $a:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(e,8)/2;case Ya:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xr:case hl:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qh:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G_(i){switch(i){case Pn:case zh:return{byteLength:1,components:1};case zs:case Bh:case un:return{byteLength:2,components:1};case ac:case lc:return{byteLength:2,components:4};case bi:case oc:case ln:return{byteLength:4,components:1};case Hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function V_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return d?new OffscreenCanvas(T,y):Bs("canvas")}function x(T,y,O){let $=1,J=Se(T);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let X=Math.floor($*J.width),ve=Math.floor($*J.height);h===void 0&&(h=g(X,ve));let oe=y?g(X,ve):h;return oe.width=X,oe.height=ve,oe.getContext("2d").drawImage(T,0,0,X,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+ve+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,y,O,$,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=y;if(y===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),y===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),y===i.RGBA){let ve=J?Uo:Ne.getTransfer($);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=ve===Ze?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function _(T,y){let O;return T?y===null||y===bi||y===ts?O=i.DEPTH24_STENCIL8:y===ln?O=i.DEPTH32F_STENCIL8:y===zs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===bi||y===ts?O=i.DEPTH_COMPONENT24:y===ln?O=i.DEPTH_COMPONENT32F:y===zs&&(O=i.DEPTH_COMPONENT16),O}function L(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Rt&&T.minFilter!==Nt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function w(T){let y=T.target;y.removeEventListener("dispose",w),C(y),y.isVideoTexture&&u.delete(y)}function R(T){let y=T.target;y.removeEventListener("dispose",R),M(y)}function C(T){let y=n.get(T);if(y.__webglInit===void 0)return;let O=T.source,$=f.get(O);if($){let J=$[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys($).length===0&&f.delete(O)}n.remove(T)}function b(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let O=T.source,$=f.get(O);delete $[y.__cacheKey],o.memory.textures--}function M(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let J=0;J<y.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[$][J]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=T.textures;for(let $=0,J=O.length;$<J;$++){let X=n.get(O[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(T)}let I=0;function H(){I=0}function B(){let T=I;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),I+=1,T}function k(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Z(T,y){let O=n.get(T);if(T.isVideoTexture&&be(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,y);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function W(T,y){let O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function ee(T,y){let O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function V(T,y){let O=n.get(T);if(T.version>0&&O.__version!==T.version){te(O,T,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let se={[Si]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Fs]:i.MIRRORED_REPEAT},ue={[Rt]:i.NEAREST,[rc]:i.NEAREST_MIPMAP_NEAREST,[Xi]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[Is]:i.LINEAR_MIPMAP_NEAREST,[gn]:i.LINEAR_MIPMAP_LINEAR},Me={[Ld]:i.NEVER,[Fd]:i.ALWAYS,[Dd]:i.LESS,[Zh]:i.LEQUAL,[Pd]:i.EQUAL,[Od]:i.GEQUAL,[Ud]:i.GREATER,[Nd]:i.NOTEQUAL};function Oe(T,y){if(y.type===ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Nt||y.magFilter===Is||y.magFilter===Xi||y.magFilter===gn||y.minFilter===Nt||y.minFilter===Is||y.minFilter===Xi||y.minFilter===gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,se[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,se[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,se[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ue[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rt||y.minFilter!==Xi&&y.minFilter!==gn||y.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function je(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",w));let $=y.source,J=f.get($);J===void 0&&(J={},f.set($,J));let X=k(y);if(X!==T.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[X].usedTimes++;let ve=J[T.__cacheKey];ve!==void 0&&(J[T.__cacheKey].usedTimes--,ve.usedTimes===0&&b(y)),T.__cacheKey=X,T.__webglTexture=J[X].texture}return O}function q(T,y,O){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);let J=je(T,y),X=y.source;t.bindTexture($,T.__webglTexture,i.TEXTURE0+O);let ve=n.get(X);if(X.version!==ve.__version||J===!0){t.activeTexture(i.TEXTURE0+O);let oe=Ne.getPrimaries(Ne.workingColorSpace),he=y.colorSpace===Jn?null:Ne.getPrimaries(y.colorSpace),ke=y.colorSpace===Jn||oe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Q=x(y.image,!1,s.maxTextureSize);Q=st(y,Q);let de=r.convert(y.format,y.colorSpace),Ae=r.convert(y.type),we=v(y.internalFormat,de,Ae,y.colorSpace,y.isVideoTexture);Oe($,y);let pe,Ge=y.mipmaps,Pe=y.isVideoTexture!==!0,et=ve.__version===void 0||J===!0,D=X.dataReady,ie=L(y,Q);if(y.isDepthTexture)we=_(y.format===ns,y.type),et&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,de,Ae,null));else if(y.isDataTexture)if(Ge.length>0){Pe&&et&&t.texStorage2D(i.TEXTURE_2D,ie,we,Ge[0].width,Ge[0].height);for(let G=0,Y=Ge.length;G<Y;G++)pe=Ge[G],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,de,Ae,pe.data):t.texImage2D(i.TEXTURE_2D,G,we,pe.width,pe.height,0,de,Ae,pe.data);y.generateMipmaps=!1}else Pe?(et&&t.texStorage2D(i.TEXTURE_2D,ie,we,Q.width,Q.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,de,Ae,Q.data)):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,de,Ae,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Pe&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,we,Ge[0].width,Ge[0].height,Q.depth);for(let G=0,Y=Ge.length;G<Y;G++)if(pe=Ge[G],y.format!==Jt)if(de!==null)if(Pe){if(D)if(y.layerUpdates.size>0){let ce=hh(pe.width,pe.height,y.format,y.type);for(let ae of y.layerUpdates){let Ie=pe.data.subarray(ae*ce/pe.data.BYTES_PER_ELEMENT,(ae+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ae,pe.width,pe.height,1,de,Ie)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,Q.depth,de,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,we,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,Q.depth,de,Ae,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,we,pe.width,pe.height,Q.depth,0,de,Ae,pe.data)}else{Pe&&et&&t.texStorage2D(i.TEXTURE_2D,ie,we,Ge[0].width,Ge[0].height);for(let G=0,Y=Ge.length;G<Y;G++)pe=Ge[G],y.format!==Jt?de!==null?Pe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,G,we,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?D&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,de,Ae,pe.data):t.texImage2D(i.TEXTURE_2D,G,we,pe.width,pe.height,0,de,Ae,pe.data)}else if(y.isDataArrayTexture)if(Pe){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,we,Q.width,Q.height,Q.depth),D)if(y.layerUpdates.size>0){let G=hh(Q.width,Q.height,y.format,y.type);for(let Y of y.layerUpdates){let ce=Q.data.subarray(Y*G/Q.data.BYTES_PER_ELEMENT,(Y+1)*G/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,de,Ae,ce)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Ae,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,de,Ae,Q.data);else if(y.isData3DTexture)Pe?(et&&t.texStorage3D(i.TEXTURE_3D,ie,we,Q.width,Q.height,Q.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Ae,Q.data)):t.texImage3D(i.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,de,Ae,Q.data);else if(y.isFramebufferTexture){if(et)if(Pe)t.texStorage2D(i.TEXTURE_2D,ie,we,Q.width,Q.height);else{let G=Q.width,Y=Q.height;for(let ce=0;ce<ie;ce++)t.texImage2D(i.TEXTURE_2D,ce,we,G,Y,0,de,Ae,null),G>>=1,Y>>=1}}else if(Ge.length>0){if(Pe&&et){let G=Se(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ie,we,G.width,G.height)}for(let G=0,Y=Ge.length;G<Y;G++)pe=Ge[G],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,de,Ae,pe):t.texImage2D(i.TEXTURE_2D,G,we,de,Ae,pe);y.generateMipmaps=!1}else if(Pe){if(et){let G=Se(Q);t.texStorage2D(i.TEXTURE_2D,ie,we,G.width,G.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ae,Q)}else t.texImage2D(i.TEXTURE_2D,0,we,de,Ae,Q);m(y)&&p($),ve.__version=X.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function te(T,y,O){if(y.image.length!==6)return;let $=je(T,y),J=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let X=n.get(J);if(J.version!==X.__version||$===!0){t.activeTexture(i.TEXTURE0+O);let ve=Ne.getPrimaries(Ne.workingColorSpace),oe=y.colorSpace===Jn?null:Ne.getPrimaries(y.colorSpace),he=y.colorSpace===Jn||ve===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ke=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,de=[];for(let Y=0;Y<6;Y++)!ke&&!Q?de[Y]=x(y.image[Y],!0,s.maxCubemapSize):de[Y]=Q?y.image[Y].image:y.image[Y],de[Y]=st(y,de[Y]);let Ae=de[0],we=r.convert(y.format,y.colorSpace),pe=r.convert(y.type),Ge=v(y.internalFormat,we,pe,y.colorSpace),Pe=y.isVideoTexture!==!0,et=X.__version===void 0||$===!0,D=J.dataReady,ie=L(y,Ae);Oe(i.TEXTURE_CUBE_MAP,y);let G;if(ke){Pe&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Ge,Ae.width,Ae.height);for(let Y=0;Y<6;Y++){G=de[Y].mipmaps;for(let ce=0;ce<G.length;ce++){let ae=G[ce];y.format!==Jt?we!==null?Pe?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,ae.width,ae.height,we,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,Ge,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,ae.width,ae.height,we,pe,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,Ge,ae.width,ae.height,0,we,pe,ae.data)}}}else{if(G=y.mipmaps,Pe&&et){G.length>0&&ie++;let Y=Se(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Ge,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Pe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,de[Y].width,de[Y].height,we,pe,de[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,de[Y].width,de[Y].height,0,we,pe,de[Y].data);for(let ce=0;ce<G.length;ce++){let Ie=G[ce].image[Y].image;Pe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Ie.width,Ie.height,we,pe,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,Ge,Ie.width,Ie.height,0,we,pe,Ie.data)}}else{Pe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we,pe,de[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,we,pe,de[Y]);for(let ce=0;ce<G.length;ce++){let ae=G[ce];Pe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,we,pe,ae.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,Ge,we,pe,ae.image[Y])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),X.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function xe(T,y,O,$,J,X){let ve=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),he=v(O.internalFormat,ve,oe,O.colorSpace),ke=n.get(y),Q=n.get(O);if(Q.__renderTarget=y,!ke.__hasExternalTextures){let de=Math.max(1,y.width>>X),Ae=Math.max(1,y.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,X,he,de,Ae,y.depth,0,ve,oe,null):t.texImage2D(J,X,he,de,Ae,0,ve,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),He(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,Q.__webglTexture,0,Be(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,Q.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(T,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let $=y.depthTexture,J=$&&$.isDepthTexture?$.type:null,X=_(y.stencilBuffer,J),ve=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=Be(y);He(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,X,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,X,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,X,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,T)}else{let $=y.textures;for(let J=0;J<$.length;J++){let X=$[J],ve=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),he=v(X.internalFormat,ve,oe,X.colorSpace),ke=Be(y);O&&He(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,he,y.width,y.height):He(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,he,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,he,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);let J=$.__webglTexture,X=Be(y);if(y.depthTexture.format===Zi)He(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(y.depthTexture.format===ns)He(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Re(T){let y=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=$}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Te(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),re(y.__webglDepthbuffer[$],T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),re(y.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(T,y,O){let $=n.get(T);y!==void 0&&xe($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Re(T)}function lt(T){let y=T.texture,O=n.get(T),$=n.get(y);T.addEventListener("dispose",R);let J=T.textures,X=T.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let he=0;he<y.mipmaps.length;he++)O.__webglFramebuffer[oe][he]=i.createFramebuffer()}else O.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)O.__webglFramebuffer[oe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ve)for(let oe=0,he=J.length;oe<he;oe++){let ke=n.get(J[oe]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&He(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){let he=J[oe];O.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);let ke=r.convert(he.format,he.colorSpace),Q=r.convert(he.type),de=v(he.internalFormat,ke,Q,he.colorSpace,T.isXRRenderTarget===!0),Ae=Be(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,de,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),re(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)xe(O.__webglFramebuffer[oe][he],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else xe(O.__webglFramebuffer[oe],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,he=J.length;oe<he;oe++){let ke=J[oe],Q=n.get(ke);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Oe(i.TEXTURE_2D,ke),xe(O.__webglFramebuffer,T,ke,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),m(ke)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),Oe(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)xe(O.__webglFramebuffer[he],T,y,i.COLOR_ATTACHMENT0,oe,he);else xe(O.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,oe,0);m(y)&&p(oe),t.unbindTexture()}T.depthBuffer&&Re(T)}function Ve(T){let y=T.textures;for(let O=0,$=y.length;O<$;O++){let J=y[O];if(m(J)){let X=A(T),ve=n.get(J).__webglTexture;t.bindTexture(X,ve),p(X),t.unbindTexture()}}}let dt=[],N=[];function $t(T){if(T.samples>0){if(He(T)===!1){let y=T.textures,O=T.width,$=T.height,J=i.COLOR_BUFFER_BIT,X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(T),oe=y.length>1;if(oe)for(let he=0;he<y.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<y.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);let ke=n.get(y[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,J,i.NEAREST),l===!0&&(dt.length=0,N.length=0,dt.push(i.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.resolveDepthBuffer===!1&&(dt.push(X),N.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<y.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);let ke=n.get(y[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Be(T){return Math.min(s.maxSamples,T.samples)}function He(T){let y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function be(T){let y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function st(T,y){let O=T.colorSpace,$=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ct&&O!==Jn&&(Ne.getTransfer(O)===Ze?($!==Jt||J!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=Fe,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=He}function k_(i,e){function t(n,s=Jn){let r,o=Ne.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===oc)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Gh)return i.ALPHA;if(n===Vh)return i.RGB;if(n===Jt)return i.RGBA;if(n===kh)return i.LUMINANCE;if(n===Wh)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===cc)return i.RED;if(n===uc)return i.RED_INTEGER;if(n===Xh)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===fc)return i.RGBA_INTEGER;if(n===Gr||n===Vr||n===kr||n===Wr)if(o===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===$a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Za)return o===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ka||n===Qa||n===ja||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ka)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===hl||n===fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return o===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===dl||n===pl||n===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Il=class extends mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gt=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},W_={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
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

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new it({vertexShader:X_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=new Ll,m=t.getContextAttributes(),p=null,A=null,v=[],_=[],L=new K,w=null,R=new mt;R.viewport=new qe;let C=new mt;C.viewport=new qe;let b=[R,C],M=new Il,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=v[q];return te===void 0&&(te=new Ps,v[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=v[q];return te===void 0&&(te=new Ps,v[q]=te),te.getGripSpace()},this.getHand=function(q){let te=v[q];return te===void 0&&(te=new Ps,v[q]=te),te.getHandSpace()};function B(q){let te=_.indexOf(q.inputSource);if(te===-1)return;let xe=v[te];xe!==void 0&&(xe.update(q.inputSource,q.frame,c||o),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<v.length;q++){let te=_[q];te!==null&&(_[q]=null,v[q].disconnect(te))}I=null,H=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,A=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Dt(d.framebufferWidth,d.framebufferHeight,{format:Jt,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,xe=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?ns:Zi,xe=m.stencil?ts:bi);let Te={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Te),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Dt(f.textureWidth,f.textureHeight,{format:Jt,type:Pn,depthTexture:new to(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(q){for(let te=0;te<q.removed.length;te++){let xe=q.removed[te],re=_.indexOf(xe);re>=0&&(_[re]=null,v[re].disconnect(xe))}for(let te=0;te<q.added.length;te++){let xe=q.added[te],re=_.indexOf(xe);if(re===-1){for(let Re=0;Re<v.length;Re++)if(Re>=_.length){_.push(xe),re=Re;break}else if(_[Re]===null){_[Re]=xe,re=Re;break}if(re===-1)break}let Te=v[re];Te&&Te.connect(xe)}}let W=new E,ee=new E;function V(q,te,xe){W.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);let re=W.distanceTo(ee),Te=te.projectionMatrix.elements,Re=xe.projectionMatrix.elements,Fe=Te[14]/(Te[10]-1),lt=Te[14]/(Te[10]+1),Ve=(Te[9]+1)/Te[5],dt=(Te[9]-1)/Te[5],N=(Te[8]-1)/Te[0],$t=(Re[8]+1)/Re[0],Be=Fe*N,He=Fe*$t,be=re/(-N+$t),st=be*-N;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Se=Fe+be,T=lt+be,y=Be-st,O=He+(re-st),$=Ve*lt/T*Se,J=dt*lt/T*Se;q.projectionMatrix.makePerspective(y,O,$,J,Se,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,xe=q.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),M.near=C.near=R.near=te,M.far=C.far=R.far=xe,(I!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,H=M.far),R.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;let re=q.parent,Te=M.cameras;se(M,re);for(let Re=0;Re<Te.length;Re++)se(Te[Re],re);Te.length===2?V(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),ue(q,M,re)};function ue(q,te,xe){xe===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Me=null;function Oe(q,te){if(u=te.getViewerPose(c||o),g=te,u!==null){let xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let re=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Re=0;Re<xe.length;Re++){let Fe=xe[Re],lt=null;if(d!==null)lt=d.getViewport(Fe);else{let dt=h.getViewSubImage(f,Fe);lt=dt.viewport,Re===0&&(e.setRenderTargetTextures(A,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(A))}let Ve=b[Re];Ve===void 0&&(Ve=new mt,Ve.layers.enable(Re),Ve.viewport=new qe,b[Re]=Ve),Ve.matrix.fromArray(Fe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Fe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(lt.x,lt.y,lt.width,lt.height),Re===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Ve)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let Re=h.getDepthInformation(xe[0]);Re&&Re.isValid&&Re.texture&&x.init(e,Re,s.renderState)}}for(let xe=0;xe<v.length;xe++){let re=_[xe],Te=v[xe];re!==null&&Te!==void 0&&Te.update(re,te,c||o)}Me&&Me(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let je=new ef;je.setAnimationLoop(Oe),this.setAnimationLoop=function(q){Me=q},this.dispose=function(){}}},gi=new vn,$_=new Ce;function Y_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=e.get(p),v=A.envMap,_=A.envMapRotation;v&&(m.envMap.value=v,gi.copy(_),gi.x*=-1,gi.y*=-1,gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(gi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,v){let _=v.program;n.uniformBlockBinding(A,_)}function c(A,v){let _=s[A.id];_===void 0&&(g(A),_=u(A),s[A.id]=_,A.addEventListener("dispose",m));let L=v.program;n.updateUBOMapping(A,L);let w=e.render.frame;r[A.id]!==w&&(f(A),r[A.id]=w)}function u(A){let v=h();A.__bindingPointIndex=v;let _=i.createBuffer(),L=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let v=s[A.id],_=A.uniforms,L=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,R=_.length;w<R;w++){let C=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,M=C.length;b<M;b++){let I=C[b];if(d(I,w,b,L)===!0){let H=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],k=0;for(let Z=0;Z<B.length;Z++){let W=B[Z],ee=x(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+k,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,k),k+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,v,_,L){let w=A.value,R=v+"_"+_;if(L[R]===void 0)return typeof w=="number"||typeof w=="boolean"?L[R]=w:L[R]=w.clone(),!0;{let C=L[R];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return L[R]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(A){let v=A.uniforms,_=0,L=16;for(let R=0,C=v.length;R<C;R++){let b=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,I=b.length;M<I;M++){let H=b[M],B=Array.isArray(H.value)?H.value:[H.value];for(let k=0,Z=B.length;k<Z;k++){let W=B[k],ee=x(W),V=_%L,se=V%ee.boundary,ue=V+se;_+=se,ue!==0&&L-ue<ee.storage&&(_+=L-ue),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=ee.storage}}}let w=_%L;return w>0&&(_+=L-w),A.__size=_,A.__cache={},this}function x(A){let v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function m(A){let v=A.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var no=class{constructor(e={}){let{canvas:t=ep(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,A=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=Qn,this.toneMappingExposure=1;let _=this,L=!1,w=0,R=0,C=null,b=-1,M=null,I=new qe,H=new qe,B=null,k=new fe(0),Z=0,W=t.width,ee=t.height,V=1,se=null,ue=null,Me=new qe(0,0,W,ee),Oe=new qe(0,0,W,ee),je=!1,q=new Hs,te=!1,xe=!1,re=new Ce,Te=new Ce,Re=new E,Fe=new qe,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function dt(){return C===null?V:1}let N=n;function $t(S,P){return t.getContext(S,P)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jl}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){let P="webgl2";if(N=$t(P,S),N===null)throw $t(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Be,He,be,st,Se,T,y,O,$,J,X,ve,oe,he,ke,Q,de,Ae,we,pe,Ge,Pe,et,D;function ie(){Be=new h0(N),Be.init(),Pe=new k_(N,Be),He=new r0(N,Be,e,Pe),be=new H_(N,Be),He.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),st=new p0(N),Se=new E_,T=new V_(N,Be,be,Se,He,Pe,st),y=new a0(_),O=new u0(_),$=new Mp(N),et=new i0(N,$),J=new f0(N,$,st,et),X=new g0(N,J,$,st),we=new m0(N,He,T),Q=new o0(Se),ve=new w_(_,y,O,Be,He,et,Q),oe=new Y_(_,Se),he=new C_,ke=new N_(Be),Ae=new n0(_,y,O,be,X,d,l),de=new z_(_,X,He),D=new Z_(N,st,He,be),pe=new s0(N,Be,st),Ge=new d0(N,Be,st),st.programs=ve.programs,_.capabilities=He,_.extensions=Be,_.properties=Se,_.renderLists=he,_.shadowMap=de,_.state=be,_.info=st}ie();let G=new Dl(_,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(W,ee,!1))},this.getSize=function(S){return S.set(W,ee)},this.setSize=function(S,P,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,ee=P,t.width=Math.floor(S*V),t.height=Math.floor(P*V),F===!0&&(t.style.width=S+"px",t.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(W*V,ee*V).floor()},this.setDrawingBufferSize=function(S,P,F){W=S,ee=P,V=F,t.width=Math.floor(S*F),t.height=Math.floor(P*F),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,P,F,z){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,P,F,z),be.viewport(I.copy(Me).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Oe)},this.setScissor=function(S,P,F,z){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,P,F,z),be.scissor(H.copy(Oe).multiplyScalar(V).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(S){be.setScissorTest(je=S)},this.setOpaqueSort=function(S){se=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(S=!0,P=!0,F=!0){let z=0;if(S){let U=!1;if(C!==null){let j=C.texture.format;U=j===fc||j===hc||j===uc}if(U){let j=C.texture.type,le=j===Pn||j===bi||j===zs||j===ts||j===ac||j===lc,me=Ae.getClearColor(),ge=Ae.getClearAlpha(),Ee=me.r,Le=me.g,_e=me.b;le?(g[0]=Ee,g[1]=Le,g[2]=_e,g[3]=ge,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Ee,x[1]=Le,x[2]=_e,x[3]=ge,N.clearBufferiv(N.COLOR,0,x))}else z|=N.COLOR_BUFFER_BIT}P&&(z|=N.DEPTH_BUFFER_BIT),F&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),ke.dispose(),Se.dispose(),y.dispose(),O.dispose(),X.dispose(),et.dispose(),D.dispose(),ve.dispose(),G.dispose(),G.removeEventListener("sessionstart",su),G.removeEventListener("sessionend",ru),ui.stop()};function Y(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let S=st.autoReset,P=de.enabled,F=de.autoUpdate,z=de.needsUpdate,U=de.type;ie(),st.autoReset=S,de.enabled=P,de.autoUpdate=F,de.needsUpdate=z,de.type=U}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ie(S){let P=S.target;P.removeEventListener("dispose",Ie),ut(P)}function ut(S){Tt(S),Se.remove(S)}function Tt(S){let P=Se.get(S).programs;P!==void 0&&(P.forEach(function(F){ve.releaseProgram(F)}),S.isShaderMaterial&&ve.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,F,z,U,j){P===null&&(P=lt);let le=U.isMesh&&U.matrixWorld.determinant()<0,me=jf(S,P,F,z,U);be.setMaterial(z,le);let ge=F.index,Ee=1;if(z.wireframe===!0){if(ge=J.getWireframeAttribute(F),ge===void 0)return;Ee=2}let Le=F.drawRange,_e=F.attributes.position,We=Le.start*Ee,tt=(Le.start+Le.count)*Ee;j!==null&&(We=Math.max(We,j.start*Ee),tt=Math.min(tt,(j.start+j.count)*Ee)),ge!==null?(We=Math.max(We,0),tt=Math.min(tt,ge.count)):_e!=null&&(We=Math.max(We,0),tt=Math.min(tt,_e.count));let rt=tt-We;if(rt<0||rt===1/0)return;et.setup(U,z,me,F,ge);let Pt,$e=pe;if(ge!==null&&(Pt=$.get(ge),$e=Ge,$e.setIndex(Pt)),U.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*dt()),$e.setMode(N.LINES)):$e.setMode(N.TRIANGLES);else if(U.isLine){let ye=z.linewidth;ye===void 0&&(ye=1),be.setLineWidth(ye*dt()),U.isLineSegments?$e.setMode(N.LINES):U.isLineLoop?$e.setMode(N.LINE_LOOP):$e.setMode(N.LINE_STRIP)}else U.isPoints?$e.setMode(N.POINTS):U.isSprite&&$e.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$e.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))$e.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let ye=U._multiDrawStarts,Mn=U._multiDrawCounts,Ye=U._multiDrawCount,nn=ge?$.get(ge).bytesPerElement:1,Ci=Se.get(z).currentProgram.getUniforms();for(let Bt=0;Bt<Ye;Bt++)Ci.setValue(N,"_gl_DrawID",Bt),$e.render(ye[Bt]/nn,Mn[Bt])}else if(U.isInstancedMesh)$e.renderInstances(We,rt,U.count);else if(F.isInstancedBufferGeometry){let ye=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Mn=Math.min(F.instanceCount,ye);$e.renderInstances(We,rt,Mn)}else $e.render(We,rt)};function Je(S,P,F){S.transparent===!0&&S.side===Ut&&S.forceSinglePass===!1?(S.side=Ot,S.needsUpdate=!0,ur(S,P,F),S.side=xn,S.needsUpdate=!0,ur(S,P,F),S.side=Ut):ur(S,P,F)}this.compile=function(S,P,F=null){F===null&&(F=S),p=ke.get(F),p.init(P),v.push(p),F.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),S!==F&&S.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let z=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let j=U.material;if(j)if(Array.isArray(j))for(let le=0;le<j.length;le++){let me=j[le];Je(me,F,U),z.add(me)}else Je(j,F,U),z.add(j)}),v.pop(),p=null,z},this.compileAsync=function(S,P,F=null){let z=this.compile(S,P,F);return new Promise(U=>{function j(){if(z.forEach(function(le){Se.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){U(S);return}setTimeout(j,10)}Be.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let tn=null;function yn(S){tn&&tn(S)}function su(){ui.stop()}function ru(){ui.start()}let ui=new ef;ui.setAnimationLoop(yn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(S){tn=S,G.setAnimationLoop(S),S===null?ui.stop():ui.start()},G.addEventListener("sessionstart",su),G.addEventListener("sessionend",ru),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(P),P=G.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,P,C),p=ke.get(S,v.length),p.init(P),v.push(p),Te.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),q.setFromProjectionMatrix(Te),xe=this.localClippingEnabled,te=Q.init(this.clippingPlanes,xe),m=he.get(S,A.length),m.init(),A.push(m),G.enabled===!0&&G.isPresenting===!0){let j=_.xr.getDepthSensingMesh();j!==null&&Ko(j,P,-1/0,_.sortObjects)}Ko(S,P,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(se,ue),Ve=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ve&&Ae.addToRenderList(m,S),this.info.render.frame++,te===!0&&Q.beginShadows();let F=p.state.shadowsArray;de.render(F,S,P),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,U=m.transmissive;if(p.setupLights(),P.isArrayCamera){let j=P.cameras;if(U.length>0)for(let le=0,me=j.length;le<me;le++){let ge=j[le];au(z,U,S,ge)}Ve&&Ae.render(S);for(let le=0,me=j.length;le<me;le++){let ge=j[le];ou(m,S,ge,ge.viewport)}}else U.length>0&&au(z,U,S,P),Ve&&Ae.render(S),ou(m,S,P);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(_,S,P),et.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],te===!0&&Q.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ko(S,P,F,z){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){z&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Te);let le=X.update(S),me=S.material;me.visible&&m.push(S,le,me,F,Fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){let le=X.update(S),me=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Fe.copy(le.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4(Te)),Array.isArray(me)){let ge=le.groups;for(let Ee=0,Le=ge.length;Ee<Le;Ee++){let _e=ge[Ee],We=me[_e.materialIndex];We&&We.visible&&m.push(S,le,We,F,Fe.z,_e)}}else me.visible&&m.push(S,le,me,F,Fe.z,null)}}let j=S.children;for(let le=0,me=j.length;le<me;le++)Ko(j[le],P,F,z)}function ou(S,P,F,z){let U=S.opaque,j=S.transmissive,le=S.transparent;p.setupLightsView(F),te===!0&&Q.setGlobalState(_.clippingPlanes,F),z&&be.viewport(I.copy(z)),U.length>0&&cr(U,P,F),j.length>0&&cr(j,P,F),le.length>0&&cr(le,P,F),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function au(S,P,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Dt(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?un:Pn,minFilter:gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));let j=p.state.transmissionRenderTarget[z.id],le=z.viewport||I;j.setSize(le.z,le.w);let me=_.getRenderTarget();_.setRenderTarget(j),_.getClearColor(k),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),Ve&&Ae.render(F);let ge=_.toneMapping;_.toneMapping=Qn;let Ee=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),te===!0&&Q.setGlobalState(_.clippingPlanes,z),cr(S,F,z),T.updateMultisampleRenderTarget(j),T.updateRenderTargetMipmap(j),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let _e=0,We=P.length;_e<We;_e++){let tt=P[_e],rt=tt.object,Pt=tt.geometry,$e=tt.material,ye=tt.group;if($e.side===Ut&&rt.layers.test(z.layers)){let Mn=$e.side;$e.side=Ot,$e.needsUpdate=!0,lu(rt,F,z,Pt,$e,ye),$e.side=Mn,$e.needsUpdate=!0,Le=!0}}Le===!0&&(T.updateMultisampleRenderTarget(j),T.updateRenderTargetMipmap(j))}_.setRenderTarget(me),_.setClearColor(k,Z),Ee!==void 0&&(z.viewport=Ee),_.toneMapping=ge}function cr(S,P,F){let z=P.isScene===!0?P.overrideMaterial:null;for(let U=0,j=S.length;U<j;U++){let le=S[U],me=le.object,ge=le.geometry,Ee=z===null?le.material:z,Le=le.group;me.layers.test(F.layers)&&lu(me,P,F,ge,Ee,Le)}}function lu(S,P,F,z,U,j){S.onBeforeRender(_,P,F,z,U,j),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(_,P,F,z,S,j),U.transparent===!0&&U.side===Ut&&U.forceSinglePass===!1?(U.side=Ot,U.needsUpdate=!0,_.renderBufferDirect(F,P,z,U,S,j),U.side=xn,U.needsUpdate=!0,_.renderBufferDirect(F,P,z,U,S,j),U.side=Ut):_.renderBufferDirect(F,P,z,U,S,j),S.onAfterRender(_,P,F,z,U,j)}function ur(S,P,F){P.isScene!==!0&&(P=lt);let z=Se.get(S),U=p.state.lights,j=p.state.shadowsArray,le=U.state.version,me=ve.getParameters(S,U.state,j,P,F),ge=ve.getProgramCacheKey(me),Ee=z.programs;z.environment=S.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(S.isMeshStandardMaterial?O:y).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",Ie),Ee=new Map,z.programs=Ee);let Le=Ee.get(ge);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===le)return uu(S,me),Le}else me.uniforms=ve.getUniforms(S),S.onBeforeCompile(me,_),Le=ve.acquireProgram(me,ge),Ee.set(ge,Le),z.uniforms=me.uniforms;let _e=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(_e.clippingPlanes=Q.uniform),uu(S,me),z.needsLights=td(S),z.lightsStateVersion=le,z.needsLights&&(_e.ambientLightColor.value=U.state.ambient,_e.lightProbe.value=U.state.probe,_e.directionalLights.value=U.state.directional,_e.directionalLightShadows.value=U.state.directionalShadow,_e.spotLights.value=U.state.spot,_e.spotLightShadows.value=U.state.spotShadow,_e.rectAreaLights.value=U.state.rectArea,_e.ltc_1.value=U.state.rectAreaLTC1,_e.ltc_2.value=U.state.rectAreaLTC2,_e.pointLights.value=U.state.point,_e.pointLightShadows.value=U.state.pointShadow,_e.hemisphereLights.value=U.state.hemi,_e.directionalShadowMap.value=U.state.directionalShadowMap,_e.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_e.spotShadowMap.value=U.state.spotShadowMap,_e.spotLightMatrix.value=U.state.spotLightMatrix,_e.spotLightMap.value=U.state.spotLightMap,_e.pointShadowMap.value=U.state.pointShadowMap,_e.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function cu(S){if(S.uniformsList===null){let P=S.currentProgram.getUniforms();S.uniformsList=Ki.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function uu(S,P){let F=Se.get(S);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function jf(S,P,F,z,U){P.isScene!==!0&&(P=lt),T.resetTextureUnits();let j=P.fog,le=z.isMeshStandardMaterial?P.environment:null,me=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ct,ge=(z.isMeshStandardMaterial?O:y).get(z.envMap||le),Ee=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Le=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_e=!!F.morphAttributes.position,We=!!F.morphAttributes.normal,tt=!!F.morphAttributes.color,rt=Qn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(rt=_.toneMapping);let Pt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$e=Pt!==void 0?Pt.length:0,ye=Se.get(z),Mn=p.state.lights;if(te===!0&&(xe===!0||S!==M)){let Yt=S===M&&z.id===b;Q.setState(z,S,Yt)}let Ye=!1;z.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Mn.state.version||ye.outputColorSpace!==me||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==ge||z.fog===!0&&ye.fog!==j||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Q.numPlanes||ye.numIntersection!==Q.numIntersection)||ye.vertexAlphas!==Ee||ye.vertexTangents!==Le||ye.morphTargets!==_e||ye.morphNormals!==We||ye.morphColors!==tt||ye.toneMapping!==rt||ye.morphTargetsCount!==$e)&&(Ye=!0):(Ye=!0,ye.__version=z.version);let nn=ye.currentProgram;Ye===!0&&(nn=ur(z,P,U));let Ci=!1,Bt=!1,xs=!1,ot=nn.getUniforms(),pn=ye.uniforms;if(be.useProgram(nn.program)&&(Ci=!0,Bt=!0,xs=!0),z.id!==b&&(b=z.id,Bt=!0),Ci||M!==S){be.buffers.depth.getReversed()?(re.copy(S.projectionMatrix),np(re),ip(re),ot.setValue(N,"projectionMatrix",re)):ot.setValue(N,"projectionMatrix",S.projectionMatrix),ot.setValue(N,"viewMatrix",S.matrixWorldInverse);let Vn=ot.map.cameraPosition;Vn!==void 0&&Vn.setValue(N,Re.setFromMatrixPosition(S.matrixWorld)),He.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ot.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Bt=!0,xs=!0)}if(U.isSkinnedMesh){ot.setOptional(N,U,"bindMatrix"),ot.setOptional(N,U,"bindMatrixInverse");let Yt=U.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),ot.setValue(N,"boneTexture",Yt.boneTexture,T))}U.isBatchedMesh&&(ot.setOptional(N,U,"batchingTexture"),ot.setValue(N,"batchingTexture",U._matricesTexture,T),ot.setOptional(N,U,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",U._indirectTexture,T),ot.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",U._colorsTexture,T));let vs=F.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&we.update(U,F,nn),(Bt||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,ot.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(pn.envMap.value=ge,pn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&P.environment!==null&&(pn.envMapIntensity.value=P.environmentIntensity),Bt&&(ot.setValue(N,"toneMappingExposure",_.toneMappingExposure),ye.needsLights&&ed(pn,xs),j&&z.fog===!0&&oe.refreshFogUniforms(pn,j),oe.refreshMaterialUniforms(pn,z,V,ee,p.state.transmissionRenderTarget[S.id]),Ki.upload(N,cu(ye),pn,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ki.upload(N,cu(ye),pn,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ot.setValue(N,"center",U.center),ot.setValue(N,"modelViewMatrix",U.modelViewMatrix),ot.setValue(N,"normalMatrix",U.normalMatrix),ot.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Yt=z.uniformsGroups;for(let Vn=0,kn=Yt.length;Vn<kn;Vn++){let hu=Yt[Vn];D.update(hu,nn),D.bind(hu,nn)}}return nn}function ed(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function td(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,P,F){Se.get(S.texture).__webglTexture=P,Se.get(S.depthTexture).__webglTexture=F;let z=Se.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,P){let F=Se.get(S);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,F=0){C=S,w=P,R=F;let z=!0,U=null,j=!1,le=!1;if(S){let ge=Se.get(S);if(ge.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(ge.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(ge.__hasExternalTextures)T.rebindTextures(S,Se.get(S.texture).__webglTexture,Se.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let _e=S.depthTexture;if(ge.__boundDepthTexture!==_e){if(_e!==null&&Se.has(_e)&&(S.width!==_e.image.width||S.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(le=!0);let Le=Se.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[P])?U=Le[P][F]:U=Le[P],j=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?U=Se.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?U=Le[F]:U=Le,I.copy(S.viewport),H.copy(S.scissor),B=S.scissorTest}else I.copy(Me).multiplyScalar(V).floor(),H.copy(Oe).multiplyScalar(V).floor(),B=je;if(be.bindFramebuffer(N.FRAMEBUFFER,U)&&z&&be.drawBuffers(S,U),be.viewport(I),be.scissor(H),be.setScissorTest(B),j){let ge=Se.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge.__webglTexture,F)}else if(le){let ge=Se.get(S.texture),Ee=P||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.__webglTexture,F||0,Ee)}b=-1},this.readRenderTargetPixels=function(S,P,F,z,U,j,le){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){be.bindFramebuffer(N.FRAMEBUFFER,me);try{let ge=S.texture,Ee=ge.format,Le=ge.type;if(!He.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-z&&F>=0&&F<=S.height-U&&N.readPixels(P,F,z,U,Pe.convert(Ee),Pe.convert(Le),j)}finally{let ge=C!==null?Se.get(C).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(S,P,F,z,U,j,le){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){let ge=S.texture,Ee=ge.format,Le=ge.type;if(!He.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=S.width-z&&F>=0&&F<=S.height-U){be.bindFramebuffer(N.FRAMEBUFFER,me);let _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,j.byteLength,N.STREAM_READ),N.readPixels(P,F,z,U,Pe.convert(Ee),Pe.convert(Le),0);let We=C!==null?Se.get(C).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,We);let tt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await tp(N,tt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,j),N.deleteBuffer(_e),N.deleteSync(tt),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,P=null,F=0){S.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,S=arguments[1]);let z=Math.pow(2,-F),U=Math.floor(S.image.width*z),j=Math.floor(S.image.height*z),le=P!==null?P.x:0,me=P!==null?P.y:0;T.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,F,0,0,le,me,U,j),be.unbindTexture()},this.copyTextureToTexture=function(S,P,F=null,z=null,U=0){S.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],P=arguments[2],U=arguments[3]||0,F=null);let j,le,me,ge,Ee,Le,_e,We,tt,rt=S.isCompressedTexture?S.mipmaps[U]:S.image;F!==null?(j=F.max.x-F.min.x,le=F.max.y-F.min.y,me=F.isBox3?F.max.z-F.min.z:1,ge=F.min.x,Ee=F.min.y,Le=F.isBox3?F.min.z:0):(j=rt.width,le=rt.height,me=rt.depth||1,ge=0,Ee=0,Le=0),z!==null?(_e=z.x,We=z.y,tt=z.z):(_e=0,We=0,tt=0);let Pt=Pe.convert(P.format),$e=Pe.convert(P.type),ye;P.isData3DTexture?(T.setTexture3D(P,0),ye=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(T.setTexture2DArray(P,0),ye=N.TEXTURE_2D_ARRAY):(T.setTexture2D(P,0),ye=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let Mn=N.getParameter(N.UNPACK_ROW_LENGTH),Ye=N.getParameter(N.UNPACK_IMAGE_HEIGHT),nn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ci=N.getParameter(N.UNPACK_SKIP_ROWS),Bt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ee),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le);let xs=S.isDataArrayTexture||S.isData3DTexture,ot=P.isDataArrayTexture||P.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let pn=Se.get(S),vs=Se.get(P),Yt=Se.get(pn.__renderTarget),Vn=Se.get(vs.__renderTarget);be.bindFramebuffer(N.READ_FRAMEBUFFER,Yt.__webglFramebuffer),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let kn=0;kn<me;kn++)xs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(S).__webglTexture,U,Le+kn),S.isDepthTexture?(ot&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(P).__webglTexture,U,tt+kn),N.blitFramebuffer(ge,Ee,j,le,_e,We,j,le,N.DEPTH_BUFFER_BIT,N.NEAREST)):ot?N.copyTexSubImage3D(ye,U,_e,We,tt+kn,ge,Ee,j,le):N.copyTexSubImage2D(ye,U,_e,We,tt+kn,ge,Ee,j,le);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ot?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(ye,U,_e,We,tt,j,le,me,Pt,$e,rt.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,U,_e,We,tt,j,le,me,Pt,rt.data):N.texSubImage3D(ye,U,_e,We,tt,j,le,me,Pt,$e,rt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_e,We,j,le,Pt,$e,rt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_e,We,rt.width,rt.height,Pt,rt.data):N.texSubImage2D(N.TEXTURE_2D,U,_e,We,j,le,Pt,$e,rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye),N.pixelStorei(N.UNPACK_SKIP_PIXELS,nn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ci),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Bt),U===0&&P.generateMipmaps&&N.generateMipmap(ye),be.unbindTexture()},this.copyTextureToTexture3D=function(S,P,F=null,z=null,U=0){return S.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,z=arguments[1]||null,S=arguments[2],P=arguments[3],U=arguments[4]||0),Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,P,F,z,U)},this.initRenderTarget=function(S){Se.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),be.unbindTexture()},this.resetState=function(){w=0,R=0,C=null,be.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ne._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ne._getUnpackColorSpace()}};var io=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=Kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},It=new E,Vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=an(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=an(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=an(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=an(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var fh=new E,dh=new qe,ph=new qe,J_=new E,mh=new Ce,Lr=new E,Ta=new Vt,gh=new Ce,wa=new os,so=class extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mu,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingBox.expandByPoint(Lr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingSphere.expandByPoint(Lr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(s),e.ray.intersectsSphere(Ta)!==!1&&(gh.copy(s).invert(),wa.copy(e.ray).applyMatrix4(gh),!(this.boundingBox!==null&&wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;dh.fromBufferAttribute(s.attributes.skinIndex,e),ph.fromBufferAttribute(s.attributes.skinWeight,e),fh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=ph.getComponent(r);if(o!==0){let a=dh.getComponent(r);mh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(J_.copy(fh).applyMatrix4(mh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ks=class extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},ro=class extends bt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Rt,u=Rt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_h=new Ce,K_=new Ce,oo=class i{constructor(e=[],t=[]){this.uuid=Kt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:K_;_h.multiplyMatrices(a,t[r]),_h.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ro(t,e,e,Jt,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ks),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Nn=class extends at{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wi=new Ce,xh=new Ce,Dr=[],vh=new Ft,Q_=new Ce,As=new Xe,Ts=new Vt,ao=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Q_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),vh.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(vh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Ts.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),e.ray.intersectsSphere(Ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),xh.multiplyMatrices(n,Wi),As.matrixWorld=xh,As.raycast(e,Dr);for(let o=0,a=Dr.length;o<a;o++){let l=Dr[o];l.instanceId=r,l.object=this,t.push(l)}Dr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(s*this.count),s,this.count,cc,ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ws=class extends kt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lo=new E,co=new E,yh=new Ce,ws=new os,Pr=new Vt,Ea=new E,Mh=new E,ls=class extends ht{constructor(e=new ft,t=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)lo.fromBufferAttribute(t,s-1),co.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=lo.distanceTo(co);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,e.ray.intersectsSphere(Pr)===!1)return;yh.copy(s).invert(),ws.copy(e.ray).applyMatrix4(yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),A=u.getX(x+1),v=Ur(this,e,ws,l,p,A);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=Ur(this,e,ws,l,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Ur(this,e,ws,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Ur(this,e,ws,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ur(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(lo.fromBufferAttribute(o,s),co.fromBufferAttribute(o,r),t.distanceSqToSegment(lo,co,Ea,Mh)>n)return;Ea.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ea);if(!(l<e.near||l>e.far))return{distance:l,point:Mh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Sh=new E,bh=new E,uo=class extends ls{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Sh.fromBufferAttribute(t,s),bh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sh.distanceTo(bh);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ho=class extends ls{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xs=class extends kt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ah=new Ce,Pl=new os,Nr=new Vt,Or=new E,Ai=class extends ht{constructor(e=new ft,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;Ah.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(Ah);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Or.fromBufferAttribute(h,m),Th(Or,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Or.fromBufferAttribute(h,g),Th(Or,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Th(i,e,t,n,s,r,o){let a=Pl.distanceSqToPoint(i);if(a<t){let l=new E;Pl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var fo=class extends bt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new K:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,s=[],r=[],o=[],a=new E,l=new Ce;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(St(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(St(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qs=class extends Qt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new K){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ul=class extends qs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Fr=new E,Ra=new mc,Ca=new mc,Ia=new mc,$s=class extends Qt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Fr.subVectors(s[0],s[1]).add(s[0]),c=Fr);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ra.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),Ca.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),Ia.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ca.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ia.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ra.calc(l),Ca.calc(l),Ia.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wh(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function j_(i,e){let t=1-i;return t*t*e}function ex(i,e){return 2*(1-i)*i*e}function tx(i,e){return i*i*e}function Us(i,e,t,n){return j_(i,e)+ex(i,t)+tx(i,n)}function nx(i,e){let t=1-i;return t*t*t*e}function ix(i,e){let t=1-i;return 3*t*t*i*e}function sx(i,e){return 3*(1-i)*i*i*e}function rx(i,e){return i*i*i*e}function Ns(i,e,t,n,s){return nx(i,e)+ix(i,t)+sx(i,n)+rx(i,s)}var po=class extends Qt{constructor(e=new K,t=new K,n=new K,s=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new K){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ns(e,s.x,r.x,o.x,a.x),Ns(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends Qt{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ns(e,s.x,r.x,o.x,a.x),Ns(e,s.y,r.y,o.y,a.y),Ns(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mo=class extends Qt{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends Qt{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends Qt{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Us(e,s.x,r.x,o.x),Us(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Qt{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Us(e,s.x,r.x,o.x),Us(e,s.y,r.y,o.y),Us(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(wh(a,l.x,c.x,u.x,h.x),wh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new K().fromArray(s))}return this}},Fl=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:$s,CubicBezierCurve:po,CubicBezierCurve3:Nl,EllipseCurve:qs,LineCurve:mo,LineCurve3:Ol,QuadraticBezierCurve:go,QuadraticBezierCurve3:_o,SplineCurve:xo}),zl=class extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Fl[s.type]().fromJSON(s))}return this}},vo=class extends zl{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new mo(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new go(this.currentPoint.clone(),new K(e,t),new K(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new po(this.currentPoint.clone(),new K(e,t),new K(n,s),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new xo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new qs(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Ys=class i extends ft{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,x=[],m=n/2,p=0;A(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function A(){let _=new E,L=new E,w=0,R=(t-e)/n;for(let C=0;C<=r;C++){let b=[],M=C/r,I=M*(t-e)+e;for(let H=0;H<=s;H++){let B=H/s,k=B*l+a,Z=Math.sin(k),W=Math.cos(k);L.x=I*Z,L.y=-M*n+m,L.z=I*W,h.push(L.x,L.y,L.z),_.set(Z,R,W).normalize(),f.push(_.x,_.y,_.z),d.push(B,1-M),b.push(g++)}x.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){let M=x[b][C],I=x[b+1][C],H=x[b+1][C+1],B=x[b][C+1];(e>0||b!==0)&&(u.push(M,I,B),w+=3),(t>0||b!==r-1)&&(u.push(I,H,B),w+=3)}c.addGroup(p,w,0),p+=w}function v(_){let L=g,w=new K,R=new E,C=0,b=_===!0?e:t,M=_===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let I=g;for(let H=0;H<=s;H++){let k=H/s*l+a,Z=Math.cos(k),W=Math.sin(k);R.x=b*W,R.y=m*M,R.z=b*Z,h.push(R.x,R.y,R.z),f.push(0,M,0),w.x=Z*.5+.5,w.y=W*.5*M+.5,d.push(w.x,w.y),g++}for(let H=0;H<s;H++){let B=L+H,k=I+H;_===!0?u.push(k,k+1,B):u.push(k+1,k,B),C+=3}c.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bl=class i extends ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let v=new E,_=new E,L=new E;for(let w=0;w<t.length;w+=3)d(t[w+0],v),d(t[w+1],_),d(t[w+2],L),l(v,_,L,A)}function l(A,v,_,L){let w=L+1,R=[];for(let C=0;C<=w;C++){R[C]=[];let b=A.clone().lerp(_,C/w),M=v.clone().lerp(_,C/w),I=w-C;for(let H=0;H<=I;H++)H===0&&C===w?R[C][H]=b:R[C][H]=b.clone().lerp(M,H/I)}for(let C=0;C<w;C++)for(let b=0;b<2*(w-C)-1;b++){let M=Math.floor(b/2);b%2===0?(f(R[C][M+1]),f(R[C+1][M]),f(R[C][M])):(f(R[C][M+1]),f(R[C+1][M+1]),f(R[C+1][M]))}}function c(A){let v=new E;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(A),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function u(){let A=new E;for(let v=0;v<r.length;v+=3){A.x=r[v+0],A.y=r[v+1],A.z=r[v+2];let _=m(A)/2/Math.PI+.5,L=p(A)/Math.PI+.5;o.push(_,1-L)}g(),h()}function h(){for(let A=0;A<o.length;A+=6){let v=o[A+0],_=o[A+2],L=o[A+4],w=Math.max(v,_,L),R=Math.min(v,_,L);w>.9&&R<.1&&(v<.2&&(o[A+0]+=1),_<.2&&(o[A+2]+=1),L<.2&&(o[A+4]+=1))}}function f(A){r.push(A.x,A.y,A.z)}function d(A,v){let _=A*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function g(){let A=new E,v=new E,_=new E,L=new E,w=new K,R=new K,C=new K;for(let b=0,M=0;b<r.length;b+=9,M+=6){A.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),w.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),L.copy(A).add(v).add(_).divideScalar(3);let I=m(L);x(w,M+0,A,I),x(R,M+2,v,I),x(C,M+4,_,I)}}function x(A,v,_,L){L<0&&A.x===1&&(o[v]=A.x-1),_.x===0&&_.z===0&&(o[v]=L/2/Math.PI+.5)}function m(A){return Math.atan2(A.z,-A.x)}function p(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Zs=class extends vo{constructor(e){super(e),this.uuid=Kt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new vo().fromJSON(s))}return this}},ox={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=of(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=hx(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Js(r,o,t,a,l,d,0),o}};function of(i,e,t,n,s){let r,o;if(s===Sx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Eh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Eh(r,i[r],i[r+1],o);return o&&Oo(o,o.next)&&(Qs(o),o=o.next),o}function Ti(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Oo(t,t.next)||ct(t.prev,t,t.next)===0)){if(Qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Js(i,e,t,n,s,r,o){if(!i)return;!o&&r&&gx(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?lx(i,n,s,r):ax(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Qs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=cx(Ti(i),e,t),Js(i,e,t,n,s,r,2)):o===2&&ux(i,e,t,n,s,r):Js(Ti(i),e,t,n,s,r,1);break}}}function ax(i){let e=i.prev,t=i,n=i.next;if(ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&$i(s,a,r,l,o,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(ct(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Hl(d,g,e,t,n),A=Hl(x,m,e,t,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=A;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&$i(a,u,l,h,c,f,v.x,v.y)&&ct(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&$i(a,u,l,h,c,f,_.x,_.y)&&ct(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&$i(a,u,l,h,c,f,v.x,v.y)&&ct(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=A;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&$i(a,u,l,h,c,f,_.x,_.y)&&ct(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function cx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Oo(s,r)&&af(s,n,n.next,r)&&Ks(s,r)&&Ks(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Qs(n),Qs(n.next),n=i=r),n=n.next}while(n!==i);return Ti(n)}function ux(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vx(o,a)){let l=lf(o,a);o=Ti(o,o.next),l=Ti(l,l.next),Js(o,e,t,n,s,r,0),Js(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hx(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=of(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(xx(c));for(s.sort(fx),r=0;r<s.length;r++)t=dx(s[r],t);return t}function fx(i,e){return i.x-e.x}function dx(i,e){let t=px(i,e);if(!t)return e;let n=lf(t,i);return Ti(n,n.next),Ti(t,t.next)}function px(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&$i(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ks(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&mx(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function mx(i,e){return ct(i.prev,i,e.prev)<0&&ct(e.next,i,i.next)<0}function gx(i,e,t,n){let s=i;do s.z===0&&(s.z=Hl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_x(s)}function _x(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Hl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function xx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $i(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function vx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yx(i,e)&&(Ks(i,e)&&Ks(e,i)&&Mx(i,e)&&(ct(i.prev,i,e.prev)||ct(i,e.prev,e))||Oo(i,e)&&ct(i.prev,i,i.next)>0&&ct(e.prev,e,e.next)>0)}function ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Oo(i,e){return i.x===e.x&&i.y===e.y}function af(i,e,t,n){let s=Br(ct(i,e,t)),r=Br(ct(i,e,n)),o=Br(ct(t,n,i)),a=Br(ct(t,n,e));return!!(s!==r&&o!==a||s===0&&zr(i,t,e)||r===0&&zr(i,n,e)||o===0&&zr(t,i,n)||a===0&&zr(t,e,n))}function zr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Br(i){return i>0?1:i<0?-1:0}function yx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&af(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ks(i,e){return ct(i.prev,i,i.next)<0?ct(i,e,i.next)>=0&&ct(i,i.prev,e)>=0:ct(i,e,i.prev)<0||ct(i,i.next,e)<0}function Mx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function lf(i,e){let t=new Gl(i.i,i.x,i.y),n=new Gl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Eh(i,e,t,n){let s=new Gl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Os=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Rh(e),Ch(n,e);let o=e.length;t.forEach(Rh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ch(n,t[l]);let a=ox.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Rh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ch(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var yo=class i extends Bl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Mo=class i extends ft{constructor(e=new Zs([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(o,2));function c(u){let h=s.length/3,f=u.extractPoints(t),d=f.shape,g=f.holes;Os.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let A=g[m];Os.isClockWise(A)===!0&&(g[m]=A.reverse())}let x=Os.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let A=g[m];d=d.concat(A)}for(let m=0,p=d.length;m<p;m++){let A=d[m];s.push(A.x,A.y,0),r.push(0,0,1),o.push(A.x,A.y)}for(let m=0,p=x.length;m<p;m++){let A=x[m],v=A[0]+h,_=A[1]+h,L=A[2]+h;n.push(v,_,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return bx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function bx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var So=class i extends ft{constructor(e=new _o(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new E,l=new E,c=new K,u=new E,h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),A(),p()}function m(v){u=e.getPointAt(v/t,u);let _=o.normals[v],L=o.binormals[v];for(let w=0;w<=s;w++){let R=w/s*Math.PI*2,C=Math.sin(R),b=-Math.cos(R);l.x=b*_.x+C*L.x,l.y=b*_.y+C*L.y,l.z=b*_.z+C*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let L=(s+1)*(v-1)+(_-1),w=(s+1)*v+(_-1),R=(s+1)*v+_,C=(s+1)*(v-1)+_;g.push(L,w,C),g.push(w,R,C)}}function A(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)c.x=v/t,c.y=_/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Fl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var bo=class extends it{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},cs=class extends kt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wt=class extends cs{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Hr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ax(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Tx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ih(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function cf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ni=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vl=class extends ni{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _u:r=e,a=2*t-n;break;case xu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _u:o=e,l=2*n-t;break;case xu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,A=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let L=0;L!==a;++L)r[L]=p*o[u+L]+A*o[c+L]+v*o[l+L]+_*o[h+L];return r}},kl=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Wl=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case ss:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return ss;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ax(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=ss;var ii=class extends jt{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="bool";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=is;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends jt{};Ao.prototype.ValueTypeName="color";var On=class extends jt{};On.prototype.ValueTypeName="number";var Xl=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fn=class extends jt{InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}};Fn.prototype.ValueTypeName="quaternion";Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends jt{constructor(e,t,n){super(e,t,n)}};si.prototype.ValueTypeName="string";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=is;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends jt{};zn.prototype.ValueTypeName="vector";var To=class{constructor(e="",t=-1,n=[],s=Ed){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Kt(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ex(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(jt.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Tx(l);l=Ih(l,1,u),c=Ih(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new On(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,x){if(d.length!==0){let m=[],p=[];cf(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let A=0;A!==f[g].morphTargets.length;++A){let v=f[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}s.push(new On(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{let d=".bones["+t[h].name+"]";n(zn,d+".position",f,"pos",s),n(Fn,d+".quaternion",f,"rot",s),n(zn,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function wx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return On;case"vector":case"vector2":case"vector3":case"vector4":return zn;case"color":return Ao;case"quaternion":return Fn;case"bool":case"boolean":return ii;case"string":return si}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ex(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=wx(i.type);if(i.times===void 0){let t=[],n=[];cf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ql=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},Rx=new ql,Bn=class{constructor(e){this.manager=e!==void 0?e:Rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bn.DEFAULT_MATERIAL_NAME="__DEFAULT";var En={},$l=class extends Error{constructor(e,t){super(e),this.response=t}},js=class extends Bn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Kn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:n,onError:s});return}En[e]=[],En[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=En[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){A();function A(){h.read().then(({done:v,value:_})=>{if(v)p.close();else{x+=_.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let w=0,R=u.length;w<R;w++){let C=u[w];C.onProgress&&C.onProgress(L)}p.enqueue(_),A()}},v=>{p.error(v)})}}});return new Response(m)}else throw new $l(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Kn.add(e,c);let u=En[e];delete En[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=En[e];if(u===void 0)throw this.manager.itemError(e),c;delete En[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Yl=class extends Bn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Bs("img");function l(){u(),Kn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var wo=class extends Bn{constructor(e){super(e)}load(e,t,n,s){let r=new bt,o=new Yl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},er=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var La=new Ce,Lh=new E,Dh=new E,tr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lh),Dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dh),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zl=class extends tr{constructor(){super(new mt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=rs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Eo=class extends er{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ph=new Ce,Es=new E,Da=new E,Jl=class extends tr{constructor(){super(new mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),n.position.copy(Es),Da.copy(n.position),Da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Da),n.updateMatrixWorld(),s.makeTranslation(-Es.x,-Es.y,-Es.z),Ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph)}},Ro=class extends er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Kl=class extends tr{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Co=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Kl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ri=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Io=class extends ft{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Lo=class extends Bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Kn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Kn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(e,l),r.manager.itemStart(e)}};var us=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Uh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Uh(){return performance.now()}var gc="\\[\\]\\.:\\/",Cx=new RegExp("["+gc+"]","g"),_c="[^"+gc+"]",Ix="[^"+gc.replace("\\.","")+"]",Lx=/((?:WC+[\/:])*)/.source.replace("WC",_c),Dx=/(WCOD+)?/.source.replace("WCOD",Ix),Px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),Ux=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),Nx=new RegExp("^"+Lx+Dx+Px+Ux+"$"),Ox=["material","materials","bones","map"],Ql=class{constructor(e,t,n){let s=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cx,"")}static parseTrackName(e){let t=Nx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ox.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=Ql;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);var Fo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zx=new ti(-1,1,1,-1,0,1),xc=class extends ft{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},Bx=new xc,ai=class{constructor(e){this._mesh=new Xe(Bx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var wi=class extends Xt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof it?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oi.clone(e.uniforms),this.material=new it({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ai(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var sr=class extends Xt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zo=class extends Xt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new K);this._width=n.width,this._height=n.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wi(Fo),this.copyPass.material.blending=_n,this.clock=new us}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sr!==void 0&&(o instanceof sr?n=!0:o instanceof zo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ho=class extends Xt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var uf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var fs=class i extends Xt{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new K(e.x,e.y):new K(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Dt(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Dt(r,o,{type:un});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Dt(r,o,{type:un});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=uf;this.highPassUniforms=oi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new it({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new K(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Fo;this.copyUniforms=oi.clone(u.uniforms),this.blendMaterial=new it({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Mi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new At,this.fsQuad=new ai(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new K(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new it({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new it({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};fs.BlurDirectionX=new K(1,0);fs.BlurDirectionY=new K(0,1);var hf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Go=class extends Xt{constructor(){super();let e=hf;this.uniforms=oi.clone(e.uniforms),this.material=new bo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ai(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ne.getTransfer(this._outputColorSpace)===Ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ec?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ff={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new K(1/1024,1/512)}},vertexShader:`

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
			
		}`};function vc(i,e){if(e===$h)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ir||e===Po){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ir)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Vo=class extends Bn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wc(t)}),this.register(function(t){return new Ec(t)}),this.register(function(t){return new Oc(t)}),this.register(function(t){return new Fc(t)}),this.register(function(t){return new zc(t)}),this.register(function(t){return new Cc(t)}),this.register(function(t){return new Ic(t)}),this.register(function(t){return new Lc(t)}),this.register(function(t){return new Dc(t)}),this.register(function(t){return new Tc(t)}),this.register(function(t){return new Pc(t)}),this.register(function(t){return new Rc(t)}),this.register(function(t){return new Nc(t)}),this.register(function(t){return new Uc(t)}),this.register(function(t){return new bc(t)}),this.register(function(t){return new Bc(t)}),this.register(function(t){return new Hc(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ri.extractUrlBase(e);o=ri.resolveURL(c,this.path)}else o=ri.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new js(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_f){try{o[ze.KHR_BINARY_GLTF]=new Gc(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ze.KHR_MATERIALS_UNLIT:o[h]=new Ac;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new Vc(r,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[h]=new kc;break;case ze.KHR_MESH_QUANTIZATION:o[h]=new Wc;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Hx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bc=class{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new fe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ct);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Co(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ro(u),c.distance=h;break;case"spot":c=new Eo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Ac=class{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return At}extendParams(e,t,n){let s=[];e.color=new fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ct),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}},Tc=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},wc=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new K(a,a)}return Promise.all(r)}},Ec=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Rc=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Cc=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ct)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Mt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Ic=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Lc=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(a[0],a[1],a[2],Ct),Promise.all(r)}},Dc=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Pc=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(a[0],a[1],a[2],Ct),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Mt)),Promise.all(r)}},Uc=class{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Nc=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Oc=class{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Fc=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zc=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bc=class{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},Hc=class{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let x=new Ce,m=new E,p=new cn,A=new E(1,1,1),v=new ao(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&A.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(m,p,A));for(let _ in l)if(_==="_COLOR_0"){let L=l[_];v.instanceColor=new Nn(L.array,L.itemSize,L.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);ht.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},_f="glTF",rr=12,df={JSON:1313821514,BIN:5130562},Gc=class{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_f)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-rr,r=new DataView(e,rr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===df.JSON){let c=new Uint8Array(e,rr+o,a);this.content=n.decode(c)}else if(l===df.BIN){let c=rr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=qc[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=qc[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=ds[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(d)},a,c,Ct,f)})})}},kc=class{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Wc=class{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}},ko=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,A=1-m,v=p-f+h;for(let _=0;_!==a;_++){let L=o[x+_+a],w=o[x+_+l]*u,R=o[g+_+a],C=o[g+_]*u;r[_]=A*L+v*w+m*R+p*C}return r}},Gx=new cn,Xc=class extends ko{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Gx.fromArray(r).normalize().toArray(r),r}},en={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pf={9728:Rt,9729:Nt,9984:rc,9985:Is,9986:Xi,9987:gn},mf={33071:In,33648:Fs,10497:Si},yc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vx={CUBICSPLINE:void 0,LINEAR:ss,STEP:is},Mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new cs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),i.DefaultMaterial}function Ei(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Wx(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Xx(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qx(i){let e,t=i.extensions&&i.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sc(t.attributes):e=i.indices+":"+Sc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Sc(i.targets[n]);return e}function Sc(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $c(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $x(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Yx=new Ce,Yc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new wo(this.options.manager):this.textureLoader=new Lo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ei(r,a,s),Hn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ri.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=yc[s.type],a=ds[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new at(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=yc[s.type],c=ds[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(A);v||(x=new c(a,p*d,s.count*d/u),v=new Gs(x,d/u),t.cache.add(A,v)),m=new Vs(v,l,f%d/u,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new at(x,l,g);if(s.sparse!==void 0){let p=yc.SCALAR,A=ds[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,L=new A(o[1],v,s.sparse.count*p),w=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new at(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,C=L.length;R<C;R++){let b=L[R];if(m.setX(b,w[R*l]),l>=2&&m.setY(b,w[R*l+1]),l>=3&&m.setZ(b,w[R*l+2]),l>=4&&m.setW(b,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=pf[f.magFilter]||Nt,u.minFilter=pf[f.minFilter]||gn,u.wrapS=mf[f.wrapS]||Si,u.wrapT=mf[f.wrapT]||Si,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Rt&&u.minFilter!==Nt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new bt(x);m.needsUpdate=!0,f(m)}),t.load(ri.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Hn(h,o),h.userData.mimeType=o.mimeType||$x(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ze.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Xs,kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ws,kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return cs}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){let h=s[ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ct),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ut);let u=r.alphaMode||Mc.OPAQUE;if(u===Mc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Mc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==At&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new K(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==At&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==At){let h=r.emissiveFactor;a.emissive=new fe().setRGB(h[0],h[1],h[2],Ct)}return r.emissiveTexture!==void 0&&o!==At&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Hn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ei(s,h,r),h})}createUniqueName(e){let t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gf(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=qx(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=gf(new ft,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?kx(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],m=o[d],p,A=c[d];if(m.mode===en.TRIANGLES||m.mode===en.TRIANGLE_STRIP||m.mode===en.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new so(x,A):new Xe(x,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===en.TRIANGLE_STRIP?p.geometry=vc(p.geometry,Po):m.mode===en.TRIANGLE_FAN&&(p.geometry=vc(p.geometry,ir));else if(m.mode===en.LINES)p=new uo(x,A);else if(m.mode===en.LINE_STRIP)p=new ls(x,A);else if(m.mode===en.LINE_LOOP)p=new ho(x,A);else if(m.mode===en.POINTS)p=new Ai(x,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Xx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hn(p,r),m.extensions&&Ei(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ei(s,h[0],r),h[0];let f=new gt;r.extensions&&Ei(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mt(Jh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Ce;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new oo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,A=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let A=0,v=f.length;A<v;A++){let _=f[A],L=d[A],w=g[A],R=x[A],C=m[A];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=n._createAnimationTracks(_,L,w,R,C);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new To(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Yx)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ks:c.length>1?u=new gt:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Hn(u,r),r.extensions&&Ei(n,u,r),r.matrix!==void 0){let h=new Ce;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new gt;n.name&&(r.name=s.createUniqueName(n.name)),Hn(r,n),n.extensions&&Ei(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof kt||f instanceof bt)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];li[r.path]===li.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(li[r.path]){case li.weights:c=On;break;case li.rotation:c=Fn;break;case li.position:case li.scale:c=zn;break;default:switch(n.itemSize){case 1:c=On;break;case 2:case 3:default:c=zn;break}break}let u=s.interpolation!==void 0?Vx[s.interpolation]:ss,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+li[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=$c(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Fn?Xc:ko;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Zx(i,e,t){let n=e.attributes,s=new Ft;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){let u=$c(ds[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new E,l=new E;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=$c(ds[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Vt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function gf(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=qc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ne.workingColorSpace!==Ct&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ne.workingColorSpace}" not supported.`),Hn(i,e),Zx(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Wx(i,e.targets,t):i})}var xf="data:application/octet-stream;base64,Z2xURgIAAAAgvgAArBAAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NS4yLjQxIiwidmVyc2lvbiI6IjIuMCJ9LCJleHRlbnNpb25zVXNlZCI6WyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIl0sInNjZW5lIjowLCJzY2VuZXMiOlt7Im5hbWUiOiJTY2VuZSIsIm5vZGVzIjpbMF19XSwibm9kZXMiOlt7Im1lc2giOjAsIm5hbWUiOiJGYXJtSG91c2UyIn1dLCJtYXRlcmlhbHMiOlt7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoidHJpbSIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuODE5OTk5OTkyODQ3NDQyNiwwLjgwMDAwMDAxMTkyMDkyOSwwLjc1OTk5OTk5MDQ2MzI1NjgsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuODAwMDAwMDExOTIwOTI5fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwibmFtZSI6IndhbGwiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjcyMDAwMDAyODYxMDIyOTUsMC42NjAwMDAwMjYyMjYwNDM3LDAuNTYwMDAwMDAyMzg0MTg1OCwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC44OTk5OTk5NzYxNTgxNDIxfX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwibmFtZSI6InJvb2YiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjIxOTk5OTk5ODgwNzkwNzEsMC4xNzAwMDAwMDE3ODgxMzkzNCwwLjE1OTk5OTk5NjQyMzcyMTMsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuOTQ5OTk5OTg4MDc5MDcxfX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwiZW1pc3NpdmVGYWN0b3IiOlsxLDAuNTUwMDAwMDExOTIwOTI5LDAuMTgwMDAwMDA3MTUyNTU3MzddLCJleHRlbnNpb25zIjp7IktIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgiOnsiZW1pc3NpdmVTdHJlbmd0aCI6Nn19LCJuYW1lIjoiZ2xhc3MiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wNTAwMDAwMDA3NDUwNTgwNiwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC41fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwibmFtZSI6ImRvb3IiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjMxOTk5OTk5Mjg0NzQ0MjYsMC4yMDAwMDAwMDI5ODAyMzIyNCwwLjE0MDAwMDAwMDU5NjA0NjQ1LDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjgwMDAwMDAxMTkyMDkyOX19XSwibWVzaGVzIjpbeyJuYW1lIjoiaF9mb3VuZF9tZXNoIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MCwiTk9STUFMIjoxfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MywiTk9STUFMIjo0fSwiaW5kaWNlcyI6NSwibWF0ZXJpYWwiOjF9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NiwiTk9STUFMIjo3fSwiaW5kaWNlcyI6OCwibWF0ZXJpYWwiOjJ9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6OSwiTk9STUFMIjoxMH0sImluZGljZXMiOjExLCJtYXRlcmlhbCI6M30seyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxMiwiTk9STUFMIjoxM30sImluZGljZXMiOjE0LCJtYXRlcmlhbCI6NH1dfV0sImFjY2Vzc29ycyI6W3siYnVmZmVyVmlldyI6MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjEyMDAsIm1heCI6WzQuNDAwMDAwMDk1MzY3NDMyLDUuMTE5OTk5ODg1NTU5MDgyLDMuMDQ5OTk5OTUyMzE2Mjg0XSwibWluIjpbLTMuMDk5OTk5OTA0NjMyNTY4NCwtMC4xMDAwMDAwMDE0OTAxMTYxMiwtMi4yNV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTIwMCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoxODAwLCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjozLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NzIsIm1heCI6WzQuMzAwMDAwMTkwNzM0ODYzLDUsMS43MDAwMDAwNDc2ODM3MTU4XSwibWluIjpbLTIuNTk5OTk5OTA0NjMyNTY4NCwwLC0xLjcwMDAwMDA0NzY4MzcxNThdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjcyLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjEwOCwidHlwZSI6IlNDQUxBUiJ9LHsiYnVmZmVyVmlldyI6NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjYwLCJtYXgiOls0LjY5OTk5OTgwOTI2NTEzNyw0LjU5OTk5OTkwNDYzMjU2OCwyLjk1MDAwMDA0NzY4MzcxNl0sIm1pbiI6Wy0zLjA0OTk5OTk1MjMxNjI4NCwxLjk1MDAwMDA0NzY4MzcxNTgsLTIuMjAwMDAwMDQ3NjgzNzE2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo2MCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjgsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50Ijo4NCwidHlwZSI6IlNDQUxBUiJ9LHsiYnVmZmVyVmlldyI6OSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwibWF4IjpbMy41LDMuNzUsMi43NDAwMDAwMDk1MzY3NDNdLCJtaW4iOlstMi4zOTAwMDAxMDQ5MDQxNzUsMC44MDAwMDAwMTE5MjA5MjksMS4zOTk5OTk5NzYxNTgxNDJdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNDQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjIxNiwidHlwZSI6IlNDQUxBUiJ9LHsiYnVmZmVyVmlldyI6MTIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNjgsIm1heCI6WzMuOTAwMDAwMDk1MzY3NDMxNiwyLjIxMDAwMDAzODE0Njk3MjcsMS43NTk5OTk5OTA0NjMyNTY4XSwibWluIjpbLTIuNzg5OTk5OTYxODUzMDI3MywwLjI1LDEuNDE5OTk5OTU3MDg0NjU1OF0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2OCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE0LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyLCJ0eXBlIjoiU0NBTEFSIn1dLCJidWZmZXJWaWV3cyI6W3siYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNDQwMCwiYnl0ZU9mZnNldCI6MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE0NDAwLCJieXRlT2Zmc2V0IjoxNDQwMCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjM2MDAsImJ5dGVPZmZzZXQiOjI4ODAwLCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6ODY0LCJieXRlT2Zmc2V0IjozMjQwMCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjg2NCwiYnl0ZU9mZnNldCI6MzMyNjQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyMTYsImJ5dGVPZmZzZXQiOjM0MTI4LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NzIwLCJieXRlT2Zmc2V0IjozNDM0NCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjcyMCwiYnl0ZU9mZnNldCI6MzUwNjQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNjgsImJ5dGVPZmZzZXQiOjM1Nzg0LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6MzU5NTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNzI4LCJieXRlT2Zmc2V0IjozNzY4MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjQzMiwiYnl0ZU9mZnNldCI6Mzk0MDgsInRhcmdldCI6MzQ5NjN9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyMDE2LCJieXRlT2Zmc2V0IjozOTg0MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjIwMTYsImJ5dGVPZmZzZXQiOjQxODU2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NTA0LCJieXRlT2Zmc2V0Ijo0Mzg3MiwidGFyZ2V0IjozNDk2M31dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo0NDM3Nn1dfVitAABCSU4AzcwswM3MzL1mZuY/zcwswM3MzL1mZuY/zcwswM3MzL1mZuY/zcyMQM3MzL1mZuY/zcyMQM3MzL1mZuY/zcyMQM3MzL1mZuY/zcyMQM3MzL1mZua/zcyMQM3MzL1mZua/zcyMQM3MzL1mZua/zcwswM3MzL1mZua/zcwswM3MzL1mZua/zcwswM3MzL1mZua/zcwswJqZmT5mZuY/zcwswJqZmT5mZuY/zcwswJqZmT5mZuY/zcyMQJqZmT5mZuY/zcyMQJqZmT5mZuY/zcyMQJqZmT5mZuY/zcyMQJqZmT5mZua/zcyMQJqZmT5mZua/zcyMQJqZmT5mZua/zcwswJqZmT5mZua/zcwswJqZmT5mZua/zcwswJqZmT5mZua/ZmZGwKRwHUAAABBAZmZGwKRwHUAAABBAZmZGwKRwHUAAABBAAAAgQKRwHUAAABBAAAAgQKRwHUAAABBAAAAgQKRwHUAAABBAzcwcQArXI0AAABBAzcwcQArXI0AAABBAzcwcQArXI0AAABBAMzNDwArXI0AAABBAMzNDwArXI0AAABBAMzNDwArXI0AAABBAZmZGwKRwHUAAABDAZmZGwKRwHUAAABDAZmZGwKRwHUAAABDAAAAgQKRwHUAAABDAAAAgQKRwHUAAABDAAAAgQKRwHUAAABDAzcwcQArXI0AAABDAzcwcQArXI0AAABDAzcwcQArXI0AAABDAMzNDwArXI0AAABDAMzNDwArXI0AAABDAMzNDwArXI0AAABDAmpn5vwAAoEDNzMw9mpn5vwAAoEDNzMw9mpn5vwAAoEDNzMw9AACgvwAAoEDNzMw9AACgvwAAoEDNzMw9AACgvwAAoEDNzMw9AACgvwAAoECamRm/AACgvwAAoECamRm/AACgvwAAoECamRm/mpn5vwAAoECamRm/mpn5vwAAoECamRm/mpn5vwAAoECamRm/mpn5vwrXo0DNzMw9mpn5vwrXo0DNzMw9mpn5vwrXo0DNzMw9AACgvwrXo0DNzMw9AACgvwrXo0DNzMw9AACgvwrXo0DNzMw9AACgvwrXo0CamRm/AACgvwrXo0CamRm/AACgvwrXo0CamRm/mpn5vwrXo0CamRm/mpn5vwrXo0CamRm/mpn5vwrXo0CamRm/AAAgwAAAAAAAADBAAAAgwAAAAAAAADBAAAAgwAAAAAAAADBAzczMPgAAAAAAADBAzczMPgAAAAAAADBAzczMPgAAAAAAADBAzczMPgAAAACamdk/zczMPgAAAACamdk/zczMPgAAAACamdk/AAAgwAAAAACamdk/AAAgwAAAAACamdk/AAAgwAAAAACamdk/AAAgwAAAgD4AADBAAAAgwAAAgD4AADBAAAAgwAAAgD4AADBAzczMPgAAgD4AADBAzczMPgAAgD4AADBAzczMPgAAgD4AADBAzczMPgAAgD6amdk/zczMPgAAgD6amdk/zczMPgAAgD6amdk/AAAgwAAAgD6amdk/AAAgwAAAgD6amdk/AAAgwAAAgD6amdk/UrgewAAAgD7XozBAUrgewAAAgD7XozBAUrgewAAAgD7XozBA4noUwAAAgD7XozBA4noUwAAAgD7XozBA4noUwAAAgD7XozBA4noUwAAAgD5nZiZA4noUwAAAgD5nZiZA4noUwAAAgD5nZiZAUrgewAAAgD5nZiZAUrgewAAAgD5nZiZAUrgewAAAgD5nZiZAUrgewDMzE0DXozBAUrgewDMzE0DXozBAUrgewDMzE0DXozBA4noUwDMzE0DXozBA4noUwDMzE0DXozBA4noUwDMzE0DXozBA4noUwDMzE0BnZiZA4noUwDMzE0BnZiZA4noUwDMzE0BnZiZAUrgewDMzE0BnZiZAUrgewDMzE0BnZiZAUrgewDMzE0BnZiZAr0dhPgAAgD7XozBAr0dhPgAAgD7XozBAr0dhPgAAgD7XozBAXI/CPgAAgD7XozBAXI/CPgAAgD7XozBAXI/CPgAAgD7XozBAXI/CPgAAgD5nZiZAXI/CPgAAgD5nZiZAXI/CPgAAgD5nZiZAr0dhPgAAgD5nZiZAr0dhPgAAgD5nZiZAr0dhPgAAgD5nZiZAr0dhPjMzE0DXozBAr0dhPjMzE0DXozBAr0dhPjMzE0DXozBAXI/CPjMzE0DXozBAXI/CPjMzE0DXozBAXI/CPjMzE0DXozBAXI/CPjMzE0BnZiZAXI/CPjMzE0BnZiZAXI/CPjMzE0BnZiZAr0dhPjMzE0BnZiZAr0dhPjMzE0BnZiZAr0dhPjMzE0BnZiZAmpkZwDMzcz+uRylAmpkZwDMzcz+uRylAmpkZwDMzcz+uRylAmpkZwGZmhj+uRylAmpkZwGZmhj+uRylAmpkZwGZmhj+uRylAmpkZwGZmhj+Qwi1AmpkZwGZmhj+Qwi1AmpkZwGZmhj+Qwi1AmpkZwDMzcz+Qwi1AmpkZwDMzcz+Qwi1AmpkZwDMzcz+Qwi1AmpmZPjMzcz+uRylAmpmZPjMzcz+uRylAmpmZPjMzcz+uRylAmpmZPmZmhj+uRylAmpmZPmZmhj+uRylAmpmZPmZmhj+uRylAmpmZPmZmhj+Qwi1AmpmZPmZmhj+Qwi1AmpmZPmZmhj+Qwi1AmpmZPjMzcz+Qwi1AmpmZPjMzcz+Qwi1AmpmZPjMzcz+Qwi1AzcwUwAAAgD65Hi1AzcwUwAAAgD65Hi1AzcwUwAAAgD65Hi1AmZkRwAAAgD65Hi1AmZkRwAAAgD65Hi1AmZkRwAAAgD65Hi1AmZkRwAAAgD6F6ylAmZkRwAAAgD6F6ylAmZkRwAAAgD6F6ylAzcwUwAAAgD6F6ylAzcwUwAAAgD6F6ylAzcwUwAAAgD6F6ylAzcwUwAAAgD+5Hi1AzcwUwAAAgD+5Hi1AzcwUwAAAgD+5Hi1AmZkRwAAAgD+5Hi1AmZkRwAAAgD+5Hi1AmZkRwAAAgD+5Hi1AmZkRwAAAgD+F6ylAmZkRwAAAgD+F6ylAmZkRwAAAgD+F6ylAzcwUwAAAgD+F6ylAzcwUwAAAgD+F6ylAzcwUwAAAgD+F6ylAmpkBwAAAgD65Hi1AmpkBwAAAgD65Hi1AmpkBwAAAgD65Hi1Azcz8vwAAgD65Hi1Azcz8vwAAgD65Hi1Azcz8vwAAgD65Hi1Azcz8vwAAgD6F6ylAzcz8vwAAgD6F6ylAzcz8vwAAgD6F6ylAmpkBwAAAgD6F6ylAmpkBwAAAgD6F6ylAmpkBwAAAgD6F6ylAmpkBwAAAgD+5Hi1AmpkBwAAAgD+5Hi1AmpkBwAAAgD+5Hi1Azcz8vwAAgD+5Hi1Azcz8vwAAgD+5Hi1Azcz8vwAAgD+5Hi1Azcz8vwAAgD+F6ylAzcz8vwAAgD+F6ylAzcz8vwAAgD+F6ylAmpkBwAAAgD+F6ylAmpkBwAAAgD+F6ylAmpkBwAAAgD+F6ylAzczcvwAAgD65Hi1AzczcvwAAgD65Hi1AzczcvwAAgD65Hi1AZ2bWvwAAgD65Hi1AZ2bWvwAAgD65Hi1AZ2bWvwAAgD65Hi1AZ2bWvwAAgD6F6ylAZ2bWvwAAgD6F6ylAZ2bWvwAAgD6F6ylAzczcvwAAgD6F6ylAzczcvwAAgD6F6ylAzczcvwAAgD6F6ylAzczcvwAAgD+5Hi1AzczcvwAAgD+5Hi1AzczcvwAAgD+5Hi1AZ2bWvwAAgD+5Hi1AZ2bWvwAAgD+5Hi1AZ2bWvwAAgD+5Hi1AZ2bWvwAAgD+F6ylAZ2bWvwAAgD+F6ylAZ2bWvwAAgD+F6ylAzczcvwAAgD+F6ylAzczcvwAAgD+F6ylAzczcvwAAgD+F6ylAZma2vwAAgD65Hi1AZma2vwAAgD65Hi1AZma2vwAAgD65Hi1AAACwvwAAgD65Hi1AAACwvwAAgD65Hi1AAACwvwAAgD65Hi1AAACwvwAAgD6F6ylAAACwvwAAgD6F6ylAAACwvwAAgD6F6ylAZma2vwAAgD6F6ylAZma2vwAAgD6F6ylAZma2vwAAgD6F6ylAZma2vwAAgD+5Hi1AZma2vwAAgD+5Hi1AZma2vwAAgD+5Hi1AAACwvwAAgD+5Hi1AAACwvwAAgD+5Hi1AAACwvwAAgD+5Hi1AAACwvwAAgD+F6ylAAACwvwAAgD+F6ylAAACwvwAAgD+F6ylAZma2vwAAgD+F6ylAZma2vwAAgD+F6ylAZma2vwAAgD+F6ylAZ2ZmvgAAgD65Hi1AZ2ZmvgAAgD65Hi1AZ2ZmvgAAgD65Hi1AMzMzvgAAgD65Hi1AMzMzvgAAgD65Hi1AMzMzvgAAgD65Hi1AMzMzvgAAgD6F6ylAMzMzvgAAgD6F6ylAMzMzvgAAgD6F6ylAZ2ZmvgAAgD6F6ylAZ2ZmvgAAgD6F6ylAZ2ZmvgAAgD6F6ylAZ2ZmvgAAgD+5Hi1AZ2ZmvgAAgD+5Hi1AZ2ZmvgAAgD+5Hi1AMzMzvgAAgD+5Hi1AMzMzvgAAgD+5Hi1AMzMzvgAAgD+5Hi1AMzMzvgAAgD+F6ylAMzMzvgAAgD+F6ylAMzMzvgAAgD+F6ylAZ2ZmvgAAgD+F6ylAZ2ZmvgAAgD+F6ylAZ2ZmvgAAgD+F6ylAmpmZPQAAgD65Hi1AmpmZPQAAgD65Hi1AmpmZPQAAgD65Hi1AAAAAPgAAgD65Hi1AAAAAPgAAgD65Hi1AAAAAPgAAgD65Hi1AAAAAPgAAgD6F6ylAAAAAPgAAgD6F6ylAAAAAPgAAgD6F6ylAmpmZPQAAgD6F6ylAmpmZPQAAgD6F6ylAmpmZPQAAgD6F6ylAmpmZPQAAgD+5Hi1AmpmZPQAAgD+5Hi1AmpmZPQAAgD+5Hi1AAAAAPgAAgD+5Hi1AAAAAPgAAgD+5Hi1AAAAAPgAAgD+5Hi1AAAAAPgAAgD+F6ylAAAAAPgAAgD+F6ylAAAAAPgAAgD+F6ylAmpmZPQAAgD+F6ylAmpmZPQAAgD+F6ylAmpmZPQAAgD+F6ylAZmamvwAAAAAzM0NAZmamvwAAAAAzM0NAZmamvwAAAAAzM0NAzczMvgAAAAAzM0NAzczMvgAAAAAzM0NAzczMvgAAAAAzM0NAzczMvgAAAADNzCxAzczMvgAAAADNzCxAzczMvgAAAADNzCxAZmamvwAAAADNzCxAZmamvwAAAADNzCxAZmamvwAAAADNzCxAZmamv4/C9T0zM0NAZmamv4/C9T0zM0NAZmamv4/C9T0zM0NAzczMvo/C9T0zM0NAzczMvo/C9T0zM0NAzczMvo/C9T0zM0NAzczMvo/C9T3NzCxAzczMvo/C9T3NzCxAzczMvo/C9T3NzCxAZmamv4/C9T3NzCxAZmamv4/C9T3NzCxAZmamv4/C9T3NzCxAZmamv4/C9T2amTlAZmamv4/C9T2amTlAZmamv4/C9T2amTlAzczMvo/C9T2amTlAzczMvo/C9T2amTlAzczMvo/C9T2amTlAzczMvo/C9T3NzCxAzczMvo/C9T3NzCxAzczMvo/C9T3NzCxAZmamv4/C9T3NzCxAZmamv4/C9T3NzCxAZmamv4/C9T3NzCxAZmamv83MTD6amTlAZmamv83MTD6amTlAZmamv83MTD6amTlAzczMvs3MTD6amTlAzczMvs3MTD6amTlAzczMvs3MTD6amTlAzczMvs3MTD7NzCxAzczMvs3MTD7NzCxAzczMvs3MTD7NzCxAZmamv83MTD7NzCxAZmamv83MTD7NzCxAZmamv83MTD7NzCxAzcwcwJqZCUBcj+I/zcwcwJqZCUBcj+I/zcwcwJqZCUBcj+I/ZmbGv5qZCUBcj+I/ZmbGv5qZCUBcj+I/ZmbGv5qZCUBcj+I/ZmbGv5qZCUD2KNw/ZmbGv5qZCUD2KNw/ZmbGv5qZCUD2KNw/zcwcwJqZCUD2KNw/zcwcwJqZCUD2KNw/zcwcwJqZCUD2KNw/zcwcwKRwDUBcj+I/zcwcwKRwDUBcj+I/zcwcwKRwDUBcj+I/ZmbGv6RwDUBcj+I/ZmbGv6RwDUBcj+I/ZmbGv6RwDUBcj+I/ZmbGv6RwDUD2KNw/ZmbGv6RwDUD2KNw/ZmbGv6RwDUD2KNw/zcwcwKRwDUD2KNw/zcwcwKRwDUD2KNw/zcwcwKRwDUD2KNw/16MgwArXYz9mZuY/16MgwArXYz9mZuY/16MgwArXYz9mZuY/Uri+vwrXYz9mZuY/Uri+vwrXYz9mZuY/Uri+vwrXYz9mZuY/Uri+vwrXYz/2KNw/Uri+vwrXYz/2KNw/Uri+vwrXYz/2KNw/16MgwArXYz/2KNw/16MgwArXYz/2KNw/16MgwArXYz/2KNw/16MgwDMzcz9mZuY/16MgwDMzcz9mZuY/16MgwDMzcz9mZuY/Uri+vzMzcz9mZuY/Uri+vzMzcz9mZuY/Uri+vzMzcz9mZuY/Uri+vzMzcz/2KNw/Uri+vzMzcz/2KNw/Uri+vzMzcz/2KNw/16MgwDMzcz/2KNw/16MgwDMzcz/2KNw/16MgwDMzcz/2KNw/zcwcwDMzcz9cj+I/zcwcwDMzcz9cj+I/zcwcwDMzcz9cj+I/w/UYwDMzcz9cj+I/w/UYwDMzcz9cj+I/w/UYwDMzcz9cj+I/w/UYwDMzcz/2KNw/w/UYwDMzcz/2KNw/w/UYwDMzcz/2KNw/zcwcwDMzcz/2KNw/zcwcwDMzcz/2KNw/zcwcwDMzcz/2KNw/zcwcwJqZCUBcj+I/zcwcwJqZCUBcj+I/zcwcwJqZCUBcj+I/w/UYwJqZCUBcj+I/w/UYwJqZCUBcj+I/w/UYwJqZCUBcj+I/w/UYwJqZCUD2KNw/w/UYwJqZCUD2KNw/w/UYwJqZCUD2KNw/zcwcwJqZCUD2KNw/zcwcwJqZCUD2KNw/zcwcwJqZCUD2KNw/exTOvzMzcz9cj+I/exTOvzMzcz9cj+I/exTOvzMzcz9cj+I/ZmbGvzMzcz9cj+I/ZmbGvzMzcz9cj+I/ZmbGvzMzcz9cj+I/ZmbGvzMzcz/2KNw/ZmbGvzMzcz/2KNw/ZmbGvzMzcz/2KNw/exTOvzMzcz/2KNw/exTOvzMzcz/2KNw/exTOvzMzcz/2KNw/exTOv5qZCUBcj+I/exTOv5qZCUBcj+I/exTOv5qZCUBcj+I/ZmbGv5qZCUBcj+I/ZmbGv5qZCUBcj+I/ZmbGv5qZCUBcj+I/ZmbGv5qZCUD2KNw/ZmbGv5qZCUD2KNw/ZmbGv5qZCUD2KNw/exTOv5qZCUD2KNw/exTOv5qZCUD2KNw/exTOv5qZCUD2KNw/rkcBwDMzcz9cj+I/rkcBwDMzcz9cj+I/rkcBwDMzcz9cj+I/pHD9vzMzcz9cj+I/pHD9vzMzcz9cj+I/pHD9vzMzcz9cj+I/pHD9vzMzcz/2KNw/pHD9vzMzcz/2KNw/pHD9vzMzcz/2KNw/rkcBwDMzcz/2KNw/rkcBwDMzcz/2KNw/rkcBwDMzcz/2KNw/rkcBwJqZCUBcj+I/rkcBwJqZCUBcj+I/rkcBwJqZCUBcj+I/pHD9v5qZCUBcj+I/pHD9v5qZCUBcj+I/pHD9v5qZCUBcj+I/pHD9v5qZCUD2KNw/pHD9v5qZCUD2KNw/pHD9v5qZCUD2KNw/rkcBwJqZCUD2KNw/rkcBwJqZCUD2KNw/rkcBwJqZCUD2KNw/w/UYwHE9qj9cj+I/w/UYwHE9qj9cj+I/w/UYwHE9qj9cj+I/exTOv3E9qj9cj+I/exTOv3E9qj9cj+I/exTOv3E9qj9cj+I/exTOv3E9qj/2KNw/exTOv3E9qj/2KNw/exTOv3E9qj/2KNw/w/UYwHE9qj/2KNw/w/UYwHE9qj/2KNw/w/UYwHE9qj/2KNw/w/UYwClcrz9cj+I/w/UYwClcrz9cj+I/w/UYwClcrz9cj+I/exTOvylcrz9cj+I/exTOvylcrz9cj+I/exTOvylcrz9cj+I/exTOvylcrz/2KNw/exTOvylcrz/2KNw/exTOvylcrz/2KNw/w/UYwClcrz/2KNw/w/UYwClcrz/2KNw/w/UYwClcrz/2KNw/w/UYwKRw3T9cj+I/w/UYwKRw3T9cj+I/w/UYwKRw3T9cj+I/exTOv6Rw3T9cj+I/exTOv6Rw3T9cj+I/exTOv6Rw3T9cj+I/exTOv6Rw3T/2KNw/exTOv6Rw3T/2KNw/exTOv6Rw3T/2KNw/w/UYwKRw3T/2KNw/w/UYwKRw3T/2KNw/w/UYwKRw3T/2KNw/w/UYwFyP4j9cj+I/w/UYwFyP4j9cj+I/w/UYwFyP4j9cj+I/exTOv1yP4j9cj+I/exTOv1yP4j9cj+I/exTOv1yP4j9cj+I/exTOv1yP4j/2KNw/exTOv1yP4j/2KNw/exTOv1yP4j/2KNw/w/UYwFyP4j/2KNw/w/UYwFyP4j/2KNw/w/UYwFyP4j/2KNw/zczMPZqZCUBcj+I/zczMPZqZCUBcj+I/zczMPZqZCUBcj+I/AACAP5qZCUBcj+I/AACAP5qZCUBcj+I/AACAP5qZCUBcj+I/AACAP5qZCUD2KNw/AACAP5qZCUD2KNw/AACAP5qZCUD2KNw/zczMPZqZCUD2KNw/zczMPZqZCUD2KNw/zczMPZqZCUD2KNw/zczMPaRwDUBcj+I/zczMPaRwDUBcj+I/zczMPaRwDUBcj+I/AACAP6RwDUBcj+I/AACAP6RwDUBcj+I/AACAP6RwDUBcj+I/AACAP6RwDUD2KNw/AACAP6RwDUD2KNw/AACAP6RwDUD2KNw/zczMPaRwDUD2KNw/zczMPaRwDUD2KNw/zczMPaRwDUD2KNw/CtcjPQrXYz9mZuY/CtcjPQrXYz9mZuY/CtcjPQrXYz9mZuY/FK6HPwrXYz9mZuY/FK6HPwrXYz9mZuY/FK6HPwrXYz9mZuY/FK6HPwrXYz/2KNw/FK6HPwrXYz/2KNw/FK6HPwrXYz/2KNw/CtcjPQrXYz/2KNw/CtcjPQrXYz/2KNw/CtcjPQrXYz/2KNw/CtcjPTMzcz9mZuY/CtcjPTMzcz9mZuY/CtcjPTMzcz9mZuY/FK6HPzMzcz9mZuY/FK6HPzMzcz9mZuY/FK6HPzMzcz9mZuY/FK6HPzMzcz/2KNw/FK6HPzMzcz/2KNw/FK6HPzMzcz/2KNw/CtcjPTMzcz/2KNw/CtcjPTMzcz/2KNw/CtcjPTMzcz/2KNw/zczMPTMzcz9cj+I/zczMPTMzcz9cj+I/zczMPTMzcz9cj+I/CtcjPjMzcz9cj+I/CtcjPjMzcz9cj+I/CtcjPjMzcz9cj+I/CtcjPjMzcz/2KNw/CtcjPjMzcz/2KNw/CtcjPjMzcz/2KNw/zczMPTMzcz/2KNw/zczMPTMzcz/2KNw/zczMPTMzcz/2KNw/zczMPZqZCUBcj+I/zczMPZqZCUBcj+I/zczMPZqZCUBcj+I/CtcjPpqZCUBcj+I/CtcjPpqZCUBcj+I/CtcjPpqZCUBcj+I/CtcjPpqZCUD2KNw/CtcjPpqZCUD2KNw/CtcjPpqZCUD2KNw/zczMPZqZCUD2KNw/zczMPZqZCUD2KNw/zczMPZqZCUD2KNw/16NwPzMzcz9cj+I/16NwPzMzcz9cj+I/16NwPzMzcz9cj+I/AACAPzMzcz9cj+I/AACAPzMzcz9cj+I/AACAPzMzcz9cj+I/AACAPzMzcz/2KNw/AACAPzMzcz/2KNw/AACAPzMzcz/2KNw/16NwPzMzcz/2KNw/16NwPzMzcz/2KNw/16NwPzMzcz/2KNw/16NwP5qZCUBcj+I/16NwP5qZCUBcj+I/16NwP5qZCUBcj+I/AACAP5qZCUBcj+I/AACAP5qZCUBcj+I/AACAP5qZCUBcj+I/AACAP5qZCUD2KNw/AACAP5qZCUD2KNw/AACAP5qZCUD2KNw/16NwP5qZCUD2KNw/16NwP5qZCUD2KNw/16NwP5qZCUD2KNw/FK4HPzMzcz9cj+I/FK4HPzMzcz9cj+I/FK4HPzMzcz9cj+I/hesRPzMzcz9cj+I/hesRPzMzcz9cj+I/hesRPzMzcz9cj+I/hesRPzMzcz/2KNw/hesRPzMzcz/2KNw/hesRPzMzcz/2KNw/FK4HPzMzcz/2KNw/FK4HPzMzcz/2KNw/FK4HPzMzcz/2KNw/FK4HP5qZCUBcj+I/FK4HP5qZCUBcj+I/FK4HP5qZCUBcj+I/hesRP5qZCUBcj+I/hesRP5qZCUBcj+I/hesRP5qZCUBcj+I/hesRP5qZCUD2KNw/hesRP5qZCUD2KNw/hesRP5qZCUD2KNw/FK4HP5qZCUD2KNw/FK4HP5qZCUD2KNw/FK4HP5qZCUD2KNw/CtcjPnE9qj9cj+I/CtcjPnE9qj9cj+I/CtcjPnE9qj9cj+I/16NwP3E9qj9cj+I/16NwP3E9qj9cj+I/16NwP3E9qj9cj+I/16NwP3E9qj/2KNw/16NwP3E9qj/2KNw/16NwP3E9qj/2KNw/CtcjPnE9qj/2KNw/CtcjPnE9qj/2KNw/CtcjPnE9qj/2KNw/CtcjPilcrz9cj+I/CtcjPilcrz9cj+I/CtcjPilcrz9cj+I/16NwPylcrz9cj+I/16NwPylcrz9cj+I/16NwPylcrz9cj+I/16NwPylcrz/2KNw/16NwPylcrz/2KNw/16NwPylcrz/2KNw/CtcjPilcrz/2KNw/CtcjPilcrz/2KNw/CtcjPilcrz/2KNw/CtcjPqRw3T9cj+I/CtcjPqRw3T9cj+I/CtcjPqRw3T9cj+I/16NwP6Rw3T9cj+I/16NwP6Rw3T9cj+I/16NwP6Rw3T9cj+I/16NwP6Rw3T/2KNw/16NwP6Rw3T/2KNw/16NwP6Rw3T/2KNw/CtcjPqRw3T/2KNw/CtcjPqRw3T/2KNw/CtcjPqRw3T/2KNw/CtcjPlyP4j9cj+I/CtcjPlyP4j9cj+I/CtcjPlyP4j9cj+I/16NwP1yP4j9cj+I/16NwP1yP4j9cj+I/16NwP1yP4j9cj+I/16NwP1yP4j/2KNw/16NwP1yP4j/2KNw/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MzMzQM3MTD/2KLw/MzMzQM3MTD+PwrU/MzMzQM3MTD+PwrU/MzMzQM3MTD+PwrU/KVwvQM3MTD+PwrU/KVwvQM3MTD+PwrU/KVwvQM3MTD+PwrU/KVwvQJqZ2T/2KLw/KVwvQJqZ2T/2KLw/KVwvQJqZ2T/2KLw/MzMzQJqZ2T/2KLw/MzMzQJqZ2T/2KLw/MzMzQJqZ2T/2KLw/MzMzQJqZ2T+PwrU/MzMzQJqZ2T+PwrU/MzMzQJqZ2T+PwrU/KVwvQJqZ2T+PwrU/KVwvQJqZ2T+PwrU/KVwvQJqZ2T+PwrU/AABgQM3MTD/2KLw/AABgQM3MTD/2KLw/AABgQM3MTD/2KLw/CtdjQM3MTD/2KLw/CtdjQM3MTD/2KLw/CtdjQM3MTD/2KLw/CtdjQM3MTD+PwrU/CtdjQM3MTD+PwrU/CtdjQM3MTD+PwrU/AABgQM3MTD+PwrU/AABgQM3MTD+PwrU/AABgQM3MTD+PwrU/AABgQJqZ2T/2KLw/AABgQJqZ2T/2KLw/AABgQJqZ2T/2KLw/CtdjQJqZ2T/2KLw/CtdjQJqZ2T/2KLw/CtdjQJqZ2T/2KLw/CtdjQJqZ2T+PwrU/CtdjQJqZ2T+PwrU/CtdjQJqZ2T+PwrU/AABgQJqZ2T+PwrU/AABgQJqZ2T+PwrU/AABgQJqZ2T+PwrU/7FFIQM3MTD/2KLw/7FFIQM3MTD/2KLw/7FFIQM3MTD/2KLw/SOFKQM3MTD/2KLw/SOFKQM3MTD/2KLw/SOFKQM3MTD/2KLw/SOFKQM3MTD+PwrU/SOFKQM3MTD+PwrU/SOFKQM3MTD+PwrU/7FFIQM3MTD+PwrU/7FFIQM3MTD+PwrU/7FFIQM3MTD+PwrU/7FFIQJqZ2T/2KLw/7FFIQJqZ2T/2KLw/7FFIQJqZ2T/2KLw/SOFKQJqZ2T/2KLw/SOFKQJqZ2T/2KLw/SOFKQJqZ2T/2KLw/SOFKQJqZ2T+PwrU/SOFKQJqZ2T+PwrU/SOFKQJqZ2T+PwrU/7FFIQJqZ2T+PwrU/7FFIQJqZ2T+PwrU/7FFIQJqZ2T+PwrU/MzMzQHE9ij/2KLw/MzMzQHE9ij/2KLw/MzMzQHE9ij/2KLw/AABgQHE9ij/2KLw/AABgQHE9ij/2KLw/AABgQHE9ij/2KLw/AABgQHE9ij+PwrU/AABgQHE9ij+PwrU/AABgQHE9ij+PwrU/MzMzQHE9ij+PwrU/MzMzQHE9ij+PwrU/MzMzQHE9ij+PwrU/MzMzQClcjz/2KLw/MzMzQClcjz/2KLw/MzMzQClcjz/2KLw/AABgQClcjz/2KLw/AABgQClcjz/2KLw/AABgQClcjz/2KLw/AABgQClcjz+PwrU/AABgQClcjz+PwrU/AABgQClcjz+PwrU/MzMzQClcjz+PwrU/MzMzQClcjz+PwrU/MzMzQClcjz+PwrU/MzMzQNejsD/2KLw/MzMzQNejsD/2KLw/MzMzQNejsD/2KLw/AABgQNejsD/2KLw/AABgQNejsD/2KLw/AABgQNejsD/2KLw/AABgQNejsD+PwrU/AABgQNejsD+PwrU/AABgQNejsD+PwrU/MzMzQNejsD+PwrU/MzMzQNejsD+PwrU/MzMzQNejsD+PwrU/MzMzQI/CtT/2KLw/MzMzQI/CtT/2KLw/MzMzQI/CtT/2KLw/AABgQI/CtT/2KLw/AABgQI/CtT/2KLw/AABgQI/CtT/2KLw/AABgQI/CtT+PwrU/AABgQI/CtT+PwrU/AABgQI/CtT+PwrU/MzMzQI/CtT+PwrU/MzMzQI/CtT+PwrU/MzMzQI/CtT+PwrU/w/UovwAAcEAzMxNAw/UovwAAcEAzMxNAw/UovwAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAAABBAj8J1PQAAcEAAABBAj8J1PQAAcEAAABBAw/UovwAAcEAAABBAw/UovwAAcEAAABBAw/UovwAAcEAAABBAw/UovwrXc0AzMxNAw/UovwrXc0AzMxNAw/UovwrXc0AzMxNAj8J1PQrXc0AzMxNAj8J1PQrXc0AzMxNAj8J1PQrXc0AzMxNAj8J1PQrXc0AAABBAj8J1PQrXc0AAABBAj8J1PQrXc0AAABBAw/UovwrXc0AAABBAw/UovwrXc0AAABBAw/UovwrXc0AAABBA7FE4v8P1OEC4HhVA7FE4v8P1OEC4HhVA7FE4v8P1OEC4HhVAj8L1PcP1OEC4HhVAj8L1PcP1OEC4HhVAj8L1PcP1OEC4HhVAj8L1PcP1OEAAABBAj8L1PcP1OEAAABBAj8L1PcP1OEAAABBA7FE4v8P1OEAAABBA7FE4v8P1OEAAABBA7FE4v8P1OEAAABBA7FE4v83MPEC4HhVA7FE4v83MPEC4HhVA7FE4v83MPEC4HhVAj8L1Pc3MPEC4HhVAj8L1Pc3MPEC4HhVAj8L1Pc3MPEC4HhVAj8L1Pc3MPEAAABBAj8L1Pc3MPEAAABBAj8L1Pc3MPEAAABBA7FE4v83MPEAAABBA7FE4v83MPEAAABBA7FE4v83MPEAAABBAw/Uov83MPEAzMxNAw/Uov83MPEAzMxNAw/Uov83MPEAzMxNAmpkZv83MPEAzMxNAmpkZv83MPEAzMxNAmpkZv83MPEAzMxNAmpkZv83MPEAAABBAmpkZv83MPEAAABBAmpkZv83MPEAAABBAw/Uov83MPEAAABBAw/Uov83MPEAAABBAw/Uov83MPEAAABBAw/UovwAAcEAzMxNAw/UovwAAcEAzMxNAw/UovwAAcEAzMxNAmpkZvwAAcEAzMxNAmpkZvwAAcEAzMxNAmpkZvwAAcEAzMxNAmpkZvwAAcEAAABBAmpkZvwAAcEAAABBAmpkZvwAAcEAAABBAw/UovwAAcEAAABBAw/UovwAAcEAAABBAw/UovwAAcEAAABBAAAAAAM3MPEAzMxNAAAAAAM3MPEAzMxNAAAAAAM3MPEAzMxNAj8J1Pc3MPEAzMxNAj8J1Pc3MPEAzMxNAj8J1Pc3MPEAzMxNAj8J1Pc3MPEAAABBAj8J1Pc3MPEAAABBAj8J1Pc3MPEAAABBAAAAAAM3MPEAAABBAAAAAAM3MPEAAABBAAAAAAM3MPEAAABBAAAAAAAAAcEAzMxNAAAAAAAAAcEAzMxNAAAAAAAAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAzMxNAj8J1PQAAcEAAABBAj8J1PQAAcEAAABBAj8J1PQAAcEAAABBAAAAAAAAAcEAAABBAAAAAAAAAcEAAABBAAAAAAAAAcEAAABBACtejvs3MPEAzMxNACtejvs3MPEAzMxNACtejvs3MPEAzMxNAKVyPvs3MPEAzMxNAKVyPvs3MPEAzMxNAKVyPvs3MPEAzMxNAKVyPvs3MPEAAABBAKVyPvs3MPEAAABBAKVyPvs3MPEAAABBACtejvs3MPEAAABBACtejvs3MPEAAABBACtejvs3MPEAAABBACtejvgAAcEAzMxNACtejvgAAcEAzMxNACtejvgAAcEAzMxNAKVyPvgAAcEAzMxNAKVyPvgAAcEAzMxNAKVyPvgAAcEAzMxNAKVyPvgAAcEAAABBAKVyPvgAAcEAAABBAKVyPvgAAcEAAABBACtejvgAAcEAAABBACtejvgAAcEAAABBACtejvgAAcEAAABBAmpkZvzCWTEAzMxNAmpkZvzCWTEAzMxNAmpkZvzCWTEAzMxNAAAAAADCWTEAzMxNAAAAAADCWTEAzMxNAAAAAADCWTEAzMxNAAAAAADCWTEAAABBAAAAAADCWTEAAABBAAAAAADCWTEAAABBAmpkZvzCWTEAAABBAmpkZvzCWTEAAABBAmpkZvzCWTEAAABBAmpkZv4wlT0AzMxNAmpkZv4wlT0AzMxNAmpkZv4wlT0AzMxNAAAAAAIwlT0AzMxNAAAAAAIwlT0AzMxNAAAAAAIwlT0AzMxNAAAAAAIwlT0AAABBAAAAAAIwlT0AAABBAAAAAAIwlT0AAABBAmpkZv4wlT0AAABBAmpkZv4wlT0AAABBAmpkZv4wlT0AAABBAmpkZv0GnXUAzMxNAmpkZv0GnXUAzMxNAmpkZv0GnXUAzMxNAAAAAAEGnXUAzMxNAAAAAAEGnXUAzMxNAAAAAAEGnXUAzMxNAAAAAAEGnXUAAABBAAAAAAEGnXUAAABBAAAAAAEGnXUAAABBAmpkZv0GnXUAAABBAmpkZv0GnXUAAABBAmpkZv0GnXUAAABBAmpkZv502YEAzMxNAmpkZv502YEAzMxNAmpkZv502YEAzMxNAAAAAAJ02YEAzMxNAAAAAAJ02YEAzMxNAAAAAAJ02YEAzMxNAAAAAAJ02YEAAABBAAAAAAJ02YEAAABBAAAAAAJ02YEAAABBAmpkZv502YEAAABBAmpkZv502YEAAABBAmpkZv502YEAAABBAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAALvlkvy755D4AAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAALvlkPy755D4AAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAALvlkPy755D4AAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAALvlkvy755D4AAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAALvlkvy755D4AAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAALvlkPy755D4AAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAALvlkPy755D4AAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAALvlkvy755D4AAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAADAA8AAAAPAAwABQAIABQABQAUABEABgAJABUABgAVABIACwACAA4ACwAOABcACgAHAAQACgAEAAEADQAQABMADQATABYAGQAlACgAGQAoABwAHQApACwAHQAsACAAHwArAC4AHwAuACIAIwAvACYAIwAmABoAIQAYABsAIQAbAB4AJAAtACoAJAAqACcAMAAzAD8AMAA/ADwANQA4AEQANQBEAEEANgA5AEUANgBFAEIAOwAyAD4AOwA+AEcAOgA3ADQAOgA0ADEAPQBAAEMAPQBDAEYASABLAFcASABXAFQATQBQAFwATQBcAFkATgBRAF0ATgBdAFoAUwBKAFYAUwBWAF8AUgBPAEwAUgBMAEkAVQBYAFsAVQBbAF4AYABjAG8AYABvAGwAZQBoAHQAZQB0AHEAZgBpAHUAZgB1AHIAawBiAG4AawBuAHcAagBnAGQAagBkAGEAbQBwAHMAbQBzAHYAeAB7AIcAeACHAIQAfQCAAIwAfQCMAIkAfgCBAI0AfgCNAIoAgwB6AIYAgwCGAI8AggB/AHwAggB8AHkAhQCIAIsAhQCLAI4AkACTAJ8AkACfAJwAlACXAKMAlACjAKAAlgCZAKUAlgClAKIAmgCRAJ0AmgCdAKYAmwCYAJUAmwCVAJIAngChAKQAngCkAKcAqACrALcAqAC3ALQArQCwALwArQC8ALkArgCxAL0ArgC9ALoAswCqALYAswC2AL8AsgCvAKwAsgCsAKkAtQC4ALsAtQC7AL4AwADDAM8AwADPAMwAxQDIANQAxQDUANEAxgDJANUAxgDVANIAywDCAM4AywDOANcAygDHAMQAygDEAMEAzQDQANMAzQDTANYA2ADbAOcA2ADnAOQA3QDgAOwA3QDsAOkA3gDhAO0A3gDtAOoA4wDaAOYA4wDmAO8A4gDfANwA4gDcANkA5QDoAOsA5QDrAO4A8ADzAP8A8AD/APwA9QD4AAQB9QAEAQEB9gD5AAUB9gAFAQIB+wDyAP4A+wD+AAcB+gD3APQA+gD0APEA/QAAAQMB/QADAQYBCAELARcBCAEXARQBDQEQARwBDQEcARkBDgERAR0BDgEdARoBEwEKARYBEwEWAR8BEgEPAQwBEgEMAQkBFQEYARsBFQEbAR4BIAEjAS8BIAEvASwBJQEoATQBJQE0ATEBJgEpATUBJgE1ATIBKwEiAS4BKwEuATcBKgEnASQBKgEkASEBLQEwATMBLQEzATYBOAE7AUcBOAFHAUQBPQFAAUwBPQFMAUkBPgFBAU0BPgFNAUoBQwE6AUYBQwFGAU8BQgE/ATwBQgE8ATkBRQFIAUsBRQFLAU4BUAFTAV8BUAFfAVwBVQFYAWQBVQFkAWEBVgFZAWUBVgFlAWIBWwFSAV4BWwFeAWcBWgFXAVQBWgFUAVEBXQFgAWMBXQFjAWYBaAFrAXcBaAF3AXQBbQFwAXwBbQF8AXkBbgFxAX0BbgF9AXoBcwFqAXYBcwF2AX8BcgFvAWwBcgFsAWkBdQF4AXsBdQF7AX4BgAGDAY8BgAGPAYwBhQGIAZQBhQGUAZEBhgGJAZUBhgGVAZIBiwGCAY4BiwGOAZcBigGHAYQBigGEAYEBjQGQAZMBjQGTAZYBmAGbAacBmAGnAaQBnQGgAawBnQGsAakBngGhAa0BngGtAaoBowGaAaYBowGmAa8BogGfAZwBogGcAZkBpQGoAasBpQGrAa4BsAGzAb8BsAG/AbwBtQG4AcQBtQHEAcEBtgG5AcUBtgHFAcIBuwGyAb4BuwG+AccBugG3AbQBugG0AbEBvQHAAcMBvQHDAcYByAHLAdcByAHXAdQBzQHQAdwBzQHcAdkBzgHRAd0BzgHdAdoB0wHKAdYB0wHWAd8B0gHPAcwB0gHMAckB1QHYAdsB1QHbAd4B4AHjAe8B4AHvAewB5QHoAfQB5QH0AfEB5gHpAfUB5gH1AfIB6wHiAe4B6wHuAfcB6gHnAeQB6gHkAeEB7QHwAfMB7QHzAfYB+AH7AQcC+AEHAgQC/QEAAgwC/QEMAgkC/gEBAg0C/gENAgoCAwL6AQYCAwIGAg8CAgL/AfwBAgL8AfkBBQIIAgsCBQILAg4CEAITAh8CEAIfAhwCFQIYAiQCFQIkAiECFgIZAiUCFgIlAiICGwISAh4CGwIeAicCGgIXAhQCGgIUAhECHQIgAiMCHQIjAiYCKAIrAjcCKAI3AjQCLQIwAjwCLQI8AjkCLgIxAj0CLgI9AjoCMwIqAjYCMwI2Aj8CMgIvAiwCMgIsAikCNQI4AjsCNQI7Aj4CQAJDAk8CQAJPAkwCRQJIAlQCRQJUAlECRgJJAlUCRgJVAlICSwJCAk4CSwJOAlcCSgJHAkQCSgJEAkECTQJQAlMCTQJTAlYCWAJbAmcCWAJnAmQCXQJgAmwCXQJsAmkCXgJhAm0CXgJtAmoCYwJaAmYCYwJmAm8CYgJfAlwCYgJcAlkCZQJoAmsCZQJrAm4CcAJzAn8CcAJ/AnwCdQJ4AoQCdQKEAoECdgJ5AoUCdgKFAoICewJyAn4CewJ+AocCegJ3AnQCegJ0AnECfQKAAoMCfQKDAoYCiAKLApcCiAKXApQCjQKQApwCjQKcApkCjgKRAp0CjgKdApoCkwKKApYCkwKWAp8CkgKPAowCkgKMAokClQKYApsClQKbAp4CoAKjAq8CoAKvAqwCpQKoArQCpQK0ArECpgKpArUCpgK1ArICqwKiAq4CqwKuArcCqgKnAqQCqgKkAqECrQKwArMCrQKzArYCuAK7AscCuALHAsQCvQLAAswCvQLMAskCvgLBAs0CvgLNAsoCwwK6AsYCwwLGAs8CwgK/ArwCwgK8ArkCxQLIAssCxQLLAs4C0ALTAt8C0ALfAtwC1QLYAuQC1QLkAuEC1gLZAuUC1gLlAuIC2wLSAt4C2wLeAucC2gLXAtQC2gLUAtEC3QLgAuMC3QLjAuYC6ALrAvcC6AL3AvQC7QLwAvwC7QL8AvkC7gLxAv0C7gL9AvoC8wLqAvYC8wL2Av8C8gLvAuwC8gLsAukC9QL4AvsC9QL7Av4CAAMDAw8DAAMPAwwDBQMIAxQDBQMUAxEDBgMJAxUDBgMVAxIDCwMCAw4DCwMOAxcDCgMHAwQDCgMEAwEDDQMQAxMDDQMTAxYDGAMbAycDGAMnAyQDHQMgAywDHQMsAykDHgMhAy0DHgMtAyoDIwMaAyYDIwMmAy8DIgMfAxwDIgMcAxkDJQMoAysDJQMrAy4DMAMzAz8DMAM/AzwDNQM4A0QDNQNEA0EDNgM5A0UDNgNFA0IDOwMyAz4DOwM+A0cDOgM3AzQDOgM0AzEDPQNAA0MDPQNDA0YDSANLA1cDSANXA1QDTQNQA1wDTQNcA1kDTgNRA10DTgNdA1oDUwNKA1YDUwNWA18DUgNPA0wDUgNMA0kDVQNYA1sDVQNbA14DYANjA28DYANvA2wDZQNoA3QDZQN0A3EDZgNpA3UDZgN1A3IDawNiA24DawNuA3cDagNnA2QDagNkA2EDbQNwA3MDbQNzA3YDeAN7A4cDeAOHA4QDfQOAA4wDfQOMA4kDfgOBA40DfgONA4oDgwN6A4YDgwOGA48DggN/A3wDggN8A3kDhQOIA4sDhQOLA44DkAOTA58DkAOfA5wDlQOYA6QDlQOkA6EDlgOZA6UDlgOlA6IDmwOSA54DmwOeA6cDmgOXA5QDmgOUA5EDnQOgA6MDnQOjA6YDqAOrA7cDqAO3A7QDrQOwA7wDrQO8A7kDrgOxA70DrgO9A7oDswOqA7YDswO2A78DsgOvA6wDsgOsA6kDtQO4A7sDtQO7A74DwAPDA88DwAPPA8wDxQPIA9QDxQPUA9EDxgPJA9UDxgPVA9IDywPCA84DywPOA9cDygPHA8QDygPEA8EDzQPQA9MDzQPTA9YD2APbA+cD2APnA+QD3QPgA+wD3QPsA+kD3gPhA+0D3gPtA+oD4wPaA+YD4wPmA+8D4gPfA9wD4gPcA9kD5QPoA+sD5QPrA+4D8APzA/8D8AP/A/wD9QP4AwQE9QMEBAEE9gP5AwUE9gMFBAIE+wPyA/4D+wP+AwcE+gP3A/QD+gP0A/ED/QMABAME/QMDBAYECAQLBBcECAQXBBQEDQQQBBwEDQQcBBkEDgQRBB0EDgQdBBoEEwQKBBYEEwQWBB8EEgQPBAwEEgQMBAkEFQQYBBsEFQQbBB4EIAQjBC8EIAQvBCwEJQQoBDQEJQQ0BDEEJgQpBDUEJgQ1BDIEKwQiBC4EKwQuBDcEKgQnBCQEKgQkBCEELQQwBDMELQQzBDYEOAQ7BEcEOARHBEQEPQRABEwEPQRMBEkEPgRBBE0EPgRNBEoEQwQ6BEYEQwRGBE8EQgQ/BDwEQgQ8BDkERQRIBEsERQRLBE4EUARTBF8EUARfBFwEVQRYBGQEVQRkBGEEVgRZBGUEVgRlBGIEWwRSBF4EWwReBGcEWgRXBFQEWgRUBFEEXQRgBGMEXQRjBGYEaARrBHcEaAR3BHQEbQRwBHwEbQR8BHkEbgRxBH0EbgR9BHoEcwRqBHYEcwR2BH8EcgRvBGwEcgRsBGkEdQR4BHsEdQR7BH4EgASDBI8EgASPBIwEhQSIBJQEhQSUBJEEhgSJBJUEhgSVBJIEiwSCBI4EiwSOBJcEigSHBIQEigSEBIEEjQSQBJMEjQSTBJYEmASbBKcEmASnBKQEnQSgBKwEnQSsBKkEngShBK0EngStBKoEowSaBKYEowSmBK8EogSfBJwEogScBJkEpQSoBKsEpQSrBK4EZmYmwAAAAACamdk/ZmYmwAAAAACamdk/ZmYmwAAAAACamdk/AAAAQAAAAACamdk/AAAAQAAAAACamdk/AAAAQAAAAACamdk/AAAAQAAAAACamdm/AAAAQAAAAACamdm/AAAAQAAAAACamdm/ZmYmwAAAAACamdm/ZmYmwAAAAACamdm/ZmYmwAAAAACamdm/ZmYmwGZmJkCamdk/ZmYmwGZmJkCamdk/ZmYmwGZmJkCamdk/AAAAQGZmJkCamdk/AAAAQGZmJkCamdk/AAAAQGZmJkCamdk/AAAAQGZmJkCamdm/AAAAQGZmJkCamdm/AAAAQGZmJkCamdm/ZmYmwGZmJkCamdm/ZmYmwGZmJkCamdm/ZmYmwGZmJkCamdm/AAAAQAAAAAAzM7M/AAAAQAAAAAAzM7M/AAAAQAAAAAAzM7M/mpmJQAAAAAAzM7M/mpmJQAAAAAAzM7M/mpmJQAAAAAAzM7M/mpmJQAAAAAAzM7O/mpmJQAAAAAAzM7O/mpmJQAAAAAAzM7O/AAAAQAAAAAAzM7O/AAAAQAAAAAAzM7O/AAAAQAAAAAAzM7O/AAAAQAAAAEAzM7M/AAAAQAAAAEAzM7M/AAAAQAAAAEAzM7M/mpmJQAAAAEAzM7M/mpmJQAAAAEAzM7M/mpmJQAAAAEAzM7M/mpmJQAAAAEAzM7O/mpmJQAAAAEAzM7O/mpmJQAAAAEAzM7O/AAAAQAAAAEAzM7O/AAAAQAAAAEAzM7O/AAAAQAAAAEAzM7O/zczsvwAAQEAAAACAzczsvwAAQEAAAACAzczsvwAAQEAAAACAzcysvwAAQEAAAACAzcysvwAAQEAAAACAzcysvwAAQEAAAACAzcysvwAAQEAAAAC/zcysvwAAQEAAAAC/zcysvwAAQEAAAAC/zczsvwAAQEAAAAC/zczsvwAAQEAAAAC/zczsvwAAQEAAAAC/mpnpvwAAoEDNzMy8mpnpvwAAoEDNzMy8mpnpvwAAoEDNzMy8AACwvwAAoEDNzMy8AACwvwAAoEDNzMy8AACwvwAAoEDNzMy8AACwvwAAoEAzM/O+AACwvwAAoEAzM/O+AACwvwAAoEAzM/O+mpnpvwAAoEAzM/O+mpnpvwAAoEAzM/O+mpnpvwAAoEAzM/O+AAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAA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MzOzvpqZ+T8UridAMzOzvpqZ+T8UridAMzOzvpqZ+T8UridAw/UYwDMzcz+kcN0/w/UYwDMzcz+kcN0/w/UYwDMzcz+kcN0/exTOvzMzcz+kcN0/exTOvzMzcz+kcN0/exTOvzMzcz+kcN0/exTOvzMzcz+amdk/exTOvzMzcz+amdk/exTOvzMzcz+amdk/w/UYwDMzcz+amdk/w/UYwDMzcz+amdk/w/UYwDMzcz+amdk/w/UYwJqZCUCkcN0/w/UYwJqZCUCkcN0/w/UYwJqZCUCkcN0/exTOv5qZCUCkcN0/exTOv5qZCUCkcN0/exTOv5qZCUCkcN0/exTOv5qZCUCamdk/exTOv5qZCUCamdk/exTOv5qZCUCamdk/w/UYwJqZCUCamdk/w/UYwJqZCUCamdk/w/UYwJqZCUCamdk/CtcjPjMzcz+kcN0/CtcjPjMzcz+kcN0/CtcjPjMzcz+kcN0/16NwPzMzcz+kcN0/16NwPzMzcz+kcN0/16NwPzMzcz+kcN0/16NwPzMzcz+amdk/16NwPzMzcz+amdk/16NwPzMzcz+amdk/CtcjPjMzcz+amdk/CtcjPjMzcz+amdk/CtcjPjMzcz+amdk/CtcjPpqZCUCkcN0/CtcjPpqZCUCkcN0/CtcjPpqZCUCkcN0/16NwP5qZCUCkcN0/16NwP5qZCUCkcN0/16NwP5qZCUCkcN0/16NwP5qZCUCamdk/16NwP5qZCUCamdk/16NwP5qZCUCamdk/CtcjPpqZCUCamdk/CtcjPpqZCUCamdk/CtcjPpqZCUCamdk/exSOPzMzcz+kcN0/exSOPzMzcz+kcN0/exSOPzMzcz+kcN0/hevxPzMzcz+kcN0/hevxPzMzcz+kcN0/hevxPzMzcz+kcN0/hevxPzMzcz+amdk/hevxPzMzcz+amdk/hevxPzMzcz+amdk/exSOPzMzcz+amdk/exSOPzMzcz+amdk/exSOPzMzcz+amdk/exSOP5qZCUCkcN0/exSOP5qZCUCkcN0/exSOP5qZCUCkcN0/hevxP5qZCUCkcN0/hevxP5qZCUCkcN0/hevxP5qZCUCkcN0/hevxP5qZCUCamdk/hevxP5qZCUCamdk/hevxP5qZCUCamdk/exSOP5qZCUCamdk/exSOP5qZCUCamdk/exSOP5qZCUCamdk/MzMzQM3MTD89Crc/MzMzQM3MTD89Crc/MzMzQM3MTD89Crc/AABgQM3MTD89Crc/AABgQM3MTD89Crc/AABgQM3MTD89Crc/AABgQM3MTD8zM7M/AABgQM3MTD8zM7M/AABgQM3MTD8zM7M/MzMzQM3MTD8zM7M/MzMzQM3MTD8zM7M/MzMzQM3MTD8zM7M/MzMzQJqZ2T89Crc/MzMzQJqZ2T89Crc/MzMzQJqZ2T89Crc/AABgQJqZ2T89Crc/AABgQJqZ2T89Crc/AABgQJqZ2T89Crc/AABgQJqZ2T8zM7M/AABgQJqZ2T8zM7M/AABgQJqZ2T8zM7M/MzMzQJqZ2T8zM7M/MzMzQJqZ2T8zM7M/MzMzQJqZ2T8zM7M/mpkZv83MPEDXoxBAmpkZv83MPEDXoxBAmpkZv83MPEDXoxBAAAAAAM3MPEDXoxBAAAAAAM3MPEDXoxBAAAAAAM3MPEDXoxBAAAAAAM3MPEBSuA5AAAAAAM3MPEBSuA5AAAAAAM3MPEBSuA5AmpkZv83MPEBSuA5AmpkZv83MPEBSuA5AmpkZv83MPEBSuA5AmpkZvwAAcEDXoxBAmpkZvwAAcEDXoxBAmpkZvwAAcEDXoxBAAAAAAAAAcEDXoxBAAAAAAAAAcEDXoxBAAAAAAAAAcEDXoxBAAAAAAAAAcEBSuA5AAAAAAAAAcEBSuA5AAAAAAAAAcEBSuA5AmpkZvwAAcEBSuA5AmpkZvwAAcEBSuA5AmpkZvwAAcEBSuA5AAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAA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mpl5QKRwPT9I4bo/mpl5QKRwPT9I4bo/mpl5QKRwPT9I4bo/mpl5QKRwPT+PwrU/mpl5QKRwPT+PwrU/mpl5QKRwPT+PwrU/ZmZmQKRwPT+PwrU/ZmZmQKRwPT+PwrU/ZmZmQKRwPT+PwrU/ZmZmQK5H4T9I4bo/ZmZmQK5H4T9I4bo/ZmZmQK5H4T9I4bo/mpl5QK5H4T9I4bo/mpl5QK5H4T9I4bo/mpl5QK5H4T9I4bo/mpl5QK5H4T+PwrU/mpl5QK5H4T+PwrU/mpl5QK5H4T+PwrU/ZmZmQK5H4T+PwrU/ZmZmQK5H4T+PwrU/ZmZmQK5H4T+PwrU/AAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAADAA8AAAAPAAwABQAIABQABQAUABEABgAJABUABgAVABIACwACAA4ACwAOABcACgAHAAQACgAEAAEADQAQABMADQATABYAGAAbACcAGAAnACQAHQAgACwAHQAsACkAHgAhAC0AHgAtACoAIwAaACYAIwAmAC8AIgAfABwAIgAcABkAJQAoACsAJQArAC4AMAAzAD8AMAA/ADwANQA4AEQANQBEAEEANgA5AEUANgBFAEIAOwAyAD4AOwA+AEcAOgA3ADQAOgA0ADEAPQBAAEMAPQBDAEYASABLAFcASABXAFQATQBQAFwATQBcAFkATgBRAF0ATgBdAFoAUwBKAFYAUwBWAF8AUgBPAEwAUgBMAEkAVQBYAFsAVQBbAF4AYABjAG8AYABvAGwAZQBoAHQAZQB0AHEAZgBpAHUAZgB1AHIAawBiAG4AawBuAHcAagBnAGQAagBkAGEAbQBwAHMAbQBzAHYAeAB7AIcAeACHAIQAfQCAAIwAfQCMAIkAfgCBAI0AfgCNAIoAgwB6AIYAgwCGAI8AggB/AHwAggB8AHkAhQCIAIsAhQCLAI4AkACTAJ8AkACfAJwAlQCYAKQAlQCkAKEAlgCZAKUAlgClAKIAmwCSAJ4AmwCeAKcAmgCXAJQAmgCUAJEAnQCgAKMAnQCjAKYA";var vf="data:application/octet-stream;base64,Z2xURgIAAAD0nAAA4BAAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NS4yLjQxIiwidmVyc2lvbiI6IjIuMCJ9LCJleHRlbnNpb25zVXNlZCI6WyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIl0sInNjZW5lIjowLCJzY2VuZXMiOlt7Im5hbWUiOiJTY2VuZSIsIm5vZGVzIjpbMF19XSwibm9kZXMiOlt7Im1lc2giOjAsIm5hbWUiOiJQaWNrdXBUcnVja0IifV0sIm1hdGVyaWFscyI6W3siZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJwYWludCIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuNDQ5OTk5OTg4MDc5MDcxMDQsMC4xMTk5OTk5OTczMTc3OTA5OSwwLjA5MDAwMDAwMzU3NjI3ODY5LDFdLCJtZXRhbGxpY0ZhY3RvciI6MC4yMDAwMDAwMDI5ODAyMzIyNCwicm91Z2huZXNzRmFjdG9yIjowLjQ0OTk5OTk4ODA3OTA3MTA0fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwibmFtZSI6ImRhcmsiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wNTAwMDAwMDA3NDUwNTgwNiwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC44MDAwMDAwMTE5MjA5Mjl9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoidGlyZSIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjk0OTk5OTk4ODA3OTA3MX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJjaHJvbWUiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjY5OTk5OTk4ODA3OTA3MSwwLjY5OTk5OTk4ODA3OTA3MSwwLjcyMDAwMDAyODYxMDIyOTUsMV0sInJvdWdobmVzc0ZhY3RvciI6MC4yNX19LHsiZG91YmxlU2lkZWQiOnRydWUsImVtaXNzaXZlRmFjdG9yIjpbMSwwLjU1MDAwMDAxMTkyMDkyOSwwLjE4MDAwMDAwNzE1MjU1NzM3XSwiZXh0ZW5zaW9ucyI6eyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIjp7ImVtaXNzaXZlU3RyZW5ndGgiOjZ9fSwibmFtZSI6ImdsYXNzIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC4wNTAwMDAwMDA3NDUwNTgwNiwwLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuNX19XSwibWVzaGVzIjpbeyJuYW1lIjoidF9ib2R5X21lc2guMDAyIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MCwiTk9STUFMIjoxfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MywiTk9STUFMIjo0fSwiaW5kaWNlcyI6NSwibWF0ZXJpYWwiOjF9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NiwiTk9STUFMIjo3fSwiaW5kaWNlcyI6OCwibWF0ZXJpYWwiOjJ9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6OSwiTk9STUFMIjoxMH0sImluZGljZXMiOjExLCJtYXRlcmlhbCI6M30seyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxMiwiTk9STUFMIjoxM30sImluZGljZXMiOjE0LCJtYXRlcmlhbCI6NH1dfV0sImFjY2Vzc29ycyI6W3siYnVmZmVyVmlldyI6MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE4MCwibWF4IjpbMi43Nzk5OTk5NzEzODk3NzA1LDIuMjk5OTk5OTUyMzE2Mjg0LDAuOTQ5OTk5OTg4MDc5MDcxXSwibWluIjpbLTIuNjQwMDAwMTA0OTA0MTc1LDAuNSwtMC45NDk5OTk5ODgwNzkwNzFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE4MCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoyODgsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNDAsIm1heCI6WzIuODE5OTk5OTMzMjQyNzk4LDIuMjIwMDAwMDI4NjEwMjI5NSwxLjA4MDAwMDA0MjkxNTM0NDJdLCJtaW4iOlstMC40Njk5OTk5OTg4MDc5MDcxLDAuNTUwMDAwMDExOTIwOTI5LC0xLjA4MDAwMDA0MjkxNTM0NDJdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0MCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjozNzIsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjYsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0NDAsIm1heCI6WzIuMjEwMDAwMDM4MTQ2OTcyNywwLjkxMzAxMTU1MDkwMzMyMDMsMC45ODAwMDAwMTkwNzM0ODYzXSwibWluIjpbLTIuMTA5OTk5ODk1MDk1ODI1LDAuMDA2OTg4NDMzNjU1MzUxNCwtMC45ODAwMDAwMTkwNzM0ODYzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0NDAsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo4LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6ODY0LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3Ijo5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MzQ0LCJtYXgiOlsyLjkyMDAwMDA3NjI5Mzk0NTMsMC44MTk5OTk5OTI4NDc0NDI2LDFdLCJtaW4iOlstMi43NTk5OTk5OTA0NjMyNTcsMC4yMzk5OTk5OTQ2MzU1ODE5NywtMV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjM0NCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjExLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NjQ4LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoxMiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlsyLjc4OTk5OTk2MTg1MzAyNzMsMS4wNDk5OTk5NTIzMTYyODQyLDAuODk5OTk5OTc2MTU4MTQyMV0sIm1pbiI6Wy0yLjY3MDAwMDA3NjI5Mzk0NTMsMC43Nzk5OTk5NzEzODk3NzA1LC0wLjg5OTk5OTk3NjE1ODE0MjFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE0LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MTQ0LCJ0eXBlIjoiU0NBTEFSIn1dLCJidWZmZXJWaWV3cyI6W3siYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyMTYwLCJieXRlT2Zmc2V0IjowLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MjE2MCwiYnl0ZU9mZnNldCI6MjE2MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjU3NiwiYnl0ZU9mZnNldCI6NDMyMCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4ODAsImJ5dGVPZmZzZXQiOjQ4OTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVy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9ihcvwAAAL8AAIA/9ihcvwAAAL8AAIA/9ihcvwAAAL8AAIA/MzNzvwAAAL8AAIA/MzNzvwAAAL8AAIA/MzNzv2ZmJsAAAIA/MzNzv2ZmJsAAAIA/MzNzv2ZmJsAAAIA/MzNzv2ZmJsCkcL0/9ihcv2ZmJsCkcL0/9ihcv2ZmJsCkcL0/9ihcvwAAAL+kcL0/9ihcvwAAAL+kcL0/9ihcvwAAAL+kcL0/9ihcvwAAAL+kcL0/MzNzvwAAAL+kcL0/MzNzvwAAAL+kcL0/MzNzv2ZmJsCkcL0/MzNzv2ZmJsCkcL0/MzNzv2ZmJsCkcL0/MzNzv2ZmJsAAAIA/MzNzP2ZmJsAAAIA/MzNzP2ZmJsAAAIA/MzNzPwAAAL8AAIA/MzNzPwAAAL8AAIA/MzNzPwAAAL8AAIA/MzNzPwAAAL8AAIA/9ihcPwAAAL8AAIA/9ihcPwAAAL8AAIA/9ihcP2ZmJsAAAIA/9ihcP2ZmJsAAAIA/9ihcP2ZmJsAAAIA/9ihcP2ZmJsCkcL0/MzNzP2ZmJsCkcL0/MzNzP2ZmJsCkcL0/MzNzPwAAAL+kcL0/MzNzPwAAAL+kcL0/MzNzPwAAAL+kcL0/MzNzPwAAAL+kcL0/9ihcPwAAAL+kcL0/9ihcPwAAAL+kcL0/9ihcP2ZmJsCkcL0/9ihcP2ZmJsCkcL0/9ihcP2ZmJsCkcL0/9ihcP83MDL8AAIA/MzNzP83MDL8AAIA/MzNzP83MDL8AAIA/MzNzP2Zm5r4AAIA/MzNzP2Zm5r4AAIA/MzNzP2Zm5r4AAIA/MzNzP2Zm5r4AAIA/MzNzv2Zm5r4AAIA/MzNzv2Zm5r4AAIA/MzNzv83MDL8AAIA/MzNzv83MDL8AAIA/MzNzv83MDL8AAIA/MzNzv83MDL+kcL0/MzNzP83MDL+kcL0/MzNzP83MDL+kcL0/MzNzP2Zm5r6kcL0/MzNzP2Zm5r6kcL0/MzNzP2Zm5r6kcL0/MzNzP2Zm5r6kcL0/MzNzv2Zm5r6kcL0/MzNzv2Zm5r6kcL0/MzNzv83MDL+kcL0/MzNzv83MDL+kcL0/MzNzv83MDL+kcL0/MzNzv8P1KMAAAIA/MzNzP8P1KMAAAIA/MzNzP8P1KMAAAIA/MzNzP7geJcAAAIA/MzNzP7geJcAAAIA/MzNzP7geJcAAAIA/MzNzP7geJcAAAIA/MzNzv7geJcAAAIA/MzNzv7geJcAAAIA/MzNzv8P1KMAAAIA/MzNzv8P1KMAAAIA/MzNzv8P1KMAAAIA/MzNzv8P1KMAAAMA/MzNzP8P1KMAAAMA/MzNzP8P1KMAAAMA/MzNzP7geJcAAAMA/MzNzP7geJcAAAMA/MzNzP7geJcAAAMA/MzNzP7geJcAAAMA/MzNzv7geJcAAAMA/MzNzv7geJcAAAMA/MzNzv8P1KMAAAMA/MzNzv8P1KMAAAMA/MzNzv8P1KMAAAMA/MzNzvwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAMXAfT87YAe+AAAAAAAAAAAAAAAAAACAP5jcXj8W8fs+AAAAAMXAfT87YAe+AAAAAAAAAAAAAAAAAACAP+8pVD0HqH8/AAAAAJjcXj8W8fs+AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAO8pVD0HqH8/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAMXAfT87YAe+AAAAAAAAAAAAAAAAAACAv5jcXj8W8fs+AAAAAMXAfT87YAe+AAAAAAAAAAAAAAAAAACAv+8pVD0HqH8/AAAAAJjcXj8W8fs+AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAO8pVD0HqH8/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAALoNYT8HBvQ+AAAAAAAAAAAAAAAAAACAP1IeKT9IL0A/AAAAALoNYT8HBvQ+AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAFIeKT9IL0A/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAEhRUL9oyxQ/AAAAAAAAAAAAAAAAAACAP0hRUL9oyxQ/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAALoNYT8HBvQ+AAAAAAAAAAAAAAAAAACAv1IeKT9IL0A/AAAAALoNYT8HBvQ+AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAFIeKT9IL0A/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAEhRUL9oyxQ/AAAAAAAAAAAAAAAAAACAv0hRUL9oyxQ/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAA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AACAPzoQcL+e07E+AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAv9SSKD+tqUA/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAANSSKD+tqUA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAADoQcL+e07E+AAAAAAAAAAAAAAAAAACAvzoQcL+e07E+AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAP9SSKD+tqUA/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAANSSKD+tqUA/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAADoQcL+e07E+AAAAAAAAAAAAAAAAAACAPzoQcL+e07E+AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAv9SSKD+tqUA/AAAAAFwTdT/d+JM+AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAANSSKD+tqUA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAADoQcL+e07E+AAAAAAAAAAAAAAAAAACAvzoQcL+e07E+AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAwAGAAAABgAJABUAEgAPABUADwAMAAEADQAQAAEAEAAEAAUAEQATAAUAEwAHAAgAFAAWAAgAFgAKAAsAFwAOAAsADgACACcAGAAbABsAHgAhACEAJAAnABsAIQAnACoAOQA2ADYAMwAwADAALQAqADYAMAAqABkAKwAuABkALgAcAB0ALwAyAB0AMgAgAB8AMQA1AB8ANQAjACIANAA3ACIANwAlACYAOAA6ACYAOgAoACkAOwAsACkALAAaAEsAPAA/AD8AQgBFAEUASABLAD8ARQBLAE4AXQBaAFoAVwBUAFQAUQBOAFoAVABOAD0ATwBSAD0AUgBAAEEAUwBWAEEAVgBEAEMAVQBZAEMAWQBHAEYAWABbAEYAWwBJAEoAXABeAEoAXgBMAE0AXwBQAE0AUAA+AGEAagBnAGEAZwBkAG0AcABzAG0AcwB2AGAAYwBvAGAAbwBsAGUAaAB0AGUAdABxAGYAaQB1AGYAdQByAGsAYgBuAGsAbgB3AHkAggB/AHkAfwB8AIUAiACLAIUAiwCOAHgAewCHAHgAhwCEAH0AgACMAH0AjACJAH4AgQCNAH4AjQCKAIMAegCGAIMAhgCPAJEAmgCXAJEAlwCUAJ0AoACjAJ0AowCmAJAAkwCfAJAAnwCcAJUAmACkAJUApAChAJYAmQClAJYApQCiAJsAkgCeAJsAngCnAKkAsgCvAKkArwCsALUAuAC7ALUAuwC+AKgAqwC3AKgAtwC0AK0AsAC8AK0AvAC5AK4AsQC9AK4AvQC6ALMAqgC2ALMAtgC/AMEAygDHAMEAxwDEAM0A0ADTAM0A0wDWAMAAwwDPAMAAzwDMAMUAyADUAMUA1ADRAMYAyQDVAMYA1QDSAMsAwgDOAMsAzgDXANkA4gDfANkA3wDcAOUA6ADrAOUA6wDuANgA2wDnANgA5wDkAN0A4ADsAN0A7ADpAN4A4QDtAN4A7QDqAOMA2gDmAOMA5gDvAOxRmL8fhes+w/Uov+xRmL8fhes+w/Uov+xRmL8fhes+w/Uov+xRmL8fhes+SOF6v+xRmL8fhes+SOF6v+xRmL8fhes+SOF6v/Pem79KCR4/w/Uov/Pem79KCR4/w/Uov/Pem79KCR4/w/Uov/Pem79KCR4/SOF6v/Pem79KCR4/SOF6v/Pem79KCR4/SOF6v2YYpr9ldEE/w/Uov2YYpr9ldEE/w/Uov2YYpr9ldEE/w/Uov2YYpr9ldEE/SOF6v2YYpr9ldEE/SOF6v2YYpr9ldEE/SOF6v4/Ctb8/vls/w/Uov4/Ctb8/vls/w/Uov4/Ctb8/vls/w/Uov4/Ctb8/vls/SOF6v4/Ctb8/vls/SOF6v4/Ctb8/vls/SOF6v8H5yL8gu2k/w/Uov8H5yL8gu2k/w/Uov8H5yL8gu2k/w/Uov8H5yL8gu2k/SOF6v8H5yL8gu2k/SOF6v8H5yL8gu2k/SOF6v6Zs3b8gu2k/w/Uov6Zs3b8gu2k/w/Uov6Zs3b8gu2k/w/Uov6Zs3b8gu2k/SOF6v6Zs3b8gu2k/SOF6v6Zs3b8gu2k/SOF6v9ej8L8/vls/w/Uov9ej8L8/vls/w/Uov9ej8L8/vls/w/Uov9ej8L8/vls/SOF6v9ej8L8/vls/SOF6v9ej8L8/vls/SOF6vwAnAMBldEE/w/UovwAnAMBldEE/w/UovwAnAMBldEE/w/UovwAnAMBldEE/SOF6vwAnAMBldEE/SOF6vwAnAMBldEE/SOF6v7pDBcBKCR4/w/Uov7pDBcBKCR4/w/Uov7pDBcBKCR4/w/Uov7pDBcBKCR4/SOF6v7pDBcBKCR4/SOF6v7pDBcBKCR4/SOF6vz0KB8Afhes+w/Uovz0KB8Afhes+w/Uovz0KB8Afhes+w/Uovz0KB8Afhes+SOF6vz0KB8Afhes+SOF6vz0KB8Afhes+SOF6v7pDBcCp95o+w/Uov7pDBcCp95o+w/Uov7pDBcCp95o+w/Uov7pDBcCp95o+SOF6v7pDBcCp95o+SOF6v7pDBcCp95o+SOF6vwAnAMDmQig+w/UovwAnAMDmQig+w/UovwAnAMDmQig+w/UovwAnAMDmQig+SOF6vwAnAMDmQig+SOF6vwAnAMDmQig+SOF6v9ej8L/5bXw9w/Uov9ej8L/5bXw9w/Uov9ej8L/5bXw9w/Uov9ej8L/5bXw9SOF6v9ej8L/5bXw9SOF6v9ej8L/5bXw9SOF6v6Zs3b87/+Q7w/Uov6Zs3b87/+Q7w/Uov6Zs3b87/+Q7w/Uov6Zs3b87/+Q7SOF6v6Zs3b87/+Q7SOF6v6Zs3b87/+Q7SOF6v8H5yL87/+Q7w/Uov8H5yL87/+Q7w/Uov8H5yL87/+Q7w/Uov8H5yL87/+Q7SOF6v8H5yL87/+Q7SOF6v8H5yL87/+Q7SOF6v4/Ctb/5bXw9w/Uov4/Ctb/5bXw9w/Uov4/Ctb/5bXw9w/Uov4/Ctb/5bXw9SOF6v4/Ctb/5bXw9SOF6v4/Ctb/5bXw9SOF6v2YYpr/mQig+w/Uov2YYpr/mQig+w/Uov2YYpr/mQig+w/Uov2YYpr/mQig+SOF6v2YYpr/mQig+SOF6v2YYpr/mQig+SOF6v/Pem7+p95o+w/Uov/Pem7+p95o+w/Uov/Pem7+p95o+w/Uov/Pem7+p95o+SOF6v/Pem7+p95o+SOF6v/Pem7+p95o+SOF6vzMz078fhes+w/UovzMz078fhes+SOF6v+xRmL8fhes+SOF6P+xRmL8fhes+SOF6P+xRmL8fhes+SOF6P+xRmL8fhes+w/UoP+xRmL8fhes+w/UoP+xRmL8fhes+w/UoP/Pem79KCR4/SOF6P/Pem79KCR4/SOF6P/Pem79KCR4/SOF6P/Pem79KCR4/w/UoP/Pem79KCR4/w/UoP/Pem79KCR4/w/UoP2YYpr9ldEE/SOF6P2YYpr9ldEE/SOF6P2YYpr9ldEE/SOF6P2YYpr9ldEE/w/UoP2YYpr9ldEE/w/UoP2YYpr9ldEE/w/UoP4/Ctb8/vls/SOF6P4/Ctb8/vls/SOF6P4/Ctb8/vls/SOF6P4/Ctb8/vls/w/UoP4/Ctb8/vls/w/UoP4/Ctb8/vls/w/UoP8H5yL8gu2k/SOF6P8H5yL8gu2k/SOF6P8H5yL8gu2k/SOF6P8H5yL8gu2k/w/UoP8H5yL8gu2k/w/UoP8H5yL8gu2k/w/UoP6Zs3b8gu2k/SOF6P6Zs3b8gu2k/SOF6P6Zs3b8gu2k/SOF6P6Zs3b8gu2k/w/UoP6Zs3b8gu2k/w/UoP6Zs3b8gu2k/w/UoP9ej8L8/vls/SOF6P9ej8L8/vls/SOF6P9ej8L8/vls/SOF6P9ej8L8/vls/w/UoP9ej8L8/vls/w/UoP9ej8L8/vls/w/UoPwAnAMBldEE/SOF6PwAnAMBldEE/SOF6PwAnAMBldEE/SOF6PwAnAMBldEE/w/UoPwAnAMBldEE/w/UoPwAnAMBldEE/w/UoP7pDBcBKCR4/SOF6P7pDBcBKCR4/SOF6P7pDBcBKCR4/SOF6P7pDBcBKCR4/w/UoP7pDBcBKCR4/w/UoP7pDBcBKCR4/w/UoPz0KB8Afhes+SOF6Pz0KB8Afhes+SOF6Pz0KB8Afhes+SOF6Pz0KB8Afhes+w/UoPz0KB8Afhes+w/UoPz0KB8Afhes+w/UoP7pDBcCp95o+SOF6P7pDBcCp95o+SOF6P7pDBcCp95o+SOF6P7pDBcCp95o+w/UoP7pDBcCp95o+w/UoP7pDBcCp95o+w/UoPwAnAMDmQig+SOF6PwAnAMDmQig+SOF6PwAnAMDmQig+SOF6PwAnAMDmQig+w/UoPwAnAMDmQig+w/UoPwAnAMDmQig+w/UoP9ej8L/5bXw9SOF6P9ej8L/5bXw9SOF6P9ej8L/5bXw9SOF6P9ej8L/5bXw9w/UoP9ej8L/5bXw9w/UoP9ej8L/5bXw9w/UoP6Zs3b87/+Q7SOF6P6Zs3b87/+Q7SOF6P6Zs3b87/+Q7SOF6P6Zs3b87/+Q7w/UoP6Zs3b87/+Q7w/UoP6Zs3b87/+Q7w/UoP8H5yL87/+Q7SOF6P8H5yL87/+Q7SOF6P8H5yL87/+Q7SOF6P8H5yL87/+Q7w/UoP8H5yL87/+Q7w/UoP8H5yL87/+Q7w/UoP4/Ctb/5bXw9SOF6P4/Ctb/5bXw9SOF6P4/Ctb/5bXw9SOF6P4/Ctb/5bXw9w/UoP4/Ctb/5bXw9w/UoP4/Ctb/5bXw9w/UoP2YYpr/mQig+SOF6P2YYpr/mQig+SOF6P2YYpr/mQig+SOF6P2YYpr/mQig+w/UoP2YYpr/mQig+w/UoP2YYpr/mQig+w/UoP/Pem7+p95o+SOF6P/Pem7+p95o+SOF6P/Pem7+p95o+SOF6P/Pem7+p95o+w/UoP/Pem7+p95o+w/UoP/Pem7+p95o+w/UoPzMz078fhes+SOF6PzMz078fhes+w/UoP6RwDUAfhes+w/Uov6RwDUAfhes+w/Uov6RwDUAfhes+w/Uov6RwDUAfhes+SOF6v6RwDUAfhes+SOF6v6RwDUAfhes+SOF6vyCqC0BKCR4/w/UovyCqC0BKCR4/w/UovyCqC0BKCR4/w/UovyCqC0BKCR4/SOF6vyCqC0BKCR4/SOF6vyCqC0BKCR4/SOF6v2eNBkBldEE/w/Uov2eNBkBldEE/w/Uov2eNBkBldEE/w/Uov2eNBkBldEE/SOF6v2eNBkBldEE/SOF6v2eNBkBldEE/SOF6v6Rw/T8/vls/w/Uov6Rw/T8/vls/w/Uov6Rw/T8/vls/w/Uov6Rw/T8/vls/SOF6v6Rw/T8/vls/SOF6v6Rw/T8/vls/SOF6v3M56j8gu2k/w/Uov3M56j8gu2k/w/Uov3M56j8gu2k/w/Uov3M56j8gu2k/SOF6v3M56j8gu2k/SOF6v3M56j8gu2k/SOF6v43G1T8gu2k/w/Uov43G1T8gu2k/w/Uov43G1T8gu2k/w/Uov43G1T8gu2k/SOF6v43G1T8gu2k/SOF6v43G1T8gu2k/SOF6v1yPwj8/vls/w/Uov1yPwj8/vls/w/Uov1yPwj8/vls/w/Uov1yPwj8/vls/SOF6v1yPwj8/vls/SOF6v1yPwj8/vls/SOF6vzPlsj9ldEE/w/UovzPlsj9ldEE/w/UovzPlsj9ldEE/w/UovzPlsj9ldEE/SOF6vzPlsj9ldEE/SOF6vzPlsj9ldEE/SOF6v8CrqD9KCR4/w/Uov8CrqD9KCR4/w/Uov8CrqD9KCR4/w/Uov8CrqD9KCR4/SOF6v8CrqD9KCR4/SOF6v8CrqD9KCR4/SOF6v7gepT8fhes+w/Uov7gepT8fhes+w/Uov7gepT8fhes+w/Uov7gepT8fhes+SOF6v7gepT8fhes+SOF6v7gepT8fhes+SOF6v8CrqD+p95o+w/Uov8CrqD+p95o+w/Uov8CrqD+p95o+w/Uov8CrqD+p95o+SOF6v8CrqD+p95o+SOF6v8CrqD+p95o+SOF6vzPlsj/mQig+w/UovzPlsj/mQig+w/UovzPlsj/mQig+w/UovzPlsj/mQig+SOF6vzPlsj/mQig+SOF6vzPlsj/mQig+SOF6v1yPwj/5bXw9w/Uov1yPwj/5bXw9w/Uov1yPwj/5bXw9w/Uov1yPwj/5bXw9SOF6v1yPwj/5bXw9SOF6v1yPwj/5bXw9SOF6v43G1T87/+Q7w/Uov43G1T87/+Q7w/Uov43G1T87/+Q7w/Uov43G1T87/+Q7SOF6v43G1T87/+Q7SOF6v43G1T87/+Q7SOF6v3M56j87/+Q7w/Uov3M56j87/+Q7w/Uov3M56j87/+Q7w/Uov3M56j87/+Q7SOF6v3M56j87/+Q7SOF6v3M56j87/+Q7SOF6v6Rw/T/5bXw9w/Uov6Rw/T/5bXw9w/Uov6Rw/T/5bXw9w/Uov6Rw/T/5bXw9SOF6v6Rw/T/5bXw9SOF6v6Rw/T/5bXw9SOF6v2eNBkDmQig+w/Uov2eNBkDmQig+w/Uov2eNBkDmQig+w/Uov2eNBkDmQig+SOF6v2eNBkDmQig+SOF6v2eNBkDmQig+SOF6vyCqC0Cp95o+w/UovyCqC0Cp95o+w/UovyCqC0Cp95o+w/UovyCqC0Cp95o+SOF6vyCqC0Cp95o+SOF6vyCqC0Cp95o+SOF6vwAA4D8fhes+w/UovwAA4D8fhes+SOF6v6RwDUAfhes+SOF6P6RwDUAfhes+SOF6P6RwDUAfhes+SOF6P6RwDUAfhes+w/UoP6RwDUAfhes+w/UoP6RwDUAfhes+w/UoPyCqC0BKCR4/SOF6PyCqC0BKCR4/SOF6PyCqC0BKCR4/SOF6PyCqC0BKCR4/w/UoPyCqC0BKCR4/w/UoPyCqC0BKCR4/w/UoP2eNBkBldEE/SOF6P2eNBkBldEE/SOF6P2eNBkBldEE/SOF6P2eNBkBldEE/w/UoP2eNBkBldEE/w/UoP2eNBkBldEE/w/UoP6Rw/T8/vls/SOF6P6Rw/T8/vls/SOF6P6Rw/T8/vls/SOF6P6Rw/T8/vls/w/UoP6Rw/T8/vls/w/UoP6Rw/T8/vls/w/UoP3M56j8gu2k/SOF6P3M56j8gu2k/SOF6P3M56j8gu2k/SOF6P3M56j8gu2k/w/UoP3M56j8gu2k/w/UoP3M56j8gu2k/w/UoP43G1T8gu2k/SOF6P43G1T8gu2k/SOF6P43G1T8gu2k/SOF6P43G1T8gu2k/w/UoP43G1T8gu2k/w/UoP43G1T8gu2k/w/UoP1yPwj8/vls/SOF6P1yPwj8/vls/SOF6P1yPwj8/vls/SOF6P1yPwj8/vls/w/UoP1yPwj8/vls/w/UoP1yPwj8/vls/w/UoPzPlsj9ldEE/SOF6PzPlsj9ldEE/SOF6PzPlsj9ldEE/SOF6PzPlsj9ldEE/w/UoPzPlsj9ldEE/w/UoPzPlsj9ldEE/w/UoP8CrqD9KCR4/SOF6P8CrqD9KCR4/SOF6P8CrqD9KCR4/SOF6P8CrqD9KCR4/w/UoP8CrqD9KCR4/w/UoP8CrqD9KCR4/w/UoP7gepT8fhes+SOF6P7gepT8fhes+SOF6P7gepT8fhes+SOF6P7gepT8fhes+w/UoP7gepT8fhes+w/UoP7gepT8fhes+w/UoP8CrqD+p95o+SOF6P8CrqD+p95o+SOF6P8CrqD+p95o+SOF6P8CrqD+p95o+w/UoP8CrqD+p95o+w/UoP8CrqD+p95o+w/UoPzPlsj/mQig+SOF6PzPlsj/mQig+SOF6PzPlsj/mQig+SOF6PzPlsj/mQig+w/UoPzPlsj/mQig+w/UoPzPlsj/mQig+w/UoP1yPwj/5bXw9SOF6P1yPwj/5bXw9SOF6P1yPwj/5bXw9SOF6P1yPwj/5bXw9w/UoP1yPwj/5bXw9w/UoP1yPwj/5bXw9w/UoP43G1T87/+Q7SOF6P43G1T87/+Q7SOF6P43G1T87/+Q7SOF6P43G1T87/+Q7w/UoP43G1T87/+Q7w/UoP43G1T87/+Q7w/UoP3M56j87/+Q7SOF6P3M56j87/+Q7SOF6P3M56j87/+Q7SOF6P3M56j87/+Q7w/UoP3M56j87/+Q7w/UoP3M56j87/+Q7w/UoP6Rw/T/5bXw9SOF6P6Rw/T/5bXw9SOF6P6Rw/T/5bXw9SOF6P6Rw/T/5bXw9w/UoP6Rw/T/5bXw9w/UoP6Rw/T/5bXw9w/UoP2eNBkDmQig+SOF6P2eNBkDmQig+SOF6P2eNBkDmQig+SOF6P2eNBkDmQig+w/UoP2eNBkDmQig+w/UoP2eNBkDmQig+w/UoPyCqC0Cp95o+SOF6PyCqC0Cp95o+SOF6PyCqC0Cp95o+SOF6PyCqC0Cp95o+w/UoPyCqC0Cp95o+w/UoPyCqC0Cp95o+w/UoPwAA4D8fhes+SOF6PwAA4D8fhes+w/UoPwAAAAAAAAAAAACAP+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAP22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAv22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAP6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAP6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAP6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAP22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAv22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAP+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAP6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAv6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAP6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAP22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAP+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAP22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAv22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAP6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAP6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAP6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAP22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAv22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAP+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAP6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAv6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAP6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAP22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAP+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAP22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAv22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAP6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAP6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAP6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAP22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAv22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAP+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAP6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAv6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAP6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAP22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAP+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv+McfD/uxDE+AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAP22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAv22zXT+5AAA/AAAAAOMcfD/uxDE+AAAAAAAAAAAAAAAAAACAP6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUQ/AAAAAG2zXT+5AAA/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHA/AAAAAKSPJD/jGUQ/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAarz4ukHA/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAKAar74ukHA/AAAAAAAAAAAAAAAAAACAP6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAv6Aar74ukHA/AAAAAKSPJL/jGUQ/AAAAAAAAAAAAAAAAAACAP6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUQ/AAAAAG2zXb+5AAA/AAAAAAAAAAAAAAAAAACAP22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAv22zXb+5AAA/AAAAAOMcfL/uxDE+AAAAAAAAAAAAAAAAAACAP+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv+McfL/uxDE+AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAv22zXb+5AAC/AAAAAOMcfL/uxDG+AAAAAAAAAAAAAAAAAACAP6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJL/jGUS/AAAAAG2zXb+5AAC/AAAAAAAAAAAAAAAAAACAP6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAv6Aar74ukHC/AAAAAKSPJL/jGUS/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAar74ukHC/AAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAKAarz4ukHC/AAAAAAAAAAAAAAAAAACAP6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAv6Aarz4ukHC/AAAAAKSPJD/jGUS/AAAAAAAAAAAAAAAAAACAP6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAv6SPJD/jGUS/AAAAAG2zXT+5AAC/AAAAAAAAAAAAAAAAAACAP22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAv22zXT+5AAC/AAAAAOMcfD/uxDG+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwEABAALAAEACwAIAGwAAAAGAG0ACQADAAcACgARAAcAEQAOAGwABgAMAG0ADwAJAA0AEAAXAA0AFwAUAGwADAASAG0AFQAPABMAFgAdABMAHQAaAGwAEgAYAG0AGwAVABkAHAAiABkAIgAfAGwAGAAeAG0AIQAbACAAIwAoACAAKAAlAGwAHgAkAG0AJwAhACYAKQAuACYALgArAGwAJAAqAG0ALQAnACwALwA0ACwANAAxAGwAKgAwAG0AMwAtADIANQA6ADIAOgA3AGwAMAA2AG0AOQAzADgAOwBBADgAQQA+AGwANgA8AG0APwA5AD0AQABHAD0ARwBEAGwAPABCAG0ARQA/AEMARgBNAEMATQBKAGwAQgBIAG0ASwBFAEkATABTAEkAUwBQAGwASABOAG0AUQBLAE8AUgBYAE8AWABVAGwATgBUAG0AVwBRAFYAWQBeAFYAXgBbAGwAVABaAG0AXQBXAFwAXwBkAFwAZABhAGwAWgBgAG0AYwBdAGIAZQBqAGIAagBnAGwAYABmAG0AaQBjAGgAawAFAGgABQACAGwAZgAAAG0AAwBpAG8AcgB5AG8AeQB2ANoAbgB0ANsAdwBxAHUAeAB/AHUAfwB8ANoAdAB6ANsAfQB3AHsAfgCFAHsAhQCCANoAegCAANsAgwB9AIEAhACLAIEAiwCIANoAgACGANsAiQCDAIcAigCQAIcAkACNANoAhgCMANsAjwCJAI4AkQCWAI4AlgCTANoAjACSANsAlQCPAJQAlwCcAJQAnACZANoAkgCYANsAmwCVAJoAnQCiAJoAogCfANoAmACeANsAoQCbAKAAowCoAKAAqAClANoAngCkANsApwChAKYAqQCvAKYArwCsANoApACqANsArQCnAKsArgC1AKsAtQCyANoAqgCwANsAswCtALEAtAC7ALEAuwC4ANoAsAC2ANsAuQCzALcAugDBALcAwQC+ANoAtgC8ANsAvwC5AL0AwADGAL0AxgDDANoAvADCANsAxQC/AMQAxwDMAMQAzADJANoAwgDIANsAywDFAMoAzQDSAMoA0gDPANoAyADOANsA0QDLANAA0wDYANAA2ADVANoAzgDUANsA1wDRANYA2QBzANYAcwBwANoA1ABuANsAcQDXAN0A4ADnAN0A5wDkAEgB3ADiAEkB5QDfAOMA5gDtAOMA7QDqAEgB4gDoAEkB6wDlAOkA7ADzAOkA8wDwAEgB6ADuAEkB8QDrAO8A8gD5AO8A+QD2AEgB7gD0AEkB9wDxAPUA+AD+APUA/gD7AEgB9AD6AEkB/QD3APwA/wAEAfwABAEBAUgB+gAAAUkBAwH9AAIBBQEKAQIBCgEHAUgBAAEGAUkBCQEDAQgBCwEQAQgBEAENAUgBBgEMAUkBDwEJAQ4BEQEWAQ4BFgETAUgBDAESAUkBFQEPARQBFwEdARQBHQEaAUgBEgEYAUkBGwEVARkBHAEjARkBIwEgAUgBGAEeAUkBIQEbAR8BIgEpAR8BKQEmAUgBHgEkAUkBJwEhASUBKAEvASUBLwEsAUgBJAEqAUkBLQEnASsBLgE0ASsBNAExAUgBKgEwAUkBMwEtATIBNQE6ATIBOgE3AUgBMAE2AUkBOQEzATgBOwFAATgBQAE9AUgBNgE8AUkBPwE5AT4BQQFGAT4BRgFDAUgBPAFCAUkBRQE/AUQBRwHhAEQB4QDeAEgBQgHcAEkB3wBFAUsBTgFVAUsBVQFSAbYBSgFQAbcBUwFNAVEBVAFbAVEBWwFYAbYBUAFWAbcBWQFTAVcBWgFhAVcBYQFeAbYBVgFcAbcBXwFZAV0BYAFnAV0BZwFkAbYBXAFiAbcBZQFfAWMBZgFsAWMBbAFpAbYBYgFoAbcBawFlAWoBbQFyAWoBcgFvAbYBaAFuAbcBcQFrAXABcwF4AXABeAF1AbYBbgF0AbcBdwFxAXYBeQF+AXYBfgF7AbYBdAF6AbcBfQF3AXwBfwGEAXwBhAGBAbYBegGAAbcBgwF9AYIBhQGLAYIBiwGIAbYBgAGGAbcBiQGDAYcBigGRAYcBkQGOAbYBhgGMAbcBjwGJAY0BkAGXAY0BlwGUAbYBjAGSAbcBlQGPAZMBlgGdAZMBnQGaAbYBkgGYAbcBmwGVAZkBnAGiAZkBogGfAbYBmAGeAbcBoQGbAaABowGoAaABqAGlAbYBngGkAbcBpwGhAaYBqQGuAaYBrgGrAbYBpAGqAbcBrQGnAawBrwG0AawBtAGxAbYBqgGwAbcBswGtAbIBtQFPAbIBTwFMAbYBsAFKAbcBTQGzAT0Kt78fhes+exQuvz0Kt78fhes+exQuvz0Kt78fhes+exQuvz0Kt78fhes+AACAvz0Kt78fhes+AACAvz0Kt78fhes+AACAvw/Qur+F6xE/exQuvw/Qur+F6xE/exQuvw/Qur+F6xE/exQuvw/Qur+F6xE/AACAvw/Qur+F6xE/AACAvw/Qur+F6xE/AACAv7gexb/YiCY/exQuv7gexb/YiCY/exQuv7gexb/YiCY/exQuv7gexb/YiCY/AACAv7gexb/YiCY/AACAv7gexb/YiCY/AACAvzMz0797FC4/exQuvzMz0797FC4/exQuvzMz0797FC4/exQuvzMz0797FC4/AACAvzMz0797FC4/AACAvzMz0797FC4/AACAv65H4b/YiCY/exQuv65H4b/YiCY/exQuv65H4b/YiCY/exQuv65H4b/YiCY/AACAv65H4b/YiCY/AACAv65H4b/YiCY/AACAv1iW67+F6xE/exQuv1iW67+F6xE/exQuv1iW67+F6xE/exQuv1iW67+F6xE/AACAv1iW67+F6xE/AACAv1iW67+F6xE/AACAvylc778fhes+exQuvylc778fhes+exQuvylc778fhes+exQuvylc778fhes+AACAvylc778fhes+AACAvylc778fhes+AACAv1iW678zM7M+exQuv1iW678zM7M+exQuv1iW678zM7M+exQuv1iW678zM7M+AACAv1iW678zM7M+AACAv1iW678zM7M+AACAv65H4b+N+Ik+exQuv65H4b+N+Ik+exQuv65H4b+N+Ik+exQuv65H4b+N+Ik+AACAv65H4b+N+Ik+AACAv65H4b+N+Ik+AACAvzMz07+PwnU+exQuvzMz07+PwnU+exQuvzMz07+PwnU+exQuvzMz07+PwnU+AACAvzMz07+PwnU+AACAvzMz07+PwnU+AACAv7gexb+N+Ik+exQuv7gexb+N+Ik+exQuv7gexb+N+Ik+exQuv7gexb+N+Ik+AACAv7gexb+N+Ik+AACAv7gexb+N+Ik+AACAvw/Qur8zM7M+exQuvw/Qur8zM7M+exQuvw/Qur8zM7M+exQuvw/Qur8zM7M+AACAvw/Qur8zM7M+AACAvw/Qur8zM7M+AACAvzMz078fhes+exQuvzMz078fhes+AACAvz0Kt78fhes+AACAPz0Kt78fhes+AACAPz0Kt78fhes+AACAPz0Kt78fhes+exQuPz0Kt78fhes+exQuPz0Kt78fhes+exQuPw/Qur+F6xE/AACAPw/Qur+F6xE/AACAPw/Qur+F6xE/AACAPw/Qur+F6xE/exQuPw/Qur+F6xE/exQuPw/Qur+F6xE/exQuP7gexb/YiCY/AACAP7gexb/YiCY/AACAP7gexb/YiCY/AACAP7gexb/YiCY/exQuP7gexb/YiCY/exQuP7gexb/YiCY/exQuPzMz0797FC4/AACAPzMz0797FC4/AACAPzMz0797FC4/AACAPzMz0797FC4/exQuPzMz0797FC4/exQuPzMz0797FC4/exQuP65H4b/YiCY/AACAP65H4b/YiCY/AACAP65H4b/YiCY/AACAP65H4b/YiCY/exQuP65H4b/YiCY/exQuP65H4b/YiCY/exQuP1iW67+F6xE/AACAP1iW67+F6xE/AACAP1iW67+F6xE/AACAP1iW67+F6xE/exQuP1iW67+F6xE/exQuP1iW67+F6xE/exQuPylc778fhes+AACAPylc778fhes+AACAPylc778fhes+AACAPylc778fhes+exQuPylc778fhes+exQuPylc778fhes+exQuP1iW678zM7M+AACAP1iW678zM7M+AACAP1iW678zM7M+AACAP1iW678zM7M+exQuP1iW678zM7M+exQuP1iW678zM7M+exQuP65H4b+N+Ik+AACAP65H4b+N+Ik+AACAP65H4b+N+Ik+AACAP65H4b+N+Ik+exQuP65H4b+N+Ik+exQuP65H4b+N+Ik+exQuPzMz07+PwnU+AACAPzMz07+PwnU+AACAPzMz07+PwnU+AACAPzMz07+PwnU+exQuPzMz07+PwnU+exQuPzMz07+PwnU+exQuP7gexb+N+Ik+AACAP7gexb+N+Ik+AACAP7gexb+N+Ik+AACAP7gexb+N+Ik+exQuP7gexb+N+Ik+exQuP7gexb+N+Ik+exQuPw/Qur8zM7M+AACAPw/Qur8zM7M+AACAPw/Qur8zM7M+AACAPw/Qur8zM7M+exQuPw/Qur8zM7M+exQuPw/Qur8zM7M+exQuPzMz078fhes+AACAPzMz078fhes+exQuP/Yo/D8fhes+exQuv/Yo/D8fhes+exQuv/Yo/D8fhes+exQuv/Yo/D8fhes+AACAv/Yo/D8fhes+AACAv/Yo/D8fhes+AACAvyRj+D+F6xE/exQuvyRj+D+F6xE/exQuvyRj+D+F6xE/exQuvyRj+D+F6xE/AACAvyRj+D+F6xE/AACAvyRj+D+F6xE/AACAv3sU7j/YiCY/exQuv3sU7j/YiCY/exQuv3sU7j/YiCY/exQuv3sU7j/YiCY/AACAv3sU7j/YiCY/AACAv3sU7j/YiCY/AACAvwAA4D97FC4/exQuvwAA4D97FC4/exQuvwAA4D97FC4/exQuvwAA4D97FC4/AACAvwAA4D97FC4/AACAvwAA4D97FC4/AACAv4Xr0T/YiCY/exQuv4Xr0T/YiCY/exQuv4Xr0T/YiCY/exQuv4Xr0T/YiCY/AACAv4Xr0T/YiCY/AACAv4Xr0T/YiCY/AACAv9ycxz+F6xE/exQuv9ycxz+F6xE/exQuv9ycxz+F6xE/exQuv9ycxz+F6xE/AACAv9ycxz+F6xE/AACAv9ycxz+F6xE/AACAvwrXwz8fhes+exQuvwrXwz8fhes+exQuvwrXwz8fhes+exQuvwrXwz8fhes+AACAvwrXwz8fhes+AACAvwrXwz8fhes+AACAv9ycxz8zM7M+exQuv9ycxz8zM7M+exQuv9ycxz8zM7M+exQuv9ycxz8zM7M+AACAv9ycxz8zM7M+AACAv9ycxz8zM7M+AACAv4Xr0T+N+Ik+exQuv4Xr0T+N+Ik+exQuv4Xr0T+N+Ik+exQuv4Xr0T+N+Ik+AACAv4Xr0T+N+Ik+AACAv4Xr0T+N+Ik+AACAvwAA4D+PwnU+exQuvwAA4D+PwnU+exQuvwAA4D+PwnU+exQuvwAA4D+PwnU+AACAvwAA4D+PwnU+AACAvwAA4D+PwnU+AACAv3sU7j+N+Ik+exQuv3sU7j+N+Ik+exQuv3sU7j+N+Ik+exQuv3sU7j+N+Ik+AACAv3sU7j+N+Ik+AACAv3sU7j+N+Ik+AACAvyRj+D8zM7M+exQuvyRj+D8zM7M+exQuvyRj+D8zM7M+exQuvyRj+D8zM7M+AACAvyRj+D8zM7M+AACAvyRj+D8zM7M+AACAvwAA4D8fhes+exQuvwAA4D8fhes+AACAv/Yo/D8fhes+AACAP/Yo/D8fhes+AACAP/Yo/D8fhes+AACAP/Yo/D8fhes+exQuP/Yo/D8fhes+exQuP/Yo/D8fhes+exQuPyRj+D+F6xE/AACAPyRj+D+F6xE/AACAPyRj+D+F6xE/AACAPyRj+D+F6xE/exQuPyRj+D+F6xE/exQuPyRj+D+F6xE/exQuP3sU7j/YiCY/AACAP3sU7j/YiCY/AACAP3sU7j/YiCY/AACAP3sU7j/YiCY/exQuP3sU7j/YiCY/exQuP3sU7j/YiCY/exQuPwAA4D97FC4/AACAPwAA4D97FC4/AACAPwAA4D97FC4/AACAPwAA4D97FC4/exQuPwAA4D97FC4/exQuPwAA4D97FC4/exQuP4Xr0T/YiCY/AACAP4Xr0T/YiCY/AACAP4Xr0T/YiCY/AACAP4Xr0T/YiCY/exQuP4Xr0T/YiCY/exQuP4Xr0T/YiCY/exQuP9ycxz+F6xE/AACAP9ycxz+F6xE/AACAP9ycxz+F6xE/AACAP9ycxz+F6xE/exQuP9ycxz+F6xE/exQuP9ycxz+F6xE/exQuPwrXwz8fhes+AACAPwrXwz8fhes+AACAPwrXwz8fhes+AACAPwrXwz8fhes+exQuPwrXwz8fhes+exQuPwrXwz8fhes+exQuP9ycxz8zM7M+AACAP9ycxz8zM7M+AACAP9ycxz8zM7M+AACAP9ycxz8zM7M+exQuP9ycxz8zM7M+exQuP9ycxz8zM7M+exQuP4Xr0T+N+Ik+AACAP4Xr0T+N+Ik+AACAP4Xr0T+N+Ik+AACAP4Xr0T+N+Ik+exQuP4Xr0T+N+Ik+exQuP4Xr0T+N+Ik+exQuPwAA4D+PwnU+AACAPwAA4D+PwnU+AACAPwAA4D+PwnU+AACAPwAA4D+PwnU+exQuPwAA4D+PwnU+exQuPwAA4D+PwnU+exQuP3sU7j+N+Ik+AACAP3sU7j+N+Ik+AACAP3sU7j+N+Ik+AACAP3sU7j+N+Ik+exQuP3sU7j+N+Ik+exQuP3sU7j+N+Ik+exQuPyRj+D8zM7M+AACAPyRj+D8zM7M+AACAPyRj+D8zM7M+AACAPyRj+D8zM7M+exQuPyRj+D8zM7M+exQuPyRj+D8zM7M+exQuPwAA4D8fhes+AACAPwAA4D8fhes+exQuPylcL0C4HgU/ZmZmPylcL0C4HgU/ZmZmPylcL0C4HgU/ZmZmP0jhOkC4HgU/ZmZmP0jhOkC4HgU/ZmZmP0jhOkC4HgU/ZmZmP0jhOkC4HgU/ZmZmv0jhOkC4HgU/ZmZmv0jhOkC4HgU/ZmZmvylcL0C4HgU/ZmZmvylcL0C4HgU/ZmZmvylcL0C4HgU/ZmZmvylcL0CF61E/ZmZmPylcL0CF61E/ZmZmPylcL0CF61E/ZmZmP0jhOkCF61E/ZmZmP0jhOkCF61E/ZmZmP0jhOkCF61E/ZmZmP0jhOkCF61E/ZmZmv0jhOkCF61E/ZmZmv0jhOkCF61E/ZmZmvylcL0CF61E/ZmZmvylcL0CF61E/ZmZmvylcL0CF61E/ZmZmv9ejMMC4HgU/ZmZmP9ejMMC4HgU/ZmZmP9ejMMC4HgU/ZmZmPxSuJ8C4HgU/ZmZmPxSuJ8C4HgU/ZmZmPxSuJ8C4HgU/ZmZmPxSuJ8C4HgU/ZmZmvxSuJ8C4HgU/ZmZmvxSuJ8C4HgU/ZmZmv9ejMMC4HgU/ZmZmv9ejMMC4HgU/ZmZmv9ejMMC4HgU/ZmZmv9ejMMBcj0I/ZmZmP9ejMMBcj0I/ZmZmP9ejMMBcj0I/ZmZmPxSuJ8Bcj0I/ZmZmPxSuJ8Bcj0I/ZmZmPxSuJ8Bcj0I/ZmZmPxSuJ8Bcj0I/ZmZmvxSuJ8Bcj0I/ZmZmvxSuJ8Bcj0I/ZmZmv9ejMMBcj0I/ZmZmv9ejMMBcj0I/ZmZmv9ejMMBcj0I/ZmZmvwAAAAAAAAAAAACAPx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAvx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAP/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAv/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAP3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAv3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAP/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAv/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAPx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAvx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAv/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAv3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAP/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAv/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAPx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAvx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAP/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAv/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAP3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAv3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAP/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAv/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAPx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAvx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAv/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAv3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAP/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAv/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAPx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAvx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAP/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAv/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAP3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAv3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAP/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAv/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAPx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAvx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAv/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAv3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAP/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAv/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAPx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAvx1Hdz9ygoQ+AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAP/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAv/QENT/0BDU/AAAAAB1Hdz9ygoQ+AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAPQENT/0BDU/AAAAAAAAAAAAAAAAAACAP3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAv3KChD4dR3c/AAAAAHKChL4dR3c/AAAAAAAAAAAAAAAAAACAP3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAv3KChL4dR3c/AAAAAPQENb/0BDU/AAAAAAAAAAAAAAAAAACAP/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAv/QENb/0BDU/AAAAAB1Hd79ygoQ+AAAAAAAAAAAAAAAAAACAPx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAvx1Hd79ygoQ+AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAv/QENb/0BDW/AAAAAB1Hd79ygoS+AAAAAAAAAAAAAAAAAACAP3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAv3KChL4dR3e/AAAAAPQENb/0BDW/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAHKChL4dR3e/AAAAAAAAAAAAAAAAAACAP3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAv3KChD4dR3e/AAAAAPQENT/0BDW/AAAAAAAAAAAAAAAAAACAP/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAv/QENT/0BDW/AAAAAB1Hdz9ygoS+AAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAA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AAAAv1yPMkBmZoY/hetRv1yPMkBmZoY/hetRv1yPMkBmZoY/hetRv83MLEBmZoY/hetRv83MLEBmZoY/hetRv83MLEBmZoY/hetRv0jhKsAUrkc/MzMzv0jhKsAUrkc/MzMzv0jhKsAUrkc/MzMzv2ZmJsAUrkc/MzMzv2ZmJsAUrkc/MzMzv2ZmJsAUrkc/MzMzv2ZmJsAUrkc/ZmZmv2ZmJsAUrkc/ZmZmv2ZmJsAUrkc/ZmZmv0jhKsAUrkc/ZmZmv0jhKsAUrkc/ZmZmv0jhKsAUrkc/ZmZmv0jhKsBmZmY/MzMzv0jhKsBmZmY/MzMzv0jhKsBmZmY/MzMzv2ZmJsBmZmY/MzMzv2ZmJsBmZmY/MzMzv2ZmJsBmZmY/MzMzv2ZmJsBmZmY/ZmZmv2ZmJsBmZmY/ZmZmv2ZmJsBmZmY/ZmZmv0jhKsBmZmY/ZmZmv0jhKsBmZmY/ZmZmv0jhKsBmZmY/ZmZmv83MLECamVk/hetRP83MLECamVk/hetRP83MLECamVk/hetRP1yPMkCamVk/hetRP1yPMkCamVk/hetRP1yPMkCamVk/hetRP1yPMkCamVk/AAAAP1yPMkCamVk/AAAAP1yPMkCamVk/AAAAP83MLECamVk/AAAAP83MLECamVk/AAAAP83MLECamVk/AAAAP83MLEBmZoY/hetRP83MLEBmZoY/hetRP83MLEBmZoY/hetRP1yPMkBmZoY/hetRP1yPMkBmZoY/hetRP1yPMkBmZoY/hetRP1yPMkBmZoY/AAAAP1yPMkBmZoY/AAAAP1yPMkBmZoY/AAAAP83MLEBmZoY/AAAAP83MLEBmZoY/AAAAP83MLEBmZoY/AAAAP0jhKsAUrkc/ZmZmP0jhKsAUrkc/ZmZmP0jhKsAUrkc/ZmZmP2ZmJsAUrkc/ZmZmP2ZmJsAUrkc/ZmZmP2ZmJsAUrkc/ZmZmP2ZmJsAUrkc/MzMzP2ZmJsAUrkc/MzMzP2ZmJsAUrkc/MzMzP0jhKsAUrkc/MzMzP0jhKsAUrkc/MzMzP0jhKsAUrkc/MzMzP0jhKsBmZmY/ZmZmP0jhKsBmZmY/ZmZmP0jhKsBmZmY/ZmZmP2ZmJsBmZmY/ZmZmP2ZmJsBmZmY/ZmZmP2ZmJsBmZmY/ZmZmP2ZmJsBmZmY/MzMzP2ZmJsBmZmY/MzMzP2ZmJsBmZmY/MzMzP0jhKsBmZmY/MzMzP0jhKsBmZmY/MzMzP0jhKsBmZmY/MzMzPwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAEACgAHAAEABwAEAA0AEAATAA0AEwAWAAAAAwAPAAAADwAMAAUACAAUAAUAFAARAAYACQAVAAYAFQASAAsAAgAOAAsADgAXABkAIgAfABkAHwAcACUAKAArACUAKwAuABgAGwAnABgAJwAkAB0AIAAsAB0ALAApAB4AIQAtAB4ALQAqACMAGgAmACMAJgAvADEAOgA3ADEANwA0AD0AQABDAD0AQwBGADAAMwA/ADAAPwA8ADUAOABEADUARABBADYAOQBFADYARQBCADsAMgA+ADsAPgBHAEkAUgBPAEkATwBMAFUAWABbAFUAWwBeAEgASwBXAEgAVwBUAE0AUABcAE0AXABZAE4AUQBdAE4AXQBaAFMASgBWAFMAVgBfAA==";var yf="data:application/octet-stream;base64,Z2xURgIAAADUJgEA6AYAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NS4yLjQxIiwidmVyc2lvbiI6IjIuMCJ9LCJzY2VuZSI6MCwic2NlbmVzIjpbeyJuYW1lIjoiU2NlbmUiLCJub2RlcyI6WzAsMV19XSwibm9kZXMiOlt7Im1lc2giOjAsIm5hbWUiOiJXaW5kQm9keVoifSx7Im1lc2giOjEsIm5hbWUiOiJXaW5kUm90b3JaIiwidHJhbnNsYXRpb24iOlswLDkuNSwwLjc1XX1dLCJtYXRlcmlhbHMiOlt7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiZGFyayIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wNTAwMDAwMDA3NDUwNTgwNiwwLjA1MDAwMDAwMDc0NTA1ODA2LDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjgwMDAwMDAxMTkyMDkyOX19XSwibWVzaGVzIjpbeyJuYW1lIjoid19sZWcwX21lc2giLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjF9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJyX2h1Yl9tZXNoIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MywiTk9STUFMIjo0fSwiaW5kaWNlcyI6NSwibWF0ZXJpYWwiOjB9XX1dLCJhY2Nlc3NvcnMiOlt7ImJ1ZmZlclZpZXciOjAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxMzQ0LCJtYXgiOlsxLjQyNjY5OTI4MDczODgzMDYsMTAuMzk5OTk5NjE4NTMwMjczLDEuNDI3NDUyMzI1ODIwOTIyOV0sIm1pbiI6Wy0xLjQyNjgxNDY3NTMzMTExNTcsLTAuMDE4NTcwODk4MTAwNzMzNzU3LC00LjY5OTk5OTgwOTI2NTEzN10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTM0NCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoyMDE2LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjozLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTM4MiwibWF4IjpbMi43MzQ0NjgyMjE2NjQ0Mjg3LDIuNjkzOTgxMTcwNjU0Mjk3LDAuMTcwMDAwMDE2Njg5MzAwNTRdLCJtaW4iOlstMi43MzQ0NjgyMjE2NjQ0Mjg3LC0yLjY5Mzk4MTE3MDY1NDI5NywtMC4xNzAwMDAwMTY2ODkzMDA1NF0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTM4MiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoyMTEyLCJ0eXBlIjoiU0NBTEFSIn1dLCJidWZmZXJWaWV3cyI6W3siYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNjEyOCwiYnl0ZU9mZnNldCI6MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE2MTI4LCJieXRlT2Zmc2V0IjoxNjEyOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjQwMzIsImJ5dGVPZmZzZXQiOjMyMjU2LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTY1ODQsImJ5dGVPZmZzZXQiOjM2Mjg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTY1ODQsImJ5dGVPZmZzZXQiOjUyODcyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NDIyNCwiYnl0ZU9mZnNldCI6Njk0NTYsInRhcmdldCI6MzQ5NjN9XSwiYnVmZmVycyI6W3siYnl0ZUxlbmd0aCI6NzM2ODB9XX0g0B8BAEJJTgBTgqM/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szG7vfTUfr9fsb89Tr99v1+xvz0rx34/ITTEPRJgmDwYeOC8szG7PfTUfj9fsb+9Tr99P1+xv70rx36/ITTEvRJgmLwrx34/ITTEPRJgmDwYeOC8szG7PfTUfj9fsb+9Tr99P1+xv70YeOA8szG7vfTUfr9fsb+9Tr99P1+xv70rx36/ITTEvRJgmLwYeOA8szG7vfTUfr8rx34/ITTEPRJgmDxfsb+9Tr99P1+xv70AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAACwR649AAAAAEgSfz/ddz0/9WQrv3Vvgb3rwiq/0io+vyB8aT2wR649AAAAAEgSfz/rwio/0io+PyB8ab3ddz0/9WQrv3Vvgb3ddz0/9WQrv3Vvgb2wR669AAAAAEgSf7/rwiq/0io+vyB8aT3rwio/0io+PyB8ab3ddz0/9WQrv3Vvgb2wR669AAAAAEgSf7+wR649AAAAAEgSfz/rwiq/0io+vyB8aT3ddz2/9WQrP3VvgT2wR649AAAAAEgSfz/rwio/0io+PyB8ab3ddz2/9WQrP3VvgT2wR669AAAAAEgSf7/rwiq/0io+vyB8aT3ddz2/9WQrP3VvgT3rwio/0io+PyB8ab2wR669AAAAAEgSf7/ddz2/9WQrP3VvgT2wR649AAAAAEgSf7/rwio/0io+vyB8aT3ddz2/9WQrv3Vvgb2wR649AAAAAEgSf7/rwiq/0io+PyB8ab3ddz2/9WQrv3Vvgb3rwio/0io+vyB8aT2wR669AAAAAEgSfz/ddz2/9WQrv3Vvgb2wR669AAAAAEgSfz/rwiq/0io+PyB8ab3ddz2/9WQrv3Vvgb2wR649AAAAAEgSf7/rwio/0io+vyB8aT3ddz0/9WQrP3VvgT2wR649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y5RgPwPGqT2zvTC+AAAAAHQofD/rNV2/2sL1PskIG74AAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAgfGk90io+v+vCKj9IEn8/AAAAALBHrr11b4G99WQrv913Pb9IEn8/AAAAALBHrr0gfGm90io+P+vCKr91b4G99WQrv913Pb8gfGk90io+v+vCKj91b4G99WQrv913Pb9IEn+/AAAAALBHrj0gfGm90io+P+vCKr91b4G99WQrv913Pb9IEn+/AAAAALBHrj0gfGk90io+v+vCKj91b4E99WQrP913PT9IEn8/AAAAALBHrr11b4E99WQrP913PT9IEn8/AAAAALBHrr0gfGm90io+P+vCKr8gfGk90io+v+vCKj91b4E99WQrP913PT9IEn+/AAAAALBHrj11b4E99WQrP913PT8gfGm90io+P+vCKr9IEn+/AAAAALBHrj0gfGk90io+v+vCKr91b4G99WQrv913PT9IEn+/AAAAALBHrr0gfGm90io+P+vCKj91b4G99WQrv913PT9IEn+/AAAAALBHrr0gfGk90io+v+vCKr9IEn8/AAAAALBHrj11b4G99WQrv913PT9IEn8/AAAAALBHrj0gfGm90io+P+vCKj91b4G99WQrv913PT8gfGk90io+v+vCKr91b4E99WQrP913Pb9IEn+/AAAAALBHrr11b4E99WQrP913Pb8gfGm90io+P+vCKj9IEn+/AAAAALBHrr0gfGk90io+v+vCKr91b4E99WQrP913Pb9IEn8/AAAAALBHrj11b4E99WQrP913Pb9IEn8/AAAAALBHrj0gfGm90io+P+vCKj89apo9iXwtv0dCOz/Npn4/AAAAAEnt0b0IVY6930E8v5+QLL/Npn4/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AAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAA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AAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAB1b4E99WQrv913PT8gfGm90io+v+vCKr9IEn+/AAAAALBHrj0gfGk90io+P+vCKj91b4E99WQrv913PT9IEn+/AAAAALBHrj11b4E99WQrv913PT9IEn8/AAAAALBHrr0gfGm90io+v+vCKr8gfGk90io+P+vCKj91b4E99WQrv913PT9IEn8/AAAAALBHrr0gfGm90io+v+vCKr91b4G99WQrP913Pb9IEn+/AAAAALBHrj0gfGk90io+P+vCKj91b4G99WQrP913Pb9IEn+/AAAAALBHrj1IEn8/AAAAALBHrr0gfGm90io+v+vCKr91b4G99WQrP913Pb8gfGk90io+P+vCKj9IEn8/AAAAALBHrr11b4G99WQrP913Pb91b4E99WQrv913Pb9IEn8/AAAAALBHrj0gfGm90io+v+vCKj8gfGk90io+P+vCKr91b4E99WQrv913Pb9IEn8/AAAAALBHrj11b4E99WQrv913Pb8gfGm90io+v+vCKj9IEn+/AAAAALBHrr0gfGk90io+P+vCKr91b4E99WQrv913Pb9IEn+/AAAAALBHrr1IEn8/AAAAALBHrj0gfGm90io+v+vCKj91b4G99WQrP913PT8gfGk90io+P+vCKr9IEn8/AAAAALBHrj11b4G99WQrP913PT8gfGm90io+v+vCKj91b4G99WQrP913PT9IEn+/AAAAALBHrr0gfGk90io+P+vCKr91b4G99WQrP913PT9IEn+/AAAAALBHrr0IVY4930E8v5+QLD89apq9iXwtv0dCO7/Npn6/AAAAAEnt0T0IVY4930E8v5+QLD89apo9iXwtP0dCOz/Npn6/AAAAAEnt0T0IVY4930E8v5+QLD/Npn4/AAAAAEnt0b09apq9iXwtv0dCO78IVY4930E8v5+QLD89apo9iXwtP0dCOz/Npn4/AAAAAEnt0b0IVY6930E8P5+QLL89apq9iXwtv0dCO7/Npn6/AAAAAEnt0T09apo9iXwtP0dCOz8IVY6930E8P5+QLL/Npn6/AAAAAEnt0T3Npn4/AAAAAEnt0b0IVY6930E8P5+QLL89apq9iXwtv0dCO789apo9iXwtP0dCOz/Npn4/AAAAAEnt0b0IVY6930E8P5+QLL8IVY4930E8v5+QLL/Npn4/AAAAAEnt0T09apq9iXwtv0dCOz8IVY4930E8v5+QLL89apo9iXwtP0dCO7/Npn4/AAAAAEnt0T0IVY4930E8v5+QLL89apq9iXwtv0dCOz/Npn6/AAAAAEnt0b0IVY4930E8v5+QLL89apo9iXwtP0dCO7/Npn6/AAAAAEnt0b3Npn4/AAAAAEnt0T0IVY6930E8P5+QLD89apq9iXwtv0dCOz89apo9iXwtP0dCO7/Npn4/AAAAAEnt0T0IVY6930E8P5+QLD8IVY6930E8P5+QLD89apq9iXwtv0dCOz/Npn6/AAAAAEnt0b09apo9iXwtP0dCO78IVY6930E8P5+QLD/Npn6/AAAAAEnt0b372ps9AmROv50yFj/TktS9CXgXv9ipTL//3n2/AAAAAGPJAz772ps9AmROv50yFj/TktQ9CXgXP9ipTD//3n2/AAAAAGPJAz772ps9AmROv50yFj//3n0/AAAAAGPJA77TktS9CXgXv9ipTL/72ps9AmROv50yFj/TktQ9CXgXP9ipTD//3n0/AAAAAGPJA74cD5y9m2NOP1IyFr/TktS9CXgXv9ipTL//3n2/AAAAAGPJAz7TktQ9CXgXP9ipTD8cD5y9m2NOP1IyFr//3n2/AAAAAGPJAz7/3n0/AAAAAGPJA74cD5y9m2NOP1IyFr/TktS9CXgXv9ipTL/TktQ9CXgXP9ipTD//3n0/AAAAAGPJA74cD5y9m2NOP1IyFr/72ps9AmROv50yFr//3n0/AAAAAGPJAz7TktS9CXgXv9ipTD/72ps9AmROv50yFr/TktQ9CXgXP9ipTL//3n0/AAAAAGPJAz772ps9AmROv50yFr/TktS9CXgXv9ipTD//3n2/AAAAAGPJA7772ps9AmROv50yFr/TktQ9CXgXP9ipTL//3n2/AAAAAGPJA77/3n0/AAAAAGPJAz4cD5y9m2NOP1IyFj/TktS9CXgXv9ipTD/TktQ9CXgXP9ipTL//3n0/AAAAAGPJAz4cD5y9m2NOP1IyFj8cD5y9m2NOP1IyFj/TktS9CXgXv9ipTD//3n2/AAAAAGPJA77TktQ9CXgXP9ipTL8cD5y9m2NOP1IyFj//3n2/AAAAAGPJA74Dxqk9y5Rgv8AQ8j7JCBu+2sL1vus1Xb90KHy/AAAAALO9MD4Dxqk9y5Rgv8AQ8j7JCBs+2sL1Pus1XT90KHy/AAAAALO9MD4Dxqk9y5Rgv8AQ8j50KHw/AAAAALO9ML7JCBu+2sL1vus1Xb8Dxqk9y5Rgv8AQ8j7JCBs+2sL1Pus1XT90KHw/AAAAALO9ML4Dxqm9y5RgP8AQ8r7JCBu+2sL1vus1Xb90KHy/AAAAALO9MD7JCBs+2sL1Pus1XT8Dxqm9y5RgP8AQ8r50KHy/AAAAALO9MD50KHw/AAAAALO9ML4Dxqm9y5RgP8AQ8r7JCBu+2sL1vus1Xb/JCBs+2sL1Pus1XT90KHw/AAAAALO9ML4Dxqm9y5RgP8AQ8r4Dxqk9y5Rgv8AQ8r50KHw/AAAAALO9MD7JCBu+2sL1vus1XT8Dxqk9y5Rgv8AQ8r7JCBs+2sL1Pus1Xb90KHw/AAAAALO9MD4Dxqk9y5Rgv8AQ8r7JCBu+2sL1vus1XT90KHy/AAAAALO9ML4Dxqk9y5Rgv8AQ8r7JCBs+2sL1Pus1Xb90KHy/AAAAALO9ML50KHw/AAAAALO9MD4Dxqm9y5RgP8AQ8j7JCBu+2sL1vus1XT/JCBs+2sL1Pus1Xb90KHw/AAAAALO9MD4Dxqm9y5RgP8AQ8j4Dxqm9y5RgP8AQ8j7JCBu+2sL1vus1XT90KHy/AAAAALO9ML7JCBs+2sL1Pus1Xb8Dxqm9y5RgP8AQ8j50KHy/AAAAALO9ML4AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAF80QPnZtfT8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAANlgovlGEfL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAUYR8PzZYKL4AAAAANlgovlGEfL8AAIC/AAAAAAAAAAAAAAAAF80QPnZtfT8AAAAAUYR8PzZYKL4AAIC/AAAAAAAAAAAAAAAAF80QPnZtfT8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAANlgovlGEfL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAUYR8PzZYKL4AAAAANlgovlGEfL8AAIA/AAAAAAAAAAAAAAAAF80QPnZtfT8AAAAAUYR8PzZYKL4AAIA/AAAAAAAAAAABAAYACQABAAkABAANABEAFwANABcAEwAAAAMADwAAAA8ADAAHABIAFgAHABYACwACAA4AFAACABQACAAFAAoAFQAFABUAEAAZAB8AIwAZACMAHQAlACgALQAlAC0AKgAYABsAJwAYACcAJAAeACsALwAeAC8AIgAaACYALAAaACwAIAAcACEALgAcAC4AKQAxADcAOwAxADsANQA8AD8ARgA8AEYAQwAwADQAQQAwAEEAPQA2AEIARQA2AEUAOQAyAD4ARAAyAEQAOAAzADoARwAzAEcAQABIAE8AUgBIAFIASwBVAFkAXwBVAF8AWwBJAE0AWABJAFgAVABOAFoAXQBOAF0AUQBKAFYAXABKAFwAUABMAFMAXgBMAF4AVwBiAGgAawBiAGsAZQBuAHEAdwBuAHcAdABgAGMAbwBgAG8AbABmAHIAdQBmAHUAaQBhAG0AcwBhAHMAZwBkAGoAdgBkAHYAcAB6AIAAgwB6AIMAfQCGAIkAjwCGAI8AjAB4AHsAhwB4AIcAhAB+AIoAjQB+AI0AgQB5AIUAiwB5AIsAfwB8AIIAjgB8AI4AiACSAJgAmwCSAJsAlQCeAKEApwCeAKcApACQAJMAnwCQAJ8AnACWAKIApQCWAKUAmQCRAJ0AowCRAKMAlwCUAJoApgCUAKYAoACqALAAswCqALMArQC2ALkAvwC2AL8AvACoAKsAtwCoALcAtACuALoAvQCuAL0AsQCpALUAuwCpALsArwCsALIAvgCsAL4AuADBAMYAygDBAMoAxQDOANEA1wDOANcA1ADAAMMAzwDAAM8AzADHANIA1gDHANYAywDCAM0A0wDCANMAyADEAMkA1QDEANUA0ADaAOAA4wDaAOMA3QDmAOgA7QDmAO0A6wDYANsA5wDYAOcA5ADfAOwA7gDfAO4A4QDZAOUA6gDZAOoA3gDcAOIA7wDcAO8A6QDxAPYA+QDxAPkA9AD9AAEBBwH9AAcBAwHwAPMA/wDwAP8A/AD3AAIBBgH3AAYB+wDyAP4ABAHyAAQB+AD1APoABQH1AAUBAAEKARABEgEKARIBDAEVARgBHQEVAR0BGgEIAQsBFwEIARcBFAEPARwBHgEPAR4BEQEJARYBGwEJARsBDgENARMBHwENAR8BGQEhASYBKQEhASkBJAEtATEBNwEtATcBMwEgASMBLwEgAS8BLAEnATIBNgEnATYBKwEiAS4BNAEiATQBKAElASoBNQElATUBMAE6AUABQgE6AUIBPAFFAUgBTQFFAU0BSgE4ATsBRwE4AUcBRAE/AUwBTgE/AU4BQQE5AUYBSwE5AUsBPgE9AUMBTwE9AU8BSQFRAVYBWQFRAVkBVAFdAWEBZwFdAWcBYwFQAVMBXwFQAV8BXAFXAWIBZgFXAWYBWwFSAV4BZAFSAWQBWAFVAVoBZQFVAWUBYAFqAXABcgFqAXIBbAF1AXgBfQF1AX0BegFoAWsBdwFoAXcBdAFvAXwBfgFvAX4BcQFpAXYBewFpAXsBbgFtAXMBfwFtAX8BeQGAAYYBiQGAAYkBgwGMAY8BlQGMAZUBkgGCAYUBkQGCAZEBjgGIAZQBlwGIAZcBiwGBAY0BkwGBAZMBhwGEAYoBlgGEAZYBkAGYAZ4BoQGYAaEBmwGkAacBrQGkAa0BqgGaAZ0BqQGaAakBpgGgAawBrwGgAa8BowGZAaUBqwGZAasBnwGcAaIBrgGcAa4BqAGwAbYBuQGwAbkBswG8Ab8BxQG8AcUBwgGyAbUBwQGyAcEBvgG4AcQBxwG4AccBuwGxAb0BwwGxAcMBtwG0AboBxgG0AcYBwAHIAc4B0QHIAdEBywHUAdcB3QHUAd0B2gHKAc0B2QHKAdkB1gHQAdwB3wHQAd8B0wHJAdUB2wHJAdsBzwHMAdIB3gHMAd4B2AHiAecB6gHiAeoB5QHtAe8B9QHtAfUB8wHhAeMB8AHhAfAB7gHoAfQB9wHoAfcB6wHgAewB8gHgAfIB5gHkAekB9gHkAfYB8QH5AQACAwL5AQMC/AEFAgcCDQIFAg0CCwL6Af0BCQL6AQkCBgL/AQwCDgL/AQ4CAQL4AQQCCgL4AQoC/gH7AQICDwL7AQ8CCAISAhcCGQISAhkCFAIcAh8CJQIcAiUCIgIRAhMCIAIRAiACHgIYAiQCJwIYAicCGwIQAh0CIwIQAiMCFgIVAhoCJgIVAiYCIQIpAjACMgIpAjICKwI0AjcCPQI0Aj0COgIqAi0COQIqAjkCNgIvAjwCPgIvAj4CMQIoAjUCOwIoAjsCLgIsAjMCPwIsAj8COAJCAkcCSQJCAkkCRAJMAk8CVQJMAlUCUgJBAkMCUAJBAlACTgJIAlQCVwJIAlcCSwJAAk0CUwJAAlMCRgJFAkoCVgJFAlYCUQJZAmACYgJZAmICWwJkAmcCbQJkAm0CagJaAl0CaQJaAmkCZgJfAmwCbgJfAm4CYQJYAmUCawJYAmsCXgJcAmMCbwJcAm8CaAJyAncCeQJyAnkCdAJ8An8ChQJ8AoUCggJxAnMCgAJxAoACfgJ4AoQChwJ4AocCewJwAn0CgwJwAoMCdgJ1AnoChgJ1AoYCgQKJApACkgKJApICiwKUApcCnQKUAp0CmgKKAo0CmQKKApkClgKPApwCngKPAp4CkQKIApUCmwKIApsCjgKMApMCnwKMAp8CmAKiAqgCqwKiAqsCpQKuArECtwKuArcCtAKgAqMCrwKgAq8CrAKmArICtQKmArUCqQKhAq0CswKhArMCpwKkAqoCtgKkArYCsAK6AsACwwK6AsMCvQLGAskCzwLGAs8CzAK4ArsCxwK4AscCxAK+AsoCzQK+As0CwQK5AsUCywK5AssCvwK8AsICzgK8As4CyALSAtgC2wLSAtsC1QLeAuEC5wLeAucC5ALQAtMC3wLQAt8C3ALWAuIC5QLWAuUC2QLRAt0C4wLRAuMC1wLUAtoC5gLUAuYC4ALqAvAC8wLqAvMC7QL2AvkC/wL2Av8C/ALoAusC9wLoAvcC9ALuAvoC/QLuAv0C8QLpAvUC+wLpAvsC7wLsAvIC/gLsAv4C+AICAwgDCwMCAwsDBQMNAw8DFgMNAxYDFAMBAwMDEAMBAxADDgMGAxIDFQMGAxUDCQMAAwwDEwMAAxMDBwMEAwoDFwMEAxcDEQMYAx8DIwMYAyMDHAMmAykDLwMmAy8DLAMZAx0DKAMZAygDJAMeAyoDLQMeAy0DIQMaAyUDKwMaAysDIAMbAyIDLgMbAy4DJwMyAzgDOgMyAzoDNAM8Az8DRgM8A0YDQwMxAzMDQAMxA0ADPgM2A0IDRQM2A0UDOQMwAz0DRAMwA0QDNwM1AzsDRwM1A0cDQQNIA08DUgNIA1IDSwNVA1kDXwNVA18DWwNJA00DWANJA1gDVANOA1oDXQNOA10DUQNKA1YDXANKA1wDUANMA1MDXgNMA14DVwNiA2gDagNiA2oDZANsA28DdgNsA3YDcwNhA2MDcANhA3ADbgNmA3IDdQNmA3UDaQNgA20DdANgA3QDZwNlA2sDdwNlA3cDcQN4A38DggN4A4IDewOFA4kDjwOFA48DiwN5A30DiAN5A4gDhAN+A4oDjQN+A40DgQN6A4YDjAN6A4wDgAN8A4MDjgN8A44DhwOSA5gDmgOSA5oDlAOcA58DpgOcA6YDowORA5MDoAORA6ADngOWA6IDpQOWA6UDmQOQA50DpAOQA6QDlwOVA5sDpwOVA6cDoQOoA68DsgOoA7IDqwO1A7kDvwO1A78DuwOpA60DuAOpA7gDtAOuA7oDvQOuA70DsQOqA7YDvAOqA7wDsAOsA7MDvgOsA74DtwPAA8YDyQPAA8kDwwPMA88D1QPMA9UD0gPCA8UD0QPCA9EDzgPIA9QD1wPIA9cDywPBA80D0wPBA9MDxwPEA8oD1gPEA9YD0APYA94D4QPYA+ED2wPkA+cD7QPkA+0D6gPaA90D6QPaA+kD5gPgA+wD7wPgA+8D4wPZA+UD6wPZA+sD3wPcA+ID7gPcA+4D6APwA/YD+QPwA/kD8wP8A/8DBQT8AwUEAgTyA/UDAQTyAwEE/gP4AwQEBwT4AwcE+wPxA/0DAwTxAwME9wP0A/oDBgT0AwYEAAQIBA4EEQQIBBEECwQUBBcEHQQUBB0EGgQKBA0EGQQKBBkEFgQQBBwEHwQQBB8EEwQJBBUEGwQJBBsEDwQMBBIEHgQMBB4EGAQgBCYEKgQgBCoEJAQtBDAENwQtBDcENAQiBCUEMQQiBDEELgQnBDIENgQnBDYEKwQhBCwEMwQhBDMEKAQjBCkENQQjBDUELwQ4BD4EQgQ4BEIEPARGBEkETgRGBE4ESwQ5BD0ESAQ5BEgERARABEwETwRABE8EQwQ6BEUESgQ6BEoEPwQ7BEEETQQ7BE0ERwRQBFYEWQRQBFkEUwRcBGAEZwRcBGcEYwRSBFUEYQRSBGEEXgRXBGIEZgRXBGYEWwRRBF0EZARRBGQEWARUBFoEZQRUBGUEXwRoBG4EcQRoBHEEawR1BHkEfgR1BH4EegRpBG0EeARpBHgEdARwBHwEfwRwBH8EcwRqBHYEewRqBHsEbwRsBHIEfQRsBH0EdwSABIYEiQSABIkEgwSMBJAElwSMBJcEkwSCBIUEkQSCBJEEjgSHBJIElgSHBJYEiwSBBI0ElASBBJQEiASEBIoElQSEBJUEjwSYBJ4EoQSYBKEEmwSlBKkErgSlBK4EqgSZBJ0EqASZBKgEpASgBKwErwSgBK8EowSaBKYEqwSaBKsEnwScBKIErQScBK0EpwSwBLYEuQSwBLkEswS8BMAExwS8BMcEwwSyBLUEwQSyBMEEvgS3BMIExgS3BMYEuwSxBL0ExASxBMQEuAS0BLoExQS0BMUEvwTIBM4E0QTIBNEEywTVBNkE3gTVBN4E2gTJBM0E2ATJBNgE1ATQBNwE3wTQBN8E0wTKBNYE2wTKBNsEzwTMBNIE3QTMBN0E1wThBOoE5wThBOcE5ATtBPAE8wTtBPME9gTgBOME7wTgBO8E7ATlBOgE9ATlBPQE8QTmBOkE9QTmBPUE8gTrBOIE7gTrBO4E9wT5BAIF/wT5BP8E/AQFBQgFCwUFBQsFDgX4BPsEBwX4BAcFBAX9BAAFDAX9BAwFCQX+BAEFDQX+BA0FCgUDBfoEBgUDBQYFDwUQBRYFGQUQBRkFEwUcBR8FJQUcBSUFIgUSBRUFIQUSBSEFHgUYBSQFJwUYBScFGwURBR0FIwURBSMFFwUUBRoFJgUUBSYFIAUqBTMFMAUqBTAFLQU/BTYFOQU/BTkFPAUpBSwFOAUpBTgFNQUrBS8FOwUrBTsFNwUuBTIFPgUuBT4FOgUxBSgFNAUxBTQFPQUpXI8+AAAAAHwULj4pXI8+AAAAAHwULj4pXI8+AAAAAHwULj4pXI8+AAAAAHwULr4pXI8+AAAAAHwULr4pXI8+AAAAAHwULr60KYE+gM74PXwULj60KYE+gM74PXwULj60KYE+gM74PXwULj60KYE+gM74PXwULr60KYE+gM74PXwULr60KYE+gM74PXwULr5axDI+wCpgPnwULj5axDI+wCpgPnwULj5axDI+wCpgPnwULj5axDI+wCpgPnwULr5axDI+wCpgPnwULr5axDI+wCpgPnwULr5uNH89AMSLPnwULj5uNH89AMSLPnwULj5uNH89AMSLPnwULj5uNH89AMSLPnwULr5uNH89AMSLPnwULr5uNH89AMSLPnwULr5uNH+9AMSLPnwULj5uNH+9AMSLPnwULj5uNH+9AMSLPnwULj5uNH+9AMSLPnwULr5uNH+9AMSLPnwULr5uNH+9AMSLPnwULr5axDK+wCpgPnwULj5axDK+wCpgPnwULj5axDK+wCpgPnwULj5axDK+wCpgPnwULr5axDK+wCpgPnwULr5axDK+wCpgPnwULr60KYG+gM74PXwULj60KYG+gM74PXwULj60KYG+gM74PXwULj60KYG+gM74PXwULr60KYG+gM74PXwULr60KYG+gM74PXwULr4pXI++AAAAAHwULj4pXI++AAAAAHwULj4pXI++AAAAAHwULj4pXI++AAAAAHwULr4pXI++AAAAAHwULr4pXI++AAAAAHwULr60KYG+gM74vXwULj60KYG+gM74vXwULj60KYG+gM74vXwULj60KYG+gM74vXwULr60KYG+gM74vXwULr60KYG+gM74vXwULr5axDK+wCpgvnwULj5axDK+wCpgvnwULj5axDK+wCpgvnwULj5axDK+wCpgvnwULr5axDK+wCpgvnwULr5axDK+wCpgvnwULr5uNH+9AMSLvnwULj5uNH+9AMSLvnwULj5uNH+9AMSLvnwULj5uNH+9AMSLvnwULr5uNH+9AMSLvnwULr5uNH+9AMSLvnwULr5uNH89AMSLvnwULj5uNH89AMSLvnwULj5uNH89AMSLvnwULj5uNH89AMSLvnwULr5uNH89AMSLvnwULr5uNH89AMSLvnwULr5axDI+wCpgvnwULj5axDI+wCpgvnwULj5axDI+wCpgvnwULj5axDI+wCpgvnwULr5axDI+wCpgvnwULr5axDI+wCpgvnwULr60KYE+gM74vXwULj60KYE+gM74vXwULj60KYE+gM74vXwULj60KYE+gM74vXwULr60KYE+gM74vXwULr60KYE+gM74vXwULr4AAAAAAAAAAHwULj4AAAAAAAAAAHwULr6amZk+gBQuviBcjzyamZk+gBQuviBcjzyamZk+gBQuviBcjzyamZk+gBQuviBcj7yamZk+gBQuviBcj7yamZk+gBQuviBcj7yamZk+gBQuPiBcjzyamZk+gBQuPiBcjzyamZk+gBQuPiBcjzyamZk+gBQuPiBcj7yamZk+gBQuPiBcj7yamZk+gBQuPiBcj7zNzCxAgBQuviBcjzzNzCxAgBQuviBcjzzNzCxAgBQuviBcjzzNzCxAgBQuviBcj7zNzCxAgBQuviBcj7zNzCxAgBQuviBcj7zNzCxAgBQuPiBcjzzNzCxAgBQuPiBcjzzNzCxAgBQuPiBcjzzNzCxAgBQuPiBcj7zNzCxAgBQuPiBcj7zNzCxAgBQuPiBcj7wxG64+AA1qvSBcjzwxG64+AA1qvSBcjzwxG64+AA1qvSBcjzwxG64+AA1qvSBcj7wxG64+AA1qvSBcj7wxG64+AA1qvSBcj7x8ImU+QFOGPiBcjzx8ImU+QFOGPiBcjzx8ImU+QFOGPiBcjzx8ImU+QFOGPiBcj7x8ImU+QFOGPiBcj7x8ImU+QFOGPiBcj7yeGSZAQIJDPyBcjzyeGSZAQIJDPyBcjzyeGSZAQIJDPyBcjzyeGSZAQIJDPyBcj7yeGSZAQIJDPyBcj7yeGSZAQIJDPyBcj7xfqB5AYKaKPyBcjzxfqB5AYKaKPyBcjzxfqB5AYKaKPyBcjzxfqB5AYKaKPyBcj7xfqB5AYKaKPyBcj7xfqB5AYKaKPyBcj7zXnK0+ADmAPSBcjzzXnK0+ADmAPSBcjzzXnK0+ADmAPSBcjzzXnK0+ADmAPSBcj7zXnK0+ADmAPSBcj7zXnK0+ADmAPSBcj7xi3fY9oGilPiBcjzxi3fY9oGilPiBcjzxi3fY9oGilPiBcjzxi3fY9oGilPiBcj7xi3fY9oGilPiBcj7xi3fY9oGilPiBcj7yzXQtAcHrNPyBcjzyzXQtAcHrNPyBcjzyzXQtAcHrNPyBcjzyzXQtAcHrNPyBcj7yzXQtAcHrNPyBcj7yzXQtAcHrNPyBcj7wGwvo/CNHuPyBcjzwGwvo/CNHuPyBcjzwGwvo/CNHuPyBcjzwGwvo/CNHuPyBcj7wGwvo/CNHuPyBcj7wGwvo/CNHuPyBcj7zJLZg+wAAzPiBcjzzJLZg+wAAzPiBcjzzJLZg+wAAzPiBcjzzJLZg+wAAzPiBcj7zJLZg+wAAzPiBcj7zJLZg+wAAzPiBcj7w16DU7oIqwPiBcjzw16DU7oIqwPiBcjzw16DU7oIqwPiBcjzw16DU7oIqwPiBcj7w16DU7oIqwPiBcj7w16DU7oIqwPiBcj7wMpb8/jDUQQCBcjzwMpb8/jDUQQCBcjzwMpb8/jDUQQCBcjzwMpb8/jDUQQCBcj7wMpb8/jDUQQCBcj7wMpb8/jDUQQCBcj7yO9Jk/1BYbQCBcjzyO9Jk/1BYbQCBcjzyO9Jk/1BYbQCBcjzyO9Jk/1BYbQCBcj7yO9Jk/1BYbQCBcj7yO9Jk/1BYbQCBcj7yyx2A+ACeIPiBcjzyyx2A+ACeIPiBcjzyyx2A+ACeIPiBcjzyyx2A+ACeIPiBcj7yyx2A+ACeIPiBcj7yyx2A+ACeIPiBcj7xlLuy9gGGmPiBcjzxlLuy9gGGmPiBcjzxlLuy9gGGmPiBcjzxlLuy9gGGmPiBcj7xlLuy9gGGmPiBcj7xlLuy9gGGmPiBcj7xs4iI/FEkoQCBcjzxs4iI/FEkoQCBcjzxs4iI/FEkoQCBcjzxs4iI/FEkoQCBcj7xs4iI/FEkoQCBcj7xs4iI/FEkoQCBcj7xlVZo+aBAsQCBcjzxlVZo+aBAsQCBcjzxlVZo+aBAsQCBcjzxlVZo+aBAsQCBcj7xlVZo+aBAsQCBcj7xlVZo+aBAsQCBcj7xlLuw9gGGmPiBcjzxlLuw9gGGmPiBcjzxlLuw9gGGmPiBcjzxlLuw9gGGmPiBcj7xlLuw9gGGmPiBcj7xlLuw9gGGmPiBcj7yyx2C+ACeIPiBcjzyyx2C+ACeIPiBcjzyyx2C+ACeIPiBcjzyyx2C+ACeIPiBcj7yyx2C+ACeIPiBcj7yyx2C+ACeIPiBcj7xlVZq+aBAsQCBcjzxlVZq+aBAsQCBcjzxlVZq+aBAsQCBcjzxlVZq+aBAsQCBcj7xlVZq+aBAsQCBcj7xlVZq+aBAsQCBcj7xs4iK/FEkoQCBcjzxs4iK/FEkoQCBcjzxs4iK/FEkoQCBcjzxs4iK/FEkoQCBcj7xs4iK/FEkoQCBcj7xs4iK/FEkoQCBcj7w16DW7oIqwPiBcjzw16DW7oIqwPiBcjzw16DW7oIqwPiBcjzw16DW7oIqwPiBcj7w16DW7oIqwPiBcj7w16DW7oIqwPiBcj7zJLZi+wAAzPiBcjzzJLZi+wAAzPiBcjzzJLZi+wAAzPiBcjzzJLZi+wAAzPiBcj7zJLZi+wAAzPiBcj7zJLZi+wAAzPiBcj7yO9Jm/1BYbQCBcjzyO9Jm/1BYbQCBcjzyO9Jm/1BYbQCBcjzyO9Jm/1BYbQCBcj7yO9Jm/1BYbQCBcj7yO9Jm/1BYbQCBcj7wMpb+/jDUQQCBcjzwMpb+/jDUQQCBcjzwMpb+/jDUQQCBcjzwMpb+/jDUQQCBcj7wMpb+/jDUQQCBcj7wMpb+/jDUQQCBcj7xi3fa9oGilPiBcjzxi3fa9oGilPiBcjzxi3fa9oGilPiBcjzxi3fa9oGilPiBcj7xi3fa9oGilPiBcj7xi3fa9oGilPiBcj7zXnK2+ADmAPSBcjzzXnK2+ADmAPSBcjzzXnK2+ADmAPSBcjzzXnK2+ADmAPSBcj7zXnK2+ADmAPSBcj7zXnK2+ADmAPSBcj7wGwvq/CNHuPyBcjzwGwvq/CNHuPyBcjzwGwvq/CNHuPyBcjzwGwvq/CNHuPyBcj7wGwvq/CNHuPyBcj7wGwvq/CNHuPyBcj7yzXQvAcHrNPyBcjzyzXQvAcHrNPyBcjzyzXQvAcHrNPyBcjzyzXQvAcHrNPyBcj7yzXQvAcHrNPyBcj7yzXQvAcHrNPyBcj7x8ImW+QFOGPiBcjzx8ImW+QFOGPiBcjzx8ImW+QFOGPiBcjzx8ImW+QFOGPiBcj7x8ImW+QFOGPiBcj7x8ImW+QFOGPiBcj7wxG66+AA1qvSBcjzwxG66+AA1qvSBcjzwxG66+AA1qvSBcjzwxG66+AA1qvSBcj7wxG66+AA1qvSBcj7wxG66+AA1qvSBcj7xfqB7AYKaKPyBcjzxfqB7AYKaKPyBcjzxfqB7AYKaKPyBcjzxfqB7AYKaKPyBcj7xfqB7AYKaKPyBcj7xfqB7AYKaKPyBcj7yeGSbAQIJDPyBcjzyeGSbAQIJDPyBcjzyeGSbAQIJDPyBcjzyeGSbAQIJDPyBcj7yeGSbAQIJDPyBcj7yeGSbAQIJDPyBcj7yamZm+gBQuPiBcjzyamZm+gBQuPiBcjzyamZm+gBQuPiBcjzyamZm+gBQuPiBcj7yamZm+gBQuPiBcj7yamZm+gBQuPiBcj7yamZm+gBQuviBcjzyamZm+gBQuviBcjzyamZm+gBQuviBcjzyamZm+gBQuviBcj7yamZm+gBQuviBcj7yamZm+gBQuviBcj7zNzCzAgBQuPiBcjzzNzCzAgBQuPiBcjzzNzCzAgBQuPiBcjzzNzCzAgBQuPiBcj7zNzCzAgBQuPiBcj7zNzCzAgBQuPiBcj7zNzCzAgBQuviBcjzzNzCzAgBQuviBcjzzNzCzAgBQuviBcjzzNzCzAgBQuviBcj7zNzCzAgBQuviBcj7zNzCzAgBQuviBcj7wxG66+AA1qPSBcjzwxG66+AA1qPSBcjzwxG66+AA1qPSBcjzwxG66+AA1qPSBcj7wxG66+AA1qPSBcj7wxG66+AA1qPSBcj7x8ImW+QFOGviBcjzx8ImW+QFOGviBcjzx8ImW+QFOGviBcjzx8ImW+QFOGviBcj7x8ImW+QFOGviBcj7x8ImW+QFOGviBcj7yeGSbAQIJDvyBcjzyeGSbAQIJDvyBcjzyeGSbAQIJDvyBcjzyeGSbAQIJDvyBcj7yeGSbAQIJDvyBcj7yeGSbAQIJDvyBcj7xfqB7AYKaKvyBcjzxfqB7AYKaKvyBcjzxfqB7AYKaKvyBcjzxfqB7AYKaKvyBcj7xfqB7AYKaKvyBcj7xfqB7AYKaKvyBcj7zXnK2+ADmAvSBcjzzXnK2+ADmAvSBcjzzXnK2+ADmAvSBcjzzXnK2+ADmAvSBcj7zXnK2+ADmAvSBcj7zXnK2+ADmAvSBcj7xi3fa9oGilviBcjzxi3fa9oGilviBcjzxi3fa9oGilviBcjzxi3fa9oGilviBcj7xi3fa9oGilviBcj7xi3fa9oGilviBcj7yzXQvAcHrNvyBcjzyzXQvAcHrNvyBcjzyzXQvAcHrNvyBcjzyzXQvAcHrNvyBcj7yzXQvAcHrNvyBcj7yzXQvAcHrNvyBcj7wGwvq/CNHuvyBcjzwGwvq/CNHuvyBcjzwGwvq/CNHuvyBcjzwGwvq/CNHuvyBcj7wGwvq/CNHuvyBcj7wGwvq/CNHuvyBcj7zJLZi+wAAzviBcjzzJLZi+wAAzviBcjzzJLZi+wAAzviBcjzzJLZi+wAAzviBcj7zJLZi+wAAzviBcj7zJLZi+wAAzviBcj7w16DW7oIqwviBcjzw16DW7oIqwviBcjzw16DW7oIqwviBcjzw16DW7oIqwviBcj7w16DW7oIqwviBcj7w16DW7oIqwviBcj7wMpb+/jjUQwCBcjzwMpb+/jjUQwCBcjzwMpb+/jjUQwCBcjzwMpb+/jjUQwCBcj7wMpb+/jjUQwCBcj7wMpb+/jjUQwCBcj7yO9Jm/1hYbwCBcjzyO9Jm/1hYbwCBcjzyO9Jm/1hYbwCBcjzyO9Jm/1hYbwCBcj7yO9Jm/1hYbwCBcj7yO9Jm/1hYbwCBcj7yyx2C+ACeIviBcjzyyx2C+ACeIviBcjzyyx2C+ACeIviBcjzyyx2C+ACeIviBcj7yyx2C+ACeIviBcj7yyx2C+ACeIviBcj7xlLuw9gGGmviBcjzxlLuw9gGGmviBcjzxlLuw9gGGmviBcjzxlLuw9gGGmviBcj7xlLuw9gGGmviBcj7xlLuw9gGGmviBcj7xs4iK/FkkowCBcjzxs4iK/FkkowCBcjzxs4iK/FkkowCBcjzxs4iK/FkkowCBcj7xs4iK/FkkowCBcj7xs4iK/FkkowCBcj7xlVZq+aBAswCBcjzxlVZq+aBAswCBcjzxlVZq+aBAswCBcjzxlVZq+aBAswCBcj7xlVZq+aBAswCBcj7xlVZq+aBAswCBcj7xlLuy9gGGmviBcjzxlLuy9gGGmviBcjzxlLuy9gGGmviBcjzxlLuy9gGGmviBcj7xlLuy9gGGmviBcj7xlLuy9gGGmviBcj7yyx2A+ACeIviBcjzyyx2A+ACeIviBcjzyyx2A+ACeIviBcjzyyx2A+ACeIviBcj7yyx2A+ACeIviBcj7yyx2A+ACeIviBcj7xlVZo+aBAswCBcjzxlVZo+aBAswCBcjzxlVZo+aBAswCBcjzxlVZo+aBAswCBcj7xlVZo+aBAswCBcj7xlVZo+aBAswCBcj7xs4iI/FkkowCBcjzxs4iI/FkkowCBcjzxs4iI/FkkowCBcjzxs4iI/FkkowCBcj7xs4iI/FkkowCBcj7xs4iI/FkkowCBcj7w16DU7oIqwviBcjzw16DU7oIqwviBcjzw16DU7oIqwviBcjzw16DU7oIqwviBcj7w16DU7oIqwviBcj7w16DU7oIqwviBcj7zJLZg+wAAzviBcjzzJLZg+wAAzviBcjzzJLZg+wAAzviBcjzzJLZg+wAAzviBcj7zJLZg+wAAzviBcj7zJLZg+wAAzviBcj7yO9Jk/1hYbwCBcjzyO9Jk/1hYbwCBcjzyO9Jk/1hYbwCBcjzyO9Jk/1hYbwCBcj7yO9Jk/1hYbwCBcj7yO9Jk/1hYbwCBcj7wMpb8/jjUQwCBcjzwMpb8/jjUQwCBcjzwMpb8/jjUQwCBcjzwMpb8/jjUQwCBcj7wMpb8/jjUQwCBcj7wMpb8/jjUQwCBcj7xi3fY9oGilviBcjzxi3fY9oGilviBcjzxi3fY9oGilviBcjzxi3fY9oGilviBcj7xi3fY9oGilviBcj7xi3fY9oGilviBcj7zXnK0+ADmAvSBcjzzXnK0+ADmAvSBcjzzXnK0+ADmAvSBcjzzXnK0+ADmAvSBcj7zXnK0+ADmAvSBcj7zXnK0+ADmAvSBcj7wGwvo/CNHuvyBcjzwGwvo/CNHuvyBcjzwGwvo/CNHuvyBcjzwGwvo/CNHuvyBcj7wGwvo/CNHuvyBcj7wGwvo/CNHuvyBcj7yzXQtAcHrNvyBcjzyzXQtAcHrNvyBcjzyzXQtAcHrNvyBcjzyzXQtAcHrNvyBcj7yzXQtAcHrNvyBcj7yzXQtAcHrNvyBcj7x8ImU+QFOGviBcjzx8ImU+QFOGviBcjzx8ImU+QFOGviBcjzx8ImU+QFOGviBcj7x8ImU+QFOGviBcj7x8ImU+QFOGviBcj7wxG64+AA1qPSBcjzwxG64+AA1qPSBcjzwxG64+AA1qPSBcjzwxG64+AA1qPSBcj7wxG64+AA1qPSBcj7wxG64+AA1qPSBcj7xfqB5AYKaKvyBcjzxfqB5AYKaKvyBcjzxfqB5AYKaKvyBcjzxfqB5AYKaKvyBcj7xfqB5AYKaKvyBcj7xfqB5AYKaKvyBcj7yeGSZAQIJDvyBcjzyeGSZAQIJDvyBcjzyeGSZAQIJDvyBcjzyeGSZAQIJDvyBcj7yeGSZAQIJDvyBcj7yeGSZAQIJDvyBcj7zbz8o/ACjHO4DC9Tzbz8o/ACjHO4DC9Tzbz8o/ACjHO4DC9Tzbz8o/ACjHO4DC9bzbz8o/ACjHO4DC9bzbz8o/ACjHO4DC9bzy/ME/ACjHu4DC9Tzy/ME/ACjHu4DC9Tzy/ME/ACjHu4DC9Tzy/ME/ACjHu4DC9bzy/ME/ACjHu4DC9bzy/ME/ACjHu4DC9bzS2L4/AEUJP4DC9TzS2L4/AEUJP4DC9TzS2L4/AEUJP4DC9TzS2L4/AEUJP4DC9bzS2L4/AEUJP4DC9bzS2L4/AEUJP4DC9bzoBbY/YCgGP4DC9TzoBbY/YCgGP4DC9TzoBbY/YCgGP4DC9TzoBbY/YCgGP4DC9bzoBbY/YCgGP4DC9bzoBbY/YCgGP4DC9byXUL4/kDEMP4DC9TyXUL4/kDEMP4DC9TyXUL4/kDEMP4DC9TyXUL4/kDEMP4DC9byXUL4/kDEMP4DC9byXUL4/kDEMP4DC9bwjjrY/0DsDP4DC9TwjjrY/0DsDP4DC9TwjjrY/0DsDP4DC9TwjjrY/0DsDP4DC9bwjjrY/0DsDP4DC9bwjjrY/0DsDP4DC9bzu3Js/4MSBP4DC9Tzu3Js/4MSBP4DC9Tzu3Js/4MSBP4DC9Tzu3Js/4MSBP4DC9bzu3Js/4MSBP4DC9bzu3Js/4MSBP4DC9bx6GpQ/AJR6P4DC9Tx6GpQ/AJR6P4DC9Tx6GpQ/AJR6P4DC9Tx6GpQ/AJR6P4DC9bx6GpQ/AJR6P4DC9bx6GpQ/AJR6P4DC9bzn3Jo/APaCP4DC9Tzn3Jo/APaCP4DC9Tzn3Jo/APaCP4DC9Tzn3Jo/APaCP4DC9bzn3Jo/APaCP4DC9bzn3Jo/APaCP4DC9byBGpU/wDF4P4DC9TyBGpU/wDF4P4DC9TyBGpU/wDF4P4DC9TyBGpU/wDF4P4DC9byBGpU/wDF4P4DC9byBGpU/wDF4P4DC9bzNKEw/WECvP4DC9TzNKEw/WECvP4DC9TzNKEw/WECvP4DC9TzNKEw/WECvP4DC9bzNKEw/WECvP4DC9bzNKEw/WECvP4DC9bwApEA/OGOoP4DC9TwApEA/OGOoP4DC9TwApEA/OGOoP4DC9TwApEA/OGOoP4DC9bwApEA/OGOoP4DC9bwApEA/OGOoP4DC9bzqdkk/gAewP4DC9Tzqdkk/gAewP4DC9Tzqdkk/gAewP4DC9Tzqdkk/gAewP4DC9bzqdkk/gAewP4DC9bzqdkk/gAewP4DC9bzjVUM/EJynP4DC9TzjVUM/EJynP4DC9TzjVUM/EJynP4DC9TzjVUM/EJynP4DC9bzjVUM/EJynP4DC9bzjVUM/EJynP4DC9byq748+gJjHP4DC9Tyq748+gJjHP4DC9Tyq748+gJjHP4DC9Tyq748+gJjHP4DC9byq748+gJjHP4DC9byq748+gJjHP4DC9byerYM+EC2/P4DC9TyerYM+EC2/P4DC9TyerYM+EC2/P4DC9TyerYM+EC2/P4DC9byerYM+EC2/P4DC9byerYM+EC2/P4DC9bykzok+qN3HP4DC9Tykzok+qN3HP4DC9Tykzok+qN3HP4DC9Tykzok+qN3HP4DC9bykzok+qN3HP4DC9bykzok+qN3HP4DC9bykzok+6Oe+P4DC9Tykzok+6Oe+P4DC9Tykzok+6Oe+P4DC9Tykzok+6Oe+P4DC9bykzok+6Oe+P4DC9bykzok+6Oe+P4DC9bykzom+qN3HP4DC9Tykzom+qN3HP4DC9Tykzom+qN3HP4DC9Tykzom+qN3HP4DC9bykzom+qN3HP4DC9bykzom+qN3HP4DC9bykzom+6Oe+P4DC9Tykzom+6Oe+P4DC9Tykzom+6Oe+P4DC9Tykzom+6Oe+P4DC9bykzom+6Oe+P4DC9bykzom+6Oe+P4DC9byq74++gJjHP4DC9Tyq74++gJjHP4DC9Tyq74++gJjHP4DC9Tyq74++gJjHP4DC9byq74++gJjHP4DC9byq74++gJjHP4DC9byerYO+EC2/P4DC9TyerYO+EC2/P4DC9TyerYO+EC2/P4DC9TyerYO+EC2/P4DC9byerYO+EC2/P4DC9byerYO+EC2/P4DC9bzqdkm/gAewP4DC9Tzqdkm/gAewP4DC9Tzqdkm/gAewP4DC9Tzqdkm/gAewP4DC9bzqdkm/gAewP4DC9bzqdkm/gAewP4DC9bzjVUO/EJynP4DC9TzjVUO/EJynP4DC9TzjVUO/EJynP4DC9TzjVUO/EJynP4DC9bzjVUO/EJynP4DC9bzjVUO/EJynP4DC9bzNKEy/WECvP4DC9TzNKEy/WECvP4DC9TzNKEy/WECvP4DC9TzNKEy/WECvP4DC9bzNKEy/WECvP4DC9bzNKEy/WECvP4DC9bwApEC/OGOoP4DC9TwApEC/OGOoP4DC9TwApEC/OGOoP4DC9TwApEC/OGOoP4DC9bwApEC/OGOoP4DC9bwApEC/OGOoP4DC9bzn3Jq/APaCP4DC9Tzn3Jq/APaCP4DC9Tzn3Jq/APaCP4DC9Tzn3Jq/APaCP4DC9bzn3Jq/APaCP4DC9bzn3Jq/APaCP4DC9byBGpW/wDF4P4DC9TyBGpW/wDF4P4DC9TyBGpW/wDF4P4DC9TyBGpW/wDF4P4DC9byBGpW/wDF4P4DC9byBGpW/wDF4P4DC9bzu3Ju/4MSBP4DC9Tzu3Ju/4MSBP4DC9Tzu3Ju/4MSBP4DC9Tzu3Ju/4MSBP4DC9bzu3Ju/4MSBP4DC9bzu3Ju/4MSBP4DC9bx6GpS/AJR6P4DC9Tx6GpS/AJR6P4DC9Tx6GpS/AJR6P4DC9Tx6GpS/AJR6P4DC9bx6GpS/AJR6P4DC9bx6GpS/AJR6P4DC9byXUL6/kDEMP4DC9TyXUL6/kDEMP4DC9TyXUL6/kDEMP4DC9TyXUL6/kDEMP4DC9byXUL6/kDEMP4DC9byXUL6/kDEMP4DC9bwjjra/0DsDP4DC9Twjjra/0DsDP4DC9Twjjra/0DsDP4DC9Twjjra/0DsDP4DC9bwjjra/0DsDP4DC9bwjjra/0DsDP4DC9bzS2L6/AEUJP4DC9TzS2L6/AEUJP4DC9TzS2L6/AEUJP4DC9TzS2L6/AEUJP4DC9bzS2L6/AEUJP4DC9bzS2L6/AEUJP4DC9bzoBba/YCgGP4DC9TzoBba/YCgGP4DC9TzoBba/YCgGP4DC9TzoBba/YCgGP4DC9bzoBba/YCgGP4DC9bzoBba/YCgGP4DC9bzbz8q/ACjHO4DC9Tzbz8q/ACjHO4DC9Tzbz8q/ACjHO4DC9Tzbz8q/ACjHO4DC9bzbz8q/ACjHO4DC9bzbz8q/ACjHO4DC9bzy/MG/ACjHu4DC9Tzy/MG/ACjHu4DC9Tzy/MG/ACjHu4DC9Tzy/MG/ACjHu4DC9bzy/MG/ACjHu4DC9bzy/MG/ACjHu4DC9bzbz8q/ACjHu4DC9Tzbz8q/ACjHu4DC9Tzbz8q/ACjHu4DC9Tzbz8q/ACjHu4DC9bzbz8q/ACjHu4DC9bzbz8q/ACjHu4DC9bzy/MG/ACjHO4DC9Tzy/MG/ACjHO4DC9Tzy/MG/ACjHO4DC9Tzy/MG/ACjHO4DC9bzy/MG/ACjHO4DC9bzy/MG/ACjHO4DC9bzS2L6/AEUJv4DC9TzS2L6/AEUJv4DC9TzS2L6/AEUJv4DC9TzS2L6/AEUJv4DC9bzS2L6/AEUJv4DC9bzS2L6/AEUJv4DC9bzoBba/YCgGv4DC9TzoBba/YCgGv4DC9TzoBba/YCgGv4DC9TzoBba/YCgGv4DC9bzoBba/YCgGv4DC9bzoBba/YCgGv4DC9byXUL6/kDEMv4DC9TyXUL6/kDEMv4DC9TyXUL6/kDEMv4DC9TyXUL6/kDEMv4DC9byXUL6/kDEMv4DC9byXUL6/kDEMv4DC9bwjjra/0DsDv4DC9Twjjra/0DsDv4DC9Twjjra/0DsDv4DC9Twjjra/0DsDv4DC9bwjjra/0DsDv4DC9bwjjra/0DsDv4DC9bzu3Ju/4MSBv4DC9Tzu3Ju/4MSBv4DC9Tzu3Ju/4MSBv4DC9Tzu3Ju/4MSBv4DC9bzu3Ju/4MSBv4DC9bzu3Ju/4MSBv4DC9bx6GpS/AJR6v4DC9Tx6GpS/AJR6v4DC9Tx6GpS/AJR6v4DC9Tx6GpS/AJR6v4DC9bx6GpS/AJR6v4DC9bx6GpS/AJR6v4DC9bzn3Jq/APaCv4DC9Tzn3Jq/APaCv4DC9Tzn3Jq/APaCv4DC9Tzn3Jq/APaCv4DC9bzn3Jq/APaCv4DC9bzn3Jq/APaCv4DC9byBGpW/wDF4v4DC9TyBGpW/wDF4v4DC9TyBGpW/wDF4v4DC9TyBGpW/wDF4v4DC9byBGpW/wDF4v4DC9byBGpW/wDF4v4DC9bzNKEy/WECvv4DC9TzNKEy/WECvv4DC9TzNKEy/WECvv4DC9TzNKEy/WECvv4DC9bzNKEy/WECvv4DC9bzNKEy/WECvv4DC9bwApEC/OGOov4DC9TwApEC/OGOov4DC9TwApEC/OGOov4DC9TwApEC/OGOov4DC9bwApEC/OGOov4DC9bwApEC/OGOov4DC9bzqdkm/gAewv4DC9Tzqdkm/gAewv4DC9Tzqdkm/gAewv4DC9Tzqdkm/gAewv4DC9bzqdkm/gAewv4DC9bzqdkm/gAewv4DC9bzjVUO/EJynv4DC9TzjVUO/EJynv4DC9TzjVUO/EJynv4DC9TzjVUO/EJynv4DC9bzjVUO/EJynv4DC9bzjVUO/EJynv4DC9byq74++gJjHv4DC9Tyq74++gJjHv4DC9Tyq74++gJjHv4DC9Tyq74++gJjHv4DC9byq74++gJjHv4DC9byq74++gJjHv4DC9byerYO+EC2/v4DC9TyerYO+EC2/v4DC9TyerYO+EC2/v4DC9TyerYO+EC2/v4DC9byerYO+EC2/v4DC9byerYO+EC2/v4DC9bykzom+qN3Hv4DC9Tykzom+qN3Hv4DC9Tykzom+qN3Hv4DC9Tykzom+qN3Hv4DC9bykzom+qN3Hv4DC9bykzom+qN3Hv4DC9bykzom+6Oe+v4DC9Tykzom+6Oe+v4DC9Tykzom+6Oe+v4DC9Tykzom+6Oe+v4DC9bykzom+6Oe+v4DC9bykzom+6Oe+v4DC9bykzok+qN3Hv4DC9Tykzok+qN3Hv4DC9Tykzok+qN3Hv4DC9Tykzok+qN3Hv4DC9bykzok+qN3Hv4DC9bykzok+qN3Hv4DC9bykzok+6Oe+v4DC9Tykzok+6Oe+v4DC9Tykzok+6Oe+v4DC9Tykzok+6Oe+v4DC9bykzok+6Oe+v4DC9bykzok+6Oe+v4DC9byq748+gJjHv4DC9Tyq748+gJjHv4DC9Tyq748+gJjHv4DC9Tyq748+gJjHv4DC9byq748+gJjHv4DC9byq748+gJjHv4DC9byerYM+EC2/v4DC9TyerYM+EC2/v4DC9TyerYM+EC2/v4DC9TyerYM+EC2/v4DC9byerYM+EC2/v4DC9byerYM+EC2/v4DC9bzqdkk/gAewv4DC9Tzqdkk/gAewv4DC9Tzqdkk/gAewv4DC9Tzqdkk/gAewv4DC9bzqdkk/gAewv4DC9bzqdkk/gAewv4DC9bzjVUM/EJynv4DC9TzjVUM/EJynv4DC9TzjVUM/EJynv4DC9TzjVUM/EJynv4DC9bzjVUM/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AACAPwAAAAAmJt4+3qVmPwAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAmJt4+3qVmPwAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAmJt6+3qVmPwAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAmJt6+3qVmPwAAAAAAAAAAAAAAAAAAgD8mJt6+3qVmPwAAAAD7JEi/cZ4fPwAAAAAAAAAAAAAAAAAAgL8mJt6+3qVmPwAAAAD7JEi/cZ4fPwAAAAAAAAAAAAAAAAAAgD/7JEi/cZ4fPwAAAAAWlXm/5thjPgAAAAAAAAAAAAAAAAAAgL/7JEi/cZ4fPwAAAAAWlXm/5thjPgAAAAAAAAAAAAAAAAAAgD8WlXm/5thjPgAAAAAWlXm/5thjvgAAAAAAAAAAAAAAAAAAgL8WlXm/5thjPgAAAAAWlXm/5thjvgAAAAAAAAAAAAAAAAAAgD/7JEi/cZ4fvwAAAAAWlXm/5thjvgAAAAAAAAAAAAAAAAAAgL/7JEi/cZ4fvwAAAAAWlXm/5thjvgAAAAAAAAAAAAAAAAAAgD8mJt6+3qVmvwAAAAD7JEi/cZ4fvwAAAAAAAAAAAAAAAAAAgL8mJt6+3qVmvwAAAAD7JEi/cZ4fvwAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAmJt6+3qVmvwAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAmJt6+3qVmvwAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAmJt4+3qVmvwAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAmJt4+3qVmvwAAAAAAAAAAAAAAAAAAgD8mJt4+3qVmvwAAAAD7JEg/cZ4fvwAAAAAAAAAAAAAAAAAAgL8mJt4+3qVmvwAAAAD7JEg/cZ4fvwAAAAAAAAAAAAAAAAAAgD/7JEg/cZ4fvwAAAAAWlXk/5thjvgAAAAAAAAAAAAAAAAAAgL/7JEg/cZ4fvwAAAAAWlXk/5thjvgAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAgL8AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgD9b3jG+xBt8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL9b3jG+xBt8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxvgAAAABb3jG+xBt8vwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxvgAAAABb3jG+xBt8vwAAAAAAAAAAAAAAAAAAgD9b3jG+xBt8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL9b3jG+xBt8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAABb3jG+xBt8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAABb3jG+xBt8PwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxvgAAAADuxDG+4xx8vwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD9b3jE+xBt8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL9b3jE+xBt8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAADuxDG+4xx8PwAAAAAAAAAAAAAAAAAAgD/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDG+4xx8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvPgAAAACgGq++LpBwPwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHA/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwPwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kPwAAAACkjyS/4xlEPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUQ/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEPwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEvwAAAADjGUS/pI8kvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdPwAAAABts10/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdvwAAAABts12/uQAAPwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAvwAAAAC5AAC/bbNdvwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8PwAAAADjHHw/7sQxvgAAAAAAAAAAAAAAAAAAgD9b3jG+xBt8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgL9b3jG+xBt8vwAAAADjHHy/7sQxPgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxvgAAAABb3jG+xBt8vwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxvgAAAABb3jG+xBt8vwAAAAAAAAAAAAAAAAAAgD9b3jG+xBt8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL9b3jG+xBt8PwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/jHHw/7sQxPgAAAABb3jG+xBt8PwAAAAAAAAAAAAAAAAAAgL/jHHw/7sQxPgAAAABb3jG+xBt8PwAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHy/7sQxvgAAAAAAAAAAAAAAAAAAgD/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgL/uxDE+4xx8vwAAAADjHHw/7sQxPgAAAAAAAAAAAAAAAAAAgD+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAC/bbNdPwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgL9ts10/uQAAPwAAAAC5AAC/bbNdPwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts12/uQAAvwAAAAAAAAAAAAAAAAAAgD+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgL+5AAA/bbNdvwAAAABts10/uQAAPwAAAAAAAAAAAAAAAAAAgD+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyS/4xlEvwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUS/pI8kPwAAAAAAAAAAAAAAAAAAgD/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgL/jGUQ/pI8kvwAAAACkjyS/4xlEvwAAAAAAAAAAAAAAAAAAgD+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgL+kjyQ/4xlEPwAAAADjGUQ/pI8kvwAAAAAAAAAAAAAAAAAAgD+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq++LpBwvwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHC/oBqvPgAAAAAAAAAAAAAAAAAAgD8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgL8ukHA/oBqvvgAAAACgGq++LpBwvwAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwPwAAAAAukHA/oBqvvgAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgL+gGq8+LpBwvwAAAAAukHC/oBqvvgAAAAAAAAAAAAAAAAAAgD+gGq++LpBwPwAAAAAukHC/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4ADOAOAA1ADRANcA4wDRAOMA3QDnAO0A8ADnAPAA6gD0APcA/AD0APwA+QDoAOsA9gDoAPYA8wDuAPoA/QDuAP0A8QDmAPIA+ADmAPgA7ADpAO8A+wDpAPsA9QAAAQUBCAEAAQgBAwEMAQ8BFQEMARUBEgH/AAIBDgH/AA4BCwEGAREBFAEGARQBCQH+AAoBEAH+ABABBAEBAQcBEwEBARMBDQEYAR0BIAEYASABGwEkAScBLQEkAS0BKgEXARoBJgEXASYBIwEeASkBLAEeASwBIQEWASIBKAEWASgBHAEZAR8BKwEZASsBJQEwATYBOQEwATkBMwE8AT8BRQE8AUUBQgEvATIBPgEvAT4BOwE1AUEBRAE1AUQBOAEuAToBQAEuAUABNAExATcBQwExAUMBPQFHAU4BUQFHAVEBSgFUAVcBXQFUAV0BWgFIAUsBVgFIAVYBUwFNAVkBXAFNAVwBUAFGAVIBWAFGAVgBTAFJAU8BWwFJAVsBVQFfAWYBaQFfAWkBYgFsAW8BdQFsAXUBcgFgAWMBbgFgAW4BawFlAXEBdAFlAXQBaAFeAWoBcAFeAXABZAFhAWcBcwFhAXMBbQF3AX0BgAF3AYABegGDAYYBjQGDAY0BigF4AXsBhwF4AYcBhAF+AYkBjAF+AYwBgQF2AYIBiAF2AYgBfAF5AX8BiwF5AYsBhQGPAZUBmAGPAZgBkgGbAZ4BpQGbAaUBogGQAZMBnwGQAZ8BnAGWAaEBpAGWAaQBmQGOAZoBoAGOAaABlAGRAZcBowGRAaMBnQGnAa4BsQGnAbEBqgGzAbYBvAGzAbwBuQGoAasBtwGoAbcBtAGtAboBvQGtAb0BsAGmAbIBuAGmAbgBrAGpAa8BuwGpAbsBtQG/AcYByQG/AckBwgHLAc4B1AHLAdQB0QHAAcMBzwHAAc8BzAHFAdIB1QHFAdUByAG+AcoB0AG+AdABxAHBAccB0wHBAdMBzQHYAd4B4QHYAeEB2wHjAeYB7QHjAe0B6gHXAdoB5wHXAecB5AHdAekB7AHdAewB4AHWAeIB6AHWAegB3AHZAd8B6wHZAesB5QHwAfYB+QHwAfkB8wH7Af4BBQL7AQUCAgLvAfIB/wHvAf8B/AH1AQECBAL1AQQC+AHuAfoBAALuAQAC9AHxAfcBAwLxAQMC/QEHAg0CEAIHAhACCgIUAhcCHAIUAhwCGQIIAgsCFgIIAhYCEwIOAhoCHQIOAh0CEQIGAhICGAIGAhgCDAIJAg8CGwIJAhsCFQIfAiUCKAIfAigCIgIsAi8CNAIsAjQCMQIgAiMCLgIgAi4CKwImAjICNQImAjUCKQIeAioCMAIeAjACJAIhAicCMwIhAjMCLQI4Aj0CQAI4AkACOwJEAkcCTQJEAk0CSgI3AjoCRgI3AkYCQwI+AkkCTAI+AkwCQQI2AkICSAI2AkgCPAI5Aj8CSwI5AksCRQJQAlUCWAJQAlgCUwJcAl8CZQJcAmUCYgJPAlICXgJPAl4CWwJWAmECZAJWAmQCWQJOAloCYAJOAmACVAJRAlcCYwJRAmMCXQJoAm4CcQJoAnECawJ0AncCfQJ0An0CegJnAmoCdgJnAnYCcwJtAnkCfAJtAnwCcAJmAnICeAJmAngCbAJpAm8CewJpAnsCdQJ/AoYCiQJ/AokCggKMAo8ClQKMApUCkgKAAoMCjgKAAo4CiwKFApEClAKFApQCiAJ+AooCkAJ+ApAChAKBAocCkwKBApMCjQKXAp4CoQKXAqECmgKkAqcCrQKkAq0CqgKYApsCpgKYAqYCowKdAqkCrAKdAqwCoAKWAqICqAKWAqgCnAKZAp8CqwKZAqsCpQKvArUCuAKvArgCsgK7Ar4CxQK7AsUCwgKwArMCvwKwAr8CvAK2AsECxAK2AsQCuQKuAroCwAKuAsACtAKxArcCwwKxAsMCvQLHAs0C0ALHAtACygLTAtYC3QLTAt0C2gLIAssC1wLIAtcC1ALOAtkC3ALOAtwC0QLGAtIC2ALGAtgCzALJAs8C2wLJAtsC1QLfAuYC6QLfAukC4gLrAu4C9ALrAvQC8QLgAuMC7wLgAu8C7ALlAvIC9QLlAvUC6ALeAuoC8ALeAvAC5ALhAucC8wLhAvMC7QL3Av4CAQP3AgED+gIDAwYDDAMDAwwDCQP4AvsCBwP4AgcDBAP9AgoDDQP9Ag0DAAP2AgIDCAP2AggD/AL5Av8CCwP5AgsDBQMQAxYDGQMQAxkDEwMbAx4DJQMbAyUDIgMPAxIDHwMPAx8DHAMVAyEDJAMVAyQDGAMOAxoDIAMOAyADFAMRAxcDIwMRAyMDHQMoAy4DMQMoAzEDKwMzAzYDPQMzAz0DOgMnAyoDNwMnAzcDNAMtAzkDPAMtAzwDMAMmAzIDOAMmAzgDLAMpAy8DOwMpAzsDNQNAA0YDSQNAA0kDQwNMA08DVQNMA1UDUgM/A0IDTgM/A04DSwNFA1EDVANFA1QDSAM+A0oDUAM+A1ADRANBA0cDUwNBA1MDTQNYA14DYQNYA2EDWwNkA2cDbANkA2wDaQNXA1oDZgNXA2YDYwNdA2oDbQNdA20DYANWA2IDaANWA2gDXANZA18DawNZA2sDZQNwA3YDeQNwA3kDcwN8A38DhAN8A4QDgQNvA3IDfgNvA34DewN1A4IDhQN1A4UDeANuA3oDgANuA4ADdANxA3cDgwNxA4MDfQOIA40DkAOIA5ADiwOTA5YDnAOTA5wDmQOHA4oDlwOHA5cDlAOOA5oDnQOOA50DkQOGA5IDmAOGA5gDjAOJA48DmwOJA5sDlQOgA6UDqAOgA6gDowOrA64DtAOrA7QDsQOfA6IDrwOfA68DrAOmA7IDtQOmA7UDqQOeA6oDsAOeA7ADpAOhA6cDswOhA7MDrQO3A70DwAO3A8ADugPEA8cDzAPEA8wDyQO4A7sDxgO4A8YDwwO+A8oDzQO+A80DwQO2A8IDyAO2A8gDvAO5A78DywO5A8sDxQPPA9UD2APPA9gD0gPcA98D5APcA+QD4QPQA9MD3gPQA94D2wPWA+ID5QPWA+UD2QPOA9oD4APOA+AD1APRA9cD4wPRA+MD3QPoA+0D8APoA/AD6wP0A/cD/QP0A/0D+gPnA+oD9gPnA/YD8wPuA/kD/APuA/wD8QPmA/ID+APmA/gD7APpA+8D+wPpA/sD9QMABAUECAQABAgEAwQMBA8EFQQMBBUEEgT/AwIEDgT/Aw4ECwQGBBEEFAQGBBQECQT+AwoEEAT+AxAEBAQBBAcEEwQBBBMEDQQYBB4EIQQYBCEEGwQkBCcELQQkBC0EKgQXBBoEJgQXBCYEIwQdBCkELAQdBCwEIAQWBCIEKAQWBCgEHAQZBB8EKwQZBCsEJQQvBDYEOQQvBDkEMgQ8BD8ERQQ8BEUEQgQwBDMEPgQwBD4EOwQ1BEEERAQ1BEQEOAQuBDoEQAQuBEAENAQxBDcEQwQxBEMEPQRHBE4EUQRHBFEESgRUBFcEXQRUBF0EWgRIBEsEVgRIBFYEUwRNBFkEXARNBFwEUARGBFIEWARGBFgETARJBE8EWwRJBFsEVQRfBGUEaARfBGgEYgRrBG4EdQRrBHUEcgRgBGMEbwRgBG8EbARmBHEEdARmBHQEaQReBGoEcAReBHAEZARhBGcEcwRhBHMEbQR3BH0EgAR3BIAEegSDBIYEjQSDBI0EigR4BHsEhwR4BIcEhAR+BIkEjAR+BIwEgQR2BIIEiAR2BIgEfAR5BH8EiwR5BIsEhQSPBJYEmQSPBJkEkgSbBJ4EpASbBKQEoQSQBJMEnwSQBJ8EnASVBKIEpQSVBKUEmASOBJoEoASOBKAElASRBJcEowSRBKMEnQSnBK4EsQSnBLEEqgSzBLYEvASzBLwEuQSoBKsEtwSoBLcEtAStBLoEvQStBL0EsASmBLIEuASmBLgErASpBK8EuwSpBLsEtQTABMYEyQTABMkEwwTLBM4E1QTLBNUE0gS/BMIEzwS/BM8EzATFBNEE1ATFBNQEyAS+BMoE0AS+BNAExATBBMcE0wTBBNMEzQTYBN4E4QTYBOEE2wTjBOYE7QTjBO0E6gTXBNoE5wTXBOcE5ATdBOkE7ATdBOwE4ATWBOIE6ATWBOgE3ATZBN8E6wTZBOsE5QTwBPYE+QTwBPkE8wT8BP8EBQX8BAUFAgXvBPIE/gTvBP4E+wT1BAEFBAX1BAQF+ATuBPoEAAXuBAAF9ATxBPcEAwXxBAMF/QQIBQ4FEQUIBREFCwUUBRcFHAUUBRwFGQUHBQoFFgUHBRYFEwUNBRoFHQUNBR0FEAUGBRIFGAUGBRgFDAUJBQ8FGwUJBRsFFQUgBSYFKQUgBSkFIwUsBS8FNAUsBTQFMQUfBSIFLgUfBS4FKwUlBTIFNQUlBTUFKAUeBSoFMAUeBTAFJAUhBScFMwUhBTMFLQU4BT0FQAU4BUAFOwVDBUYFTAVDBUwFSQU3BToFRwU3BUcFRAU+BUoFTQU+BU0FQQU2BUIFSAU2BUgFPAU5BT8FSwU5BUsFRQVQBVUFWAVQBVgFUwVbBV4FZAVbBWQFYQVPBVIFXwVPBV8FXAVWBWIFZQVWBWUFWQVOBVoFYAVOBWAFVAVRBVcFYwVRBWMFXQU=";var Mf=`
void main() {
  gl_Position = vec4(position.xy, 0.9999, 1.0);
}`,Sf=`
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
uniform float uHorizon;
uniform float uStars;

#ifndef STEPS
#define STEPS 240
#endif

// units: Schwarzschild radius rs = 1. Disk spans ISCO (3 rs) to 13 rs. Camera sits 22 rs away.
const float RIN = 3.0;
const float ROUT = 13.0;
const float CAMD = 22.0;
const float TANH = 0.39;     // tan(fov/2): makes the shadow ~0.30 screen units wide

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
  // galactic band: layered cloud noise, dark dust lanes and colour drifting between the palette's tones
  vec3 w = d * 3.0 + vec3(1.7, 4.1, 2.3);
  float neb = vn(w * 1.3 + vn(w * 2.0) * 1.2) * 0.55 + vn(d * 9.0) * 0.3 + vn(d * 22.0) * 0.15;
  float dust = smoothstep(0.52, 0.78, vn(d * 6.5 + 3.0)) * band;
  vec3 tone = mix(uCool * 1.4, uHot, smoothstep(0.3, 0.8, vn(d * 2.2 + 9.0)));
  acc += tone * band * (0.12 + 1.1 * neb * neb) * 0.30 * (1.0 - 0.75 * dust);
  return acc * uStars;
}

// accretion disk emission at a hit point on the equatorial plane
vec4 diskSample(vec3 hit, vec3 rayDir) {
  float rr = length(hit.xz);
  float edge = smoothstep(RIN, RIN + 0.6, rr) * smoothstep(ROUT, ROUT * 0.5, rr);
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
  float beta = sqrt(0.5 / rr);
  float cosA = dot(vdir, -rayDir);
  float g = sqrt(1.0 - beta * beta) / (1.0 - beta * cosA) * sqrt(max(1.0 - 1.0 / rr, 0.03));

  float spot = 1.0 + 0.9 * exp(-pow((abs(fract(phi / 6.2831853 - uTime * 0.02 + 0.5) - 0.5)) / 0.06, 2.0));
  float I = pow(T, 2.2) * turb * pow(g, 3.2) * edge * spot * (1.0 + 0.08 * sin(uTime * 0.7));
  float tt = T * g;
  vec3 col = mix(uCool, uMid, smoothstep(0.1, 0.7, tt));
  col = mix(col, uHot, smoothstep(0.8, 1.9, tt));
  float alpha = clamp(edge * (0.30 + 0.55 * turb), 0.0, 0.92);
  return vec4(col * I * 1.0, alpha);
}

// follow one camera ray through the curved space around the hole
vec3 trace(vec2 q) {
  float inc = 0.115 + 0.03 * sin(uTime * 0.09);
  float yaw = sin(uTime * 0.05) * 0.20;
  vec3 ro = CAMD * vec3(sin(yaw) * cos(inc), sin(inc), -cos(yaw) * cos(inc));
  vec3 f = normalize(-ro);
  vec3 rgt = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 up = cross(f, rgt);
  vec3 rd = normalize(f + (rgt * q.x + up * q.y) * TANH);

  // rays that pass far from the hole only get a weak-field deflection
  vec3 perp = ro - dot(ro, rd) * rd;
  float b = length(perp);
  if (b > 30.0) return background(normalize(rd - normalize(perp) * (2.0 / b)));

  vec3 pos = ro, vel = rd;
  vec3 col = vec3(0.0);
  float trans = 1.0;
  bool swallowed = false;
  for (int i = 0; i < STEPS; i++) {
    float r = length(pos);
    if (r < 1.0) { swallowed = true; break; }
    if (r > 50.0 && dot(pos, vel) > 0.0) break;
    vec3 L = cross(pos, vel);
    float h2 = dot(L, L);
    float dt = clamp(0.045 * r + 0.01, 0.02, 1.2);
    vec3 acc = -1.5 * h2 * pos / (r * r * r * r * r);
    vec3 nv = normalize(vel + acc * dt);
    vec3 np = pos + nv * dt;
    if (pos.y * np.y < 0.0) {
      float t = pos.y / (pos.y - np.y);
      vec3 hit = mix(pos, np, t);
      float rr = length(hit.xz);
      if (rr > RIN * 0.9 && rr < ROUT) {
        vec4 d = diskSample(hit, nv);
        col += trans * d.rgb;
        trans *= 1.0 - d.a;
        if (trans < 0.02) break;
      }
    }
    pos = np; vel = nv;
  }
  if (!swallowed && trans > 0.02) col += trans * background(normalize(vel));
  return col;
}

vec2 holeCenter() {
  return vec2(-0.10, uHorizon + 0.52) + uMouse * 0.012
       + vec2(sin(uTime * 0.11) * 0.03, sin(uTime * 0.07) * 0.01);
}

vec3 meteor(vec2 p) {
  float cyc = uTime / 6.0;
  float id = floor(cyc), ph = fract(cyc);
  float on = step(0.5, h21(vec2(id, 3.0)));
  vec2 st = vec2(mix(-1.3, 1.0, h21(vec2(id, 1.0))), mix(0.15, 0.9, h21(vec2(id, 2.0))));
  vec2 dir = normalize(vec2(1.0, -0.45));
  vec2 rel = p - (st + dir * ph * 1.5);
  float along = dot(rel, -dir);
  float perp = dot(rel, vec2(-dir.y, dir.x));
  float tail = step(0.0, along) * exp(-along * 8.0) * exp(-perp * perp * 90000.0);
  return uHot * tail * 3.0 * on * smoothstep(0.0, 0.08, ph) * smoothstep(0.55, 0.3, ph);
}

vec3 sky(vec2 p) {
  vec2 c = holeCenter();
  vec3 col = uCool * 0.03 * (1.0 - clamp((p.y - uHorizon) * 0.6, 0.0, 1.0));
  col += uMid * 0.12 * exp(-(p.y - uHorizon) / 0.22) * exp(-abs(p.x - c.x) * 0.25);
  col *= smoothstep(0.27, 0.32, length(p - c));   // the shadow stays black
  col += trace(p - c);
  col += meteor(p) * uStars * smoothstep(uHorizon, uHorizon + 0.2, p.y);
  return col;
}

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  vec2 c = holeCenter();
  vec3 col;
  if (p.y >= uHorizon) {
    col = sky(p);
  } else {
    float dy = uHorizon - p.y;
    float rip = pn(vec2(p.x * 2.5 + uTime * 0.2, dy * 70.0 - uTime * 0.6), 1000.0) - 0.5;
    vec2 pm = vec2(p.x + rip * 0.03 * (dy * 8.0 + 0.2), uHorizon + dy);
    float streak = 0.55 + 0.9 * pn(vec2(p.x * 9.0, dy * 140.0 + uTime * 0.4), 1000.0);
    col = sky(pm) * 0.8 * streak + uCool * 0.012;
    // glints dancing on the water under the hole
    float gl = pow(pn(vec2(p.x * 70.0 + uTime * 0.7, dy * 420.0 - uTime * 1.6), 1000.0), 9.0);
    col += mix(uMid, uHot, 0.6) * gl * 14.0 * exp(-abs(p.x - c.x) * 2.2) * exp(-dy * 7.0);
  }
  col += uMid * exp(-abs(p.y - uHorizon) / 0.0035) * 0.45 * exp(-abs(p.x - c.x) * 0.5);
  gl_FragColor = vec4(col, 1.0);
}`,bf=`
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
  float height = mix(0.5, 1.2, fract(seed * 7.31)) * (1.0 + tall * 0.55);
  float width = (0.035 + depth * 0.012) * (1.0 - hgt * 0.88);
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
  vH = hgt; vDepth = depth; vX = pos.x; vSeed = seed; vFace = abs(cos(yaw));
}`,Af=`
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
varying float vH;
varying float vDepth;
varying float vX;
varying float vSeed;
varying float vFace;

void main() {
  float far = smoothstep(3.0, 30.0, vDepth);
  float lit = 0.55 + 0.6 * smoothstep(8.0, -30.0, vX);
  float s = fract(vSeed * 13.7);
  vec3 dry = mix(vec3(0.55, 0.40, 0.14), vec3(0.62, 0.52, 0.20), s);          // golden to olive straw
  vec3 base = mix(dry * 0.04, dry * 0.22, vH);                                  // dark roots
  float back = pow(vH, 1.6) * mix(0.12, 1.0, far * far) * lit;                  // light shining through the blade
  float trans = 0.55 + 0.9 * vFace;
  vec3 glow = mix(uMid, uHot, smoothstep(0.55, 1.0, vH) * 0.75) * back * trans * (0.65 + 0.7 * s);
  float glint = step(0.97, fract(vSeed * 53.1)) * pow(vH, 3.0) * mix(0.3, 1.6, far);
  vec3 col = base + glow + uHot * glint * 0.8;
  col *= mix(0.20, 1.0, smoothstep(2.0, 26.0, vDepth));                         // foreground sits in shadow
  col = mix(col, uMid * 0.14, smoothstep(20.0, 31.0, vDepth) * 0.6);            // horizon mist
  gl_FragColor = vec4(col, 1.0);
}`,Tf=`
varying float vDepth;
varying float vX;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  vX = position.x;
  gl_Position = projectionMatrix * mv;
}`,wf=`
uniform vec3 uMid;
uniform vec3 uHot;
uniform vec3 uCool;
varying float vDepth;
varying float vX;
void main() {
  float far = smoothstep(4.0, 30.0, vDepth);
  // light from the hole spills over the far field, strongest toward its side
  float spill = exp(-pow((vX + 4.0) / 16.0, 2.0));
  vec3 col = uCool * 0.03 + uMid * 0.08 * far * far + mix(uMid, uHot, 0.4) * 0.22 * far * far * spill;
  gl_FragColor = vec4(col, 1.0);
}`,Ef=`
varying vec3 vN;
varying vec3 vV;
varying vec3 vW;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  vW = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * mv;
}`,Rf=`
uniform vec3 uHot;
uniform vec3 uMid;
varying vec3 vN;
varying vec3 vV;
varying vec3 vW;
void main() {
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float rim = pow(f, 3.6);
  float side = 0.55 + 0.6 * smoothstep(10.0, -14.0, vW.x);   // the left of the frame sits closer to the bright disk side
  float top = 0.7 + 0.5 * smoothstep(0.0, 6.0, vW.y);
  vec3 col = vec3(0.016, 0.010, 0.007) + mix(uMid, uHot, 0.35) * rim * 1.5 * side * top;
  gl_FragColor = vec4(col, 1.0);
}`,Cf=`
uniform float uTime;
uniform float uPx;
attribute vec4 aSeed;
varying float vA;
void main() {
  float t = uTime * 0.14 * (0.5 + aSeed.w);
  vec3 p = position;
  p.y = mod(position.y + t * 4.0, 9.0) + 0.2;
  p.x += sin(uTime * 0.5 + aSeed.x * 20.0) * 1.2 + uTime * 0.25 * (0.3 + aSeed.z);
  p.x = mod(p.x + 26.0, 52.0) - 26.0;
  p.z += cos(uTime * 0.4 + aSeed.y * 20.0) * 0.8;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uPx * (0.6 + aSeed.z) / max(-mv.z, 1.0) * 14.0;
  vA = (0.4 + 0.6 * sin(uTime * (1.0 + aSeed.w * 2.0) + aSeed.x * 40.0)) * smoothstep(0.0, 1.5, p.y) * smoothstep(9.2, 6.0, p.y);
}`,If=`
uniform vec3 uHot;
varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.0, d);
  gl_FragColor = vec4(uHot * 1.6 * a * a * max(vA, 0.0), 1.0);
}`,Lf=`
uniform float uTime;
uniform float uPx;
attribute float aSeed;
varying float vA;
void main() {
  float life = fract(uTime * 0.06 + aSeed);
  vec3 p = position;
  p.y += life * 7.5;
  p.x += life * life * 6.0 + sin(life * 6.0 + aSeed * 20.0) * 0.35 * life;
  p.z += sin(aSeed * 30.0) * 0.3 * life;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uPx * 1570.0 * (0.6 + 3.0 * life) / max(-mv.z, 1.0);
  vA = smoothstep(0.0, 0.12, life) * (1.0 - life) * 0.55;
}`,Df=`
varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.0, d);
  gl_FragColor = vec4(vec3(0.03, 0.018, 0.011), a * a * vA);
}`,Pf={uniforms:{tDiffuse:{value:null},uTime:{value:0},uTexel:{value:[.0005208333333333333,.000925925925925926]},uHoleUV:{value:[.5,.7]},uRays:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uTexel;
    uniform vec2 uHoleUV;
    uniform float uRays;
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
      c += streak * vec3(0.35, 0.55, 1.0) * 0.16;
      // crepuscular rays: bright light marched toward the hole; silhouettes and grass cast dark shafts into it
      vec3 rays = vec3(0.0);
      float decay = 1.0;
      for (int k = 0; k < 28; k++) {
        vec2 sp = mix(vUv, uHoleUV, float(k) / 28.0 * 0.6);
        rays += max(texture2D(tDiffuse, sp).rgb - 0.86, 0.0) * decay;
        decay *= 0.93;
      }
      c += rays * 0.032 * uRays;
      c *= 1.0 - dot(q, q) * 0.9;
      c += (h(vUv * 1000.0 + fract(uTime) * 7.0) - 0.5) * 0.018;
      gl_FragColor = vec4(c, 1.0);
    }`};var eu=-.4,Kc={amber:{hot:[1,.82,.5],mid:[1,.45,.1],cool:[.5,.12,.03]},violet:{hot:[.95,.78,1],mid:[.55,.28,1],cool:[.16,.06,.45]}},$o={low:{pixelRatio:.6,grass:14e3,embers:60,bloom:!1,steps:90},medium:{pixelRatio:.85,grass:45e3,embers:140,bloom:!0,steps:160},high:{pixelRatio:1,grass:12e4,embers:300,bloom:!0,steps:240}},Xo=new URLSearchParams(location.search),vt={palette:Xo.get("palette")||"amber",quality:Xo.get("q")||"high",fps:Number(Xo.get("fps"))||60,bloom:1,speed:1,parallax:!0,stars:1},zt={uTime:{value:0},uRes:{value:new K(1,1)},uMouse:{value:new K},uHot:{value:new fe},uMid:{value:new fe},uCool:{value:new fe},uHorizon:{value:eu},uStars:{value:1},uWind:{value:1}},hn=new no({antialias:!1,powerPreference:"high-performance"});hn.toneMapping=nr;hn.toneMappingExposure=1;document.body.appendChild(hn.domElement);var qt=new io,fn=new mt(38,1,.1,200);fn.position.set(0,1.7,0);var gs=new Xe(new ei(2,2),new it({vertexShader:Mf,fragmentShader:Sf,uniforms:zt,depthTest:!1,depthWrite:!1,defines:{STEPS:240}}));gs.frustumCulled=!1;gs.renderOrder=-10;qt.add(gs);var dn=-30,jx=new Xe(new ei(200,40).rotateX(-Math.PI/2).translate(0,0,dn+20),new it({vertexShader:Tf,fragmentShader:wf,uniforms:zt}));qt.add(jx);var ps=null;function ev(i){ps&&(qt.remove(ps),ps.geometry.dispose());let e=new Io,t=4,n=[],s=[];for(let a=0;a<t;a++)n.push(-.5,a/t,0,.5,a/t,0);n.push(0,1,0);for(let a=0;a<t-1;a++){let l=a*2;s.push(l,l+1,l+2,l+1,l+3,l+2)}let r=(t-1)*2;s.push(r,r+1,t*2),e.setAttribute("position",new Qe(n,3)),e.setIndex(s);let o=new Float32Array(i*3);for(let a=0;a<i;a++){let l,c;do c=-(1.5+(-dn-1.5)*Math.pow(Math.random(),1.35)),l=(Math.random()*2-1)*(6+-c*1.6);while(l>-8.5&&l<4&&c<-12.5&&c>-22.5);o[a*3]=l,o[a*3+1]=c,o[a*3+2]=Math.random()}e.setAttribute("aInst",new Nn(o,3)),e.instanceCount=i,ps=new Xe(e,new it({vertexShader:bf,fragmentShader:Af,uniforms:zt,side:Ut})),ps.frustumCulled=!1,qt.add(ps)}var or=new it({vertexShader:Ef,fragmentShader:Rf,uniforms:zt}),Nf=new At({color:new fe(5,2.2,.55),toneMapped:!1});function tv(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new fo(i)}var nv=tv();function Of(i,e,t,n){let s=new Xe(new ei(i,e).rotateX(-Math.PI/2),new At({map:nv,color:new fe(t).multiplyScalar(n),transparent:!0,blending:Mi,depthWrite:!1,toneMapped:!1}));return s.position.y=.05,s}function iv(){let i=new gt,e=new At({color:new fe(.016,.01,.007)}),t=new Xe(new Ys(.18,.3,3.2,7),e);t.position.y=1.6,i.add(t);for(let[n,s,r,o]of[[0,4.2,0,1.9],[-1.1,3.6,.3,1.3],[1.2,3.7,-.2,1.4],[.2,5.3,.1,1.1]]){let a=new Xe(new yo(o,1),e);a.position.set(n,s,r),a.scale.y=.85,i.add(a)}return i}function sv(){let i=new gt;for(let e=-34;e<=34;e+=3.2){let t=new Xe(new Un(.14,1.15,.14),or);t.position.set(e,.575,0),i.add(t)}for(let e of[.45,.9]){let t=new Xe(new Un(68.6,.07,.05),or);t.position.set(0,e,0),i.add(t)}return i}function Ff(){let i=new gt,e=new Xe(new Ys(.1,.14,8.5,6),or);e.position.y=4.25;let t=new Xe(new Un(2.6,.12,.12),or);return t.position.y=7.9,i.add(e,t),i}function tu(i,e,t,n){new Vo().load(e,s=>{let r=s.scene;r.traverse(c=>{if(!c.isMesh)return;let u=h=>h.name.startsWith("glass")?Nf:or;c.material=Array.isArray(c.material)?c.material.map(u):u(c.material)});let o=new Ft().setFromObject(r),a=o.getCenter(new E);r.position.set(-a.x,-o.min.y,-a.z);let l=new gt;l.add(r),l.scale.setScalar(t),i.add(l),i.updateMatrixWorld(!0),n&&n(i,r)})}function rv(i,e){let t=new E,n=[],s=-1/0;i.traverse(a=>{if(!a.isMesh)return;let l=a.geometry.attributes.position;for(let c=0;c<l.count;c++)t.fromBufferAttribute(l,c).applyMatrix4(a.matrixWorld),n.push(t.clone()),t.y>s&&(s=t.y)});let r=n.filter(a=>a.y>s-e),o=new E;return r.forEach(a=>o.add(a)),o.multiplyScalar(1/r.length)}var Zo=new gt;Zo.position.set(-2.2,0,dn+10);Zo.rotation.y=.28;tu(Zo,vf,1.2,i=>{let e=Of(7,3,new fe(1,.85,.6),.9);e.position.set(7,.05,0),i.add(e)});var zf=iv();zf.position.set(-8.5,0,dn+2);var Bf=sv();Bf.position.set(0,0,dn+9);var Hf=Ff();Hf.position.set(15,0,dn+7);qt.add(Zo,zf,Bf,Hf);var ov=new At({color:new fe(.012,.008,.006)}),qo=[15,-7,-29];for(let i of qo.slice(1)){let e=Ff();e.position.set(i,0,dn+7),qt.add(e)}for(let i=0;i<qo.length-1;i++)for(let e of[-1,1]){let t=qo[i]+e,n=qo[i+1]+e,s=7.85,r=dn+7,o=new $s([new E(t,s,r),new E((t*2+n)/3,s-1.05,r),new E((t+n*2)/3,s-1.05,r),new E(n,s,r)]);qt.add(new Xe(new So(o,48,.032,5),ov))}var Gf=[];{let i=new Mo(new Zs([new K(0,0),new K(-1,.12),new K(-.35,-.12)])),e=new At({color:new fe(.014,.009,.006),side:Ut});for(let t=0;t<11;t++){let n=new gt,s=new Xe(i,e),r=new Xe(i,e);r.scale.x=-1,n.add(s,r),n.scale.setScalar(.9+Math.random()*.5),qt.add(n),Gf.push({g:n,l:s,r,x:Math.random()*70-35,y:9+Math.random()*5+t%3*.7,z:-34-Math.random()*6,v:1.6+Math.random()*.5,ph:Math.random()*6})}}var Jo=new gt;Jo.position.set(9,0,dn+2);Jo.rotation.y=-.08;tu(Jo,xf,.95,(i,e)=>{let t=Of(10,6,new fe(1,.55,.18),1.3);t.position.set(0,.05,5.5),i.add(t);let n=rv(e,.15),s=Ri.geometry.attributes.position;for(let r=0;r<s.count;r++)s.setXYZ(r,n.x,n.y,n.z);s.needsUpdate=!0});var nu=new gt;nu.position.set(-13,0,dn+3);var Qc=null;tu(nu,yf,.8,(i,e)=>{Qc=e.getObjectByName("WindRotorZ")});qt.add(Jo,nu);var ci=null,Ri=null;function av(i){ci&&(qt.remove(ci),ci.geometry.dispose());let e=new Float32Array(i*3),t=new Float32Array(i*4);for(let s=0;s<i;s++){e[s*3]=(Math.random()*2-1)*24,e[s*3+1]=Math.random()*9,e[s*3+2]=-3-Math.random()*27;for(let r=0;r<4;r++)t[s*4+r]=Math.random()}let n=new ft;n.setAttribute("position",new at(e,3)),n.setAttribute("aSeed",new at(t,4)),ci=new Ai(n,new it({vertexShader:Cf,fragmentShader:If,uniforms:{uTime:zt.uTime,uHot:zt.uHot,uPx:{value:1}},transparent:!0,depthWrite:!1,blending:Mi})),ci.frustumCulled=!1,qt.add(ci)}{let e=new Float32Array(108),t=new Float32Array(36);for(let s=0;s<36;s++)e.set([10.5,4.9,dn+1.8],s*3),t[s]=s/36;let n=new ft;n.setAttribute("position",new at(e,3)),n.setAttribute("aSeed",new at(t,1)),Ri=new Ai(n,new it({vertexShader:Lf,fragmentShader:Df,uniforms:{uTime:zt.uTime,uPx:{value:1}},transparent:!0,depthWrite:!1})),Ri.frustumCulled=!1,Ri.renderOrder=5,qt.add(Ri)}var Gn=new Bo(hn);Gn.addPass(new Ho(qt,fn));var Yo=new fs(new K(1,1),.7,.4,.9);Gn.addPass(Yo);Gn.addPass(new Go);var Vf=new wi(ff);Gn.addPass(Vf);var ar=new wi(Pf);Gn.addPass(ar);var _s=document.createElement("div");_s.style.cssText="position:fixed;inset:0;pointer-events:none;display:none;font:11px/1.6 Consolas,monospace;letter-spacing:.14em;color:rgba(255,236,210,.82);text-shadow:0 0 8px rgba(0,0,0,.6)";function lr(i,e,t){let n=document.createElement("div");return n.style.cssText=i,n.textContent=e,t.appendChild(n),n}var iu=lr("position:absolute;left:28px;top:24px","",_s);lr("font-size:10px;opacity:.6","TWO HORIZONS",iu);var lv=lr("font:300 30px Georgia,serif;letter-spacing:.02em;margin-top:2px","Ember",iu);lr("opacity:.6;margin-top:4px","The last farm before the event horizon",iu);var cv=lr("position:absolute;left:28px;bottom:26px;white-space:pre","",_s);document.body.appendChild(_s);var Uf=0,kf=0,Zc=0,Jc=performance.now();function Wf(i){_s.style.display=i?"block":"none"}Xo.get("hud")==="1"&&Wf(!0);var jc=!1;function Xf(i){jc=i==="cycle",jc||qf(Kc[i]&&i==="violet"?1:0)}function qf(i){let e=Kc.amber,t=Kc.violet;for(let n of["hot","mid","cool"])zt["u"+n[0].toUpperCase()+n.slice(1)].value.setRGB(e[n][0]+(t[n][0]-e[n][0])*i,e[n][1]+(t[n][1]-e[n][1])*i,e[n][2]+(t[n][2]-e[n][2])*i)}function $f(){let i=$o[vt.quality]||$o.high;hn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)*i.pixelRatio),ev(i.grass),av(i.embers),gs.material.defines.STEPS!==i.steps&&(gs.material.defines.STEPS=i.steps,gs.material.needsUpdate=!0),Yo.enabled=i.bloom&&vt.bloom>.01,Yf()}function Yf(){let i=window.innerWidth,e=window.innerHeight;hn.setSize(i,e,!1),hn.domElement.style.width="100vw",hn.domElement.style.height="100vh",Gn.setPixelRatio(hn.getPixelRatio()),Gn.setSize(i,e);let t=hn.getPixelRatio();zt.uRes.value.set(i*t,e*t),Vf.material.uniforms.resolution.value.set(1/(i*t),1/(e*t)),ar.uniforms.uTexel.value=[1/(i*t),1/(e*t)],ci&&(ci.material.uniforms.uPx.value=e*t/1080),Ri&&(Ri.material.uniforms.uPx.value=e*t/1080),fn.aspect=i/e,fn.updateProjectionMatrix(),fn.projectionMatrix.elements[9]=-eu,fn.projectionMatrixInverse.copy(fn.projectionMatrix).invert()}window.addEventListener("resize",Yf);var Zf=new K,ms=new K;window.addEventListener("mousemove",i=>{Zf.set(i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight*2-1))});window.wallpaperPropertyListener={applyUserProperties(i){let e=!1;i.palette&&(vt.palette=i.palette.value,Xf(vt.palette)),i.quality&&i.quality.value!==vt.quality&&(vt.quality=i.quality.value,e=!0),i.fps&&(vt.fps=i.fps.value),i.bloom&&(vt.bloom=i.bloom.value,Yo.strength=.7*vt.bloom,Yo.enabled=($o[vt.quality]||$o.high).bloom&&vt.bloom>.01),i.speed&&(vt.speed=i.speed.value),i.parallax&&(vt.parallax=!!i.parallax.value),i.stars&&(vt.stars=i.stars.value,zt.uStars.value=vt.stars),i.hud&&Wf(!!i.hud.value),i.rays&&(ar.uniforms.uRays.value=i.rays.value),e&&$f()}};function Jf(i){Kf=i,zt.uTime.value=i,ar.uniforms.uTime.value=i,jc&&qf(.5-.5*Math.cos(i*(Math.PI*2)/120));let e=vt.parallax?Zf:new K;ms.lerp(e,.05),zt.uMouse.value.copy(ms),fn.position.x=ms.x*.5+Math.sin(i*.12)*1.1,fn.position.y=1.7+ms.y*.12+Math.sin(i*.09)*.12,fn.position.z=Math.sin(i*.06)*1.5,Qc&&(Qc.rotation.z=-i*.8);let t=.92+.08*Math.sin(i*7)*Math.sin(i*3.1);Nf.color.setRGB(5*t,2.2*t,.55*t);for(let r of Gf){let o=((r.x-r.v*i+35)%70+70)%70-35;r.g.position.set(o,r.y+Math.sin(i*.6+r.ph)*.5,r.z);let a=Math.sin(i*7+r.ph)*.7;r.l.rotation.z=a,r.r.rotation.z=-a,r.g.rotation.y=Math.PI/2+0,r.g.rotation.x=0,r.g.lookAt(r.g.position.x-10,r.g.position.y,r.g.position.z)}let n=-.1+ms.x*.012+Math.sin(i*.11)*.03,s=eu+.52+ms.y*.012+Math.sin(i*.07)*.01;if(ar.uniforms.uHoleUV.value=[(n/fn.aspect+1)/2,(s+1)/2],_s.style.display!=="none"&&i-Uf>.25){Uf=i;let r=(.115+.03*Math.sin(i*.09))*57.2958,o=Math.floor(i),a=[Math.floor(o/3600),Math.floor(o/60)%60,o%60].map(l=>String(l).padStart(2,"0")).join(":");cv.textContent=`DIST 22.0 Rs   INC ${r.toFixed(1)}\xB0   T ${a}   ${kf} FPS`,lv.textContent=zt.uHot.value.r>.9&&zt.uMid.value.b<.5?"Ember":"Indigo"}}window.__capture=i=>(i!==void 0&&Jf(i),Gn.render(),hn.domElement.toDataURL("image/jpeg",.92));Xf(vt.palette);$f();var uv=new us,Kf=0,Wo=0;function Qf(){requestAnimationFrame(Qf);let i=uv.getDelta();Wo+=i;let e=1/Math.max(vt.fps,5);if(Wo<e-5e-4)return;let t=Math.min(Wo,.1)*vt.speed;Wo=0,Jf(Kf+t),Gn.render(),Zc++;let n=performance.now();n-Jc>1e3&&(kf=Math.round(Zc*1e3/(n-Jc)),Zc=0,Jc=n)}Qf();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
