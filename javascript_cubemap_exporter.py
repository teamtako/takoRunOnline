import bpy
from os import system, name

bl_info = {
    "name": "JS Cube Map Export", 
    "blender": (2, 80, 0),
    "category": "Object",
}

def clear(): 
    if name == 'nt': 
        system('cls') 
    else: 
        system('clear')
clear()
   
class JSCubeMapExporter(bpy.types.Operator):
    bl_idname = "object.js_cubemap_export" 
    bl_label = "JS TEXTURE EXPORT" 
    bl_options = {'REGISTER', 'UNDO'}

    nxImg: bpy.props.StringProperty(name="-X Image")
    pxImg: bpy.props.StringProperty(name="+X Image")
    nzImg: bpy.props.StringProperty(name="-Z Image")
    pzImg: bpy.props.StringProperty(name="+Z Image")
    nyImg: bpy.props.StringProperty(name="-Y Image")
    pyImg: bpy.props.StringProperty(name="+Y Image")
    varName: bpy.props.StringProperty(name="Javascript Variable Name")
    outFile: bpy.props.StringProperty(name="Output File Name")
    outFileLoc: bpy.props.StringProperty(name="Output File Location", subtype="FILE_PATH")

    def execute(self, context): #CODE TO RUN WHEN EXECUTED
        if self.varName is '' or self.outFile is '' or self.outFileLoc is '':
            return {'FINISHED'}
        if self.nxImg is '' or self.pxImg is '' or self.nzImg is '':
            return {'FINISHED'}
        if self.pzImg is '' or self.nyImg is '' or self.pyImg is '':
            return {'FINISHED'}
        
        fileText = "var " + self.varName + " = ["

        nx = bpy.data.images[self.nxImg]
        pz = bpy.data.images[self.nzImg]
        px = bpy.data.images[self.pxImg]
        nz = bpy.data.images[self.pzImg]
        py = bpy.data.images[self.pyImg]
        ny = bpy.data.images[self.nyImg]

        pix = []
        for p in nx.pixels:
            pix.append(int(p * 255))
        fileText += str(pix) + ",";
        pix = []
        for p in pz.pixels:
            pix.append(int(p * 255))
        fileText += str(pix) + ",";
        pix = []
        for p in px.pixels:
            pix.append(int(p * 255))
        fileText += str(pix) + ",";
        pix = []
        for p in nz.pixels:
            pix.append(int(p * 255))
        fileText += str(pix) + ",";
        pix = []
        for p in py.pixels:
            pix.append(int(p * 255))
        fileText += str(pix) + ",";
        pix = []
        for p in ny.pixels:
            pix.append(int(p * 255))
        fileText += str(pix) + ",";

        fileText += "];"

        file = open(self.outFileLoc + self.outFile +'.js', 'w');
        file.write(fileText);
        file.close();
        
        return {'FINISHED'}

def menu_func(self, context): 
    self.layout.operator(JSCubeMapExporter.bl_idname)

def register():
    bpy.utils.register_class(JSCubeMapExporter) 
    bpy.types.VIEW3D_MT_object.append(menu_func)
    
def unregister():
    bpy.utils.unregister_class(JSCubeMapExporter) 
    bpy.types.VIEW3D_MT_object.remove(menu_func)
    
if __name__ == "__main__":
    register()
    
    
