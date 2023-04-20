package com.Asands.RecipeGeneratorBackend.models;

public class AuthenticationFailure {
    private String failed;

    public AuthenticationFailure(String failed) {
        this.failed = failed;
    }

    public String getFailed() {
        return failed;
    }

    public void setFailed(String failed) {
        this.failed = failed;
    }
}
