import { createClient } from "@/utils/supabase/server";

export default async function callOutcomeType() {
    const supabase = await createClient();
    const { data: call_outcome_type } = await supabase.from("call_outcome_type").select();

    return <pre>{JSON.stringify(call_outcome_type, null, 2)}</pre>
}