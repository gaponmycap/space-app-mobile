import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COMPLETE_TASK_IMAGE, DELETE_ICON, INCOMPLETE_TASK_IMAGE, ITEM_BG } from "../../constant";
import { gStyle } from "../../asset";
import { ITask } from "../../interface";
import { deleteTaskService, updateTaskService } from "../../service";

export function TaskItem({ task }: { task: ITask }) {
   const { deleteTaskFn } = deleteTaskService()
   const { updateTaskFn } = updateTaskService()

   return (
      <View style={ [ styles.task_item ] }>

         <TouchableOpacity style={ [ styles.left ] } onPress={ () => updateTaskFn(task.id, !task.isCompleted) }
                           activeOpacity={ 0.5 }>
            { task.isCompleted
               ?
               <Image source={ COMPLETE_TASK_IMAGE } style={ { width: 28, height: 28 } }/>
               :
               <Image source={ INCOMPLETE_TASK_IMAGE } style={ { width: 28, height: 28 } }/>
            }
         </TouchableOpacity>

         <Text style={ [ styles.middle ] }> { task.title } </Text>

         <TouchableOpacity activeOpacity={ 0.5 }
                           style={ [ gStyle.center, styles.right ] }
                           onPress={ () => deleteTaskFn(task.id) }>

            <Image source={ DELETE_ICON } style={ { width: 28, height: 28 } }/>

         </TouchableOpacity>

      </View>
   )
}

const styles = StyleSheet.create({
   task_item: {
      padding: 20,
      backgroundColor: ITEM_BG,
      marginVertical: 5,
      borderRadius: 10,
      gap: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   left: {
      width: "10%",
      alignItems: "center",
   },
   middle: {
      width: "70%"
   },
   right: {
      width: "10%",
      alignItems: "center",
   }
})
