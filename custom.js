// Get your token from https://cesium.com/ion/tokens
console.log(Cesium)
async function start() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNTZlNTRjMy01ZjZlLTQ4N2YtOTY0MC0xYTNlYTgwZDFmNmMiLCJpZCI6MTU5NzA4LCJpYXQiOjE2OTE2ODk3MzZ9.4vypb5d5T9LsOWBjiDQh0EByNxdCRLQR92znYSLPKo4';
    console.log(">>>", Cesium.Ion)
    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
      });

    const osmBuildings = await Cesium.createOsmBuildingsAsync();
    viewer.scene.primitives.add(osmBuildings);
}

start();