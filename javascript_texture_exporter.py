import bpy
from os import system, name

bl_info = {
    "name": "JS Texture Export", 
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
   
class JSTextureExporter(bpy.types.Operator):
    bl_idname = "object.js_mesh_export" 
    bl_label = "JS TEXTURE EXPORT" 
    bl_options = {'REGISTER', 'UNDO'}

    imgName: bpy.props.StringProperty(name="Image Name")
    varName: bpy.props.StringProperty(name="Javascript Variable Name")
    outFile: bpy.props.StringProperty(name="Output File", subtype="FILE_PATH")

    def execute(self, context): #CODE TO RUN WHEN EXECUTED
        if self.varName is '' or self.outFile is '' or self.imgName is '':
            return {'FINISHED'}
        
        texturePixels = []
        for p in bpy.data.images[self.imgName].pixels:
            texturePixels.append(int(p * 255))
            

        textureData = "var " + self.varName + " = " + str(texturePixels) + ";";    
            
        file = open(self.outFile + '.js', 'w')
        file.write(textureData);
        file.close()
        
        return {'FINISHED'}

def menu_func(self, context): 
    self.layout.operator(JSTextureExporter.bl_idname)

def register():
    bpy.utils.register_class(JSTextureExporter) 
    bpy.types.VIEW3D_MT_object.append(menu_func)
    
def unregister():
    bpy.utils.unregister_class(JSTextureExporter) 
    bpy.types.VIEW3D_MT_object.remove(menu_func)
    
if __name__ == "__main__":
    register()
    
    
    
    

