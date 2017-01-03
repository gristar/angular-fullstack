function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Created by wangwy on 2016/4/6.
 */
;(function (window, $, EQX) {

    var loadImg = EQX.util.loadImg;
    var loadThreeCanvas = EQX.API.loadThreeCanvas;
    var resolve = EQX.util.resolveUrl;
    var PROJECT_HOST = EQX.HOST.PROJECT_HOST;

    var EqxEffect = EQX.EqxEffect;

    var SnowFlyEffect = function (_EqxEffect) {
        _inherits(SnowFlyEffect, _EqxEffect);

        /**
         * 创建飘雪特效
         */

        function SnowFlyEffect(options, pageDiv, width, height) {
            _classCallCheck(this, SnowFlyEffect);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SnowFlyEffect).call(this, options, pageDiv, width, height));

            _this.particles = [];
            return _this;
        }

        return SnowFlyEffect;
    }(EqxEffect);

    EQX.SnowFlyEffect = SnowFlyEffect;

    /**
     * 初始化特效
     */
    SnowFlyEffect.prototype.init = function () {
        var _this2 = this;

        this.inited = false;
        loadThreeCanvas().then(function () {
            _this2.createCanvas();
            _this2.pageDiv.insertBefore(_this2.canvas, _this2.pageDiv.firstChild);
            _this2.createImgs().then(function () {
                _this2.inited = true;
            });
        });
    };

    SnowFlyEffect.prototype.startEffect = function () {
        if (this.inited) {
            this.startInterval();
        }
        this.requestID = requestAnimationFrame(this.startEffect.bind(this));
    };

    SnowFlyEffect.prototype.stopEffect = function () {
        if (this.requestID) {
            cancelAnimationFrame(this.requestID);
            this.requestID = null;
        }
    };

    /**
     * 创建canvas
     */
    SnowFlyEffect.prototype.createCanvas = function () {
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 10000);
        this.camera.position.z = 1000;

        this.scene = new THREE.Scene();
        this.scene.add(this.camera);

        this.renderer = new THREE.CanvasRenderer();
        this.renderer.setSize(this.width, this.height);

        this.canvas = this.renderer.domElement;

        $(this.canvas).css({
            position: 'absolute',
            zIndex: 1000,
            pointerEvents: 'none',
            top: 0,
            width: '100%',
            height: '100%'
        });
    };

    /**
     * 创建飘雪的图片
     */
    SnowFlyEffect.prototype.createImgs = function () {
        var _this3 = this;

        return loadImg(resolve(PROJECT_HOST, 'images/effect/snowFly/particleSmoke.png')).then(function (img) {
            var material = new THREE.ParticleBasicMaterial({map: new THREE.Texture(img)});
            for (var i = 0; i < 500; i++) {
                var particle = new Particle3D(material);
                var pPos = particle.position;
                pPos.x = Math.random() * 2000 - 1000;
                pPos.y = Math.random() * 2000 - 1000;
                pPos.z = Math.random() * 2000 - 1000;
                particle.scale.x = particle.scale.y = 1;
                _this3.scene.add(particle);
                _this3.particles.push(particle);
            }
        });
    };

    /**
     * 开始执行下雪特效
     */
    SnowFlyEffect.prototype.startInterval = function () {
        this.particles.forEach(function (particle) {
            var pPos = particle.position;
            particle.updatePhysics();

            if (pPos.y < -1000) {
                pPos.y += 2000;
            }

            if (pPos.x > 1000) {
                pPos.x -= 2000;
            } else if (pPos.x < -1000) {
                pPos.x += 2000;
            }

            if (pPos.z > 1000) {
                pPos.z -= 2000;
            } else if (pPos.z < -1000) {
                pPos.z += 2000;
            }
        });

        var cPos = this.camera.position;
        cPos.x += -cPos.x * 0.05;
        cPos.y += -cPos.y * 0.05;

        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);
    };
})(window, jQuery, EQX);