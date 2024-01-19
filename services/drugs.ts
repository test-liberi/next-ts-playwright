import { IDrug } from '@/app/api/types';
import { useMutation, useQuery, useQueryClient} from '@tanstack/react-query';


export function useGetAllDrugs(){
    return useQuery<IDrug[]>(
        {
            queryKey: ['drugs'],
            queryFn: async ()=>{
                const res = await fetch('/api/drugs');
                return res.json();
            }
    })
}

export function useGetDrugById(id:number){
    return useQuery<IDrug>(
        {
            queryKey: ['drugs',id],
            queryFn: async ()=>{
                const res = await fetch(`/api/drugs/${id}`);
                return res.json();
            }
    })
}

export function useCreateDrug<IDrug>(){

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newDrug:IDrug)=>{
            const res = await fetch('/api/drugs',{
                method: 'POST',
                body: JSON.stringify(newDrug)
            })
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['drugs']})
        }
    })
}

export function useUpdateDrug<IDrug>(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (updatedDrug:IDrug)=>{
            const res = await fetch('/api/drugs',{
                method: 'PUT',
                body: JSON.stringify(updatedDrug)
            })
            return res.json();
        },
        onSuccess: () => {
            console.log('onsuccess')
            queryClient.invalidateQueries({queryKey:['drugs']})
        }
    })
}

export function useDeleteDrug<IDrug>(){
    const queryClient = useQueryClient();
    const drugsQuery = useGetAllDrugs();

    return useMutation({
        mutationFn: async (id:number)=>{
            const res = await fetch(`/api/drugs/${id}`,{
                method: 'DELETE'
            })
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['drugs']})
            drugsQuery.refetch();
        }
    })
}