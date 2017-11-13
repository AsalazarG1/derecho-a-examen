(function(){

    //vertex shader calcular posiciones y vertices de los primitivos
    //y el frament shader calcula el color y la posicion de los primitivos

    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.soft = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;


    camera.position.z = 60;
    camera.position.y = 15;

    let planeGeometry = new THREE.PlaneGeometry( 150, 100, 150, 100 ); //200,900
    planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
    let plane = new THREE.Mesh(planeGeometry, groundMaterial);
    plane.receiveShadow  = true;
    plane.position.z=-15;
    plane.position.y=15;
    plane.rotateZ(0);
    plane.rotateX(1.6);
    plane.rotateY(0)
    let mesh;
    let mesh1;
    let mesh2;

    let loader = new THREE.TextureLoader();

    loader.load('public/color-azul.jpg', function(texture){
        let geometry = new THREE.BoxGeometry(10,10,10,10);
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh = new THREE.Mesh(geometry, material);

        mesh.position.y = 25;
        mesh.position.x=-25

        mesh.castShadow = true;
        scene.add(mesh);
    });

    let loader1 = new THREE.TextureLoader();
    
        loader1.load('public/color-rojo.png', function(texture1){
            let geometry1 = new THREE.TorusGeometry(10,4,8,200);
            let material1 = new THREE.MeshBasicMaterial({
                map: texture1
            })
    
            mesh1 = new THREE.Mesh(geometry1, material1);
    
            mesh1.position.y = 25;
            mesh1.position.x=0
    
            mesh1.castShadow = true;
            scene.add(mesh1);
        });

        let loader2 = new THREE.TextureLoader();
        
            loader2.load('public/color-violeta.png', function(texture2){
                let geometry2 = new THREE.CylinderGeometry(0, 10, 15, 4, 1, true);
                let material2 = new THREE.MeshBasicMaterial({
                    map: texture2,
                    vertexColors:THREE.VertexColors,
                    side:THREE.DoubleSide
                })
        
                mesh2 = new THREE.Mesh(geometry2, material2);
        
                mesh2.position.y = 25;
                mesh2.position.x=30
        
                mesh2.castShadow = true;
                scene.add(mesh2);
            });

        
      
       

      

    //let geometry = new THREE.BoxGeometry(10,10,10,10);new THREE.SphereGeometry(20,100,100)

   // let groundMaterial = new THREE.MeshPhongMaterial({
       // color: 0xffffff
    //});

    //let mesh = new THREE.Mesh(geometry, groundMaterial);

    let pointLight = new THREE.PointLight(0x606060);

    pointLight.position.y = -5;
    pointLight.position.z = 150;

    pointLight.castShadow = true;

    scene.background = new THREE.Color(0xeeeeee);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(plane);
    scene.add(pointLight);

    


    function loop(){
        requestAnimationFrame(loop);
        mesh.rotation.y += 0.01;
        mesh1.rotation.x += 0.01;
        mesh2.rotation.z +=0.01;
        renderer.render(scene, camera);
    }

    loop();

})();