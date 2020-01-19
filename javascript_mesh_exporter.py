import bpy
from os import system, name

bl_info = {
    "name": "JS Mesh Export", 
    "blender": (2, 80, 0),
    "category": "Object",
}

def clear(): 
    if name == 'nt': 
        system('cls') 
    else: 
        system('clear')
clear()

def addVertex(list, vert):
    for i, tv in enumerate(list):
        if vert == tv:
            return i
    list.append(vert)
    return len(list) - 1
   
class JSMeshExporter(bpy.types.Operator):
    bl_idname = "object.js_mesh_export" 
    bl_label = "JS MESH EXPORT" 
    bl_options = {'REGISTER', 'UNDO'}

    varName: bpy.props.StringProperty(name="Javascript Variable Name")
    outFileLoc: bpy.props.StringProperty(name="Output File Location", subtype="FILE_PATH")
    outFile: bpy.props.StringProperty(name="Output File Name")

    def execute(self, context): #CODE TO RUN WHEN EXECUTED
        if self.varName is '' or self.outFile is '' or self.outFileLoc is '':
            return {'FINISHED'}
        
        vertexList = []
        indexList = []
        obj = bpy.context.active_object
        polys = obj.data.polygons
        vertices = obj.data.vertices
        uvs = obj.data.uv_layers[0].data

        for p in polys:
            indCt = len(indexList)
            for i, v in enumerate(p.vertices):
                pos = []
                norm = []
                uv = []
                
                pos.append(round(vertices[v].co.x, 4))
                pos.append(round(vertices[v].co.y, 4))
                pos.append(round(vertices[v].co.z, 4))
                
                norm.append(round(vertices[v].normal.x, 4))
                norm.append(round(vertices[v].normal.y, 4))
                norm.append(round(vertices[v].normal.z, 4))
                    
                uv.append(round(uvs[p.loop_indices[i]].uv.x, 4))
                uv.append(round(uvs[p.loop_indices[i]].uv.y, 4))
                
                vertex = [pos, norm, uv]
                
                if i < 3:
                    indexList.append(addVertex(vertexList, vertex))
                else:
                    indexList.append(indexList[len(indexList) - 1])
                    indexList.append(addVertex(vertexList, vertex))
                    indexList.append(indexList[indCt])

        nvList = []
        for v in vertexList:
            for p in v[0]:
                nvList.append(p)
            for n in v[1]:
                nvList.append(n)
            for u in v[2]:
                nvList.append(u)

        fileText = "var " + self.varName + " = ["
        fileText += str(nvList) + ","
        fileText += str(indexList) + "];\n"
                    
        file = open(self.outFileLoc + self.outFile + '.js', 'w')
        file.write(fileText);
        file.close()
        return {'FINISHED'}

def menu_func(self, context): 
    self.layout.operator(JSMeshExporter.bl_idname)

def register():
    bpy.utils.register_class(JSMeshExporter) 
    bpy.types.VIEW3D_MT_object.append(menu_func)
    
def unregister():
    bpy.utils.unregister_class(JSMeshExporter) 
    bpy.types.VIEW3D_MT_object.remove(menu_func)
    
if __name__ == "__main__":
    register()
