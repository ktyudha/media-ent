<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>

        <Head :title="lang().label.password_confirmation" />

        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
            {{ lang().label.confirm_password }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="password" :value="lang().label.password" />
                <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                    autocomplete="current-password" autofocus :placeholder="lang().placeholder.password" />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="flex justify-end mt-4">
                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    {{ form.processing ? lang().button.confirm_password+'...':lang().button.confirm_password }}
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
